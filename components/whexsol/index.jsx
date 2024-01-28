import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Tokenomics from "./Tokenomics";
import AddWhexSol from "./AddWhexSol";

const WhexSol = () => {
  const [active, setActive] = useState("tokenomics");

  const forwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("addWhexSol");
    } else if (active === "addWhexSol") {
      setActive("tokenomics");
    }
  };

  const backwardSwitch = () => {
    if (active === "addWhexSol") {
      setActive("tokenomics");
    } else if (active === "tokenomics") {
      setActive("addWhexSol");
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
    <div className="lg:pt-[25vh] pt-[10vh]">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        Whale Exploder - SOL(WHEX-SOL)
      </h2>
      <span className="flex justify-center text-center text-[#404040] lg:text-[14px] lg:pb-[5vh] pb-4 text-[12px] font-normal">
        Token Distribution: 50% token sale, 25% liquidity pool, 15% reserve, 10% airdrops and giveaways.
      </span>
      <div className="flex lg:justify-between lg:flex-row-reverse flex-col items-center">
        <div className="rotate lg:w-[30%] lg:pb-0 pb-4">
          <img
            src="/whale-exploder.png"
            alt="whex-logo"
            className="w-[25vw] rounded-full"
          />
        </div>

        <div className="flex flex-col space-y-6 lg:w-[50%]">
          <div className="flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => backwardSwitch()}>
              <FaAngleLeft size={30} color="#808080" />
            </div>

            <div>{active === "tokenomics" && <Tokenomics />}</div>
            <div>{active === "addWhexSol" && <AddWhexSol />}</div>
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
                active === "addWhexSol" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhexSol;
