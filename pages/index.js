import React, { useEffect, useState, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "./defaults/Meta";
import EmberScript from "./EmberScript";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Whex from "../components/whex";
import WhexEth from "../components/whexeth";
import WhexyWhales from "../components/whexywhales";
import Whexdao from "../components/whexdao";
import WhexSol from "../components/whexsol";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Meta title="WHEXcosystem || Home Page" />
      <div className="h-full overflow-hidden">
        <div className="bg-neutral-800">
          <Header />
        </div>
        <Head>
          <script
            async
            type="text/javascript"
            src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"
          ></script>
          <div
            id="coinmarketcap-widget-marquee"
            coins="24951,1,1027,3890,1839,74,5994,24478,4909,5426,2010,52,4030"
            currency="USD"
            theme="light"
            transparent="false"
            show-symbol-logo="true"
          ></div>
        </Head>
        <div
          id="home"
          className="bg-[url('/whale.gif')] bg-center bg-cover bg-no-repeat h-[80vh] lg:h-screen items-center justify-center"
        >
          <div className="lg:pt-[40vh] pt-[30vh] lg:w-[95vw] text-white text-[25px] w-[80vw] mx-auto lg:text-[60px] justify-center font-mono items-center flex flex-col text-center">
            <h2>
              Saving the <span className="text-blue-400">whales</span>,
            </h2>
            <span>
              one <span className="text-blue-400">transaction</span> at a time
            </span>
          </div>
        </div>

        <div className="tokens pt-[5vh]" id="tokens">
          <div className="flex flex-col lg:w-[75vw] w-[95vw] mx-auto">
            <Whex />
            <WhexEth />
            <WhexSol />
            <WhexyWhales />
            <EmberScript />
            <Whexdao />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
