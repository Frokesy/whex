import React from 'react'

const Section = () => {
  return (
    <div
    data-aos="fade-in"
    data-aos-duration="2000"
    className="flex flex-col mx-2 space-y-3"
  >
    <span className="text-[18px] font-mono font-bold text-center">
      Why buy a WHEXy whale today?
    </span>
    <span className="text-[14px]">
      {"1."} Help real life whales
    </span>
    <span className="text-[14px]">
      {"2."} Access to getting a custom ENS subdomain of WHEXy.eth
    </span>
    <span className="text-[14px]">
      {"3."} Access to an exclusive
      <a
        href="https://discord.gg/ZDEZ2Kw5ZR"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 font-semibold"
      >
        {" "}
        Discord{" "}
      </a>
      and
      <a
        href="https://telegram.me/collablandbot?start=VFBDI1RFTCNDT01NIy0xMDAxODE0NDA1MzMz"
        target="_blank"
        rel="noreferrer"
        className="text-blue-400 font-semibold"
      >
        {" "}
        Telegram{" "}
      </a>
      chats
    </span>
    <span className="text-[14px]">
      {"4."} Use WHEXy whale in your company or merch store or partner
      with WHEXcosystem Inc. and split the profits.
    </span>
  </div>
  )
}

export default Section
