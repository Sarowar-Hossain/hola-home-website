import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import LoginView from '@components/auth/LoginView'
import { useUI } from '@components/ui/context'
import { Sidebar, LoadingDots } from '@components/ui'
import { MenuSidebarView } from '@components/common/UserNav'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const SignUpView = dynamic(() => import('@components/auth/SignUpView'), {
  ...dynamicProps,
})

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  {
    ...dynamicProps,
  }
)

const FeatureBar = dynamic(() => import('@components/common/FeatureBar'), {
  ...dynamicProps,
})

const Modal = dynamic(() => import('@components/ui/Modal'), {
  ...dynamicProps,
  ssr: false,
})
const ModalView = ({ modalView, closeModal }) => {
  return (
    <Modal onClose={closeModal}>
      {modalView === 'LOGIN_VIEW' && <LoginView />}
      {modalView === 'SIGNUP_VIEW' && <SignUpView />}
      {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
    </Modal>
  )
}

const ModalUI = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return displayModal ? (
    <ModalView modalView={modalView} closeModal={closeModal} />
  ) : null
}

const SidebarView = ({ sidebarView, closeSidebar, links }) => {
  return (
    <Sidebar onClose={closeSidebar}>
      {sidebarView === 'MOBILE_MENU_VIEW' && <MenuSidebarView links={links} />}
    </Sidebar>
  )
}

const SidebarUI = ({ links }) => {
  const { displaySidebar, closeSidebar, sidebarView } = useUI()
  return displaySidebar ? (
    <SidebarView
      links={links}
      sidebarView={sidebarView}
      closeSidebar={closeSidebar}
    />
  ) : null
}
const navLinks = [
  {
    name: 'Home',
    slug: '',
  },
  {
    name: 'Projects',
    slug: 'projects',
  },
  {
    name: 'Blogs',
    slug: 'blogs',
  },
  {
    name: 'Contact',
    slug: 'contact',
  },
]
const Layout = ({ children }) => {
  const navBarlinks = navLinks.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/${c.slug}`,
  }))

  return (
    <>
      <div className={cn(s.root)}>
        <Navbar />
        <main className="fit">{children}</main>
        <Footer />
        <ModalUI />
        <SidebarUI links={navBarlinks} />
      </div>
    </>
  )
}

export default Layout
