import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhexETH = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="mt-14">
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        className="flex flex-row space-x-4 justify-start items-center"
      >
        <img
          src="/whale-exploder.png"
          alt="whex-logo"
          className="rounded-full lg:w-[6rem] md:w-[3rem] w-[4rem]"
        />
        <div>
          <span className="lg:text-[30px] text-[20px] font-bold text-white">
            Whale Exploder - ETH (WHEX-ETH)
          </span>
          <span className="flex justify-start text-neutral-400 lg:text-[14px] text-[12px] font-normal">
            Token Distribution: 29.448% - 294.48 quad - private sale
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col space-y-3 lg:mx-6 text-neutral-400"
        >
          <h2 className="text-gray-100 text-[16px] font-bold">
            How to add{" "}
            <span className="text-blue-400 italic font-bold">$whex </span> to
            your wallet?
          </h2>
          <span className="text-neutral-400 text-[14px] font-normal">
            You need to add the token manually on MetaMask or Trust Wallet in
            order to view token.
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Network: Ethereum Network
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Contract: 0x21A60677442C7Ccad2586235042aF6d67C1184b1
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Name: Whale Exploder - ETH
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Symbol: $whex
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Decimals: 9
          </span>
          <span className="text-[14px] font-semibold  ">
            {">>"} Supply: 1,000,000,000,000,000,000
          </span>
        </div>
        <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col space-y-3"
        >
          <h2 className="flex text-white text-[18px] font-mono font-bold">
            Tokenomics
          </h2>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 2% reflections to holders
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 2% - Auto LP (Uniswap)
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 2% sent to the treasury wallet:
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {"-"} Then when it reaches 10 quadrillion WHEX
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 25% is burned.
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 25% is sold and donated to Whale Conservation
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 25% is sold and added to the liquidity pool of WEED
          </span>
          <span className="text-[14px] text-neutral-400 font-semibold  ">
            {">>"} 25% is sent to the founder&apos;s wallet as salary.
          </span>
        </div>
        <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
        <div
          className="flex flex-col space-y-3"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <span className="text-[14px] font-semibold text-neutral-400">
            {">>"} 21% - uniswap liquidity pool
          </span>
          <span className="text-[14px] font-semibold text-neutral-400">
            {">>"} 49.552% - 495.52 quad - token sale{" "}
            <a
              href="https://dappbuilder.org/eth/tokensaletimerefadm/tokensale.html?id=0x3c6f96859862891564B17b5611F29af7E28534bD&net=1&utm_source=Trust_iOS_Browser&ref=0xEc3Cfd42454c41159bE801D09016482929296316"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline font-light"
            >
              buy now
            </a>
          </span>
          <span className="text-[14px] font-semibold text-neutral-400">
            {">>"} This token is a cross chain version of the Whale Exploder on
            the Binance Smart chain:{" "}
            <a
              href="https://coinmarketcap.com/currencies/whale-exploder/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline font-light"
            >
              https://coinmarketcap.com/currencies/whale-exploder/
            </a>
          </span>

          <div className="flex flex-col pt-6 space-y-3">
            <h2 className="text-gray-100 text-[16px] font-bold">
              How the{" "}
              <span className="text-blue-400 italic font-bold">ETH </span> will
              be used:
            </h2>
            <span className="text-[14px] font-semibold text-neutral-400">
              {">>"} 1 eth - liquidity pool
            </span>
            <span className="text-[14px] font-semibold text-neutral-400">
              {">>"} 0.5 eth - fees for adding liquidity and renouncing contract
            </span>
            <span className="text-[14px] font-semibold text-neutral-400">
              {">>"} 0.5 eth - founder
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-[15vh]" />
    </div>
  );
};

export default WhexETH;
