import React from "react";
import Header from "../../components/blog/Header";
import Footer from "../../components/blog/Footer";
import Meta from "../defaults/Meta";
import EmbrScript from "../EmberScript";
import Featured from "../../components/blog/categories/Featured";
import LatestPosts from "../../components/blog/categories/LatestPosts";
const Blog = () => {
  return (
    <div >
      <Meta title="WHEXcosystem || Blog" />
      <EmbrScript />
      <div className="bg-[#151A25] lg:h-[120vh] h-[110vh]">
        <div className="lg:w-[75vw] w-[90vw] mx-auto">
          <Header />
          <div className="lg:w-[55vw] w-[100%]">
            <h2 className="lg:text-[50px] text-[36px] pt-[5vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-pink-200 to-purple-900">
              WHEXcosystem Blog
            </h2>
            <span className="pt-[2vh] lg:text-[20px] text-[16px] text-white">
              Great news and Articles about our market and get unbelievable
              knowledge in the easiest of ways through our blog. Have fun!!!
            </span>
          </div>
        </div>
        <Featured />
        <LatestPosts />
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
