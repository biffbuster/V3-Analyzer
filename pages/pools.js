import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Holders = () => {
  return (
    <div className="container mb-5 -mt-3">
      <div className="col-md-8 mx-auto contentSection row">
        <div className="col-md-5 mt-4 mx-auto">
          <div>
            <br></br>
          </div>
        </div>
        <br></br>
        <h4 className="text-2xl dark:text-white font-semibold text-center">
        To use this tool, simply enter the pool address, start time and end time of your choosing. After a few minutes, the pool info will be displayed below. Until the search parameter is added, feel free to view the Dune dashboard --
        <span className="font-CocoSharpHeavy w-full dark:text-white">
                  <a
                    href="https://dune.com/BiffBuster/v3-pool-analyzer"
                    className="text-[25px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >HERE.
                  </a>
                </span>
        </h4>
        <br></br>
      </div>
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/1360975/2321364/371e476a-6f29-4c89-b056-882cbb6e558e"
              height="300"
              width="600"
              title="Top 10 Holders"
            ></iframe>
          </div>
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/1360975/2334563/ee2c9699-5267-4769-ad40-7e30a89aabee"
              height="300"
              width="600"
              title="Top 10 Holders PiChart"
            ></iframe>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container text-center shadow-2xl  ">
        <div className="row">
          <div className="col-md-4 embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2339116/fe1c277d-2f4f-44b7-8157-6cc700ee5199"
              height="300"
              width="400"
              title="Avg Volume"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2334565/d8660e5d-22a9-48a9-8542-56dd41c12664"
              height="300"
              width="400"
              title="Unique Trades"
            ></iframe>
          </div>
          <div className="col-md-4 shadow-2xl  embbedStyle">
            <iframe
              src="https://dune.com/embeds/1360975/2338020/b0e630df-22a7-4410-85cf-15e184953e9f"
              height="300"
              width="400"
              title="Cumulative Fees"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1360975/2334567/3bb2b534-71e8-4faa-81e4-428170278bfa"
            width="1500"
            height="400"
            title="TVL over time"
          ></iframe>
        </div>
      </div>
      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1360975/2335289/d33dd6d7-3169-4e64-9cf4-8ab90b610e7e"
            width="1500"
            height="350"
            title="Active Holders"
          ></iframe>
        </div>
      </div>

      <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1360975/2335274/0ee908df-9a5b-4368-a640-c452cfe1782f"
            width="1500"
            height="350"
            title="Active Holders"
          ></iframe>
        </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/1360975/2334564/39f07c4c-28c1-43fb-af04-755c2da13b29"
              height="300"
              width="600"
              title="Top 10 Holders"
            ></iframe>
          </div>
          <div className="col-md-6 shadow-2xl  embbedStyle activeHolders">
            <iframe
              src="https://dune.com/embeds/1363018/2335246/486ca5bf-9436-4953-9b85-4db902f99aa1"
              height="300"
              width="600"
              title="TVl pie chart"
            ></iframe>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4 className="text-2xl dark:text-white font-semibold text-center">
        TVL By Token
        </h4>
        <br></br>
        <br></br>
        <br></br>
        <div className="mt-4">
        <div className="embbedStyle shadow-2xl  text-center activeHolders">
          <iframe
            src="https://dune.com/embeds/1363018/2322803/503d7fd0-0feb-424e-883d-adae5f77a8eb"
            width="1500"
            height="350"
            title="Active Holders"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Holders
