import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useUI } from '@components/ui/context'
import { Sidebar, LoadingDots } from '@components/ui'
import { MenuSidebarView } from '@components/common/UserNav'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const LoginView = dynamic(() => import('@components/auth/LoginModal'), {
  ...dynamicProps,
})
const ShareView = dynamic(() => import('@components/Share/Share'), {
  ...dynamicProps,
})
const LoginAlertView = dynamic(
  () => import('@components/LoginAlert/LoginAlert'),
  {
    ...dynamicProps,
  }
)
const ReviewSuccessView = dynamic(
  () => import('@components/ReviewSubmitModal/ReviewSubmitModal'),
  {
    ...dynamicProps,
  }
)

const BookmarkView = dynamic(
  () => import('@components/common/BookmarkModal/BookmarkModal'),
  {
    ...dynamicProps,
  }
)
const DetailsPageBookmarkView = dynamic(
  () => import('../BookmarkModal/DetailsPageBookmark'),
  {
    ...dynamicProps,
  }
)

const LogoutView = dynamic(
  () => import('@components/ModalComponent/LogoutModal/LogoutModal'),
  {
    ...dynamicProps,
  }
)

const ForgotPassword = dynamic(
  () => import('@components/auth/ForgotPassword'),
  {
    ...dynamicProps,
  }
)
const FilterModalView = dynamic(
  () => import('@components/ModalComponent/FilterModal/FilterModal'),
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
      {modalView === 'BOOKMARKMODAL_VIEW' && <BookmarkView />}
      {modalView === 'SHARE_VIEW' && <ShareView />}
      {modalView === 'REVIEW_ALERT' && <LoginAlertView />}
      {modalView === 'REVIEW_SUCCESS_VIEW' && <ReviewSuccessView />}
      {modalView === 'LOGOUTMODAL_VIEW' && <LogoutView />}
      {modalView === 'DETAILS_PAGE_BOOKMARK_VIEW' && (
        <DetailsPageBookmarkView />
      )}
      {modalView === 'FILTERS_VIEW' && <FilterModalView />}
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
        <Toaster position="top-center" />
        <Navbar />
        <main className="fit min-h-screen">{children}</main>
        <Footer />
        <ModalUI />
        <SidebarUI links={navBarlinks} />
      </div>
    </>
  )
}

export default Layout

/*
Create a component that you want to show as a modal and call that dynamically (Please follow 23 - 25 line). There is a UI context (setModalView) for modal view, you have to set it from your component where you want to show the modal and define that modal view and component in a condition (Please follow from 43 no. line in this page). 
Example of calling setModalView through the UI context:   const { setModalView, closeModal } = useUI(); To close the modal call that closeModal function in your onClick handler
*/
