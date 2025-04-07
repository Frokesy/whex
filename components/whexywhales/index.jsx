import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section from "./Section";

const WhexyWhales = () => {

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
      <div className="flex lg:justify-between lg:flex-row flex-col items-center">
        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="lg:w-[40%] w-[60%] lg:pb-0 py-8"
        >
          <img src="/nft.jpg" alt="nft" className="-skew-x-6" />
        </div>

        <div className="flex flex-col space-y-6 lg:w-[50%]">
          <div>
            <Section />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhexyWhales;
