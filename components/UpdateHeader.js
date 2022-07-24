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

const UpdateHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <div className="flex flex-row mx-auto py-[1vh] bg-black justify-between opacity-75 px-6 lg:px-16 fixed w-screen">
        <div className="logo lg:text-[20px] md:text-[16px] text-[16px] flex justify-start lg:space-x-3 text-center text-white items-center font-mono font-bold">
            <img src="/logo.jpg" alt="logo" className='rounded-full lg:w-[4.5rem] md:w-[3rem] w-[3.5rem]'/>
            <h2>whexcosystem</h2>
        </div>

        {/**Desktop Navbar */}
        <div className="items-center font-mono hidden lg:flex space-x-[5vw] nav-links font-bold text-gray-400 text-[16px]">
            <span>Home</span>
            <span>Tokens</span>
            <span>Roadmap</span>
            <span>Community</span>
            <span>Whitepaper</span>
        </div>
        <div className="items-center lg:flex hidden">
            <button className="bg-teal-800 font-light text-white rounded-lg font-mono text-[11px] px-3 py-4">Join our podcast</button>
        </div>
        
         {/**Mobile Navbar */}   
          <div className="lg:hidden md:hidden">
          <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
            <span className="text-5xl text-white">=</span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='top'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay
          px={4}
          size='md'
          />
          <DrawerContent
          bg='black'
          color='teal.600'
          >
            <DrawerCloseButton />
            <DrawerBody
            py="3vh"
            >
              <div className="grid grid-cols-3 gap-y-6 mt-[2vh] text-gray-400 font-mono">
              <Link href="/">
                  Home
              </Link>
              <Link href="/">
                  Tokens
              </Link>
              <Link href="/">
                  Roadmap
              </Link>
              <Link href="/">
                  Community
              </Link>
              <Link href="/">
                  Whitepaper
              </Link>
              <div className="items-center flex">
                <button className="bg-teal-800 font-light text-white rounded-lg font-mono text-[8px] px-2 py-2">Join our podcast</button>
              </div>
              </div>
            </DrawerBody>
          </DrawerContent>
            
        </Drawer>

            </div>
      </div>
    </>
  )
}

export default UpdateHeader
