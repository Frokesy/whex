import React from 'react'
import Royalties from "./Royalties";


const Section = () => {
  return (
    <div
    data-aos="fade-in"
    data-aos-duration="2000"
    className="flex flex-col mx-2 space-y-3"
  >
    <h2 className="text-center text-[18px] font-mono font-bold">
        Tokenomics (6%)
      </h2>
      <span className="text-[13px]">
        {"-"} 6% tax sent to the treasury wallet and when it reaches 1 million WHEX
      </span>
      <span className="text-[13px]">
        {"-"} 50% is sold and donated to Whale Conservation
      </span>
      <span className="text-[13px]">
        {"-"} 25% is burned
      </span>
      <span className="text-[13px]">
        {"-"} 25% goes to the founder
      </span>
  </div>
  )
}

export default Section
