import cn from 'clsx'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { Moon, Sun } from '@components/icons'
import s from './CustomerMenuContent.module.css'
import {
  DropdownContent,
  DropdownMenuItem,
} from '@components/ui/Dropdown/Dropdown'
import { Button, Text } from '@components/ui'
import { useSession, signIn, signOut } from 'next-auth/react'

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
    id: 2,
    name: 'My Properties',
    href: '/profile/my-properties',
  },
]

export default function CustomerMenuContent() {
  const router = useRouter()
  const { pathname } = useRouter()
  const { data: session } = useSession()
  function handleClick(_, href) {
    router.push(href)
  }

  return (
    <DropdownContent
      sideOffset={10}
      id="CustomerMenuContent"
      className="rounded-lg -ms-32 mt-2 border min-w-[170px]  border-[#C4C4C4]"
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
      <DropdownMenuItem>
        <p
          className={cn(s.link, 'justify-between')}
          // onClick={() => }
        >
          Logout
        </p>
      </DropdownMenuItem>

      <DropdownMenuItem>
        {session && (
          <>
            <Text
              variant="body"
              className={cn(
                s.link,
                'border-t border-accent-2 mt-4 flex flex-col gap-2 text-start'
              )}
            >
              <span>{session?.user?.name}</span>
              <span>{session?.user?.email}</span>
            </Text>
            <Button
              variant="naked"
              onClick={() => signOut()}
              className={cn(s.link, '')}
            >
              Sign out
            </Button>
          </>
        )}
      </DropdownMenuItem>
    </DropdownContent>
  )
}
