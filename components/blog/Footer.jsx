import React from 'react'

const Footer = () => {
  return (
        <div className="footer">
        <div className="pt-[20vh] text-white flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[40px] text-center font-bold font-mono">Community</h2>
                <div className="flex space-x-10">
                <a href="https://twitter.com/whaleexploder">
                <img src="/twitter.svg" alt="" className="w-[4rem] h-[4rem] my-4 mx-8" />
                </a>
                <a href="https://t.me/WHEXcosystem">
                <img src="/telegram.svg" alt="" className="w-[4rem] h-[4rem] my-4 mx-8" />
                </a>
                <a 
                href="https://www.reddit.com/r/WHEX/">
                <img src="/reddit.svg" alt="" className="w-[4rem] h-[4rem] my-4 mx-8" />
                </a>
                <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/bscscan.png" alt="" className="bg-white w-[4rem] h-[4rem] rounded-full my-4 mx-5" /></a>
                <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/pcs.png" alt="" className="w-[4rem] h-[4rem] my-4 mx-5" /></a>
                </div>
            </div>
            </div>
            <span className="flex items-center justify-center pt-[10vh] text-white">&copy; Whexcosystem 2022</span>
        </div>
  )
}

export default Footer
