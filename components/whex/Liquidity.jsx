import React from "react";

const Liquidity = () => {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
      className="flex flex-col space-y-3"
    >
      <h2 className="text-[18px] font-mono font-bold text-center">
        Locked Liquidity
      </h2>
      <span className="text-[13px]">
        {">>"} 15.1 BNB of LP Locked for 5 years. Pancake LPs for Whale
        Exploder: 0xac3843ed09a264f26f2668a7c57b3191ad10a6f7
      </span>
      <span className="text-[13px]">
        {">>"} 1 BNB of initial Liquidity was created and locked on June 29,
        2021 for 5 years. This was done on dxsale.app, These can be seen on BSC
        Scan here: 0xeb3a9c56d963b971d320f889be2fb8b59853e449
      </span>
      <span className="text-[13px]">
        {">>"} Automatic LP (13% of each transaction):
        0x07d80ae6f36a5e08dca74ce884a24d39db9934ed.LP from IDO will be locked in
        dxsale.app for 5 years. Additional LP has been sent to this initial
        contract since the first 1 BNB and is locked.
      </span>
    </div>
  );
};

export default Liquidity;
