// import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import Logo from '../assets/images/pool_analyzer_2.svg'
// import { useTheme } from 'next-themes'
// import { MoonIcon, SunIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  // const { systemTheme, theme, setTheme } = useTheme()
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // const renderThemeChange = () => {
  //   if (!mounted) return null
  //   const currentTheme = theme === 'system' ? systemTheme : theme
  //   if (currentTheme === 'light') {
  //     return (
  //       <SunIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme('light')}
  //       />
  //     )
  //   } else {
  //     return (
  //       <MoonIcon
  //         className="w-7 h-7"
  //         role="button"
  //         onClick={() => setTheme('light')}
  //       />
  //     )
  //   }
  // }

  return (
    <nav className=" w-100 p-1 px-2  navbar dark:text-white dark:bg-black navbar-expand-lg navbar-light position-fixed top-0 start-0">
      <div className="container-fluid">
        <Link href="/" passHref>
          <div className="navbarBrand">
            <Image src={Logo} alt="Brand" width={135} height={70} />
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bi bi-list"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav navItems  text-center px-3">
            <Link href="/" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/'
                      ? 'btn-active btn '
                      : 'btn-nonactive btn  '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[20px]
                   dark:hover:bg-black
                   dark:border-[1px]

                   dark:hover:text-white
                   "
                  >
                    {' '}
                    Home
                  </span>
                </button>
              </a>
            </Link>
            <Link href="/pools" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/holders'
                      ? 'btn-active btn'
                      : 'btn-nonactive btn  '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[20px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    Pools
                  </span>
                </button>
              </a>
            </Link>
            <Link href="/lps" passHref>
              <a className="nav-link">
                <button
                  type="button"
                  className={
                    currentRoute === '/sales'
                      ? 'btn-active btn dark:btn-active1'
                      : 'btn-nonactive btn dark:btn-nonactive1 '
                  }
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  <span
                    className="dark:text-black
                   dark:bg-white
                   dark:font-semibold
                   dark:px-5
                   dark:py-2
                   dark:text-[14px]
                   dark:w-[80px]
                   dark:rounded-[20px]
                   dark:hover:bg-black
                   dark:border-[1px]
                   dark:hover:text-white"
                  >
                    {' '}
                    LPs
                  </span>
                </button>
              </a>
            </Link>
          </ul>
          <div className="social-media  order-lg-last">
            <p className="mb-0 d-flex">
              <a
                href="https://uniswap.org/"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <i className="bi bi-browser-edge"></i>
                </span>
              </a>
              <a
                href="https://twitter.com/Uniswap"
                className="d-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:animate-spin">
                  <i className="bi bi-twitter"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
