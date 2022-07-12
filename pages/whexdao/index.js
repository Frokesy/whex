import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import VotingDrawer from '../../components/VotingDrawer'
import Meta from '../defaults/Meta'

const index = () => {
  return (
    <div className="bg-black h-full">
            <Meta title="WHEXcosystem || WHEXDAO" />
    <Header link1="Home" link2="WHEX" link3="WHEXy Whales" header="WHEXcosystem DAO" headerurl="/logo.jpg" href1="/" href2="/whex" href3="/whexywhales" />
      <div className="w-[80vw] mx-auto text-white flex font-light text-[10px] flex-col lg:w-[70vw] lg:mx-auto pt-[2vh]">
        <div className="flex flex-col my-6 mx-auto lg:text-[13px] w-{80vw}">
        <span className=""> <span className="text-sky-400 font-bold lg:text-[13px] text-[12px]">Token Contract Address:</span> 0x1fFD93F8c3d99bDAA4A012A0Fc26868F00Cfa5c2</span>
        <span className="mt-6"> <span className="text-sky-400 lg:text-[13px] font-mono font-bold text-[12px]">Network:</span> Smart Chain</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[12px]">Decimals:</span> 9</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[12px]">Symbol:</span> WHEXDAO</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono lg:text-[13px] font-bold text-[12px]">Initial Supply:</span> 1,000,000,000 WHEXDAO</span>
        <span className="mt-6"> <span className="text-sky-400 font-mono font-bold lg:text-[13px] text-[12px]">Stockpile Address:</span> 0x0D7079098C8feb4F4AEF40703CE83eCc704f371d</span>
        </div>
        </div>
        <div className="w-[80vw] lg:w-[70vw] mx-auto text-white">
        <h2 className="text-[16px] mb-3 text-center lg:text-[20px] font-bold font-mono text-white"> Voting Mechanism </h2>
        
        
        <div className="flex flex-col mb-6 mx-auto space-y-6 lg:w-[70vw] lg:mb-10 lg:text-[14px] font-light text-[12px] w-{80vw}">

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">1.</span> A voting cycle is initiated by Peter Wake, or by a WHEXDAO holder sending 1 BNB to the Stockpile address. This gives holders the power to create their own votes for the dao, and covers time and expenses of sending out the new tokens, as well as discouraging frivolous votes to get more WHEXDAO in circulation.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">2.</span>  WHEXDAO tokens are sent out from the Stockpile to holders of WHEXy Whales at a rate of 1 WHEXDAO per 1 WHEXy Whale.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">3.</span> Peter Wake will then publish a question in discord, Twitter and telegram and provide directions on what address to send WHEXDAO tokens to for each option.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">4.</span> The voting period will end 42 hours after the vote goes live. All WHEXDAO tokens held by the vote option. addresses will be sent back to the stockpile.</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px]">5.</span> The decision will be carried out by the WHEXcosystem team. (Must have at least 51% of the total WHEXDAO used to vote).</span>

        <span className=""> <span className="text-sky-400 font-bold text-[13px] italic font-mono">Note:</span> As CEO, Peter Wake retains the right to veto any decision, or decide not to run a vote on a question presented by the community. I.E. you cannot use the DAO to perform a hostile takeover of the WHEX contract, decide to perform illegal acts, etc.</span>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default index
