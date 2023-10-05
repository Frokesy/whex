import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Section from "./Section";
import Royalties from "./Royalties";

const WhexyWhales = () => {
  const [active, setActive] = useState("royalties");

  const switchTab = () => {
    if (active === "royalties") {
      setActive("section");
    } else if (active === "section") {
      setActive("royalties");
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="lg:pt-[25vh] pt-[10vh]">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        WHEXy whales (NFT)
      </h2>
      <span className="flex justify-center text-center text-[#404040] lg:text-[14px] lg:pb-[5vh] text-[12px] font-normal">
        WHEXy Whales is an NFT project consisting of 4800 unique Whales with
        different traits like hats, glasses, shirts, backgrounds, etc
      </span>
      <div className="flex lg:justify-between lg:flex-row-reverse flex-col items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="lg:w-[40%] w-[60%] lg:pb-0 py-8"
        >
          <img src="/nft.jpg" alt="nft" className="-skew-x-6" />
        </div>

        <div className="flex flex-col space-y-6 lg:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => switchTab()}>
              <FaAngleLeft size={30} color="#808080" />
            </div>

            <div>{active === "royalties" && <Royalties />}</div>
            <div>{active === "section" && <Section />}</div>
            <div className="cursor-pointer" onClick={() => switchTab()}>
              <FaAngleRight size={30} color="#808080" />
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "royalties" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "section" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhexyWhales;
