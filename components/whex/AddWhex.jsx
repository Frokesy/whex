import React from "react";

const AddWhex = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-[16px] font-bold pt-6">
        How to add {WHEX} to your wallet?
      </h2>
      <span className="text-[14px] font-normal">
        You need to add the token manually on MetaMask or Trust Wallet in order
        to view token.
      </span>
      <span className="text-[14px] font-semibold  ">
        {">>"} Network: Binance Smart Chain
      </span>
      <span className="text-[14px] font-semibold  ">
        {">>"} Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A
      </span>
      <span className="text-[14px] font-semibold  ">
        {">>"} Name: Whale Exploder
      </span>
      <span className="text-[14px] font-semibold  ">{">>"} Symbol: $whex</span>
      <span className="text-[14px] font-semibold  ">{">>"} Decimals: 9</span>
    </div>
  );
};

export default AddWhex;
