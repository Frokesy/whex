import React, { useEffect, useState, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


const WhexyWhales = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    const WEED = <span className="text-blue-400">$WEED</span>
  return (
    <div className="pt-[10vh] overflow-x-hidden" id="whexy">
            <div 
            data-aos="fade-in" 
            data-aos-duration="2000"
            className="flex flex-row space-x-4 justify-start items-center">
                <img src="/whexy.png" alt="whexy-logo" className="rounded-full lg:w-[6rem] md:w-[4rem] w-[4rem]" />
                <div>
                    <span className="lg:text-[32px] text-[20px] font-extrabold text-white">WHEXy whales (NFT)</span>
                    <span className="flex justify-start lg:text-center text-neutral-400 lg:text-[13px] text-[12px] font-normal">WHEXy Whales is an NFT project consisting of 4800 unique Whales with different traits like hats, glasses, shirts, backgrounds, etc</span>
                </div>
            </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 lg:mx-6">
            <div 
            data-aos="fade-up-right" 
            data-aos-duration="2000"
            className="flex flex-col lg:mx-4 space-y-3 text-neutral-400">
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
                    {">>"} 25% buys WHEX for {WEED} staking pools.
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} 25% to marketing and administrative costs 
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} 25% founder pay 
                </span>
                <span className="text-[14px] font-semibold">
                     {">>"} Transacted after each 100 mints, or for royalties, each $1000 accumulated 
                </span>

            </div>
            <div className="border-b border-neutral-600 w-full lg:hidden my-10"></div>

                <div
                data-aos="fade-up-left" 
                data-aos-duration="2000" 
                className="flex flex-col mx-2 space-y-3 text-neutral-400">
                    <span className="text-[18px] text-white font-mono font-bold  ">
                        Why mint a WHEXy whale today?
                    </span>
                    <span className="text-[14px] font-semibold  ">
                        {"1."} Help real life whales
                    </span>
                    <span className="text-[14px] font-semibold  ">
                        {"2."} get airdropped WHEXcosystem DAO - {WEED} tokens and participate in determining the future of the project
                    </span>
                    <span className="text-[14px] font-semibold  ">
                        {"3."} Access to getting a custom ENS subdomain of WHEXy.eth
                    </span>
                    <span className="text-[14px] font-semibold  ">
                        {"4."} Access to an exclusive 
                        <a href="https://discord.gg/ZDEZ2Kw5ZR" 
                        target="_blank" rel="noreferrer" className="text-blue-400 font-semibold">
                            {" "} Discord {" "}
                        </a>  
                            and
                        <a href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxODE0NDA1MzMz" 
                        target="_blank" rel="noreferrer" className="text-blue-400 font-semibold">
                            {" "} Telegram {" "}
                        </a> 
                            chats
                    </span>
                    <span className="text-[14px] font-semibold  ">
                        {"5."}  Use WHEXy whale in your company or merch store or partner with WHEXcosystem Inc. and split the profits.
                    </span>
                </div>
        </div>
        <hr className="mt-[15vh]" />
    </div>
  )
}

export default WhexyWhales
