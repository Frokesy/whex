import React, { useEffect, useState, useRef } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Whexdao = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className="mt-[10vh] overflow-x-hidden" id="whexdao">
    <div 
    data-aos="fade-in" 
    data-aos-duration="2000"
    className="flex flex-row space-x-4 justify-start items-center">
        <img src="/weed.png" alt="whexdao-logo" className="rounded-full lg:w-[6rem] md:w-[4rem] w-[4rem]" />
        <div>
            <span className="lg:text-[32px] text-[18px] font-mono font-bold text-white">WHEXcosystem Exploder Ecosystem Daov2</span>
            <span className="flex justify-start text-neutral-400 lg:text-[14px] text-[12px] mt-2">The WHEXcosystem DAO ($WEED) token is used to make decisions on the future of the WHEXcosystem via blockchain vote. </span>
            <span className="text-[14px] text-neutral-400 hidden lg:block">
                Staking rewards for $WEED are generated from 25% of the mint proceeds and royalties of the WHEXy Whales:
                <a href="https://app.niftykit.com/collections/drops/whexy" 
                target="_blank" rel="noreferrer" 
                className="text-blue-400 underline text-[14px]">
                    {" "} https://app.niftykit.com/collections/drops/whexy
                </a>       
            </span>
        </div>
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:mt-20 mt-10 gap-10">
            <div 
            data-aos="fade-right" 
            data-aos-duration="2000"
            className="flex flex-col lg:mx-6 space-y-3 text-neutral-400">
                <span className="text-[14px] font-semibold text-neutral-400 lg:hidden">
                    {">>"} Staking rewards for $WEED are generated from 25% of the mint proceeds and royalties of the WHEXy Whales:
                    <a href="https://app.niftykit.com/collections/drops/whexy" 
                    target="_blank" rel="noreferrer" 
                    className="text-blue-400 underline text-[14px]">
                        {" "} https://app.niftykit.com/collections/drops/whexy
                    </a>       
                </span>
                <span className="text-[14px] font-mono font-semibold">
                    {">>"} Pancake Swap: {" "}
                        <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5" 
                        target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                           Click here
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
                <span className="text-[14px] font-semibold">
                    {">>"} Initial Supply: 1,000,000 <span className="text-blue-400">WEED</span>
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
                    {">>"} Staking Rewards on Safeswap: 50,000. {" "}
                    <a href="https://www.safeswap.online/safeearn/weed" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                        Click here for more
                    </a>
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop to WHEX holders (snapshot May 8, 12:00 AM EST): 232,725 <span className="text-blue-400">WEED</span>
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} Airdrop for minting WHEXy whales 2001-4800 (41.665 each): 116,662
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} DEXs (WEED/USDT): 100,000 {" "}
                    <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x64235611f7D0BfCbBd079e0Ff1824466e697dCf5" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                        Click here for more
                    </a>
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} WEED Reserve: 12,079 0x188f92ACD1A82b54ce713cAFa8e8217c1089230c
                </span>
                <span className="text-[14px] font-semibold">
                    {">>"} 1 BNB for 20,000 WEED 350,000 available:
                    <a href="https://dappbuilder.org/bsc/tokensaletimerefadm/tokensale.html?id=0x7CfDE1ea2ef17BDB652e3cA889C5e2AA4E18424d&net=56" target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                    Click here for more
                    </a>
                </span>
            </div>
            <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
            <div
            data-aos="fade-up" 
            data-aos-duration="3000"
            className="flex flex-col space-y-3">
                    <h2 className="flex text-white text-[18px] font-mono font-bold">Tokenomics</h2>
                    <span className="text-[14px] text-neutral-400 font-semibold  ">
                        {">>"} 1% of each transaction is burned
                    </span>
                    <span className="text-[14px] text-neutral-400 font-semibold  ">
                        {">>"} 2% of each transaction goes to DAO Treasury wallet: 0x188f92acd1a82b54ce713cafa8e8217c1089230c
                    </span>
                    <span className="text-[14px] text-neutral-400 font-semibold  ">
                        {">>"} It was relaunched April 1, 2023 to add tokenomics and resolve some issues with the liquidity pool being botted. An airdrop was done at a rate of 1 $WEED per 1000 $WHEXDAO.
                    </span>
                    <span className="text-[14px] text-neutral-400 font-semibold  ">
                        {">>"} Originally it was on this contract address: 0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2
                    </span>
            </div>
            <div className="border-b border-neutral-600 w-full my-6 lg:hidden"></div>
            <div 
            data-aos="fade-left" 
            data-aos-duration="2000"
            className="flex flex-col space-y-6 text-neutral-400">
                    <h2 className="flex text-white text-[18px] font-mono font-bold">Voting Mechanism</h2>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"} Holders can vote without having to send tokens to addresses using a dapp. This will allow holders to participate in the future of the WHEXcosystem without the need to give up voting power. This is hosted at: 
                        <a href="https://snapshot.org/#/whexy.eth" target="_blank" rel="noreferrer" className="text-blue-400 underline font-light">
                            https://snapshot.org/#/whexy.eth
                        </a>
                    </span>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"} The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total <span className="text-blue-400 font-semibold">$WEED</span> used to vote).
                    </span>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {">>"}  Voting on the <span className="text-blue-400 font-semibold">$WEED</span> tokenomics, what to do with the <span className="text-blue-400 font-semibold">$WEED</span> built up in DAO Treasury and <span className="text-blue-400 font-semibold">$WHEX</span> in the charity/burn wallet are allowed.
                    </span>
                    <span className="text-[14px] font-semibold text-neutral-400">
                        {"Note"} As CEO, Peter Wake retains the right to veto any decision, or decide not to run a vote on a question presented by the community. I.E. you cannot use the DAO to perform a hostile takeover of the WHEX contract, decide to perform illegal acts, etc.
                    </span>        
            </div>

    </div>
    <hr className="mt-[15vh]" />

</div>
  )
}

export default Whexdao
