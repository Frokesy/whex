import React, { useEffect } from 'react'
import { getSingleBlog, getBlogSlugs } from '../../services'
import { useRouter } from 'next/router'


const Blog = ({ singleBlog }) => {
    const router = useRouter()
    if (router.isFallback) return <>Loading...</>;

    console.log(singleBlog)
  return (
    <div>
      
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