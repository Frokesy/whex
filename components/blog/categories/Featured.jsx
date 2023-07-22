import moment from "moment";
import Link from "next/link";
import React from "react";
import { getFeaturedArticles } from "../../../services";

const Featured = () => {
  const [featuredArticles, setFeaturedArticles] = React.useState([]);
  const [mainFeaturedArticle, setMainFeaturedArticle] = React.useState([]);

  const fetchFeaturedArticles = async () => {
    const featuredArticles = await getFeaturedArticles();
    setFeaturedArticles(featuredArticles.articles.slice(0, 2));
    setMainFeaturedArticle(featuredArticles.articles[2]);
  };

  React.useEffect(() => {
    fetchFeaturedArticles();
  }, []);
  return (
    <div className="pt-[10vh]">
      <h2 className="text-[#fff] text-[34px] font-semibold">Featured Posts</h2>
      <div className="flex justify-between items-center space-x-10">
        <div className="w-[60%] flex flex-col space-y-10 justify-between">
          {featuredArticles?.map((article, index) => (
            <div
              key={index}
              className=" bg-white w-[100%] h-[210px] max-h-[210px] flex"
            >
              <div className="w-[40%] h-[100%]">
                <img
                  src={article.coverPhoto.url}
                  alt={article.slug}
                  className="h-[100%] w-[100%]"
                />
              </div>
              <div className="w-[60%] flex flex-col justify-center px-4">
                <Link href={`/blog/${article.slug}`} passHref>
                  <h2 className="pt-3 text-[24px] pb-4 text-[#000] font-bold cursor-pointer hover:underline">
                    {article.title}
                  </h2>
                </Link>
                <span className="text-[14px]">{article.excerpt}</span>
                <Link href={`/blog/${article.slug}`} passHref>
                  <span className="text-center font-bold pt-3 cursor-pointer hover:underline hover:text-blue-500">
                    Click for more
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] bg-[#fff] ">
          <img
            src={mainFeaturedArticle?.coverPhoto?.url}
            alt="image1"
            className="object-cover h-[45vh] w-[100%]"
          />
          <div className="px-4">
            <h2 className="pt-4 font-bold cursor-pointer text-[22px] text-[#000] hover:underline">
              {mainFeaturedArticle?.title}
            </h2>
            <span className="text-[14px]">{mainFeaturedArticle?.excerpt}</span>
          </div>

          <div className="flex justify-end pb-3 pt-1 px-6">
            <Link href={`/blog/${mainFeaturedArticle.slug}`} passHref>
              <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">
                Click for more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
