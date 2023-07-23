import React, { useEffect, useState } from "react";
import { getSingleBlog, getBlogSlugs } from "../../services";
import { useRouter } from "next/router";
import Header from "../../components/blog/Header";
import Footer from "../../components/blog/Footer";
import Meta from "../defaults/Meta";

const customStyle = {
  p: "lg:text-[15px] text-[13px] mt-4",
  h1: "lg:text-[32px] text-[22px] lg:pt-0 pt-4 pb-6 font-bold",
  h2: "lg:text-[28px] text-[18px] lg:pt-0 pt-4 pb-6 font-bold",
  h3: "lg:text-[24px] text-[16px] lg:pt-0 pt-4 pb-6 font-bold",
  h4: "lg:text-[20px] text-[14px] lg:pt-0 pt-4 pb-6 font-bold",
  h5: "lg:text-[16px] text-[12px] lg:pt-0 pt-4 pb-6 font-bold",
  h6: "lg:text-[14px] text-[10px] lg:pt-0 pt-4 pb-6 font-bold",
  ul: "lg:text-[15px] text-[13px] mt-4 list-disc list-inside",
  ol: "lg:text-[15px] text-[13px] mt-4 list-decimal list-inside",
  li: "lg:text-[15px] text-[13px] mt-4",
  a: "lg:text-[15px] text-[13px] mt-4 text-blue-500",
  blockquote: "lg:text-[15px] text-[13px] mt-4 border-l-4 border-gray-500 pl-4",
  code: "lg:text-[15px] text-[13px] mt-4 bg-gray-100 p-2",
  pre: "lg:text-[15px] text-[13px] mt-4 bg-gray-100 p-2",
  img: "w-[100%] h-[100%] my-3",
};

const Blog = ({ singleBlog }) => {
  const router = useRouter();
  const [parsedContent, setParsedContent] = useState([]);

  const parseHTML = (htmlContent) => {
    const domParser = new DOMParser();
    const parsedDocument = domParser.parseFromString(htmlContent, "text/html");
    if (!parsedDocument.body) {
      return [];
    }
    return Array.from(parsedDocument.body.childNodes).map((node, index) =>
      parseNode(node, index)
    );
  };

  const parseNode = (node, index) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();
      const children = Array.from(node.childNodes).map((childNode, i) =>
        parseNode(childNode, i)
      );

      const attributes = {};
      Array.from(node.attributes).forEach((attr) => {
        if (attr.name === "class") {
          attributes.className = attr.value;
        } else {
          attributes[attr.name] = attr.value;
        }
      });

      if (tagName === "br") {
        return React.createElement(tagName, { key: index });
      } else if (tagName === "img") {
        if (customStyle[tagName]) {
          return React.createElement(tagName, {
            key: index,
            className: customStyle[tagName],
            ...attributes,
          });
        } else {
          return React.createElement(tagName, { key: index, ...attributes });
        }
      } else if (customStyle[tagName]) {
        return React.createElement(
          tagName,
          {
            key: index,
            className: customStyle[tagName],
            ...attributes,
          },
          children
        );
      } else {
        return React.createElement(
          tagName,
          { key: index, ...attributes },
          children
        );
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parsedContent = parseHTML(singleBlog.content.html);
      setParsedContent(parsedContent);
    }
  }, [singleBlog]);

  if (router.isFallback) return <>Loading...</>;
  return (
    <div className="mx-auto">
      <Meta title={singleBlog.title} />
      <Header />
      <div className="w-[90vw] lg:w-[75vw] flex-col flex lg:justify-between mx-auto ">
        <div className="w-[60vw] mx-auto mt-[10vh] mb-[5vh]">
          <div className="">
            <div className="flex items-center space-x-2">
              {singleBlog.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#ccc] text-[13px] py-1 px-4 font-semibold mb-3 rounded-full"
                >
                  <h2>{category.name}</h2>
                </div>
              ))}
            </div>
            <h1 className="lg:text-[32px] text-[22px] lg:pt-0 pt-4 font-bold">
              {singleBlog.title}
            </h1>
            <p className="lg:text-[20px] text-[16px] mt-4">
              {singleBlog.excerpt}
            </p>
          </div>
          <div className="flex flex-row space-x-2 mt-4 items-center">
            <img
              src={singleBlog.author.avatar.url}
              alt="avatar"
              className="w-[30px] h-[30px] rounded-full"
            />
            <p className="lg:text-[15px] text-[13px]">
              {singleBlog.author.name}
            </p>
          </div>
        </div>
        <div className="lg:w-[75vw] lg:h-[600px] w-[360px] h-[200px]">
          <img
            src={singleBlog.coverPhoto.url}
            alt="coverphoto"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="w-[60vw] mx-auto mt-4">
          {parsedContent.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
        </div>
      </div>
      <div className="w-[90vw] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps = async ({ params }) => {
  const singleBlog = await getSingleBlog(params.slug);
  return {
    props: {
      singleBlog: singleBlog.articles[0],
    },
  };
};

export const getStaticPaths = async () => {
  const blogSlugs = await getBlogSlugs();
  const slugPaths = blogSlugs.articles.map((slug) => ({
    params: { slug: slug.slug },
  }));
  return {
    paths: slugPaths,
    fallback: true,
  };
};
