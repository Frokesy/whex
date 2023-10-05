import React from "react";

const SectionTwo = () => {
    const WEED = <span className="text-blue-400">$WEED</span>;

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col mx-2 space-y-3"
    >
      <span className="text-[18px] font-mono font-bold text-center">
        WHEXy whale Generation two (G2)
      </span>
      <span className="text-[14px] pb-2 text-center">
        8800 WHEXy Whales have been discovered swimming in the BTC blockchain.
      </span>
      <span className="text-[18px] font-mono font-bold text-center">
        Why buy a G2 WHEXy whale today?
      </span>
      <span className="text-[14px]">
        {"1."} Help real life whales (25% of purchase)
      </span>
      <span className="text-[14px]">
        {"2. "} Use WHEXy whale in your company or merch store or partner with
        WHEXcosystem Inc. and split the profits.
      </span>

      <span className="text-[18px] font-mono font-bold pt-2 text-center">
        Mint Proceeds (How they will be used)
      </span>
      <span className="text-[14px]">
        {">>"} 25% to whale conservation charities
      </span>
      <span className="text-[14px]">
        {">>"} 25% liquidity pool for {WEED}
      </span>
      <span className="text-[14px]">
        {">>"} 25% to marketing and administrative costs
      </span>
      <span className="text-[14px]">{">>"} 25% founder pay</span>
      <span className="text-[14px]">
        {">>"} Transacted after every 500 sales
      </span>
      <span className="text-[14px]">
        {">>"}{" "}
        <a
          href="https://rocket.art/collection?id=8130c635759b23aa5798f58b83cc27736f1729f2&idPicture=ebc416684e0a0dd4e0027f08b8f6cac6b01b6b4e"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light"
        >
          Click here to buy
        </a>
      </span>
    </div>
  );
};

export default SectionTwo;
