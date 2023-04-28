import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const Whexdao = () => {
  const [isDaoVisible, setIsDaoVisible] = useState(false)
  return (
    <motion.div 
    layout
    transition={{ layout: { duration: 0.5 } }}
    className="border border-zinc-600 shadow-2xl px-4 py-6 text-white"
    id="whexdao"
    >
    <div className="flex flex-row space-x-2 justify-center items-center">
        <img src="/weed.png" alt="whexdao-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
        <span className="lg:text-[25px] text-[18px] font-mono font-bold text-white">WHEXcosystem Exploder Ecosystem Daov2</span>
    </div>
    <span className="flex justify-center text-neutral-200 lg:mt-6 mt-4 px-3 text-[14px]">The WHEXcosystem DAO ($WEED) token is used to make decisions on the future of the WHEXcosystem via blockchain vote. </span>
    <span className="text-[14px] px-3 flex justify-start mt-2">Proceeds and royalties of the WHEXy Whales:</span>
    <a href="https://app.niftykit.com/collections/drops/whexy" 
    target="_blank" rel="noreferrer" 
    className="text-blue-400 px-3 underline text-[14px] flex justify-start">
        https://app.niftykit.com/collections/drops/whexy
    </a>   
    <div className="flex flex-col mx-4 space-y-3 mt-6 text-neutral-400">
                <span className="text-[14px] font-mono font-semibold">
                    {">>"} Pancake Swap: {" "}
                        <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5" 
                        target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                           https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5
                        </a>    
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Network: Binance Smart Chain
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Address: 0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Symbol: $WEED
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Decimals: 18
                </span>
            </div>
            {isDaoVisible && (
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
            <div className="flex flex-col mx-4 space-y-3 text-neutral-400">
                <span className="text-[14px] font-semibold">
                    {">>"} Staking: coming soon.
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Initial Supply: 1,000,000 WHEXDAO
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Private Sales: 35,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop to WHEXy Whales 1-2000: 83,330
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Split Presale - Burn WHEX option: 15,922
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Flash Sales: 4,282
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop for minting WHEXy whales 2001-4800 (41.665 each): 116,662
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Token Sale (buy with whex): 279, 796
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Pancake Swap (WEED/USDT) : (12,982 so far) 100,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop to WHEX holders (on completion of split presale): 100,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} WEED Reserve: 170,000 0x188f92ACD1A82b54ce713cAFa8e8217c1089230c
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Staking Rewards: 95,008
                </span>
            <h2 className="flex text-white pt-8 text-[18px] font-mono font-bold">Voting Mechanism</h2>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"} Holders can vote without having to send tokens to addresses using a dapp. This will allow holders to participate in the future of the WHEXcosystem without the need to give up voting power. This is hosted at: 
                    <a href="https://snapshot.org/#/whexy.eth" target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                        https://snapshot.org/#/whexy.eth
                    </a>
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"} The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total <span className="text-blue-400 font-semibold">$WEED</span> used to vote).
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"}  Voting on the <span className="text-blue-400 font-semibold">$WEED</span> tokenomics, what to do with the <span className="text-blue-400 font-semibold">$WEED</span> built up in DAO Treasury and <span className="text-blue-400 font-semibold">$WHEX</span> in the charity/burn wallet are allowed.
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {"Note"} As CEO, Peter Wake retains the right to veto any decision, or decide not to run a vote on a question presented by the community. I.E. you cannot use the DAO to perform a hostile takeover of the WHEX contract, decide to perform illegal acts, etc.
                </span>               
            </div>
                </motion.div>
            )}
                <div 
                className="flex justify-end"
                onClick={() => setIsDaoVisible(!isDaoVisible)}
                >
                    {isDaoVisible ? (
                      <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                    ) : (
                        <button className="bg-blue-400 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                    )}
                </div>
</motion.div>
  )
}

export default Whexdao
