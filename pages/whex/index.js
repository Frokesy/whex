import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    ModalFooter
  } from '@chakra-ui/react'
  import Link from 'next/link'
import Meta from '../defaults/Meta'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
      <div className="bg-black h-full">
          <Meta title="WHEXcosystem || Home Page" />
                 <div className="justify-between flex">
        <div className="flex justify-start">
       <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
          <span className="text-5xl text-sky-200 mx-6">=</span>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
        bg='gray.800'
        color='white'
        >
          <DrawerCloseButton />
          <DrawerBody>
            <Link href="/">
              <div className="mt-[10vh] text-sky-200 cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/whexywhales">
              <div className="pt-[2vh] text-sky-200 cursor-pointer">
                WHEXywhales
              </div>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      
      </div>
      <div className="flex justify-center mx-10">
        <a href="https://twitter.com/whaleexploder">
        <img src="/twitter.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a href="https://t.me/WhaleExploderChat">
        <img src="/telegram.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a 
        href="https://www.reddit.com/r/WHEX/">
          <img src="/reddit.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/bscscan.png" alt="" className="bg-white w-[1.25rem] h-[1.25rem] rounded-full my-4 mx-5" /></a>
        <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/pcs.png" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" /></a>
        </div>
    </div>
      <div className="w-90 mx-auto text-center flex flex-row content-center justify-center pt-[5vh]">
      <img src="/whale-exploder.png" alt="logo" className='h-[5rem] w-[5rem]'/>
      <h2 className="text-[20px] mt-4 font-bold font-mono text-white">WHEX</h2>
      </div>



      <div className="hidden xl:block bg-black h-auto mt-10 xl:mb-0">
        <div className="flex flex-row overflow-x-auto">
        </div>

        <div className="items-center">
            <center className=" xl:text-5xl xl:-mt-4 font-semibold mt-10 text-3xl  text-sky-200 font-mono">BURN / CHARITY SALE COUNTDOWN</center>
            <div className="flex flex-row justify-center">
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">00</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Days</center>
                </div>
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">00</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Hours</center>
                </div>
                <div className="flex flex-col mt-10 xl:mx-14 mx-6">
                    <center className="text-white xl:text-2xl text-lg">00</center>
                    <center className="xl:text-2xl text-lg  text-sky-200 mt-4">Minutes</center>
                </div>
            </div>
            <center className="text-white xl:text-4xl text-2xl mt-10">86% Circulating / 13.2% Burned</center>
        </div>

        <div className="flex flex-row xl:mt-10">

            <div className=" rounded-lg xl:w-1/4 xl:h-auto xl:mx-4 mt-4 text-white mb-10 mr-3 w-[80vw] p-10 h-auto">
                <center className="font-bold text-sky-200 mb-8 mt-[10px] xl:text-2xl text-md">TOKENOMICS</center>
                <u><center className="xl:text-lg text-[10px]">5% sent to a whale charity wallet</center></u>
                <center className="xl:text-sm text-[10px] px-2">(42% burned, 58% sold, donated biweekly (capped at 4.2% LP))</center>
                <center className="xl:my-10 xl:text-lg text-[10px]"><u>5% distribution to holders</u></center>
                <center className="xl:mb-8 xl:text-lg text-[10px]"><u>5% Automatic liquidity pool on Pancakeswap</u></center>
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
                    <u className="text-white"><center className="text-white my-6">5% sent to a whale charity wallet</center></u>
                    <center className="text-white my-6">(42% burned, 58% sold, donated biweekly (capped at 4.2% LP))</center>
                    <center className="text-white my-6"><u>5% distribution to holders</u></center>
                    <center className="text-white mb-6"><u>5% Automatic liquidity pool on Pancakeswap</u></center>
                </div>
            </div>


            <div className="bg-black w-[90vw] rounded-lg mb-3" id="swhex">
                <div className="flex flex-col justify-center items-center mt-4">
                    <div className="items-center">
                        <center className=" text-sky-200 mt-8">BURN / CHARITY SALE COUNTDOWN</center>
                        <div className="flex flex-row justify-center">
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">00</center>
                                <center className="  text-sky-200 mt-2">Days</center>
                            </div>
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">00</center>
                                <center className="  text-sky-200 mt-2">Hours</center>
                            </div>
                            <div className="flex flex-col mt-6 mx-4">
                                <center className="text-white">00</center>
                                <center className="  text-sky-200 mt-2">Minutes</center>
                            </div>
                        </div>
                        <center className="text-white mt-14 mb-6">86% Circulating / 13.2% Burned</center>
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
    <div className="footer pt-10 bg-black w-full">
        <div className="flex flex-row justify-center">
        <a href="https://twitter.com/whaleexploder">
        <img src="/twitter.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a href="https://t.me/WhaleExploderChat">
        <img src="/telegram.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a 
        href="https://www.reddit.com/r/WHEX/">
          <img src="/reddit.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
        </a>
        <a href="https://bscscan.com/token/0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/bscscan.png" alt="" className="bg-white w-[1.25rem] h-[1.25rem] rounded-full my-4 mx-5" /></a>
        <a href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x31e79A378fb85D8c4d51489E5c90ecAF9c17935A"><img src="/pcs.png" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" /></a>
        </div>
        <center className="text-sky-200 mt-4 text-center">&copy; Whexcosystem 2022</center>
    </div> 
       </div>
      
  )
}

export default Index
