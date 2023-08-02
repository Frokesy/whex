import React from "react";
import Header from "../../components/blog/Header";
import Footer from "../../components/blog/Footer";
import Meta from "../defaults/Meta";
import EmbrScript from "../EmberScript";
import Featured from "../../components/blog/categories/Featured";
import LatestPosts from "../../components/blog/categories/LatestPosts";
import { TypeAnimation } from "react-type-animation";
const Blog = () => {
  return (
    <div>
      <Meta
        title="WHEXcosystem || Blog"
        desc="Great news and Articles about our market and get unbelievable
              knowledge in the easiest of ways through our blog"
      />
      <EmbrScript />
      <div className="bg-[#151A25] lg:h-[120vh] h-[100vh]">
        <div className="lg:w-[75vw] w-[90vw] mx-auto">
          <div className="py-[7vh]">
            <Header />
          </div>
          <div className="lg:w-[55vw] w-[100%]">
            <h2 className="lg:text-[50px] text-[36px] pt-[5vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-pink-200 to-purple-900">
              WHEXcosystem Blog
            </h2>
            <span className="pt-[2vh] lg:text-[20px] text-[16px] text-white">
              <TypeAnimation
                sequence={[
                  "Great news and Articles about our market, get unbelievable knowledge in the easiest of ways through our blog. Have fun!!!",
                  1000,
                  "Great news and Articles about our market, get unbelievable knowledge in the easiest of ways through our blog. Stay entertained!",
                  1000,
                  "Great news and Articles about our market, get unbelievable knowledge in the easiest of ways through our blog. Stay updated!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: "#fff" }}
                repeat={Infinity}
              />
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
