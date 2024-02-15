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
import { motion } from 'framer-motion'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.75,
      transition: {
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: 'white',
      originX: 0,
      transition: {
        duration: 0.1,
        type: 'tween',
        stiffness: 200,
      },
    }
  }
  const buttonVariants = {
    hover: {
      scale: 1.1,
      shadow: '0px 0px 10px rgb(255,255,255)',
      transition: { 
        duration: 0.3,
        yoyo: Infinity,
       }
      }
    }
  return (
    <>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"    
      className="flex flex-row mx-auto py-[1vh] justify-between px-6 lg:px-16 w-full">
        <div className="logo lg:text-[20px] md:text-[16px] text-[16px] flex justify-start lg:space-x-3 text-center text-white items-center font-mono font-bold">
            <img src="/logo.jpg" alt="logo" className='rounded-full lg:w-[4.5rem] md:w-[3rem] w-[3.5rem]'/>
            <h2>whexcosystem</h2>
        </div>

        {/**Desktop Navbar */}
        <div className="items-center font-mono hidden lg:flex space-x-[5vw] nav-links font-bold text-gray-400 text-[16px]">
            <Link href="#home">
              <motion.span
              variants={linkVariants}
              whileHover="hover"
              className="cursor-pointer"
              >
                  Home
                </motion.span>
            </Link>

            <Link href="#tokens">
            <motion.span
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
            >
              Tokens
            </motion.span>
            </Link>

            <Link href="#bridge">
            <motion.span
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
            >
              Bridge
            </motion.span>
            </Link>

            <Link href="/blog">
            <motion.span
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
            >
              Blog
            </motion.span>
            </Link>

            <Link href="#community">
            <motion.span
              variants={linkVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              Community
              </motion.span>
            </Link>

              <motion.span
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
            >         
              <a href="/pdf/White-PaperV3.pdf" target="_blank" rel="noopener noreferrer">
                Whitepaper
              </a>
            </motion.span>
              
          </div>
        
         {/**Mobile Navbar */}   
          <div className="lg:hidden md:hidden">
          <Button ref={btnRef} colorScheme='black' onClick={onOpen}>
            <span className="text-4xl text-white">=</span>
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
              <div className="grid grid-cols-3 gap-y-10 mt-[3vh] text-gray-400 font-mono">
              <Link href="/">
                  Home
              </Link>
              <Link href="#tokens">
                  Tokens
              </Link>
              <Link href="#bridge">
                  Bridge
              </Link>
              <Link href="/blog">
                  Blog
              </Link>
              <Link href="#community">
                  Community
              </Link>
              <a href="/pdf/White-PaperV3.pdf" target="_blank" rel="noopener noreferrer">
                Whitepaper
              </a>
              </div>
            </DrawerBody>
          </DrawerContent>
            
        </Drawer>

            </div>
      </motion.div>
    </>
  )
}

export default Header
