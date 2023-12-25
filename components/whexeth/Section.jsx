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
          Rate: 1 ETH = 15485000000000000.0 WHEX
        </h2>
        <span className="text-[13px]">
          {">>"} You can also buy tokens by sending ETH directly from your
          wallet to this contract (please increase gas limit to 200,000 or even
          more for tokens with special functions like autoLP, swaps, etc.)
          0x3c6f96859862891564B17b5611F29af7E28534bD
        </span>
        <span className="text-[13px]">
          {">>"} End: Wed Jun 19 2024 16:20:00 GMT-0400 (Eastern Daylight Saving
          Time)
        </span>
        <span className="text-[13px]">
          {">>"} If any tokens remain in the sale by the end of the sale, they
          will be burned!
        </span>
      </div>
    </div>
  );
};

export default Section;
