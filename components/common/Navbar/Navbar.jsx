import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '@components/ui'
import { UserNav } from '@components/common'
import Image from 'next/image'
import { GlobalContext } from 'Context/Context'
import { NavLinks } from 'data/NavLinks'
import { useContext } from 'react'
import Search from '@components/icons/Search'
import { useRouter } from 'next/router'

const Navbar = ({ links }) => {
  const { showSearch, setShowSearch } = useContext(GlobalContext)
  const router = useRouter()

  return (
    <NavbarRoot>
      <Container clean className="container  mx-auto">
        <div className={s.nav}>
          <div className="flex flex-1 items-center">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Image src="/navlogo.png" height={53} width={113} alt="Logo" />
            </Link>
          </div>
          <nav className="hidden font-medium lg:flex items-center gap-10">
            {NavLinks?.map((l, index) => (
              <Link
                href={l.path}
                key={index}
                className={`${
                  router?.pathname === l.path ? 'text-white' : 'text-[#484C52]'
                } hover:text-white `}
              >
                {l.name}
              </Link>
            ))}
            {router?.pathname === '/' && (
              <p
                className="font-medium hover:text-white text-[#484C52] flex items-center cursor-pointer gap-2"
                onClick={() => {
                  showSearch ? setShowSearch(false) : setShowSearch(true)
                }}
              >
                <Search />
                Search
              </p>
            )}
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-8">
            <UserNav />
          </div>
        </div>
      </Container>
    </NavbarRoot>
  )
}

export default Navbar
