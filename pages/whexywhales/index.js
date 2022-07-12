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
import VotingDrawer from '../../components/VotingDrawer'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <div className="bg-black h-full">
      <Meta title="WHEXcosystem || WHEXy Whales" />
      <Header link1="Home" link2="WHEX" link3="WHEXDAO" header="WHEXy Whales" headerurl="/logo.jpg" href1="/whex" href2="/whexywhales" href3="/whexdao" />

    <div className="pt-[3rem] w-[90vw] mx-auto">
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
                    <h2 className="text-[12px] mt-4 lg:hidden text-white w-[80vw] mx-auto lg:w-[60vw] lg:text-[14px] lg:mx-auto mb-6">Join us live on our podcast at <a href="https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/" className="text-sky-200 underline underline-offset-1"> https://socialchats.co/event/nftsforacause-eps-21-chat-w-peterdwake-of-the-whale-exploder-ecosystem-whexcosystem/ </a></h2>   
                </span>
            </div>
        </div>
        <div className="flex lg:flex-row lg:space-x-4 flex-col">
            <img src="/baked.GIF" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />

            <img src="/whale-mint.jpg" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />
            <img src="/whales.jpg" alt="gif" className="my-10 rounded-lg w-[80vw] mx-auto lg:w-[30vw] md:w-[40vw]" />
        </div>

        <Footer />
            </div>
    </div>  
  )
}

export default Index
