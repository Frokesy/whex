import React from "react";

const Section = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col lg:mx-6 space-y-3"
    >
      <span className="text-[13px] lg:hidden">
        {">>"} Staking rewards for $WEED are generated from 25% of the mint
        proceeds and royalties of the WHEXy Whales:
        <a
          href="https://app.niftykit.com/collections/drops/whexy"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline text-[13px]"
        >
          {" "}
          https://app.niftykit.com/collections/drops/whexy
        </a>
      </span>
      <span className="text-[13px]">
        {">>"} Pancake Swap:{" "}
        <a
          href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light"
        >
          Click here
        </a>
      </span>
      <span className="text-[13px]">{">>"} Network: Binance Smart Chain</span>
      <span className="text-[13px]">
        {">>"} Address: 0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5
      </span>
      <span className="text-[13px]">{">>"} Symbol: $WEED</span>
      <span className="text-[13px]">{">>"} Decimals: 18</span>
      <span className="text-[13px]">
        {">>"} Initial Supply: 1,000,000{" "}
        <span className="text-blue-400">WEED</span>
      </span>
      <span className="text-[13px]">{">>"} Private Sales: 35,000</span>
      <span className="text-[13px]">
        {">>"} Airdrop to WHEXy Whales 1-2000: 83,330
      </span>
      <span className="text-[13px]">
        {">>"} Split Presale - Burn WHEX option: 15,922
      </span>
    </div>
  );
};

export default Section;
