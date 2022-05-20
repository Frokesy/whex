import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div className="bg-black h-full w-screen">
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
            <Link href="/whex">
                <div className="mt-[10vh] text-sky-200 cursor-pointer">
                  WHEX
                </div>
              </Link>
              <Link href="/whexywhales">
                <div className="pt-[2vh] text-sky-200 cursor-pointer">
                  WHEXy Whales
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
        <img src="/logo.jpg" alt="logo" className='h-[5rem] w-[5rem]'/>
        <h2 className="text-[20px] mt-4 font-bold font-mono text-white">WHEXcosystem</h2>
        </div>
  
        <div className="px-4 py-6 text-sm mx-auto lg:w-[80vw] lg:mx-auto flex flex-col text-white ">
          <span className="font-bold text-[14px] lg:text-[18px] font-mono">Hello WHEXcosystem Community, </span>
             <p className="font-light mx-4 mt-4 font-sans lg:text-[14px] leading-loose"> The closing out of the 5 other WHEXcosystem tokens is almost complete. Thank you for your patience and understanding during this transition period. Overall everyone has been great, and it didn’t trigger a sell off of WHEX tokens, which is wonderful as I am committed to growing the WHEXcosystem for the long term.</p>
             <div>
        <div className="extra-content px-4 leading-loose text-[14px]">
        <span>On May 9, these WHEXcosystem tokens were shutdown:</span>
         <span className="mx-4 my-4 font-light text-sky-200 flex flex-col">
           <span>Seal Exploder (SLEX)</span>
           <span>Cod Exploder (CDEX)</span>
           <span>Anchovy Exploder (ANEX)</span>
           <span>Krill Exploder (KREX)</span>
           <span>Cryptophyte (CRYPTO)</span>
         </span>
        This was done by turning the tax up to 100% on each of them, and turning on tokenomics for the tide pools. <br />
  
       <span className="text-sky-200 font-bold">As of May 11,</span>  all 1271 unique holders have been airdropped Smart DeFi WHEX in proportion to how much of the discontinued tokens they held. 
  
      <p className="my-2 font-mono font-semibold"> Contract address:
        0x0D140f495Ffb306bc817fD874C62a1B20284AfbB</p>
  
        <p className="my-2">
        In total over 4,500,000,000,000,000,000 Smart DeFi WHEX was airdropped. This is approximately 17% of the circulating supply of that token.
          </p> 
  
        In addition the top holders of these tokens will be sent WHEXy Whales.
  
        Any holders of monthly payout NFTs for these 5 discontinued tokens have been airdropped WHEXy Whales or WHEX as well. 
        <a href="https://opensea.io/collection/whexy-whales" className='text-sky-200'>https://opensea.io/collection/whexy-whales</a>
  
        <br />
  
        Holders in rocketbot will be able to swap in for WHEX until the 5 tokens aren’t supported anymore which will be after June 30, 2022.
  
        When the liquidity unlocks on FEGex in September 2022 it will be put into the liquidity for WHEX. In the fall of 2026 when the liquidity for the tide pools and pancake swap liquidity unlocks, the remaining tokens will be burned and the BNB used to add liquidity to WHEX on pancake swap. The remaining WHEX in that WHEX/SLEX or KREX/WHEX pool by then will be distributed to WHEXy Whale holders. 
  
        Thanks again for your patience and cooperation,
        <h2 className="float-right font-[11px] my-3 font-bold text-sky-200">~ Peter Wake</h2>
        </div>
    </div>
      </div>
  
  
          <div className="flex flex-row w-[80vw] mx-auto md:w-[40vw] md:mx-auto space-x-4 lg:w-[30vw] lg:mx-auto">
        <img src="/whale-exploder.png" alt="logo" className='h-[6rem] md:w-[10rem] md:h-[10rem] w-[6rem] lg:h-[12rem] lg:w-[12rem]'/>
        <img src="/whexy.png" alt="logo" className='h-[6rem] w-[6rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem]'/>
        <img src="/smart-defi.png" alt="logo" className='h-[6rem] w-[6rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem]'/>
        </div>
  
      <div className="hidden lg:block bg-zinc-900 text-white items-center text-center w-full mx-auto p-6 rounded-lg mt-4">
          <h2 className="text-2xl font-bold lg:mb-10 mb-5 text-sky-200">Smart DeFi - Whale Exploder Fork</h2>
          <div className="flex flex-row justify-evenly lg:mt-8">
              <div className="">
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Initial burn tokens:
                      <br /> <span className="text-sm text-white font-normal">972,162,670,634,882,000,001 Smart DeFi WHEX</span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Initial Ciriculating Supply:
                      <br /> <span className="text-sm text-white font-normal">26,519,304,665,949,999,999 Smart DeFi WHEX</span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Contract Address:
                      <br /> <span className="text-sm text-white font-normal">0x0D140f495Ffb306bc817fD874C62a1B20284AfbB</span>
                  </h2>
              </div>
  
              <div>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">All transactions:
                      <br /> <span className="text-sm text-white font-normal">Reflections: 12%</span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Sell only:
                      <br /> <span className="text-sm text-white font-normal">Smart Rising Price Floor: 1.5% 
                         <br /> Asset-Backing: 1.5%</span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Starting liquidity:
                      <br /> <span className="text-sm text-white font-normal">440,000,000,000,000,000
                      <br /> 0.67518 fBNB</span>
                  </h2>
              </div>
  
              <div className="">
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Timeline 2022</h2>
                  <h2>March 8 - Created by migrating some of the original WHEX tokens.</h2>
                  <h2>March 26 - April 2: Whitelist access to presale </h2>
                  <h2>April 3-20: Presale</h2>
                  <h2>April 20 - initial liquidity added</h2>
              </div>
  
              <div className="">
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Trade on FEGex:
                      <br /> <span className="text-sm text-white font-normal"><a href="https://fegex.com/trade/bsc/0x0D140f495Ffb306bc817fD874C62a1B20284AfbB">https://fegex.com/trade/bsc/0x0D140f495Ffb306bc817fD874C62a1B20284AfbB</a></span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Website:
                      <br /> <span className="text-sm text-white font-normal"><a href="https://whexcosystem.com">https://whexcosystem.com</a></span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Telegram:
                      <br />
                      <span className="text-sm text-white font-normal">
                      <a href="https://t.me/WhaleExploderChat">https://t.me/WhaleExploderChat</a></span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">BSC scan:
                      <br />
                      <span className="text-sm text-white font-normal">
                      <a href="https://bscscan.com/address/0x0D140f495Ffb306bc817fD874C62a1B20284Afb">https://bscscan.com/address/0x0D140f495Ffb306bc817fD874C62a1B20284Afb</a></span>
                  </h2>
                  <h2 className="text-lg font-bold text-sky-200 mb-5">Twitter:
                      <br />
                      <span className="text-sm text-white font-normal">
                      <a href="https://twitter.com/whaleexploder">https://twitter.com/whaleexploder</a></span>
                  </h2>
              </div>
          </div>
  
          <center>
              <h2 className="text-md mt-4 font-bold text-sky-200 mb-2">Address with tokens set aside to generate passive income from reflections for Whale Exploder token:</h2>
              <p>0x5bF030D02a9deDcCd63F14e2B98c21605E158993</p>
          </center>
      </div>
  
  
      {/* Smart DeFi Mobile */}
  
      <div className="lg:hidden bg-black text-white items-center text-center w-full mx-auto p-6 rounded-lg mt-4">
          <h2 className="text-xl font-semibold mb-5">Smart DeFi - Whale Exploder Fork</h2>
          <div className="flex flex-col">
              <div className="mt-4">
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Initial burn tokens:
                      <br /> <span className="text-xs text-white font-normal">972,162,670,634,882,000,001 Smart DeFi WHEX</span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Initial Ciriculating Supply:
                      <br /> <span className="text-xs text-white font-normal">26,519,304,665,949,999,999 Smart DeFi WHEX</span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Contract Address:
                      <br /> <span className="text-xs text-white font-normal">0x0D140f495Ffb306bc817fD874C62a1B20284AfbB</span>
                  </h2>
              </div>
  
              <div className="mt-8">
                  <h2 className="text-sm font-bold text-sky-200 mb-5">All transactions:
                      <br /> <span className="text-xs text-white font-normal">Reflections: 12%</span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Sell only:
                      <br /> <span className="text-xs text-white font-normal">Smart Rising Price Floor: 1.5% 
                         <br /> Asset-Backing: 1.5%</span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Starting liquidity:
                      <br /> <span className="text-xs text-white font-normal">440,000,000,000,000,000
                      <br /> 0.67518 fBNB</span>
                  </h2>
              </div>
  
              <div className="mt-8">
                  <h2 className="text-sm font-bold text-sky-200">Timeline 2022</h2>
                  <h2 className="text-xs">March 8 - Created by migrating some of the original WHEX tokens.</h2>
                  <h2 className="text-xs">March 26 - April 2: Whitelist access to presale </h2>
                  <h2 className="text-xs">April 3-20: Presale</h2>
                  <h2 className="text-xs">April 20 - initial liquidity added</h2>
              </div>
  
              <div className="mt-14 w-full mx-auto">
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Trade on FEGex:
                      <br /> <span className="text-xs w-full mx-auto text-white font-normal"><a href="https://fegex.com/trade/bsc/0x0D140f495Ffb306bc817fD874C62a1B20284AfbB">https://fegex.com/trade/bsc/0x0D140f495Ffb306bc
                         <br /> 817fD874C62a1B20284AfbB</a></span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Website:
                      <br />
                      <center className="text-xs text-white font-normal"><a href="https://whexcosystem.com">https://whexcosystem.com</a></center>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Telegram:
                      <br />
                      <span className="text-xs text-white font-normal">
                      <a href="https://t.me/WhaleExploderChat">https://t.me/WhaleExploderChat</a></span>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">BSC scan:
                      <br />
                      <center className="text-xs w-full mx-auto text-white font-normal px-3">
                          <a href="https://bscscan.com/address/0x0D140f495Ffb306bc817fD874C62a1B20284Afb">https://bscscan.com/address/0x0D140f495Ffb306bc81
                             <br /> 7fD874C62a1B20284Afb</a></center>
                  </h2>
                  <h2 className="text-sm font-bold text-sky-200 mb-5">Twitter:
                      <br />
                      <span className="text-xs text-white font-normal">
                      <a href="https://twitter.com/whaleexploder">https://twitter.com/whaleexploder</a></span>
                  </h2>
              </div>
          </div>
  
          <center>
              <h2 className="text-sm mt-4 font-bold text-sky-200 mb-2">Address with tokens set aside to generate passive income from reflections for Whale Exploder token:</h2>
              <p className="text-xs">0x5bF030D02a9deDcCd63F14e2B98c21605E158993</p>
          </center>
      </div>
  
      <div className="hidden xl:block bg-block xl:mt-6" id="docs">
          <center className="text-sky-200 text-3xl p-4">Documentation</center>
          <div className="flex xl:flex-row flex-col items-center justify-center mt-10">
              <a href="/pdf/whitepaper.pdf">
                  <div className="flex flex-col mx-10 items-center justify-center">
                  <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>
                      <h1 className="text-white text-lg mt-3 mb-6">Whale Exploder White Paper</h1>
                  </div>
              </a>
  
              <a href="/pdf/Whex_audit_Aleksandr_Pletnev_July-29-2021.pdf">
                  <div className="flex flex-col mx-10 items-center justify-center">
                  <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>
                      <h1 className="text-white text-lg mt-3 mb-6">Whale Exploder Audit</h1>
                  </div>
              </a>
  
              <a href="/pdf/WHEXCOSYSTEM ROADMAP.pdf">
                  <div className="flex flex-col mx-10 items-center justify-center">
                  <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>
                      <h1 className="text-white text-lg mt-3 mb-6">Whale Exploder Road Map</h1>
                  </div>
              </a>
          </div>
      </div>
  
  
      <div className="lg:hidden">
      <center>
                  <div className="bg-black rounded-lg w-[90vw] mt-6" id="sdocs">
                      <center className="text-sky-200 text-3xl p-4">Documentation</center>
                      <div className="flex flex-col items-center justify-center mt-10">
                          <a href="pdf/whitepaper.pdf">
                              <div className="flex flex-col items-center justify-center mb-6">
                    <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>                              <center className="text-white mt-3">Whale Exploder White Paper</center>
                              </div>
                          </a>
  
                          <a href="pdf/Whex_audit_Aleksandr_Pletnev_July-29-2021.pdf">
                              <div className="flex flex-col items-center justify-center mb-6">
                  <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>                                <center className="text-white mt-3">Whale Exploder Audit</center>
                              </div>
                          </a>
  
                          <a href="pdf/WHEXCOSYSTEM ROADMAP.pdf">
                              <div className="flex flex-col items-center justify-center mb-6">
                  <img src="/file.svg" alt="logo" className='h-[2rem] w-[2rem]'/>                                <center className="text-white justify-center mt-3">Whale Exploder Road Map</center>
                              </div>
                          </a>
                      </div>
                  </div>
              </center>
      </div>
  
      <div className="flex flex-col justify-center bg-black items-center py-6">
                      <div className="flex flex-col justify-center items-center w-1/2">
                          <img src="/peter_wake.jpg" alt="" className="rounded-full h-1/2 w-1/2 lg:h-[15rem] lg:w-[15rem]" />
                          <h1 className="text-amber-400 mb-4 font-bold text-2xl">Peter Wake</h1>
                          <center className="text-white">Founder and CEO</center>
                          <center> <a href="https://www.linkedin.com/in/peterdwake/" className="text-sky-400">https://www.linkedin.com/in/peterdwake/</a> </center>
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
   
