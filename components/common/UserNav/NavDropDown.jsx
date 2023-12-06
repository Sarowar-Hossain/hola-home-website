import { ChevronDown } from '@components/icons'
import { GlobalContext } from 'Context/Context'
import { HelpNavLink, MenuLinks } from 'data/NavLinks'
import Link from 'next/link'
import React, { useContext, useState, useEffect, useRef } from 'react'

const NavDropDown = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContext)
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsMenuOpen])

  const toggle = () => {
    setIsHelpOpen(!isHelpOpen)
  }

  const handleDropMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div
      ref={dropdownRef}
      className="w-[150px] bg-white rounded-lg z-50 shadow-xl"
    >
      {MenuLinks.map((item, index) => {
        return (
          <div
            key={index}
            className="border-b h-12 w-full flex items-center font-medium text-[#848484] hover:text-primary"
            onClick={() => {
              isMenuOpen && item.href !== '/help' ? handleDropMenu() : toggle()
            }}
          >
            <Link
              href={item.href === '/help' ? '' : item.href}
              className="px-3 flex items-center justify-between w-full"
            >
              {item.name}
              {item.href === '/help' && (
                <ChevronDown
                  className={`duration-200 ${
                    isHelpOpen ? 'rotate-180 ' : 'rotate-0'
                  }`}
                />
              )}
            </Link>
          </div>
        )
      })}
      {isHelpOpen && (
        <div className="">
          {HelpNavLink.map((item, index) => {
            return (
              <div
                key={index}
                onClick={handleDropMenu}
                className="ms-4 h-8 my-2 flex items-center font-medium text-[#848484] hover:text-primary"
              >
                <Link href={item.href} className="px-3 ">
                  {item.name}
                </Link>
              </div>
            )
          })}
        </div>
      )}
      <div className="h-12 flex items-center font-medium cursor-pointer text-[#848484] hover:text-primary">
        <p className="px-3 " onClick={handleDropMenu}>
          Logout
        </p>
      </div>
    </div>
  )
}

export default NavDropDown
