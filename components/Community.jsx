import React from "react";

const Community = () => {
  return (
    <div className="community mt-[15vh] mb-[5vh]" id="community">
      <span
        data-aos="fade-in"
        data-aos-duration="2000"
        className="text-white text-[30px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold"
      >
        Community
      </span>
      <span
        data-aos="fade-in"
        data-aos-duration="2000"
        className="text-gray-400 text-[15px] px-6 lg:px-0 lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]"
      >
        Connect with the fast growing whexcosystem, Join the community in saving
        the whales
      </span>
      <div className="flex items-center justify-center space-x-10">
        <div className="flex flex-row justify-center">
          <a
            href="https://twitter.com/whaleexploder"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/twitter.svg"
              alt="twitter"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="w-[2rem] h-[2rem] my-4 mx-3"
            />
          </a>
          <a href="https://t.me/WHEXcosystem" target="_blank" rel="noreferrer">
            <img
              src="/telegram.svg"
              alt="telegram"
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-[2rem] h-[2rem] my-4 mx-3"
            />
          </a>
          <a
            href="https://www.mintme.com/token/Whale-Exploder-Ecosystem-Daov2/MINTME/trade"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/mintme.png"
              alt="mintme"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="w-[2rem] h-[2rem] my-4 mx-3"
            />
          </a>
          <a
            href="https://www.reddit.com/r/WHEX/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/reddit.svg"
              alt="reddit"
              data-aos="fade-down"
              data-aos-duration="2000"
              className="w-[2rem] h-[2rem] my-4 mx-3"
            />
          </a>
          <a
            href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/bscscan.png"
              alt="bscscan"
              data-aos="fade-up-left"
              data-aos-duration="2000"
              className="bg-white w-[2rem] h-[2rem] rounded-full my-4 mx-5"
            />
          </a>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/pcs.png"
              alt="pcs"
              data-aos="fade-left"
              data-aos-duration="2000"
              className="w-[2rem] h-[2rem] my-4 mx-3"
            />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/whale-exploder/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/cmc.svg"
              alt="cmc"
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="w-[4rem] h-[2rem] my-4 mr-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Community;
