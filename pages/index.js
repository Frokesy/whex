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
import Legacy from './Legacy'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div className="bg-black h-full w-screen">
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
          <a href="https://twitter.com/whexcosystem">
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
        <div className="w-[80vw] mb-2 mt-6 lg:hidden lg:items-center lg:flex lg:items-center lg:justify-center mx-auto">
          <img src="/whex.jpg" alt="" className="lg:h-[80vh] lg:w-[40vw] rounded-lg" />
        </div>
        <div className="w-[80vw] mx-auto text-white flex font-light text-[10px] flex-col lg:w-[70vw] lg:mx-auto pt-[5vh]">
        <h2 className="text-[20px] mt-4 text-center font-bold font-mono lg:text-[24px] text-white">WHEXcosystem DAO </h2>
        <div className="flex flex-col my-6 mx-auto lg:text-[13px] w-{80vw}">
        <span className=""> <span className="text-sky-400 font-bold lg:text-[13px] text-[10px]">Token Contract Address:</span> 0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2</span>
        <span className="mt-6"> <span className="text-sky-400 lg:text-[13px] font-mono font-bold text-[10px]">Network:</span> Smart Chain</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[10px]">Decimals:</span> 9</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[10px]">Symbol:</span> WHEXDAO</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[10px]">Initial Supply:</span> 1,000,000,000 WHEXDAO</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono font-bold lg:text-[13px] text-[10px]">Stockpile Address:</span> 0x0D7079098C8feb4F4AEF40703CE83eCc704f371d</span>
        </div>

        <h2 className="text-[16px] mb-3 text-center lg:text-[20px] font-bold font-mono text-white"> Voting Mechanism </h2>
        
        
        <div className="flex flex-col mb-6 mx-auto space-y-6 lg:w-[70vw] lg:mb-10 lg:text-[14px] font-light text-[12px] w-{80vw}">

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">1.</span> A voting cycle is initiated by Peter Wake, or by a WHEXDAO holder sending 1 BNB to the Stockpile address. This gives holders the power to create their own votes for the dao, and covers time and expenses of sending out the new tokens, as well as discouraging frivolous votes to get more WHEXDAO in circulation.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">2.</span>  WHEXDAO tokens are sent out from the Stockpile to holders of WHEXy Whales at a rate of 1 WHEXDAO per 1 WHEXy Whale.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">3.</span> Peter Wake will then publish a question in discord, Twitter and telegram and provide directions on what address to send WHEXDAO tokens to for each option.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">4.</span> The voting period will end 42 hours after the vote goes live. All WHEXDAO tokens held by the vote option. addresses will be sent back to the stockpile.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">5.</span> The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total WHEXDAO used to vote).</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px] italic font-mono">Note:</span> As CEO, Peter Wake retains the right to veto any decision, or decide not to run a vote on a question presented by the community. I.E. you cannot use the DAO to perform a hostile takeover of the WHEX contract, decide to perform illegal acts, etc.</span>


        </div>

        </div>

        <div className="w-[80vw] mb-6 hidden lg:block lg:items-center lg:flex lg:items-center lg:justify-center mx-auto">
          <img src="/whex.jpg" alt="" className="lg:h-[80vh] lg:w-[40vw] rounded-lg" />
        </div>
        
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
              h={{ base: '120vh', md: '80vh', lg: '65vh' }}
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
          <a href="https://twitter.com/whexcosystem">
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
   
