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
      className="flex flex-row mx-auto py-[1vh] bg-black justify-between opacity-75 px-6 lg:px-16 fixed w-screen">
        <div className="logo lg:text-[20px] md:text-[16px] text-[16px] flex justify-start lg:space-x-3 text-center text-white items-center font-mono font-bold">
            <img src="/logo.jpg" alt="logo" className='rounded-full lg:w-[4.5rem] md:w-[3rem] w-[3.5rem]'/>
            <h2>WHEXcosystem</h2>
        </div>
        
        <div className="flex justify-end space-x-2 items-center text-[#fff] text-[15px] font-bold">
            <img src="/peter_wake.jpg" alt="admin" className="lg:w-[5%] w-[12%] rounded-full" />
            <span>Peter Wake</span>
        </div>
      </motion.div>
    </>
  )
}

export default Header
