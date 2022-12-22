import React from 'react'

const Footer = () => {
  return (
        <div className="footer">
        <div className="pt-[20vh] text-white grid grid-cols-3">
                {/* <div className="flex items-center">
                    <img src="/logo.jpg" alt="" className="rounded-full w-[30%]" />
                </div> */}
            <div className="flex flex-col">
                <h2 className="text-[30px] font-bold font-mono">Quick Links</h2>
                <ul className="text-[16px] font-mono pt-2 text-neutral-400 space-y-2">
                    <li>Home</li>
                    <li>Whitepaper</li>
                    <li>Become a writer</li>
                </ul>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[30px] font-bold font-mono">Suggested Posts</h2>
                <ul className="text-[16px] font-mono pt-2 text-neutral-400 space-y-2">
                    <li>How to get started with NFTs</li>
                    <li>The Journey into the metaverse</li>
                    <li>Transitioning into tech made easy</li>
                </ul>
            </div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[30px] text-center font-bold font-mono">Community</h2>
                <div className="flex">
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
            </div>
            </div>
            <span className="flex items-center justify-center pt-[10vh] text-white">&copy; Whexcosystem 2022</span>
        </div>
  )
}

export default Footer
