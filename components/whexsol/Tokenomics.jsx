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
        {">>"} 2% interest bearing
      </span>
      <span className="text-[13px]">
        {">>"} 4% sent to the treasury wallet:
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
        {">>"} 25% is sold and added to the liquidity pool of WHEX
      </span>
      <span className="text-[13px]">
        {">>"} 25% is sent to the founder&apos;s wallet as salary.
      </span>
    </div>
  );
};

export default Tokenomics;
