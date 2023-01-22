import React, { useEffect } from 'react'
import { getSingleBlog, getBlogSlugs } from '../../services'
import { useRouter } from 'next/router'
import parse from "html-react-parser";
import Header from "../../components/blog/Header";
import Footer from "../../components/blog/Footer";
import Meta from "../defaults/Meta";

const Blog = ({ singleBlog }) => {
    const router = useRouter()
    if (router.isFallback) return <>Loading...</>;


  return (
      <div className='bg-neutral-800'>
          <Meta title={singleBlog.title} />
          <Header />
          <div className="w-screen lg:w-[70vw] lg:flex-row flex-col flex lg:justify-between lg:space-x-10 mx-auto text-[#ccc] pt-[15vh]">
            <div className="lg:w-[40%] w-[90vw] mx-auto h-[40vh]">
              <img src={singleBlog.coverPhoto.url} alt="coverphoto" className="w-[100%] h-[100%]" />
            </div>
            <div className="lg:w-[60%] w-[90vw] mx-auto">
              <h1 className="lg:text-[32px] text-[22px] lg:pt-0 pt-4 pb-6 text-[#fff] font-bold">{singleBlog.title}</h1>
              <div className="lg:text-[15px] text-[13px] mt-4">
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