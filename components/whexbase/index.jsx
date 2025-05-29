import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Section from "./Section";

const Whexbase = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="lg:pt-[25vh] pt-[10vh]">
      <h2 className="text-center lg:text-[32px] text-[20px] font-bold font-mono">
        WHEX-BASE
      </h2>
      <span className="flex justify-center text-[#404040] lg:text-[14px] lg:pb-[5vh] pb-4 text-[12px] font-normal">
        <a
          href="https://luvbomb.meme/token/BASE/0x46a86f1bffb98c4d4d99d5b2d86d548e1d04ed60"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light px-1"
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
          <div>
            <Section />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whexbase;
