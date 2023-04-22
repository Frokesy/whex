import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'



const Whex = () => {

    const [isVisible, setIsVisible] = useState(false)
  return (
    <div className="border border-zinc-600 shadow-2xl px-4 py-6 text-white">
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/whale-exploder.png" alt="whex-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="lg:text-[25px] text-[22px] font-mono font-bold text-white">Whale Exploder (WHEX)</span>
            </div>
            <span className="flex justify-center text-neutral-400 mt-3 text-[14px] font-normal">64.3% in circulation, 35.7% burned, 19.58 BNB locked</span>
                <motion.div 
                 layout
                 transition={{ layout: { duration: 0.5 } }}>
                    <h2 className="flex justify-center text-gray-100 mt-6 text-[16px] font-bold">How to add {" "} <span className="text-blue-400 italic font-bold mx-2"> $whex </span> to your wallet?</h2>
                    <span className="flex justify-center text-neutral-400 text-[14px] font-normal items-center text-center lg:w-[20vw] mx-auto mt-2">You need to add the token manually on MetaMask or Trust Wallet in order to view token.</span>
                    <div className="flex flex-col mx-4 space-y-3 mt-3  text-neutral-400">
                        <span className="text-[14px] font-semibold  ">
                            {">>"} Network: Binance Smart Chain
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {">>"} Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {">>"} Name: Whale Exploder
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {">>"} Symbol: $whex
                        </span>
                        <span className="text-[14px] font-semibold  ">
                            {">>"} Decimals: 9
                        </span>
                    </div>
                    {isVisible && (
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
                    <div className="flex flex-col mx-4 space-y-3 mt-3">
                    <h2 className="flex text-white mt-6 text-[18px] font-mono font-bold">Tokenomics</h2>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} 2% sent to a whale charity wallet
                        </span>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} (42% burned, 58% sold biweekly if over 20 BNB (capped at 4.2% LP))
                        </span>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} 2% reflections
                        </span>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} 2% Automatic liquidity pool on Pancakeswap
                        </span>
                    </div>
                    <div className="flex flex-col mx-4 space-y-3 mt-3">
                    <h2 className="flex text-gray-100 mt-6 text-[18px] font-mono font-bold">Locked Liquidity</h2>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} 15.1 BNB of LP Locked for 5 years. Pancake LPs for Whale Exploder: 0xac3843ed09a264f26f2668a7c57b3191ad10a6f7
                        </span>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} 1 BNB of initial Liquidity was created and locked on June 29, 2021 for 5 years. This was done on dxsale.app, These can be seen on BSC Scan here: 0xeb3a9c56d963b971d320f889be2fb8b59853e449
                        </span>
                        <span className="text-[14px] text-neutral-400 font-semibold  ">
                            {">>"} Automatic LP (13% of each transaction): 0x07d80ae6f36a5e08dca74ce884a24d39db9934ed.LP from IDO will be locked in dxsale.app for 5 years. Additional LP has been sent to this initial contract since the first 1 BNB and is locked.
                        </span>

                    </div>
                        </motion.div>
                    )}
                        <div 
                        className="flex justify-end"
                        onClick={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? (
                              <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
                </motion.div>
        </div>
  )
}

export default Whex
