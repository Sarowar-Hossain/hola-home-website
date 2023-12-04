import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '@components/ui'
import { UserNav } from '@components/common'
import Image from 'next/image'
import { GlobalContext } from 'Context/Context'
import { NavLinks } from 'data/NavLinks'
import { useContext } from 'react'

const Navbar = ({ links }) => {
  const { showSearch, setShowSearch } = useContext(GlobalContext)

  return (
    <NavbarRoot>
      <Container clean className="container w-full   2xl:w-[98%] xl:w-[93%] mx-auto">
        <div className={s.nav}>
          <div className="flex flex-1 items-center">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Image src="/navlogo.png" height={53} width={113} alt="Logo" />
            </Link>
          </div>
          <nav className="hidden lg:flex items-center gap-10">
            {NavLinks?.map((l, index) => (
              <Link
                href={l.path}
                key={index}
                className=" hover:text-white text-[#484C52]"
              >
                {l.name}
              </Link>
            ))}
            <p
              className=" hover:text-white text-[#484C52]"
              onClick={() => {
                showSearch ? setShowSearch(false) : setShowSearch(true)
              }}
            >
              Search
            </p>
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
