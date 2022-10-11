import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Uni from '../assets/images/uniswap_token.gif'
import Dollar from '../assets/images/icons/dollar.png'
import Liq from '../assets/images/icons/liq.png'
import styles from '../styles/Home.module.css';

const Banner = () => {
  return (
    <div className="dark:bg-black">
      <div className="mt-1">
      </div>
      <div className="container">
        <div className="contentSection row">
          <div className="col-md-5 md-">
            <div>
              <br></br>
              <br></br>
              <br></br>
              <h3 className="text-4xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
                A Tool to Explore and Analyze Liquidity Pools on Uniswap V3🦄
                <br></br> 
              </h3>
              <br></br>
              <div className="mt-4 font-semibold w-full ">
                <span className="font-CocoSharpHeavy w-full dark:text-white">
                  <a
                    href="https://docs.uniswap.org/protocol/concepts/V3-overview/concentrated-liquidity"
                    className="text-[25px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  To learn more about Uniswap pools and concentrated liquidity see HERE.
                  </a>
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="col-md-7 text-center w-[450px] rounded-lg drop-shadow-2xl py-2 mt-4">
            <Image
              src={Uni}
              alt="Captain"
              width={250}
              height={250}
              layout="responsive"
            />
          </div>
        </div>
        <br></br>
        <br></br>

        {/* <div className="container mb-5 px-5">
          <div className="row justify-content-center">
            <div className="row mt-3 text-center text-xl">
              <div className="col-md-4 ">
                <div className="w-[80%] my-2 py-2 hover:animate-pulse ml-[30%] text-center">
                  <Link href="/lps" passHref>
                    <Image
                      src={Dollar}
                      className="ms cursor-pointer"
                      alt="icon"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <div>
                    <h5 className="font-CocoSharpHeavy w-full dark:text-white">LPs</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-[80%] my-2 py-2 hover:animate-pulse ml-[85%] text-center">
                  <Link href="/pools" passHref>
                    <Image
                      src={Liq}
                      className="cursor-pointer"
                      alt="icon"
                      width={100}
                      height={100}
                    />
                  </Link>
                  <div>
                    <h5 className="font-CocoSharpHeavy w-full dark:text-white">Pools</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Banner