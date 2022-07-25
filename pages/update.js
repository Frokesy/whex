import React, { useEffect } from 'react'
import Token from '../components/Token'
import UpdateFooter from '../components/UpdateFooter'
import UpdateHeader from '../components/UpdateHeader'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

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

const Update = () => {
 
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })


  const animation = useAnimation()
  useEffect(() => {
    console.log("inView status:", inView);
    if (inView) {
      animation.start('visible');
      console.log("inView status:", inView);
    } else if (!inView) {
      animation.start('hidden');
      console.log("inView status:", inView);

    }
  }, [animation, inView]);

  return (
    <>
    <div className="bg-black h-full">
        <UpdateHeader />
        <div id="home" className="bg-[url('/whale__three.gif')] bg-center bg-cover bg-no-repeat h-[70vh] lg:h-screen items-center justify-center">
        <motion.div
        // variants={headerVariant}
        // initial="hidden"
        // animate="visible"
        className="lg:pt-[40vh] pt-[30vh] lg:w-[95vw] text-white text-[25px] w-[80vw] mx-auto lg:text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>Saving the <span className="text-teal-600">whales</span>,</h2>
            <span>one <span className="text-teal-600">transaction</span> at a time</span>
        </motion.div>
    </div>

    <div className="tokens pt-[10vh]" id="tokens" ref={ref}>
            <Token />
        </div>

    {/* <div className="roadmap flex items-center justify-center lg:w-[95vw] pt-[10vh]">
           <span className="text-white text-[20px] lg:text-[40px] font-mono font-semibold">Whexcosystem Roadmap - 2022</span>      
        </div>
        <div className="roadmap-cards grid grid-cols-1 lg:grid-cols-4 lg:space-y-0 space-y-10 lg:space-x-4 pt-[5vh] w-[90vw] lg:w-[95vw] mx-auto">
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-100">Q1</span>
              <div className="flex flex-col space-y-3 mt-10">
                <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
              </div>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-100">Q2</span>
              <div className="flex flex-col space-y-3 mt-10">
                <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
              </div>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-100">Q3</span>
              <div className="flex flex-col space-y-3 mt-10">
                <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
              </div>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-100">Q4</span>
              <div className="flex flex-col space-y-3 mt-10">
                <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
                  <span className="text-[15px] font-mono font-semibold text-gray-400">
                    {"<>"} Launch of the Whale Explorer
                  </span>
              </div>
            </div>
        </div> */}

        <div className="community mt-[15vh] mb-[5vh]">
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
        </div>

        <UpdateFooter />
    </div>
    </>
  )
}

export default Update
