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

const Header = ({ link1, link2, link3, header, headerurl, href1, href2, href3 }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
        <div className="justify-between flex">
          <div className="flex justify-start">
              
              
              {/**Desktop Navbar */}
              <div className="hidden justify-between mx-10 space-x-10 text-sky-200 mt-4 lg:flex text-[12px]">
              <Link href="/">
                <div className="text-sky-200 cursor-pointer">
                  Home
                </div>
              </Link>
              <Link href="/whex">
                <div className="text-sky-200 cursor-pointer">
                  Whex
                </div>
              </Link>
              <Link href="/whexywhales">
                <div className="text-sky-200 cursor-pointer">
                  Whexy Whales
                </div>
              </Link>
              <Link href="/whexdao">
                <div className="text-sky-200 cursor-pointer">
                  Whexdao
                </div>
              </Link>
              </div>


           {/**Mobile Navbar */}   
          <div className="lg:hidden md:hidden">
          <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
            <span className="text-5xl text-sky-200 mx-6">=</span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay
          px={4}
          size='md'
          />
          <DrawerContent
          bg='gray.800'
          color='white'
          >
            <DrawerCloseButton />
            <DrawerBody>
            <Link href={href1}>
                <div className="mt-[10vh] text-sky-200 cursor-pointer">
                  {link1}
                </div>
              </Link>
              <Link href={href2}>
                <div className="pt-[2vh] text-sky-200 cursor-pointer">
                  {link2}
                </div>
              </Link>
              <Link href={href3}>
                <div className="pt-[2vh] text-sky-200 cursor-pointer">
                  {link3}
                </div>
              </Link>
            </DrawerBody>
          </DrawerContent>
            
        </Drawer>

            </div>        
        </div>
        <div className="flex justify-center mx-10">
          <a href="https://twitter.com/whexcosystem">
          <img src="/twitter.svg" alt="" className="w-[1.25rem] h-[1.25rem] my-4 mx-5" />
          </a>
          <a href="https://t.me/WHEXcosystem">
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
        <img src={headerurl} alt="logo" className='h-[5rem] w-[5rem]'/>
        <h2 className="text-[20px] mt-4 font-bold font-mono text-white">{header}</h2>
        </div>
    </div>
  )
}

export default Header
