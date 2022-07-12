import React, { useState, useEffect, useRef } from 'react'

import Meta from '../defaults/Meta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Index = () => {
    const [timerDays, settimerDays] = useState('00')
    const [timerHours, settimerHours] = useState('00')
    const [timerMinutes, settimerMinutes] = useState('00')
    const [timerSeconds, settimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        const countdownDate = new Date("July 16, 2022 16:20:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval)
                return;
            } else {
                settimerDays(days)
                settimerHours(hours)
                settimerMinutes(minutes)
                settimerSeconds(seconds)
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer()
        return () => clearInterval(interval)
    })

  return (
      <div className="bg-black h-full">
          <Meta title="WHEXcosystem || WHEX" />
          <Header link1="Home" link2="WHEXy Whales" link3="WHEXDAO" header="WHEX" headerurl="/whale-exploder.png" href1="/" href2="/whexywhales" href3="/whexdao" />
            
      <div className="hidden xl:block bg-black h-auto mt-10 xl:mb-0">
        <div className="flex flex-row overflow-x-auto">
        </div>

        <div className="items-center">
            <center className=" xl:text-5xl xl:-mt-4 font-semibold mt-10 text-3xl  text-sky-200 font-mono">BURN / CHARITY SALE COUNTDOWN</center>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">{timerDays}</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Days</center>
                </div>
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">{timerHours}</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Hours</center>
                </div>
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">{timerMinutes}</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Minutes</center>
                </div>
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">{timerSeconds}</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Seconds</center>
                </div>
            </div>
            <center className="text-white xl:text-4xl text-2xl mt-10">67.1% Circulating / 32.9% Burned / 20.08 BNB locked</center>
        </div>

        <div className="flex flex-row xl:mt-10">

            <div className=" rounded-lg xl:w-1/4 xl:h-auto xl:mx-4 mt-4 text-white mb-10 mr-3 w-[80vw] p-10 h-auto">
                <center className="font-bold text-sky-200 mb-8 xl:text-2xl text-md">TOKENOMICS</center>
                <u><center className="xl:text-lg text-[10px]">2% sent to a whale charity wallet</center></u>
                <center className="xl:text-sm text-[10px] px-2">(42% burned, 58% sold biweekly if over 20 BNB (capped at 4.2% LP))</center>
                <center className="xl:my-10 xl:text-lg text-[10px]"><u>2% reflections</u></center>
                <center className="xl:mb-8 xl:text-lg text-[10px]"><u>2% Automatic liquidity pool on Pancakeswap</u></center>
            </div>

            <div className="rounded-lg xl:w-1/4 w-[80vw] xl:mx-4 mx-0 mt-4 mb-10 xl:h-auto font-mono">
                <center className="font-bold xl:mb-8 xl:mt-[10px] xl:text-2xl text-md text-sky-200">How to Add WHEX to a Wallet</center>
                <center className="text-[10px] xl:text-md text-white">You need to add the token manually to MetaMask or Trust Wallet in order to see tokens. You can confirm balance using <a href="https://bscscan.com/">https://bscscan.com/</a></center>
                <ul className="mx-4 my-2 text-white">
                    <li className="xl:text-lg text-[10px]">Network: Binance Smart Chain</li>
                    <li className="xl:text-lg text-[10px]">Contract Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A</li>
                    <li className="xl:text-lg text-[10px]">Name: Whale Exploder</li>
                    <li className="xl:text-lg text-[10px]">Symbol: WHEX</li>
                    <li className="xl:text-lg text-[10px]">Decimals: 9</li>
                </ul>
            </div>
            <div className="rounded-lg xl:w-1/4 w-[80vw] xl:mx-4 mx-2 mb-10 mt-4 text-white">
                <center className="font-bold mb-3 xl:text-2xl text-md  text-sky-200">Initial Token Supply Distribution</center>
                <center>999,999,999,999,999,900,000</center>
                <img src="/pi-whex.png" alt="" className="w-full" />
            </div>
            <div className="rounded-lg xl:w-1/4 w-[80vw] xl:mx-4 mb-10 mx-2 xl:h-auto text-white">
                <center className="font-bold xl:mb-8 mb-5 xl:text-2xl text-md text-sky-200">Locked Liquidity</center>
                <center>
                    <h1 className="xl:text-lg text-md">15.1 BNB of LP Locked for 5 years</h1>
                    <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">Pancake LPs for Whale Exploder:</p>
                    <p className="xl:text-lg text-[10px]">0xac3843ed09a264f26f2668a7c57b3191ad10a6f7</p>
                    <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">1 BNB of initial Liquidity was created and locked on June 29, 2021 for 5 years.</p>
                    <p className="xl:text-lg text-[10px]">This was done on dxsale.app</p>
                    <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">These can be seen on BSC Scan here:</p>
                    <p className="xl:text-lg text-[10px]">0xeb3a9c56d963b971d320f889be2fb8b59853e449</p>
                    <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">Automatic LP (13% of each transaction)</p>
                    <p className="xl:text-lg text-[10px]">0x07d80ae6f36a5e08dca74ce884a24d39db9934ed</p>
                    <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">LP from IDO will be locked in dxsale.app for 5 years.</p>
                    <p className="xl:text-lg text-[10px] xl:mb-0">Additional LP has been sent to this initial contract since the first 1 BNB and is locked.</p>
                </center>
            </div>
        </div>
    </div>


    <div className="xl:hidden">
        <div className="flex flex-col mt-6 items-center justify-center">
        <div className="w-[90vw] mb-3">
                <div className="items-center justify-center">
                    <center className="text-white text-2xl items-center justify-center mt-4 mb-6">TOKENOMICS</center>
                    <u className="text-white"><center className="text-white my-6">2% sent to a whale charity wallet</center></u>
                    <center className="text-white my-6">(42% burned, 58% sold biweekly if over 20 BNB (capped at 4.2% LP))</center>
                    <center className="text-white my-6"><u>2% reflections</u></center>
                    <center className="text-white mb-6"><u>2% Automatic liquidity pool on Pancakeswap</u></center>
                </div>
            </div>

            <h2 className="text-[12px] text-white w-[80vw] mx-auto lg:w-[60vw] lg:text-[14px] lg:mx-auto mb-6">Join us live on our podcast at <a href="https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/" className="text-sky-200 underline underline-offset-1"> https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/ </a></h2>

            <div className="bg-black w-[90vw] rounded-lg mb-3" id="swhex">
                <div className="flex flex-col justify-center items-center mt-4">
                    <div className="items-center">
                        <center className=" text-sky-200 mt-8">BURN / CHARITY SALE COUNTDOWN</center>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">{timerDays}</center>
                                <center className="  text-sky-200 mt-2">Days</center>
                            </div>
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">{timerHours}</center>
                                <center className="  text-sky-200 mt-2">Hours</center>
                            </div>
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">{timerMinutes}</center>
                                <center className="  text-sky-200 mt-2">Minutes</center>
                            </div>
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">{timerSeconds}</center>
                                <center className="  text-sky-200 mt-2">Seconds</center>
                            </div>
                            
                        </div>
                        <center className="text-white mt-14 mb-6"> 67.1% Circulating / 32.9% Burned / 20.08 BNB locked</center>
                    </div>
                </div>
            </div>
            <div className=" w-[90vw] rounded-lg mb-3 text-white">
                <div className="items-center justify-center font-mono">
                    <center className="font-bold my-6 text-2xl">How to Add WHEX to a Wallet</center>
                    <center className="">You need to add the token manually to MetaMask or Trust Wallet in order to see tokens. You can confirm balance using <a href="https://bscscan.com/">https://bscscan.com/</a></center>
                    <ul className="mx-4 my-2">
                        <li className="">Network: Binance Smart Chain</li>
                        <li className="">Contract Address: 0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A</li>
                        <li className="">Name: Whale Exploder</li>
                        <li className="">Symbol: WHEX</li>
                        <li className="mb-6">Decimals: 9</li>
                    </ul>
                </div>
            </div>

            <div className="w-[90vw] rounded-lg mb-3 text-white">
                <div className="items-center justify-center">
                    <center className="font-bold mb-3 mt-2 text-md text-sky-200">Initial Token Supply Distribution</center>
                    <center>999,999,999,999,999,900,000</center>
                    <img src="/pi-whex.png" alt="" className="w-full mb-6" />
                </div>
            </div>

            <div className="w-[90vw] rounded-lg mb-3 text-white">
                <div className="items-center justify-center">
                    <center className="font-bold xl:mb-8 mb-5 mt-6 xl:text-2xl text-md  text-sky-200">Locked Liquidity</center>
                    <center>
                        <h1 className="xl:text-lg text-md">15.1 BNB of LP Locked for 5 years</h1>
                        <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">Pancake LPs for Whale Exploder:</p>
                        <p className="xl:text-lg text-[10px]">0xac3843ed09a264f26f2668a7c57b3191ad10a6f7</p>
                        <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">1 BNB of initial Liquidity was created and locked on June 29, 2021 for 5 years.</p>
                        <p className="xl:text-lg text-[10px]">This was done on dxsale.app</p>
                        <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">These can be seen on BSC Scan here:</p>
                        <p className="xl:text-lg text-[10px]">0xeb3a9c56d963b971d320f889be2fb8b59853e449</p>
                        <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">Automatic LP (13% of each transaction)</p>
                        <p className="xl:text-lg text-[10px]">0x07d80ae6f36a5e08dca74ce884a24d39db9934ed</p>
                        <p className="xl:mt-6 mt-4 xl:text-lg text-[10px]">LP from IDO will be locked in dxsale.app for 5 years.</p>
                        <p className="xl:text-lg text-[10px] mb-6">Additional LP has been sent to this initial contract since the first 1 BNB and is locked.</p>
                    </center>
                </div>
            </div>
        </div>
    </div>
    <Footer />
       </div>
      
  )
}

export default Index
