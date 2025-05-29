import React from "react";

const Royalties = () => {
  const WEED = <span className="text-blue-400">$WEED</span>;

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col lg:mx-4 space-y-3 pt-3"
    >
      <span className="text-[18px] text-center font-mono font-bold">
        Royalties (How they will be used):
      </span>
      <span className="text-[14px]">
        {">>"} {" "}
        <a
          href="https://opensea.io/collection/whexy"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light"
        >
        https://opensea.io/collection/whexy
        </a>
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
        {">>"} Transacted after each $1000 accumulated
      </span>
    </div>
  );
};

export default Royalties;
