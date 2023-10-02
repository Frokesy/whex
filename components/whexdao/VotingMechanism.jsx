import React from "react";

const VotingMechanism = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col space-y-6"
    >
      <h2 className="text-center text-[18px] font-mono font-bold">
        Voting Mechanism
      </h2>
      <span className="text-[13px]">
        {">>"} Holders can vote without having to send tokens to addresses using
        a dapp. This will allow holders to participate in the future of the
        WHEXcosystem without the need to give up voting power. This is hosted
        at:
        <a
          href="https://snapshot.org/#/whexy.eth"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline font-light"
        >
          https://snapshot.org/#/whexy.eth
        </a>
      </span>
      <span className="text-[13px]">
        {">>"} The decision will be carried out by the WHEXcosystem team. (Must
        have at least 51% of the total{" "}
        <span className="text-blue-400 font-semibold">$WEED</span> used to
        vote).
      </span>
      <span className="text-[13px]">
        {">>"} Voting on the{" "}
        <span className="text-blue-400">$WEED</span> tokenomics,
        what to do with the{" "}
        <span className="text-blue-400">$WEED</span> built up in
        DAO Treasury and{" "}
        <span className="text-blue-400">$WHEX</span> in the
        charity/burn wallet are allowed.
      </span>
      <span className="text-[13px]">
        {"Note"} As CEO, Peter Wake retains the right to veto any decision, or
        decide not to run a vote on a question presented by the community. I.E.
        you cannot use the DAO to perform a hostile takeover of the WHEX
        contract, decide to perform illegal acts, etc.
      </span>
    </div>
  );
};

export default VotingMechanism;
