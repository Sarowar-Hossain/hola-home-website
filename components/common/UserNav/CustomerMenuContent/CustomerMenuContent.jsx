import cn from 'clsx'
import { useRouter } from 'next/router'
import s from './CustomerMenuContent.module.css'
import {
  DropdownContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@components/ui/Dropdown/Dropdown'
import { useState } from 'react'

const LINKS = [
  {
    id: 1,
    name: 'My bookings',
    href: '/profile/bookings',
  },
  {
    id: 2,
    name: 'My Profile',
    href: '/profile',
  },
  {
    id: 3,
    name: 'Bookmarks',
    href: '/profile/bookmarks',
  },
  {
    id: 5,
    name: 'My Properties',
    href: '/profile/my-properties',
  },
]

const HelpNavLink = {
  name: 'Help',
  pathList: [
    {
      id: 1,
      name: 'Contact Us',
      href: '/contact',
    },
    {
      id: 2,
      name: 'Report a bug',
      href: '/report-bug',
    },
  ],
}

export default function CustomerMenuContent() {
  const router = useRouter()
  const { pathname } = useRouter()
  const [showSubMenu, setShowSubMenu] = useState(false)

  function handleClick(_, href) {
    router.push(href)
  }

function handleHelpClick(e) {
  setShowSubMenu(!showSubMenu)
  e.stopPropagation()
}

  return (
    <DropdownContent
      sideOffset={10}
      id="CustomerMenuContent"
      className="rounded-lg -ms-32 mt-2 border min-w-[170px] border-[#C4C4C4]"
    >
      {LINKS.map(({ name, href }) => (
        <DropdownMenuItem key={href}>
          <a
            className={cn(s.link, { [s.active]: pathname === href })}
            onClick={(e) => handleClick(e, href)}
          >
            {name}
          </a>
        </DropdownMenuItem>
      ))}

      {/* Submenu for Help */}
      {/* <DropdownMenuItem>
      <p
        className={cn(s.link, 'justify-between', { [s.active]: showSubMenu })}
        onPointerDown={handleHelpClick}
      >
        {HelpNavLink.name}
        <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
          {showSubMenu ? '▲' : '▼'}
        </div>
      </p>
      {showSubMenu && (
        <DropdownMenuGroup>
          {HelpNavLink.pathList.map(({ id, name, href }) => (
            <DropdownMenuItem key={id}>
              <a
                className={cn(s.link, { [s.active]: pathname === href })}
                onClick={(e) => handleClick(e, href)}
              >
                {name}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      )}
    </DropdownMenuItem> */}
    
    {/* Logout */}
    <DropdownMenuItem>
      <p className={cn(s.link, 'justify-between')} onClick={handleHelpClick}>
        Logout
      </p>
    </DropdownMenuItem>
    </DropdownContent>
  )
}
