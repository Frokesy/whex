import React from "react";

const Section = () => {
  return (
    <div
      className="flex flex-col space-y-3"
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <div className="flex flex-col pt-6 space-y-3">
        <h2 className="text-[16px] font-bold">
          How the <span className="text-blue-400 italic font-bold">ETH </span>{" "}
          will be used:
        </h2>
        <span className="text-[13px]">
          {">>"} 1 eth - liquidity pool
        </span>
        <span className="text-[13px]">
          {">>"} 0.5 eth - fees for adding liquidity and renouncing contract
        </span>
        <span className="text-[13px]">
          {">>"} 0.5 eth - founder
        </span>
      </div>
    </div>
  );
};

export default Section;
