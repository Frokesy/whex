import React from "react";

const AddWhexSol = () => {
  return (
    <div className="">
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className="flex flex-col space-y-3 lg:mx-6"
      >
        <h2 className="text-center text-[16px] font-bold">
          How to add{" "}
          <span className="text-blue-400 italic font-bold">$whex-sol </span> to
          your wallet?
        </h2>
        <span className="text-[13px]">
          You need to add the token manually on MetaMask or Trust Wallet in
          order to view token.
        </span>
        <span className="text-[13px]">{">>"} Network: Solana</span>
        <span className="text-[13px]">
          {">>"} Contract: 6CXEhytD4zRL74THZUxvmCiUKoNMFtA9BLYd97g1rCQk
        </span>
        <span className="text-[13px]">{">>"} Name: Whale Exploder - SOL</span>
        <span className="text-[13px]">{">>"} Symbol: $whex</span>
        <span className="text-[14px]">{">>"} Decimals: 9</span>
        <span className="text-[14px]">{">>"} Supply: 1,000,000,000</span>
        <span className="text-[14px]">
          {">>"} Use the contract address to swap $FLUXB/$WHEX {" "}
          <a
            href="https://fluxbeam.xyz/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline font-light"
          >
            here
          </a>
        </span>
        <span className="text-[13px]">
          {">>"} This token is a cross chain version of the Whale Exploder on
          the Binance Smart chain which has been working to save whales since
          June 2021:{" "}
          <a
            href="https://coinmarketcap.com/currencies/whale-exploder/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 underline font-light"
          >
            https://coinmarketcap.com/currencies/whale-exploder/
          </a>
        </span>
      </div>
    </div>
  );
};

export default AddWhexSol;
