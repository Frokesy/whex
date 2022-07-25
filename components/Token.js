import React,{ useState} from 'react'
import { motion } from 'framer-motion'


const Token = () => {
    const [isVisible, setIsVisible] = useState(false)

  return (
    <>
     <span className="text-white text-[30px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold">Tokens</span>
     <span className="text-gray-400 text-[15px] lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Find out about the tokens in the whexcosystem</span>
    <div className="grid lg:grid-cols-3 grid-cols-1 w-[95vw] space-y-10 lg:space-y-0 lg:space-x-10 mx-auto justify-between">
        <div className="border border-gray-800 px-4 py-6 text-white">
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/whale-exploder.png" alt="whex-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="text-[25px] font-mono font-bold text-white">whale exploder ($whex)</span>
            </div>
            <span className="flex justify-center text-gray-500 mt-4 text-[13px] font-normal">67.1% in circulation, 32.9% burned, 20.08 BNB locked</span>
                <motion.div 
                 layout
                 transition={{ layout: { duration: 0.5 } }}>
                    <h2 className="flex justify-center text-gray-100 mt-6 text-[16px] font-bold">How to add {" "} <span className="text-teal-600 italic mx-2"> $whex </span> to your wallet?</h2>
                    <span className="flex justify-center text-gray-500 text-[13px] font-normal items-center text-center lg:w-[20vw] mx-auto mt-2">You need to add the token manually on MetaMask or Trust Wallet in order to view token.</span>
                    <div className="flex flex-col mx-4 space-y-3 mt-3">
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Network: Binance Smart Chain
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Name: Whale Exploder
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Symbol: $whex
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
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
                            <h2>Hello World, we are here now</h2>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum velit, quidem autem tempore non rem ea cupiditate repellat rerum nulla?</span>
                        </motion.div>
                    )}
                        <div 
                        className="flex justify-end"
                        onClick={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? (
                              <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
                </motion.div>
        </div>

        <div className="border border-gray-800 px-4 py-6 text-white">
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/whexy.png" alt="whexy-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="text-[25px] font-mono font-bold text-white">whexy whales (NFT)</span>
            </div>
            <div className="flex flex-col mx-4 space-y-3 mt-10">
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} WHEXy Whales is an NFT project consisting of 4800 unique Whales with different traits like hats, glasses, shirts, backgrounds, etc
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Minting & Royalties (How they will be used?): 42% will buy WHEX and distribute to all WHEXy Whale holders in proportion to the number they hold. 38% to marketing and administrative costs (website, paid promotion, hiring mods/community managers, etc) 10% will be donated to Save The Whales! Learn more about the work they do here:<a href="https://savethewhales.org" className="text-teal-600 underline underline-offset-1">https://savethewhales.org</a>  founder pay
                        </span>
                        <div className="flex justify-end">
                        <button className="bg-teal-800 mt-4 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                        </div>
                    </div>
        </div>

        <div className="border border-gray-800 px-4 py-6 text-white">
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/logo.jpg" alt="whexdao-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="lg:text-[25px] text-[22px] font-mono font-bold text-white">whexcosystem DAO (whexdao)</span>
            </div>
            <div className="flex flex-col mx-4 space-y-3 mt-12">
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Network: Binance Smart Chain
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Address: 0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Symbol: $whexdao
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Decimals: 9
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Initial Supply: 1,000,000,000 WHEXDAO
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Stockpile Address: 0x0D7079098C8feb4F4AEF40703CE83eCc704f371d
                        </span>
                    </div>
                        <div className="flex justify-end">
                        <button className="bg-teal-800 mt-14 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                        </div>
        </div>
    </div>
    </>
  )
}

export default Token
