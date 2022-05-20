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


const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <div className="bg-black h-full">
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
            <Link href="/whex">
              <div className="pt-[2vh] text-sky-200 cursor-pointer">
                WHEX
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
    <div className="pt-[8rem] w-[90vw] mx-auto">
        <h2 className="text-sky-200 text-center items-center font-medium text-2xl">WHEXy whales (Mint Live Now)</h2>
        <div className="text-neutral-400 w-[80vw] space-y-3 items-center text-center mx-auto text-sm mt-4 flex flex-col">
            <span>WHEXy Whales is an NFT project consisting of 4800 unique Whales with different traits like hats, glasses, shirts, backgrounds, etc.</span>
            <span>Minting & Royalties (How they will be used*):
                42% will buy WHEX and distribute to all WHEXy Whale holders in proportion to the number they hold.
                38% to marketing and administrative costs (website, paid promotion, hiring mods/community managers, etc)
                10% will be donated to Save The Whales! Learn more about the work they do here:
                <a href="https://savethewhales.org" className="text-sky-200 underline underline-offset-1">https://savethewhales.org</a> 
                10% founder pay</span>
            <span>*Transacted after each 100 mints, or for royalties, each $10,000 accumulated):</span>
            <center>More details:</center>
            <span>Mint Price: 100 MATIC </span>
            <span>Blockchain: Polygon </span>
            <div className="lg:flex lg:flex-row lg:space-x-10 flex-col flex space-y-3 lg:space-y-0">
                <span>Discord:
                    <a href="https://discord.com/invite/Yac9TPbWUp" className="text-sky-200 underline underline-offset-1">https://discord.com/invite/Yac9TPbWUp</a>    
                </span>
                <span>Whitelist NFT:
                    <a href="https://opensea.io/collection/whexy-whales" className="text-sky-200 underline underline-offset-1">https://opensea.io/collection/whexy-whales</a>    
                </span>
                <span>Mint Link:
                    <a href="https://app.niftykit.com/drops/WHEXy_Whales" className="text-sky-200 underline underline-offset-1">https://app.niftykit.com/drops/WHEXy_Whales</a>    
                </span>
            </div>
        </div>
        <div className="flex lg:flex-row lg:space-x-4 flex-col">
            <img src="/baked.GIF" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />

            <img src="/whale-mint.jpg" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />
            <img src="/whales.jpg" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />
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
    </div>    </div>
    </div>  
  )
}

export default Index
