import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const linkVariants = {
  hover: {
    scale: 1.1,
    color: "white",
    originX: 0,
    transition: {
      duration: 0.1,
      type: "tween",
      stiffness: 200,
    },
  },
};

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="fade-in" data-aos-duration="3000">
      <div className="footer w-full flex flex-col pt-[10vh] lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row w-[90vw] mx-auto lg:px-4 space-x-4 lg:space-x-8">
          <img
            src="/peter_wake.jpg"
            alt="founder-pic"
            className="rounded-[50%] h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem]"
          />
          <div className="flex flex-col lg:w-[25vw]">
            <h2 className="text-[30px] font-mono font-bold">
              Peter Wake
            </h2>
            <span className="text-[15px] font-mono text-blue-400 mb-4">
              Founder & CEO
            </span>
            <span className="text-[13px] mb-4 font-mono font-semibold">
              Peter Wake is a Mining Engineering graduate (2020)
            </span>
            <span className="mb-4 text-[13px] font-mono font-semibold">
              In early 2021, Peter got into putting real money into
              cryptocurrency, starting with Dogecoin and some DeFi projects. He
              had been casually watching the market after having getting some
              free Doge in 2016 from a faucet
            </span>
            <span className="mb-4 text-[13px] font-mono font-semibold">
              In March 2021, Peter made his first NFT on OpenSea and in June
              2021 launched the Whale Exploder token on the Binance Smart Chain.
            </span>
          </div>
        </div>

      </div>
      <div className="footer bg-neutral-800 w-full flex justify-between mt-[5vh]">
        <span className="text-gray-400 font-mono font-bold mt-4 flex justify-center lg:justify-end mb-6 lg:mb-0 text-[18px] mx-[13vw]">
          &copy; Whexcosystem 2022
        </span>

        <div className="lg:flex hidden flex-row justify-end mx-[10vw]">
          <a
            href="https://twitter.com/whaleexploder"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/twitter.svg"
              alt="twitter"
              className="w-[2rem] h-[2rem] my-4 mx-5"
            />
          </a>
          <a href="https://t.me/WHEXcosystem" target="_blank" rel="noreferrer">
            <img
              src="/telegram.svg"
              alt="telegram"
              className="w-[2rem] h-[2rem] my-4 mx-5"
            />
          </a>
          <a
            href="https://www.mintme.com/token/Whale-Exploder-Ecosystem-Daov2/MINTME/trade"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/mintme.png"
              alt="mintme"
              className="w-[2rem] h-[2rem] my-4 mx-5"
            />
          </a>
          <a
            href="https://www.reddit.com/r/WHEX/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/reddit.svg"
              alt="reddit"
              className="w-[2rem] h-[2rem] my-4 mx-5"
            />
          </a>
          <a
            href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/bscscan.png"
              alt="bscscan"
              className="bg-white w-[2rem] h-[2rem] rounded-full my-4 mx-5"
            />
          </a>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/pcs.png"
              alt="pcs"
              className="w-[2rem] h-[2rem] my-4 mx-5"
            />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/whale-exploder/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/cmc.svg"
              alt="cmc"
              className="w-[4rem] h-[2rem] my-4 mx-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
