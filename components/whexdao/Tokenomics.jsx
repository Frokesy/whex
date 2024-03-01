import React from "react";

const Tokenomics = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="3000"
      className="flex flex-col space-y-3"
    >
      <h2 className="text-center text-[18px] font-mono font-bold">
        Tokenomics
      </h2>
      <span className="text-[13px]">
        {">>"} Liquidity pool for $WEED/USDT locked for 5 years!{" "}
        <a
          href="https://www.dx.app/certificates/locker/v2-liquidity?address=0xe9d2d0a3c4899436688084fa020c9ad9f9a03eb6&chain=56"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline text-[14px]"
        >
          Click here to view certificate
        </a>
      </span>
      <span className="text-[13px]">
        {">>"} 1% of each transaction is burned
      </span>
      <span className="text-[13px]">
        {">>"} 2% of each transaction goes to DAO Treasury wallet:
        0x188f92acd1a82b54ce713cafa8e8217c1089230c
      </span>
      <span className="text-[13px]">
        {">>"} It was relaunched April 1, 2023 to add tokenomics and resolve
        some issues with the liquidity pool being botted. An airdrop was done at
        a rate of 1 $WEED per 1000 $WHEXDAO.
      </span>
      <span className="text-[13px]">
        {">>"} Originally it was on this contract address:
        0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2
      </span>
    </div>
  );
};

export default Tokenomics;
