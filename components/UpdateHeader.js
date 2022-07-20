import React from 'react'

const UpdateHeader = () => {
  return (
    <>
      <div className="flex flex-row mx-auto py-[1vh] bg-black justify-between px-16 fixed w-screen">
        <div className="logo lg:text-[20px] md:text-[16px] flex justify-start space-x-3 text-center  text-white items-center font-mono font-bold">
            <img src="/whale-exploder.png" alt="logo" className='rounded-full lg:w-[4.5rem] md:w-[3rem] w-[3rem] '/>
            <h2>whexcosystem</h2>
        </div>

        <div className="items-center font-mono flex space-x-[5vw] nav-links font-bold text-gray-400 text-[16px]">
            <span>Home</span>
            <span>Roadmap</span>
            <span>Tokens</span>
            <span>Whitepaper</span>
            <span>Community</span>
        </div>
        <div className="items-center flex ">
            <button className="bg-teal-800 font-light text-white rounded-lg font-mono text-[11px] px-3 py-4">Join our podcast</button>
        </div>
      </div>
    </>
  )
}

export default UpdateHeader
