import React, { useEffect } from 'react'
import { getSingleBlog, getBlogSlugs } from '../../services'
import { useRouter } from 'next/router'
import parse from "html-react-parser";
import Header from "../../components/blog/Header";
import Footer from "../../components/blog/Footer";


const Blog = ({ singleBlog }) => {
    const router = useRouter()
    if (router.isFallback) return <>Loading...</>;

    console.log(singleBlog)
  return (
      <div className='bg-neutral-800'>
          <Header />
          <div className="w-[70vw] flex justify-between space-x-10 mx-auto text-[#ccc] pt-[15vh]">
            <div className="w-[40%] h-[50vh]">
              <img src={singleBlog.coverPhoto.url} alt="coverphoto" className="w-[100%] h-[100%]" />
            </div>
            <div className="w-[60%]">
              <h1 className="text-[32px] pb-6 text-[#fff] font-bold">{singleBlog.title}</h1>
              <div className="text-[15px] mt-4">
                {parse(singleBlog.content.html)}
              </div>
            </div>
        </div>
        <div className="w-[90vw] mx-auto">
          <Footer />
        </div>
      </div>
  )
}

export default Blog

export const getStaticProps = async ({ params }) => {
    const singleBlog = await getSingleBlog(params.slug);
    return {
      props: {
        singleBlog: singleBlog.articles[0],
      }
    };
  };
  
  export const getStaticPaths = async () => {
    const blogSlugs = await getBlogSlugs();
    const slugPaths = blogSlugs.articles.map(slug => ({
      params: { slug: slug.slug }
    }));
    return {
      paths: slugPaths,
      fallback: true
    };
  };