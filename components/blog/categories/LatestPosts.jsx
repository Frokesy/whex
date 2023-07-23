import React from "react";
import { getAllArticles } from "../../../services";
import Link from "next/link";
import Meta from "../../../pages/defaults/Meta";

const LatestPosts = () => {
  const [articles, setArticles] = React.useState([]);

  const fetchArticles = async () => {
    const articles = await getAllArticles();
    setArticles(articles.articles);
  };

  React.useEffect(() => {
    fetchArticles();
  }, []);

  const articlesToDisplay = articles.slice(0, 9);

  return (
    <div className="lg:w-[75vw] w-[90vw] mx-auto">
      <Meta />
      <div className="pt-[15vh]">
        <div className="border-b-2 border-[#ccc]"></div>
        <h2 className="text-[#000] text-[20px] pt-6 font-semibold">
          Latest Posts
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-14 mt-4 lg:gap-10 pt-6 mx-auto">
          {articlesToDisplay?.map((article, index) => (
            <div key={index} className="flex flex-col">
              <div
                style={{ backgroundImage: `url(${article.coverPhoto.url})` }}
                className="h-[35vh] bg-cover rounded-lg cursor-pointer bg-center bg-no-repeat"
              >
                <div className="h-[100%] py-4 flex flex-col justify-end px-4">
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
                </div>
              </div>
              <Link href={`/blog/${article.slug}`} passHref>
                <h2 className="py-2 font-semibold text-[20px] hover:underline cursor-pointer">
                  {article.title}
                </h2>
              </Link>

              <span className="text-[16px]">
                {article.excerpt.length > 210
                  ? `${article.excerpt.slice(0, 210)}...`
                  : `${article.excerpt}`}
              </span>
              <div className="flex items-center py-4 space-x-2">
                <img
                  src={article.author.avatar.url}
                  alt={article.author.name}
                  className="rounded-full h-[40px] w-[40px]"
                />
                <h2 className="text-[#000] font-bold text-[14px]">
                  by {article.author.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {articles?.length > 9 ? (
          <div className="flex justify-center py-20">
            <button className="bg-red-500 font-bold text-white rounded-2xl text-[16px] px-6 py-2">
              Show All
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LatestPosts;
