import React, { useEffect, useState, useRef } from 'react'
import Token from '../components/Token'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation, AnimatePresence } from 'framer-motion'
import Meta from './defaults/Meta'
import EmberScript from './EmberScript'

const headerVariant = {
  hidden: {
    y: 1000,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      mass: 0.5,
      stiffness: 200,
      type: 'spring',
      damping: 20,
    },
  }
}

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isWhexyVisible, setIsWhexyVisible] = useState(false)
  const [isDaoVisible, setIsDaoVisible] = useState(false)
  const tokenRef = useRef(null)
  const tokenInView = useInView(tokenRef)

 
  const {ref, inView} = useInView({
    threshold: 0.2,
  })



  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        }
      });
    } else if (!inView) {
      animation.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [animation, inView]);

  return (
    <>
      <Meta title="WHEXcosystem || Home Page" />
    <div className="bg-black h-full">
        <Header />
        <div id="home" className="bg-[url('/whale__three.gif')] bg-center bg-cover bg-no-repeat h-[80vh] lg:h-screen items-center justify-center">
        <motion.div
        className="lg:pt-[40vh] pt-[30vh] lg:w-[95vw] text-white text-[25px] w-[80vw] mx-auto lg:text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>Saving the <span className="text-teal-600">whales</span>,</h2>
            <span>one <span className="text-teal-600">transaction</span> at a time</span>
        </motion.div>
    </div>

    <motion.div className="tokens pt-[5vh]" id="tokens">

    <motion.div animate={animation} ref={ref}>
    <span className="text-white text-[30px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold" >Tokens</span>
     <span className="text-gray-400 text-[15px] lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Find out about the tokens in the whexcosystem</span>
    </motion.div>


    <motion.div
       animate={animation} ref={ref} 
       className="grid lg:grid-cols-3 grid-cols-1 w-[95vw] space-y-10 lg:space-y-0 lg:space-x-10 mx-auto justify-between"
       id="whex"
       >
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
                    <div className="flex flex-col mx-4 space-y-3 mt-3">
                    <h2 className="flex text-gray-100 mt-6 text-[20px] font-mono font-bold">Tokenomics</h2>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 2% sent to a whale charity wallet
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} (42% burned, 58% sold biweekly if over 20 BNB (capped at 4.2% LP))
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 2% reflections
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 2% Automatic liquidity pool on Pancakeswap
                        </span>
                    </div>
                    <div className="flex flex-col mx-4 space-y-3 mt-3">
                    <h2 className="flex text-gray-100 mt-6 text-[20px] font-mono font-bold">Locked Liquidity</h2>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 15.1 BNB of LP Locked for 5 years. Pancake LPs for Whale Exploder: 0xac3843ed09a264f26f2668a7c57b3191ad10a6f7
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 1 BNB of initial Liquidity was created and locked on June 29, 2021 for 5 years. This was done on dxsale.app, These can be seen on BSC Scan here: 0xeb3a9c56d963b971d320f889be2fb8b59853e449
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
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
                              <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
                </motion.div>
        </div>
 
        <motion.div 
        layout
        transition={{ layout: { duration: 0.5 } }}
        className="border border-gray-800 px-4 py-6 text-white"
        id="whexy"
        >
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/whexy.png" alt="whexy-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="text-[25px] font-mono font-bold text-white">whexy whales (NFT)</span>
            </div>
            <span className="flex justify-center text-center text-gray-500 mt-4 text-[13px] font-normal">WHEXy Whales is an NFT project consisting of 4800 unique Whales with different traits like hats, glasses, shirts, backgrounds, etc</span>

            <div className="flex flex-col mx-4 space-y-3 mt-4">
                        <span className="text-[18px] font-mono font-bold text-gray-400">
                            Minting &amp; Royalties (How they will be used):
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 25% to whale conservation charities 
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 25% buys WHEX for WHEXDAO staking pools.
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 25% to marketing and administrative costs 
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} 25% founder pay 
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Transacted after each 100 mints, or for royalties, each $1000 accumulated 
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
                         <div className="flex flex-col mx-4 space-y-3 mt-4">
                         <span className="text-[18px] font-mono font-bold text-gray-400">
                            Why mint a WHEXy whale today?
                        </span>
                     <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {"1"} Help real life whales
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {"2"} get airdropped WHEXcosystem DAO tokens and participate in determining the future of the project
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {"3"} Participate in mint out rewards:
                        </span>
                        <div className="flex flex-col py-2 text-[12px] font-mono font-normal text-gray-400">
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
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {"4"} Access to getting a custom ENS subdomain of WHEXy.eth
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {"5"} Access to an exclusive discord chat
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            Mint Link: {" "}
                              <a href="https://app.niftykit.com/drops/whexy" 
                              target="_blank" rel="noreferrer" className="text-teal-400 font-light">
                                 https://app.niftykit.com/drops/whexy
                              </a>    
                        </span>
                       </div>
                      </motion.div>
                    )}
                        <div 
                        className="flex justify-end"
                        onClick={() => setIsWhexyVisible(!isWhexyVisible)}
                        >
                            {isWhexyVisible ? (
                              <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
                    </div>
        </motion.div>

          <EmberScript />
        <motion.div 
            layout
            transition={{ layout: { duration: 0.5 } }}
            className="border border-gray-800 px-4 py-6 text-white"
            id="whexdao"
            >
            <div className="flex flex-row space-x-2 justify-center items-center">
                <img src="/logo.jpg" alt="whexdao-logo" className="rounded-full lg:w-[4rem] md:w-[3rem] w-[3rem]" />
                <span className="lg:text-[25px] text-[22px] font-mono font-bold text-white">whexcosystem DAO (whexdao)</span>
            </div>
            <div className="flex flex-col mx-4 space-y-3 mt-6">
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
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Private Sales: 200,000,000
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
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
                    <div className="flex flex-col mx-4 space-y-3">
                    <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Airdrop to WHEX holders (on completion of presale): 100,000,000
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Liquidity Pool: 250,000,000
                        </span>
                        <span className="text-[14px] font-mono font-semibold text-gray-400">
                            {">>"} Airdrop to WHEXy Whales (on mint out): 199,995,591
                        </span>
                    <h2 className="flex text-gray-100 pt-8 text-[20px] font-mono font-bold">Voting Mechanism</h2>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
                            {">>"}A voting cycle is initiated by Peter Wake, or by someone sending 4800 WHEXDAO tokens to the stockpile address and proposing a question to Peter Wake, who will then set up the voting addresses.
                        </span>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
                            {">>"}  WHEXDAO tokens are sent out from the Stockpile to holders of WHEXy Whales at a rate of 1 WHEXDAO per 1 WHEXy Whale.
                        </span>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
                            {">>"} Peter Wake will then publish a question in discord, Twitter and telegram and provide directions on what address to send WHEXDAO tokens to for each option.
                        </span>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
                            {">>"} The voting period will end 42 hours after the vote goes live. All WHEXDAO tokens held by the vote option. addresses will be sent back to the stockpile.
                        </span>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
                            {">>"} The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total WHEXDAO used to vote).
                        </span>
                        <span className="text-[12px] font-mono font-semibold text-gray-400">
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
                              <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to hide</button>
                            ) : (
                                <button className="bg-teal-800 mt-8 font-light text-white rounded-lg font-mono text-[11px] px-6 py-4">Click to expand</button>
                            )}
                        </div>
        </motion.div>
    </motion.div>       
     </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1,
          }}
         className="community mt-[15vh] mb-[5vh]"
         id="community"
         >
        <span className="text-white text-[30px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold">Community</span>
        <span className="text-gray-400 text-[15px] px-6 lg:px-0 lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Connect with the fast growing whexcosystem, Join the community in saving the whales</span>
          <div className="flex items-center justify-center space-x-10">
          <div className="flex flex-row justify-center">
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
        </motion.div>

        <Footer />
    </div>
    </>
  )
}

export default Home

   
