import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const Whexdao = () => {
  const [isDaoVisible, setIsDaoVisible] = useState(false)
  return (
    <motion.div 
    layout
    transition={{ layout: { duration: 0.5 } }}
    className="border border-gray-800 px-4 py-6 text-white"
    id="whexdao"
    >
    <div className="flex flex-row space-x-2 justify-center items-center">
        <img src="/logo.jpg" alt="whexdao-logo" className="rounded-full lg:w-[4.5rem] md:w-[3.5rem] w-[3.5rem]" />
        <span className="lg:text-[25px] text-[22px] font-mono font-bold text-white">whexcosystem DAO (whexdao)</span>
    </div>
    <div className="flex flex-col mx-4 space-y-3 mt-6 text-neutral-400">
                <span className="text-[14px] font-semibold">
                    {">>"} Network: Binance Smart Chain
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Address: 0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Symbol: $whexdao
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Decimals: 9
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Initial Supply: 1,000,000,000 WHEXDAO
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Stockpile Address: 0x0D7079098C8feb4F4AEF40703CE83eCc704f371d
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Private Sales: 200,000,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Presale(dxscale): 250,000,000
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
                    {">>"} Airdrop to WHEX holders (on completion of presale): 100,000,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Liquidity Pool: 250,000,000
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop to WHEXy Whales (on mint out): 199,995,591
                </span>
            <h2 className="flex text-white pt-8 text-[22px] font-mono font-bold">Voting Mechanism</h2>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"}A voting cycle is initiated by Peter Wake, or by someone sending 4800 WHEXDAO tokens to the stockpile address and proposing a question to Peter Wake, who will then set up the voting addresses.
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"}  WHEXDAO tokens are sent out from the Stockpile to holders of WHEXy Whales at a rate of 1 WHEXDAO per 1 WHEXy Whale.
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"} Peter Wake will then publish a question in discord, Twitter and telegram and provide directions on what address to send WHEXDAO tokens to for each option.
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"} The voting period will end 42 hours after the vote goes live. All WHEXDAO tokens held by the vote option. addresses will be sent back to the stockpile.
                </span>
                <span className="text-[12px] font-semibold text-neutral-400">
                    {">>"} The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total WHEXDAO used to vote).
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
