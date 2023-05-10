import React, { useEffect, useState, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";



const Whex = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="">
            <div
            data-aos="fade-in" 
            data-aos-duration="2000"
            className="flex flex-row space-x-4 justify-start items-center">
                <img src="/whale-exploder.png" alt="whex-logo" className="rounded-full lg:w-[6rem] md:w-[3rem] w-[4rem]" />
                <div>
                    <span className="lg:text-[30px] text-[20px] font-bold text-white">Whale Exploder (WHEX)</span>
                    <span className="flex justify-start text-neutral-400 lg:text-[14px] text-[12px] font-normal">64.3% in circulation, 35.7% burned, 19.58 BNB locked</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-10 gap-6">
            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col space-y-3 lg:mx-6 text-neutral-400">
                <h2 className="text-gray-100 text-[16px] font-bold">How to add {" "}<span className="text-blue-400 italic font-bold">$whex </span> to your wallet?</h2>
                <span className="text-neutral-400 text-[14px] font-normal">You need to add the token manually on MetaMask or Trust Wallet in order to view token.</span>
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
            <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
                <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col space-y-3">
                    <h2 className="flex text-white text-[18px] font-mono font-bold">Tokenomics</h2>
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
                <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
                <div className="flex flex-col space-y-3" data-aos="fade-up" data-aos-duration="3000">
                    <h2 className="flex text-gray-100 text-[18px] font-mono font-bold">Locked Liquidity</h2>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"} 15.1 BNB of LP Locked for 5 years. Pancake LPs for Whale Exploder: 0xac3843ed09a264f26f2668a7c57b3191ad10a6f7
                    </span>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"} 1 BNB of initial Liquidity was created and locked on June 29, 2021 for 5 years. This was done on dxsale.app, These can be seen on BSC Scan here: 0xeb3a9c56d963b971d320f889be2fb8b59853e449
                    </span>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"} Automatic LP (13% of each transaction): 0x07d80ae6f36a5e08dca74ce884a24d39db9934ed.LP from IDO will be locked in dxsale.app for 5 years. Additional LP has been sent to this initial contract since the first 1 BNB and is locked.
                    </span>
                </div>
            </div>
            <hr className="mt-[15vh]" />
        </div>
  )
}

export default Whex
