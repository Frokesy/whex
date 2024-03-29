import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="community">
      <div className="pt-[10vh] text-[#000] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <h2 className="lg:text-[40px] text-[30px] text-center font-bold font-mono">
            Community
          </h2>
          <div className="flex space-x-10">
            <a href="https://twitter.com/whaleexploder">
              <img
                src="/twitter.svg"
                alt=""
                className="lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem] my-4 lg:mx-8"
              />
            </a>
            <a href="https://t.me/WHEXcosystem">
              <img
                src="/telegram.svg"
                alt=""
                className="lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem] my-4 lg:mx-8"
              />
            </a>
            <a href="https://www.reddit.com/r/WHEX/">
              <img
                src="/reddit.svg"
                alt=""
                className="lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem] my-4 lg:mx-8"
              />
            </a>
            <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A">
              <img
                src="/bscscan.png"
                alt=""
                className="bg-white lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem] rounded-full my-4 lg:mx-5"
              />
            </a>
            <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A">
              <img
                src="/pcs.png"
                alt=""
                className="lg:w-[4rem] lg:h-[4rem] w-[2rem] h-[2rem] my-4 lg:mx-5"
              />
            </a>
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center pt-[10vh] text-[#000]">
        &copy; Whexcosystem 2022
      </span>
    </div>
  );
};

export default Footer;
