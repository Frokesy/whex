import React from "react";
import Header from "../../components/blog/Header";
import Meta from "../defaults/Meta";
import EmbrScript from "../EmberScript";
import Featured from "../../components/blog/categories/Featured";
const Blog = () => {
  return (
    <div >
      <Meta title="WHEXcosystem || Blog" />
      <EmbrScript />
      <div className="bg-[#151A25] h-[120vh]">
        <div className="w-[75vw] mx-auto">
          <Header />
          <div className="w-[55vw]">
            <h2 className="text-[50px] pt-[5vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-pink-200 to-purple-900">
              WHEXcosystem Blog
            </h2>
            <span className="pt-[2vh] text-[20px] text-white">
              Great news and Articles about our market and get unbelievable
              knowledge in the easiest of ways through our blog. Have fun!!!
            </span>
          </div>
        </div>
        <Featured />
      </div>
    </div>
  );
};

export default Blog;
