import React, { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Meta from './defaults/Meta'
import EmberScript from './EmberScript'
import Whex from '../components/Whex'
import WhexyWhales from '../components/WhexyWhales'
import Whexdao from '../components/Whexdao'


const Home = () => {
  
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
    <div className="bg-neutral-800 h-full">
        <Header />
        <div id="home" className="bg-[url('/whale.gif')] bg-center bg-cover bg-no-repeat h-[80vh] lg:h-screen items-center justify-center">
        <motion.div
        className="lg:pt-[40vh] pt-[30vh] lg:w-[95vw] text-white text-[25px] w-[80vw] mx-auto lg:text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>Saving the <span className="text-blue-400">whales</span>,</h2>
            <span>one <span className="text-blue-400">transaction</span> at a time</span>
        </motion.div>
    </div>

    <motion.div className="tokens pt-[5vh]" id="tokens">

    <motion.div animate={animation} ref={ref}>
    <span className="text-white text-[34px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold" >Tokens</span>
     <span className="text-gray-400 text-[15px] lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Find out about the tokens in the whexcosystem</span>
    </motion.div>


    <motion.div
       animate={animation} ref={ref} 
       className="grid lg:grid-cols-3 grid-cols-1 w-[95vw] space-y-10 lg:space-y-0 lg:space-x-10 mx-auto justify-between"
       id="whex"
       >
        <Whex />
        <WhexyWhales />
        <EmberScript />
        <Whexdao />
     
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

   
