import React from 'react'
import UpdateHeader from '../components/UpdateHeader'

const Update = () => {
  return (
    <>
    <div className="bg-black h-full">
        <UpdateHeader />
        <div className="bg-[url('/whale__three.gif')] bg-center bg-auto lg:bg-cover bg-no-repeat h-screen items-center justify-center">
        <div className="pt-[40vh] w-[95vw] text-white text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>Saving the whales,</h2>
            <span>one transaction at a time</span>
        </div>
    </div>
    <div className="roadmap flex items-center justify-center w-[95vw] pt-[5vh]">
           <span className="text-white text-[40px] font-mono font-semibold">Whexcosystem Roadmap - 2022</span>      
        </div>
        <div className="roadmap-cards grid grid-cols-4 space-x-4 pt-[5vh] w-[95vw] mx-auto">
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-400">Q1</span>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-400">Q2</span>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-400">Q3</span>
            </div>
            <div className="border border-gray-800 px-4 py-6 text-white">
              <span className="text-[30px] font-mono font-bold text-gray-400">Q4</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Update
