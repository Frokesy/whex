import React from "react";

const AddWhexEth = () => {
  return (
    <div className="">
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="flex flex-col space-y-3 lg:mx-6"
      >
        <h2 className="text-center text-[16px] font-bold">
          How to add{" "}
          <span className="text-blue-400 italic font-bold">$whex-eth </span> to
          your wallet?
        </h2>
        <span className="text-[13px]">
          You need to add the token manually on MetaMask or Trust Wallet in
          order to view token.
        </span>
        <span className="text-[13px]">{">>"} Network: Ethereum Network</span>
        <span className="text-[13px]">
          {">>"} Contract: 0x21A60677442C7Ccad2586235042aF6d67C1184b1
        </span>
        <span className="text-[13px]">{">>"} Name: Whale Exploder - ETH</span>
        <span className="text-[13px]">{">>"} Symbol: $whex</span>
        <span className="text-[14px]">{">>"} Decimals: 9</span>
        <span className="text-[14px]">
          {">>"} Supply: 1,000,000,000,000,000,000
        </span>
        <span className="text-[13px]">
          {">>"} This token is a cross chain version of the Whale Exploder on
          the Binance Smart chain:{" "}
          <a
            href="https://coinmarketcap.com/dexscan/ethereum/0x70024553e791aa658d7a9e4b581b881f698ab58f"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline font-bold"
          >
            Click to view price chart on Coinmarketcap
          </a>
        </span>
      </div>
    </div>
  );
};

export default AddWhexEth;
