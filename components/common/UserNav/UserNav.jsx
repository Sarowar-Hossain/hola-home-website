import cn from 'clsx'
import Link from 'next/link'
import s from './UserNav.module.css'
import { useUI } from '@components/ui/context'
import { ChevronDown, Cross, Globe, Menu } from '@components/icons'
import CustomerMenuContent from './CustomerMenuContent'
import React from 'react'
import {
  Dropdown,
  DropdownTrigger as DropdownTriggerInst,
  Button,
} from '@components/ui'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useSession, signIn, signOut } from 'next-auth/react'

import Languages from '@components/Language/Languages'
import Dp from '@components/icons/Dp'

const UserNav = ({ className }) => {
  const {
    openModal,
    setSidebarView,
    openSidebar,
    closeSidebar,
    displaySidebar,
    setModalView,
    sidebarView,
  } = useUI()
  const { data: user } = useSession()
  const DropdownTrigger = user ? DropdownTriggerInst : React.Fragment

  return (
    <nav className={cn(s.root, className)}>
      <div className="hidden lg:block">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <span
              className="flex gap-2 items-center justify-center border rounded-2xl px-2 py-1 border-[#484C52] text-[#484C52] hover:cursor-pointer hover:border-white"
              onClick={() => {}}
            >
              <Globe />
              <ChevronDown className="h-5" />
            </span>
          </DropdownMenu.Trigger>
          <Languages />
        </DropdownMenu.Root>
      </div>
      
      <ul className={`${s.list} ml-5 space-x-0 rounded-xl  p-1 lg:border-none`}>
        <li className={s.mobileMenu}>
          {!displaySidebar ? (
            <Button
              className={s.item}
              aria-label="Menu"
              variant="naked"
              onClick={() => {
                setSidebarView('MOBILE_MENU_VIEW')
                openSidebar()
              }}
            >
              <Menu className="h-8 w-8" />
            </Button>
          ) : (
            <Button
              variant="naked"
              onClick={() => {
                closeSidebar()
              }}
              aria-label="Close"
              className={`${s.item} flex items-center`}
            >
              <Cross className="h-8 w-8 stroke-black" />
            </Button>
          )}
        </li>

        <li className={s.item}>
          <div className="hidden  space-x-2  p-1 lg:flex  gap-2 items-center justify-center border rounded-2xl px-2 py-1 border-[#484C52] text-[#484C52]  hover:border-white">
            <Dropdown>
              <DropdownTriggerInst>
                <span className="cursor-pointer">
                  <Menu className="h-5 w-5" />
                </span>
              </DropdownTriggerInst>
              <CustomerMenuContent />
            </Dropdown>
            <span
              aria-label="Menu"
              className={`${s.avatarButton} cursor-pointer`}
              onClick={() => {
                user ? null : openModal()
                setModalView('LOGIN_VIEW')
              }}
            >
              <Dp />
            </span>
          </div>
        </li>

        {/* <li className={s.item}>
          <Link href="/auth/LoginView" className="lg:hidden">
            <span aria-label="Menu" className={`${s.avatarButton}`}>
            </span>
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default UserNav
