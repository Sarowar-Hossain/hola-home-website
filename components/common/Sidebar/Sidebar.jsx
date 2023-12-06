import { ChevronDown, Cross, Menu } from '@components/icons'
import { motion, useCycle } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import {
  NavLinksHelp,
  NavLinksLanguage,
  NavLinksProfile,
  SideNavLinks,
} from 'data/SideNavLinks'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Searchbar from '../Searchbar'
import Link from 'next/link'

const Sidebar = () => {
  const [isLanguageSubMenuHidden, setLanguageSubMenuHidden] = useState(false)
  const [isHelpSubMenuHidden, setHelpSubMenuHidden] = useState(false)
  const [isProfileSubMenuHidden, setProfileSubMenuHidden] = useState(false)
  const [isSidebarHidden, setSidebarHidden] = useState(false)
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  const toggleProfileSubMenu = () => {
    setProfileSubMenuHidden(!isProfileSubMenuHidden)
  }
  const toggleHelpSubMenu = () => {
    setHelpSubMenuHidden(!isHelpSubMenuHidden)
  }

  const toggleLanguageSubMenu = () => {
    setLanguageSubMenuHidden(!isLanguageSubMenuHidden)
  }

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden)
  }

  const sidebar = {
    open: {
      x: '100%',
      transition: {
        type: 'twin',
        stiffness: 50,
        restDelta: 2,
      },
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    },
    closed: {
      x: '0%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
      boxShadow: 'none',
    },
  }

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(containerRef.current)
    } else {
      enableBodyScroll(containerRef.current)
    }

    return () => {
      enableBodyScroll(containerRef.current)
    }
  }, [isOpen])

  return (
    <div className="relative container mx-auto">
      <div
        className="absolute text-white text-4xl top-[-8px] right-2 cursor-pointer"
        onClick={toggleSidebar}
      >
        <Menu />
      </div>
      <div className={` ${isSidebarHidden ? '' : 'hidden'}`}>
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          ref={containerRef}
          variants={sidebar}
          className={`sidebar bg-white z-10 fixed top-0 bottom-0 right-0 p-2 w-full overflow-y-auto text-center `}
        >
          <div className="text-[#484C52] text-xl">
            <div className="p-2.5 mt-1 flex items-center justify-between">
              <Image
                src="/navlogo.png"
                width={90}
                height={40}
                alt="language-logo"
                className="ml-6"
              />
              <Cross onClick={toggleSidebar} className="absolute right-8" />
            </div>
          </div>
          <div className="my-2  h-[1px]"></div>
          <div>
            <Searchbar className={``} />
          </div>

          <div className="mt-6 bg-[#C4C4C4] h-[1px]"></div>

          {SideNavLinks.map((item, index) => {
            return (
              <Link
                href={''}
                key={index + 1}
                className="p-2.5 mt-2 flex items-center px-4 duration-300 cursor-pointer border-[#C4C4C4] rounded-none border-b"
              >
                <span className="text-[20px] ml-4 text-[#484C52] font-medium mb-2">
                  {item.name}
                </span>
              </Link>
            )
          })}

          {/* profile */}
          <div
            className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  "
            onClick={toggleProfileSubMenu}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[20px] ml-4 text-[#484C52] font-medium">
                {NavLinksProfile.name}
              </span>
              <span
                className={`text-sm ${
                  isProfileSubMenuHidden ? 'rotate-0' : 'rotate-180'
                }`}
              >
                <ChevronDown className="text-[#484C52]" />
              </span>
            </div>
          </div>

          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-[#484C52] font-bold ${
              isProfileSubMenuHidden ? 'hidden' : ''
            }`}
            id=""
          >
            {NavLinksProfile.pathList.map((item, index) => {
              return (
                <Link href={item.path} key={index + 1} onClick={toggleSidebar}>
                  <h1 className="ml-4 cursor-pointer p-2 rounded-md mt-1 text-[20px] text-[#484C52] font-normal">
                    {item.name}
                  </h1>
                </Link>
              )
            })}
          </div>


{/* Help */}
          <div
            className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  "
            onClick={toggleHelpSubMenu}
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[20px] ml-4 text-[#484C52] font-medium">
                {NavLinksHelp.name}
              </span>
              <span
                className={`text-sm ${
                  isHelpSubMenuHidden ? 'rotate-0' : 'rotate-180'
                }`}
              >
                <ChevronDown className="text-[#484C52]" />
              </span>
            </div>
          </div>

          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-[#484C52] font-bold ${
              isHelpSubMenuHidden ? 'hidden' : ''
            }`}
            id=""
          >
            {NavLinksHelp.pathList.map((item, index) => {
              return (
                <Link href={item.path} key={index + 1} onClick={toggleSidebar}>
                  <h1 className="ml-4 cursor-pointer p-2 rounded-md mt-1 text-[20px] text-[#484C52] font-normal">
                    {item.name}
                  </h1>
                </Link>
              )
            })}
          </div>

          <div className="my-2 bg-[#C4C4C4] h-[1px]"></div>

          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  "
            onClick={toggleLanguageSubMenu}
          >
            <div className="flex justify-between w-full items-center">
              <span className="text-[20px] ml-4 text-[#484C52] font-medium">
                {NavLinksLanguage.name}
              </span>
              <span
                className={`text-sm ${
                  isLanguageSubMenuHidden ? 'rotate-0' : 'rotate-180'
                }`}
              >
                <ChevronDown className="text-[#484C52]" />
              </span>
            </div>
          </div>

          <div
            className={`text-left text-sm mt-2 w-4/5 mx-auto text-[#484C52] font-bold ${
              isLanguageSubMenuHidden ? 'hidden' : ''
            }`}
            id=""
          >
            {NavLinksLanguage.pathList.map((item, index) => {
              return (
                <Link
                  href={''}
                  key={index + 1}
                  className="flex justify-start gap-3 w-full items-center mt-3 ml-6 cursor-pointer"
                >
                  <Image
                    src={item.icon}
                    width={25}
                    height={25}
                    alt="language-logo"
                  />
                  <h1 className="text-[20px] text-[#484C52] font-normal">
                    {item.name}
                  </h1>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Sidebar
