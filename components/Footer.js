import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer pt-10 bg-black w-full">
        <div className="flex flex-row justify-center">
        <a href="https://twitter.com/whaleexploder">
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
        <center className="text-sky-200 mt-4 text-center">&copy; Whexcosystem 2022</center>
    </div> 
    </div>
  )
}

export default Footer
