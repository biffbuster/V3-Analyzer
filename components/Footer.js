import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from '../assets/images/v3_logo.png'

const footer = () => {
  return (
    <footer className="p-4 dark:bg-gray-800 bg-gray-100 shadow-md rounded-md md:px-6 md:py-2 ">
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className="flex flex-[0.34] w-full  items-center justify-center">
          <div className="w-40 h-36 -my-4 flex items-center ">
            <Image src={Logo} alt="3landers" width={50} height={50} />
          </div>
        </div>
        <div className="flex-[0.33] w-full flex items-center justify-center">
        <h5 className="text-l dark:text-white font-semibold text-center">
        This is a community made dashboard, information may not be completely accurate. Not affiliated with Uniswap. <br></br>
        <br></br> 
        Made by&nbsp; <span className="my-8 dark:text-white uppercase font-deepShadow">
            <a href="https://twitter.com/biff_buster" className="text-[9px]" target="_blank" rel="noopener noreferrer"> biff_buster </a>  </span> 
        </h5>
        </div>
        <div className="flex-[0.33]   w-full flex items-center justify-center">
          <ul className="flex dark:text-white flex-wrap items-center  text-md text-gray-500 sm:mb-0 ">
            <li>
              <a href="https://uniswap.org/blog/uniswap-v3" className="mr-4 hover:underline md:mr-6">
                Docs
              </a>
            </li>
            <li>
              <a href="https://uniswap.org/" className="mr-4 hover:underline md:mr-6 ">
                Uniswap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div>
//         <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
//           <h6 className="text-gray-800 font-semoibold">
//             copyright &copy;2022 3landers analytics. | Created by @biff_buster | Not affiliated with 3landers.</h6>
//         </div>
//       </div>
//     </footer>
//   );
// };

export default footer
