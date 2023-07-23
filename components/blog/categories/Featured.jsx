import moment from "moment";
import Link from "next/link";
import React from "react";
import { getFeaturedArticles } from "../../../services";

const Featured = () => {
  const [featuredArticles, setFeaturedArticles] = React.useState([]);

  const fetchFeaturedArticles = async () => {
    const featuredArticles = await getFeaturedArticles();
    setFeaturedArticles(featuredArticles.articles.slice(0, 3));
  };

  React.useEffect(() => {
    fetchFeaturedArticles();
  }, []);
  return (
    <div className="pt-[25vh] w-[75vw] mx-auto">
      <div className="border-b border-[#404040]"></div>
      <h2 className="text-[#fff] text-[20px] pt-6 font-semibold">
        Featured Posts
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-10">
        {featuredArticles?.map((article, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${article.coverPhoto.url})` }}
            className={`h-[480px] bg-center bg-cover bg-no-repeat hover:scale-105 transition-all duration-500 ease-in-out`}
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
    </div>
  );
};

export default Featured;
