import React from 'react'

const UpdateFooter = () => {
  return (
    <div>
      <div className="footer w-full flex justify-between">
        <div className="flex flex-row w-[90vw] mx-auto px-16 space-x-8">
            <img src="/peter_wake.jpg" alt="founder-pic" className="rounded-[50%] h-[20rem] w-[20rem]" />
            <div className="flex flex-col w-[25vw] text-gray-500">
            <h2 className="text-[30px] font-mono text-gray-400 font-mono font-bold">Peter Wake</h2>
            <span className="text-[15px] font-mono text-teal-600 mb-6">Founder & CEO</span>
            <span className="text-[13px] mb-4 font-mono font-semibold">
                Peter Wake is a Mining Engineering graduate (2020) working full time in IT/Business Development at a construction company in Ottawa, Canada.
            </span>
            <span className="mb-4 text-[13px] font-mono font-semibold">
                In early 2021, Peter got into putting real money into cryptocurrency, starting with Dogecoin and some DeFi projects. He had been casually watching the market after having getting some free Doge in 2016 from a faucet
            </span>
            <span className="mb-4 text-[13px] font-mono font-semibold">
                 In March 2021, Peter made his first NFT on OpenSea and in June 2021 launched the Whale Exploder token on the Binance Smart Chain.
            </span>
            </div>
        </div>
        <div className="footer bg-black w-full mt-[30vh]">
        <div className="flex flex-row justify-end mx-[10vw]">
        <a href="https://twitter.com/whaleexploder">
        <img src="/twitter.svg" alt="" className="w-[2rem] h-[2rem] my-4 mx-5" />
        </a>
        <a href="https://t.me/WHEXcosystem">
        <img src="/telegram.svg" alt="" className="w-[2rem] h-[2rem] my-4 mx-5" />
        </a>
        <a 
        href="https://www.reddit.com/r/WHEX/">
          <img src="/reddit.svg" alt="" className="w-[2rem] h-[2rem] my-4 mx-5" />
        </a>
        <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/bscscan.png" alt="" className="bg-white w-[2rem] h-[2rem] rounded-full my-4 mx-5" /></a>
        <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/pcs.png" alt="" className="w-[2rem] h-[2rem] my-4 mx-5" /></a>
        </div>
        <span className="text-white mt-4 flex justify-end text-[15px] mx-[13vw]">&copy; Whexcosystem 2022</span>
        </div>
    
        </div>
    </div>
  )
}

export default UpdateFooter
