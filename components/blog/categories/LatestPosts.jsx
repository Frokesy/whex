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
              <div className="h-[35vh] object-cover cursor-pointer">
                <img
                  src={article.coverPhoto.url}
                  alt="image1"
                  className="h-[100%] w-[100%] rounded-lg"
                />
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
