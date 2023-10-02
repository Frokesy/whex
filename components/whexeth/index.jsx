import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Tokenomics from "./Tokenomics";
import AddWhexEth from "./AddWhexEth";
import Section from "./Section";

const WhexEth = () => {
  const [active, setActive] = useState("tokenomics");

  const forwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("addWhexEth");
    } else if (active === "addWhexEth") {
      setActive("section");
    } else {
      setActive("tokenomics");
    }
  };

  const backwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("section");
    } else if (active === "section") {
      setActive("addWhexEth");
    } else if (active === "addWhexEth") {
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
    <div className="lg:pt-[25vh] pt-[10vh]">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        Whale Exploder - ETH(WHEX-ETH)
      </h2>
      <span className="flex justify-center text-[#404040] lg:text-[14px] lg:pb-[5vh] pb-4 text-[12px] font-normal">
        Token Distribution: 49.552% - 495.52 quad - token sale{" "}
        <a
          href="https://dappbuilder.org/eth/tokensaletimerefadm/tokensale.html?id=0x3c6f96859862891564B17b5611F29af7E28534bD&net=1&utm_source=Trust_iOS_Browser&ref=0xEc3Cfd42454c41159bE801D09016482929296316"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light"
        >
          buy now
        </a>
      </span>
      <div className="flex lg:justify-between lg:flex-row flex-col items-center">
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
            <div>{active === "addWhexEth" && <AddWhexEth />}</div>
            <div>{active === "section" && <Section />}</div>
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
                active === "addWhexEth" ? "bg-[#002871]" : "bg-[#ccc]"
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

export default WhexEth;
