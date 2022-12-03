import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const WhexyWhales = () => {
    const [isWhexyVisible, setIsWhexyVisible] = useState(false)
  return (
    <div>
       <motion.div 
        layout
        transition={{ layout: { duration: 0.5 } }}
        className="border border-zinc-600 shadow-2xl px-4 py-6 text-white"
        id="whexy"
        >
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/whexy.png" alt="whexy-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="text-[25px] font-extrabold text-white">WHEXy whales (NFT)</span>
            </div>
            <span className="flex justify-center text-center text-neutral-400 mt-4 text-[13px] font-normal">WHEXy Whales is an NFT project consisting of 4800 unique Whales with different traits like hats, glasses, shirts, backgrounds, etc</span>
            <div className="flex flex-col mx-4 space-y-3 mt-4 text-neutral-400">
                        <span className="text-[18px] text-white font-mono font-bold">
                            Minting &amp; Royalties (How they will be used):
                        </span>
                        <span className="text-[14px] font-mono font-semibold">
                            {">>"} Mint Link: {" "}
                            <a href="https://app.niftykit.com/drops/whexy" 
                            target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                            https://app.niftykit.com/drops/whexy
                            </a>    
                        </span>
                        <span className="text-[14px] font-semibold">
                            {">>"} 25% to whale conservation charities 
                        </span>
                        <span className="text-[14px] font-semibold">
                            {">>"} 25% buys WHEX for WHEXDAO staking pools.
                        </span>
                        <span className="text-[14px] font-semibold">
                            {">>"} 25% to marketing and administrative costs 
                        </span>
                        <span className="text-[14px] font-semibold">
                            {">>"} 25% founder pay 
                        </span>
                        {isWhexyVisible && (
                        <motion.div
                        initial={{ 
                            y: 0,
                            opacity: 0,
                         }}
                        animate={{ 
                            y: 15,
                            opacity: 1, 
                        }}
                        transition={{ 
                            duration: 0.5
                         }}
                        >
                        <span className="text-[14px] font-semibold">
                            {">>"} Transacted after each 100 mints, or for royalties, each $1000 accumulated 
                        </span>
                         <div className="flex flex-col mx-2 space-y-3 mt-4">
                         <span className="text-[18px] text-white font-mono font-bold  ">
                            Why mint a WHEXy whale today?
                        </span>
                     <span className="text-[14px] font-semibold  ">
                            {"1."} Help real life whales
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {"2."} get airdropped WHEXcosystem DAO tokens and participate in determining the future of the project
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {"3."} Participate in mint out rewards:
                        </span>
                        <div className="flex flex-col py-2 text-[13px] font-mono font-normal">
                            <span>
                              {">>"} 1916-2099: 0.275 ETH 
                            </span>
                            <span>
                              {">>"} 2100-2399: Typical Tiger NFT
                            </span>
                            <span>
                              {">>"} 2400-2999: 0.55 ETH
                            </span>
                            <span>
                              {">>"} 3000-3599: Apocalyptic Ape NFT
                            </span>
                            <span>
                              {">>"} 3600-4199: 0.825 ETH
                            </span>
                            <span>
                              {">>"} 4200-4799: Lazy Lion NFT
                            </span>
                        </div>
                        <span className="text-[14px] font-semibold  ">
                            {"4."} Access to getting a custom ENS subdomain of WHEXy.eth
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {"5."} Access to an exclusive discord chat
                        </span>
                       </div>
                      </motion.div>
                    )}
                        <div 
                        className="flex justify-end"
                        onClick={() => setIsWhexyVisible(!isWhexyVisible)}
                        >
                            {isWhexyVisible ? (
                              <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
                    </div>
        </motion.div>
    </div>
  )
}

export default WhexyWhales
