import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Tokenomics from "./whex/Tokenomics";
import Liquidity from "./whex/Liquidity";
import AddWhex from "./whex/AddWhex";

const Whex = () => {
  const [active, setActive] = useState("tokenomics");

  const switchTabs = (activeTab) => {
    setActive(activeTab);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".rotate", {
      duration: 10,
      rotation: 360,
      ease: "linear",
    });
  }, []);
  const WHEX = <span className="text-blue-400 italic">$WHEX</span>;

  return (
    <div>
      <h2 className="text-center text-[32px] font-bold font-mono">
        Whale Exploder({WHEX})
      </h2>
      <span className="flex justify-center text-[#404040] lg:text-[14px] pb-[5vh] text-[12px] font-normal">
        64.3% in circulation, 35.7% burned, 19.58 BNB locked
      </span>
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-6 w-[60%]">
          <div className="flex justify-between items-center space-x-[3vw]">
            <div
              className="cursor-pointer"
              onClick={() => switchTabs("tokenomics")}
            >
              <FaAngleLeft size={30} color="#808080" />
            </div>

            {active === "tokenomics" && <Tokenomics />}
            {active === "liquidity" && <Liquidity />}
            {active === "addWhex" && <AddWhex />}
            <div
              className="cursor-pointer"
              onClick={() => switchTabs("liquidity")}
            >
              <FaAngleRight size={30} color="#808080" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-full bg-[#1d1dff] p-1 ml-3"></div>
            <div className="rounded-full bg-[#ccc] p-1 ml-3"></div>
            <div className="rounded-full bg-[#ccc] p-1 ml-3"></div>
          </div>
        </div>

        <div className="rotate w-[30%]">
          <img
            src="/whale-exploder.png"
            alt="whex-logo"
            className="w-[25vw] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Whex;
