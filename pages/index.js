import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import Meta from './defaults/Meta'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Legacy from '../components//Legacy'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div className="bg-black h-full w-screen overflow-x-hidden">
          <Meta title="WHEXcosystem || Home Page" />
          <Header link1="WHEX" link2="WHEXy Whales" link3="WHEXDAO" header="WHEXcosystem" headerurl="/logo.jpg" href1="/whex" href2="/whexywhales" href3="/whexdao" />

        <div className="w-[80vw] mb-2 mt-6 lg:hidden lg:items-center lg:flex lg:items-center lg:justify-center mx-auto">
          <img src="/whex.jpg" alt="" className="lg:h-[80vh] lg:w-[40vw] rounded-lg" />
        </div>

        <div className="w-[80vw] mb-6 hidden lg:block lg:items-center lg:flex lg:items-center lg:justify-center mx-auto">
          <img src="/whex.jpg" alt="" className="lg:h-[80vh] lg:w-[40vw] rounded-lg" />
        </div>
        <div className="flex flex-col mb-6 mx-auto space-y-6 lg:w-[70vw] mx-auto lg:mb-10 lg:text-[14px] font-light text-[12px] text-white w-[90vw] mt-8 lg:mt-0">

        <span className="">The Whale Exploder Ecosystem (WHEXcosystem) consists of 1 DeFi token, a set of 4,800 NFTs and a DAO vote token. Our mission is to save the whales one transaction at a time.</span>

        <span className="">Whale Exploder ($WHEX) is the start of the Whale Exploder ecosystem. Created June 19, 2021, it is a DeFi token on the Binance Smart Chain. A portion of the transaction fees get donated to Whale Conservation charities.</span>

        <span className="">WHEXy Whales are a 4,800 NFT collection on the Polygon (MATIC) blockchain. Created April 29, 2022. They function as both a Profile Pic collection and as a way to earn passive income of WHEX via a portion mint proceeds and royalties shared among holders. They also generate income from mint proceeds and royalties for Whale Conservation charities. Additionally the distribution of DAO vote tokens is tied to these 4800 NFTs.</span>

        <span className="">The WHEXcosystem DAO ($WHEXDAO) token was created May 12, 2022. It is used to make decisions on the future of the WHEXcosystem via blockchain vote. Each round of voting, each WHEXy Whale is airdropped 1 voting token</span>
        </div>

        <h2 className="text-[12px] text-white w-[80vw] mx-auto lg:w-[60vw] lg:text-[14px] lg:mx-auto mb-6">Join us live on our podcast at <a href="https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/" className="text-sky-200 underline underline-offset-1"> https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/ </a></h2>


        <Accordion w={{ base: '90vw', md: '80vw', lg: '80vw' }} mx="auto" colorScheme="black" defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton color="white" bg="black">
                  <Box 
                  flex='1' 
                  textAlign='left'
                  color="white"
                  w={{ base: '90vw', md: '80vw', lg: '70vw' }}
                  bg="black"
                  fontSize="xl"
                  p={3}
                  >
                    Legacy Tokens
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel 
              h={{ base: '160vh', md: '80vh', lg: '65vh' }}
              color="white"
              w={{ base: '90vw', md: '80vw', lg: '70vw' }}
              bg="black"
              >
                <Legacy />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
  
          <div className="flex flex-row mt-8 items-center justify-center mx-auto md:mx-auto space-x-4 lg:mx-auto">
        <img src="/whale-exploder.png" alt="logo" className='h-[6rem] md:w-[10rem] md:h-[10rem] w-[6rem] lg:h-[12rem] lg:w-[12rem]'/>
        <img src="/whexy.png" alt="logo" className='h-[6rem] w-[6rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem]'/>
        <img src="/smart-defi.png" alt="logo" className='h-[6rem] w-[6rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem]'/>
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
                  <div className="bg-black w-full mt-6" id="sdocs">
                      <center className="text-sky-200 text-3xl p-4">Documentation</center>
                      <div className="flex flex-col items-center justify-center mt-10">
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
      </div>
      <div className="flex flex-col justify-center bg-black items-center py-6">
                      <div className="flex flex-col justify-center items-center w-1/2">
                          <img src="/peter_wake.jpg" alt="" className="rounded-full h-1/2 w-1/2 lg:h-[15rem] lg:w-[15rem]" />
                          <h1 className="text-amber-400 mb-4 font-bold text-2xl">Peter Wake</h1>
                          <center className="text-white">Founder and CEO</center>
                          <center> <a href="https://www.linkedin.com/in/peterdwake/" className="text-sky-400">https://www.linkedin.com/in/peterdwake/</a> </center>
                      </div>
                  </div>
  
      <Footer />
  
      </div>
    )
  }
  
  export default Index
   
