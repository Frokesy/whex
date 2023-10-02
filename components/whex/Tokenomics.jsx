import React from "react";

const WHEX = <span className="text-blue-400 italic">$WHEX</span>;

const Tokenomics = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-[20px] font-mono font-bold text-center">
        Tokenomics
      </h2>
      <span className="text-[13px]">
        {">>"} 2% sent to the treasury wallet (formerly charity/burn wallet).
        Then when it reaches 10 quintillion WHEX:
      </span>
      <span className="text-[13px]">{">>"} 25% is burned</span>
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
        {">>"} 2% distribution to holders
      </span>
      <span className="text-[13px]">
        {">>"} 2% Automatic liquidity pool on Pancake Swap
      </span>
    </div>
  );
};

export default Tokenomics;
