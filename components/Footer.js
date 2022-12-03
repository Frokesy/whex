import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const linkVariants = {
  hover: {
    scale: 1.1,
    color: 'white',
    originX: 0,
    transition: {
      duration: 0.1,
      type: 'tween',
      stiffness: 200,
    },
  }
}

const Footer = () => {
  return (
    <div>
      <div className="footer w-full flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row w-[90vw] mx-auto lg:px-4 space-x-4 lg:space-x-8">
            <img src="/peter_wake.jpg" alt="founder-pic" className="rounded-[50%] h-[10rem] w-[10rem] lg:h-[15rem] lg:w-[15rem]" />
            <div className="flex flex-col lg:w-[25vw] text-gray-500">
            <h2 className="text-[30px] text-neutral-300 font-mono font-bold">Peter Wake</h2>
            <span className="text-[15px] font-mono text-blue-400 mb-4">Founder & CEO</span>
            <span className="text-[13px] mb-4 text-neutral-400 font-mono font-semibold">
                Peter Wake is a Mining Engineering graduate (2020) working full time in IT/Business Development at a construction company in Ottawa, Canada.
            </span>
            <span className="mb-4 text-[13px] font-mono text-neutral-400 font-semibold">
                In early 2021, Peter got into putting real money into cryptocurrency, starting with Dogecoin and some DeFi projects. He had been casually watching the market after having getting some free Doge in 2016 from a faucet
            </span>
            <span className="mb-4 text-[13px] font-mono text-neutral-400 font-semibold">
                 In March 2021, Peter made his first NFT on OpenSea and in June 2021 launched the Whale Exploder token on the Binance Smart Chain.
            </span>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row w-[85vw] justify-between mx-auto lg:w-[50vw] lg:items-center lg:space-x-10 lg:mx-10 space-y-10 lg:space-y-0">
        <div className="flex flex-col text-white">
        <span className="text-white text-[20px] font-mono font-bold">Docs</span>
        <div className="w-[20vw] lg:w-[5vw] border border-blue-400"></div>
          <div className="text-gray-400 font-mono cursor-pointer mt-3 text-[13px] flex flex-col space-y-2">
          <Link 
          href="/pdf/whitepaper.pdf" 
          passHref
          >
            <motion.span           
            variants={linkVariants}
            whileHover="hover"
            >Whale Exploder White Paper</motion.span>
          </Link>
          
          <Link 
          href="/roadmap" 
          passHref
          >
            <motion.span
            variants={linkVariants}
            whileHover="hover"
            >Whale Exploder Roadmap</motion.span>
          </Link>
          
          <Link 
          href="/pdf/Whex_audit_Aleksandr_Pletnev_July-29-2021.pdf" 
          passHref
          >
            <motion.span
            variants={linkVariants}
            whileHover="hover"
            >Whale Exploder Audit</motion.span>
          </Link>
          </div>
        </div>

        <div className="">
        <span className="text-white text-[20px] font-mono font-bold">Tokens</span>
        <div className="w-[20vw] lg:w-[10vw] border border-blue-400"></div>
          <div className="text-neutral-400 font-mono mt-3 cursor-pointer text-[13px] flex flex-col space-y-2">
          <Link 
          href="#whex" passHref
          >
            <motion.span
            variants={linkVariants}
            whileHover="hover"
            >
              Whale Exploder ($whex)</motion.span>
          </Link>
          
          <Link
          href="#whexy" 
          passHref
          >
            <motion.span     
            variants={linkVariants}
            whileHover="hover"
            >
              Whexy Whales (NFT)</motion.span>
          </Link>
          
          <Link 
          href="#whexdao" 
          passHref
          >
            <motion.span
            variants={linkVariants}
            whileHover="hover"
            >Whexcosystem DAO (whexdao)</motion.span>
          </Link>
          </div>
        </div>
        </div>

        </div>
        <div className="footer bg-neutral-800 w-full flex justify-between mt-[5vh]">
        <span className="text-gray-400 font-mono font-bold mt-4 flex justify-center lg:justify-end mb-6 lg:mb-0 text-[18px] mx-[13vw]">&copy; Whexcosystem 2022</span>
        
        <div className="lg:flex hidden flex-row justify-end mx-[10vw]">
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
  )
}

export default Footer
