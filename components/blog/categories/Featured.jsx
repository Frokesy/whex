import moment from "moment";
import Link from "next/link";
import React from "react";
import { getFeaturedArticles } from "../../../services";

const Featured = () => {
  const [featuredArticles, setFeaturedArticles] = React.useState([]);
  const [mainFeaturedArticle, setMainFeaturedArticle] = React.useState([]);

  const fetchFeaturedArticles = async () => {
    const featuredArticles = await getFeaturedArticles();
    setFeaturedArticles(featuredArticles.articles.slice(0, 3));
  };

  React.useEffect(() => {
    fetchFeaturedArticles();
  }, []);
  console.log(featuredArticles);
  return (
    <div className="py-[25vh] w-[75vw] mx-auto">
      <div className="border-b border-[#404040]"></div>
      <h2 className="text-[#fff] text-[20px] pt-6 font-semibold">
        Featured Posts
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {featuredArticles?.map((article, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${article.coverPhoto.url})` }}
            className={`h-[480px] bg-center bg-no-repeat hover:scale-105 transition-all duration-500 ease-in-out`}
          >
            <div className="bg-[#000000a6] h-[480px] flex flex-col justify-end px-4">
              <div className="flex items-center space-x-2">
                {article.categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-[#fff] text-[13px] py-1 px-4 rounded-full"
                  >
                    <h2>{category.name}</h2>
                  </div>
                ))}
              </div>
              <Link href={`/blog/${article.slug}`} passHref>
                <h2 className=" text-[24px] text-[#fff] py-4 font-bold cursor-pointer hover:underline">
                  {article.title}
                </h2>
              </Link>

              <div className="flex items-center pb-4 space-x-2">
                <img
                  src={article.author.avatar.url}
                  alt={article.author.name}
                  className="rounded-full h-[40px] w-[40px]"
                />
                <h2 className="text-[#fff] font-bold text-[14px]">
                  by {article.author.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*<div className="flex justify-between items-center space-x-10">
        <div className="w-[60%] flex flex-col space-y-10 justify-between">
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
      </div> */}
    </div>
  );
};

export default Featured;
