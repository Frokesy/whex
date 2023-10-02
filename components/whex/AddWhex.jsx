import React from "react";

const AddWhex = () => {
  const WHEX = <span className="text-blue-400 italic">$WHEX</span>;

  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-[16px] font-mono text-center font-bold pt-6">
        How to add {WHEX} to your wallet?
      </h2>
      <span className="text-[13px] font-normal">
        You need to add the token manually on MetaMask or Trust Wallet in order
        to view token.
      </span>
      <span className="text-[13px]">
        {">>"} Network: Binance Smart Chain
      </span>
      <span className="text-[13px]">
        {">>"} Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A
      </span>
      <span className="text-[13px]">
        {">>"} Name: Whale Exploder
      </span>
      <span className="text-[13px]">{">>"} Symbol: $whex</span>
      <span className="text-[13px]">{">>"} Decimals: 9</span>
    </div>
  );
};

export default AddWhex;
