import React from "react";

const Tokenomics = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col space-y-3"
    >
      <h2 className="text-center text-[18px] font-mono font-bold">
        Tokenomics
      </h2>
      <span className="text-[13px]">
        {">>"} Trade on <a className="text-blue-400 underline font-semibold" href="https://app.uniswap.org/swap?outputCurrency=0x21a60677442c7ccad2586235042af6d67c1184b1">Uniswap</a>
      </span>
      <span className="text-[13px]">
        {">>"} 2% reflections to holders
      </span>
      <span className="text-[13px]">
        {">>"} 2% - Auto LP (Uniswap)
      </span>
      <span className="text-[13px]">
        {">>"} 2% sent to the treasury wallet:
      </span>
      <span className="text-[13px]">
        {"-"} Then when it reaches 10 quadrillion WHEX
      </span>
      <span className="text-[13px]">
        {">>"} 25% is burned.
      </span>
      <span className="text-[13px]">
        {">>"} 25% is sold and donated to Whale Conservation
      </span>
      <span className="text-[13px]">
        {">>"} 25% is sold and added to the liquidity pool of WEED
      </span>
      <span className="text-[13px]">
        {">>"} 25% is sent to the founder&apos;s wallet as salary.
      </span>
      <span className="text-[13px]">
        {">>"} 21% - uniswap liquidity pool
      </span>
    </div>
  );
};

export default Tokenomics;
