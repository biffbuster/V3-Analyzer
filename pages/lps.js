import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Sales = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="col-md-10 mx-auto contentSection row">
        <div className="col-md-5  mt-4 mx-auto">
          <div>
            <p className="text-4xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              LPs
            </p>
            <h4 className="text-xl dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              View liquidity provider (LP) stats and trends by selecting a pool address, start time and end time (WIP).</h4>
            <h3 className="text-l dark:text-white font-semibold box-shadow-2xl md:my-9 light:bg-gray-50 rounded-lg px-2 pb-2">
              Liquidity providers are anyone who deposits an equivalent value of each underlying assets to be used for trading in a pool for LP tokens and trading fees in return. Ticks are the the range between liquidity positions and price spacing. 
              Learn more about 
              <a href="https://docs.uniswap.org/protocol/concepts/V3-overview/concentrated-liquidity#ticks"
                 className="text-[18px]"> Ticks</a>
              </h3>
          </div>
        </div>
        <br></br>
        <div className="col-md-6 shadow-2xl embbedStyle w-[450px] drop-shadow-2xl py-2 mt-4 bg-white">
        <iframe
              src="https://dune.com/embeds/1360975/2338081/9b303c2a-9312-4770-b4d7-f0b9cb25a6cd"
              height="300"
              width="400"
              title="Unique LPs"
            ></iframe>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="container text-center shadow-2xl  ">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2321374/3262c06d-f5bc-47e2-ab2c-3e1d9ca44e5b"
              height="300"
              width="400"
              title="Lower Tick"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2321373/de76156c-de44-4691-8918-e448aa75a1d4"
              height="300"
              width="400"
              title="Tick"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2321551/db73b2eb-a51b-49c2-80ad-3c3772c91c24"
              height="300"
              width="400"
              title="Upper Tick"
            ></iframe>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container text-center shadow-2xl  ">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2339197/8cca0e3c-a856-476c-b194-e58a0c6be882"
              height="300"
              width="400"
              title="Lower Tick Price"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2321599/2d24228e-e61c-42d7-8c16-ab00d39141d3"
              height="300"
              width="400"
              title="Tick"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2339199/b7346e23-0b93-4870-ba15-d6331879dbf2"
              height="300"
              width="400"
              title="Upper Tick Price"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
