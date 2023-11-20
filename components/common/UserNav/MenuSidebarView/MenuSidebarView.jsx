import Link from 'next/link'
import s from './MenuSidebarView.module.css'
import { useUI } from '@components/ui/context'
import SidebarLayout from '@components/common/SidebarLayout'
import Search from '@components/Home/Search'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import CustomerMenuContent from '../CustomerMenuContent'
import FilterSidebar from '@components/Home/Filter/FilterSidebar'
import { NavLinks } from 'data/NavLinks'
import Languages from '@components/Language/Languages'
import { SideNavLinks } from 'data/SideNavLinks'
import { useState } from 'react'
import Sidebar from '@components/common/Sidebar/Sidebar'

export default function MenuSidebarView({ links = [] }) {
  const { closeSidebar, sidebarView } = useUI()

  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  return (
    <SidebarLayout
    // handleClose={() => closeSidebar()}
    >
      {/* <div className={`${s.root}`}>
        {sidebarView === 'MOBILE_MENU_VIEW' ? (
          <nav>
            <ul>
              <li className={s.item}>
                <Search />
              </li>
              {SideNavLinks.map((link, index) => (
                <li
                  key={index}
                  className={`${s.item}`}
                  onClick={() => closeSidebar()}
                >
                  {link.pathList ? (
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger asChild>
                        <a className="font-medium hover:text-white text-[#484C52] text-lg ">
                          {link.name}
                        </a>
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content>
                        {link.pathList.map((subLink, subIndex) => (
                          <DropdownMenu.Item key={subIndex}>
                            <Link
                              href={subLink.path}
                              className="hover:text-white text-[#484C52]"
                            >
                              {subLink.name}
                            </Link>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  ) : (
                    // If no pathList, render a regular Link
                    <Link
                      href={link.path}
                      className="font-medium hover:text-white text-[#484C52]"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <FilterSidebar />
        )}
      </div> */}
      {/* {sidebarView === 'MOBILE_MENU_VIEW' && } */}
    </SidebarLayout>
  )
}
