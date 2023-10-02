import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Tokenomics from "./Tokenomics";
import Liquidity from "./Liquidity";
import AddWhex from "./AddWhex";

const Whex = () => {
  const [active, setActive] = useState("tokenomics");

  const forwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("addWhex");
    } else if (active === "addWhex") {
      setActive("liquidity");
    } else if (active === "liquidity") {
      setActive("tokenomics");
    } else {
      setActive("tokenomics");
    }
  };

  const backwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("liquidity");
    } else if (active === "liquidity") {
      setActive("addWhex");
    } else if (active === "addWhex") {
      setActive("tokenomics");
    } else {
      setActive("tokenomics");
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(".rotate", {
      duration: 20,
      rotation: 360,
      ease: "linear",
    });
  }, []);
  const WHEX = <span className="text-blue-400 italic">$WHEX</span>;

  return (
    <div className="">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        Whale Exploder({WHEX})
      </h2>
      <span className="flex justify-center text-[#404040] lg:text-[14px] lg:pb-[5vh] pb-4 text-[12px] font-normal">
        64.3% in circulation, 35.7% burned, 19.58 BNB locked
      </span>
      <div className="flex lg:justify-between lg:flex-row flex-col-reverse items-center">
        <div className="flex flex-col space-y-6 lg:w-[60%]">
          <div className="flex justify-between items-center lg:space-x-[2vw]">
            <div className="cursor-pointer" onClick={() => backwardSwitch()}>
              <FaAngleLeft size={30} color="#808080" />
            </div>

            <div>{active === "tokenomics" && <Tokenomics />}</div>
            <div>{active === "liquidity" && <Liquidity />}</div>
            <div>{active === "addWhex" && <AddWhex />}</div>
            <div className="cursor-pointer" onClick={() => forwardSwitch()}>
              <FaAngleRight size={30} color="#808080" />
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "tokenomics" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "addWhex" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "liquidity" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
          </div>
        </div>

        <div className="rotate lg:w-[30%] lg:pb-0 pb-4">
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
