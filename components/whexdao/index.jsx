import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Tokenomics from "./Tokenomics";
import VotingMechanism from "./VotingMechanism";
import Section from "./Section";
import SectionTwo from "./SectionTwo";

const Whexdao = () => {
  const [active, setActive] = useState("tokenomics");

  const forwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("section");
    } else if (active === "section") {
      setActive("sectionTwo");
    } else if (active === "sectionTwo") {
      setActive("votingMechanism");
    } else if (active === "votingMechanism") {
      setActive("tokenomics");
    } else {
      setActive("tokenomics");
    }
  };

  const backwardSwitch = () => {
    if (active === "tokenomics") {
      setActive("votingMechanism");
    } else if (active === "votingMechanism") {
      setActive("sectionTwo");
    } else if (active === "sectionTwo") {
      setActive("section");
    } else if (active === "section") {
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

  return (
    <div className="lg:pt-[25vh] pt-[5vh]">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        WHEXcosystem Exploder Ecosystem Daov2
      </h2>
      <span className="flex justify-center text-center text-[#404040] lg:text-[14px] text-[12px] font-normal">
        The WHEXcosystem DAO ($WEED) token is used to make decisions on the
        future of the WHEXcosystem via blockchain vote.
      </span>
      <span className="text-[14px] text-neutral-400 hidden lg:flex justify-center lg:pb-[5vh] pb-4">
        Staking rewards for $WEED are generated from 25% of the mint proceeds
        and royalties of the WHEXy Whales:
        <a
          href="https://app.niftykit.com/collections/drops/whexy"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline text-[14px]"
        >
          {" "}
          https://app.niftykit.com/collections/drops/whexy
        </a>
      </span>
      <div className="flex lg:justify-between lg:flex-row flex-col-reverse items-center">
        <div className="flex flex-col space-y-6 lg:w-[60%]">
          <div className="flex justify-between items-center lg:space-x-[2vw]">
            <div className="cursor-pointer" onClick={() => backwardSwitch()}>
              <FaAngleLeft size={30} color="#808080" />
            </div>

            <div>{active === "tokenomics" && <Tokenomics />}</div>
            <div>{active === "votingMechanism" && <VotingMechanism />}</div>
            <div>{active === "section" && <Section />}</div>
            <div>{active === "sectionTwo" && <SectionTwo />}</div>
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
                active === "section" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "sectionTwo" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
            <div
              className={`rounded-full p-1 ml-3 ${
                active === "votingMechanism" ? "bg-[#002871]" : "bg-[#ccc]"
              }`}
            ></div>
          </div>
        </div>

        <div className="rotate lg:w-[30%] lg:pb-0 pb-4">
          <img
            src="/weed.png"
            alt="whex-logo"
            className="w-[25vw] rounded-full py-4 lg:py-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Whexdao;
