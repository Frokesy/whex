import React, { useEffect, useState, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Meta from './defaults/Meta'
import EmberScript from './EmberScript'
import Whex from '../components/Whex'
import WhexyWhales from '../components/WhexyWhales'
import Whexdao from '../components/Whexdao'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'
import WhexETH from '../components/WhexETH'



const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <Meta title="WHEXcosystem || Home Page" />
    <div className="bg-neutral-800 h-full">
        <Header />
        <Head>
          <script async type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script><div id="coinmarketcap-widget-marquee" coins="24951,1,1027,3890,1839,74,5994,24478,4909,5426,2010,52,4030" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>        
        </Head>
        <div id="home" className="bg-[url('/whale.gif')] bg-center bg-cover bg-no-repeat h-[80vh] lg:h-screen items-center justify-center">
        <div
        className="lg:pt-[40vh] pt-[30vh] lg:w-[95vw] text-white text-[25px] w-[80vw] mx-auto lg:text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>Saving the <span className="text-blue-400">whales</span>,</h2>
            <span>one <span className="text-blue-400">transaction</span> at a time</span>
        </div>
    </div>

    <div 
    data-aos="fade-up" 
    data-aos-duration="2000"
    className="tokens pt-[12vh]" id="tokens">
        <div>
          <span className="text-white text-[34px] lg:text-[40px] text-center flex justify-center items-center font-semibold" >Tokens</span>
          <span className="text-gray-400 text-[15px] lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Find out about the tokens in the whexcosystem</span>
        </div>

        <div className="flex flex-col lg:w-[95vw] w-[90vw] mx-auto">
            <Whex />
            <WhexETH />
            <WhexyWhales />
            <EmberScript />
            <Whexdao />
        </div>       
     </div>

        <div className="community mt-[15vh] mb-[5vh]" id="community">
        <span data-aos="fade-in" data-aos-duration="2000" className="text-white text-[30px] lg:text-[40px] font-mono text-center flex justify-center items-center font-semibold">Community</span>
        <span data-aos="fade-in" data-aos-duration="2000" className="text-gray-400 text-[15px] px-6 lg:px-0 lg:text-[20px] font-[serif] flex items-center text-center justify-center mb-[5vh]">Connect with the fast growing whexcosystem, Join the community in saving the whales</span>
        <div className="flex items-center justify-center space-x-10">
          <div className="flex flex-row justify-center">
            <a href="https://twitter.com/whaleexploder" target="_blank" rel="noreferrer">
              <img src="/twitter.svg" alt="twitter" data-aos="fade-up-right" data-aos-duration="2000" className="w-[2rem] h-[2rem] my-4 mx-5" />
            </a>
            <a href="https://t.me/WHEXcosystem" target="_blank" rel="noreferrer">
              <img src="/telegram.svg" alt="telegram" data-aos="fade-up" data-aos-duration="2000" className="w-[2rem] h-[2rem] my-4 mx-5" />
            </a>
            <a href="https://www.reddit.com/r/WHEX/" target="_blank" rel="noreferrer">
              <img src="/reddit.svg" alt="reddit" data-aos="fade-down" data-aos-duration="2000" className="w-[2rem] h-[2rem] my-4 mx-5" />
            </a>
            <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A" target="_blank" rel="noreferrer">
              <img src="/bscscan.png" alt="bscscan" data-aos="fade-up-left" data-aos-duration="2000" className="bg-white w-[2rem] h-[2rem] rounded-full my-4 mx-5" />
            </a>
            <a href="https://pancakeswap.finance/swap?outputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A" target="_blank" rel="noreferrer">
              <img src="/pcs.png" alt="pcs" data-aos="fade-left" data-aos-duration="2000" className="w-[2rem] h-[2rem] my-4 mx-5" />
            </a>
            <a href="https://coinmarketcap.com/currencies/whale-exploder/" target="_blank" rel="noreferrer">
              <img src="/cmc.svg" alt="cmc" data-aos="fade-up-right" data-aos-duration="2000" className="w-[4rem] h-[2rem] my-4 mx-5" />
            </a>
        </div>
          </div>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Home

   
