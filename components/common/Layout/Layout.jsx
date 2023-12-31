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
import CommonLoader from '../CommonLoader/CommonLoader'
import { useContext } from 'react'
import { GlobalContext } from 'Context/Context'

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

const CancelBooking = dynamic(
  () => import('@components/ModalComponent/BookingCancleModal'),
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
const PropertyPageLogModalView = dynamic(
  () => import('../../Home/PropertyPageModal/PropertyPageModal'),
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

const ContactUsModalView = dynamic(
  () => import('@components/ModalComponent/ContactUsModal'),
  {
    ...dynamicProps,
  }
)

const DeleteModalView = dynamic(
  () => import('@components/ModalComponent/DeleteModal'),
  {
    ...dynamicProps,
  }
)
const LoginNavigate = dynamic(
  () => import('@components/ModalComponent/LoginNavigate/LoginNavigate'),
  {
    ...dynamicProps,
  }
)
const LocationProviderModal = dynamic(
  () =>
    import(
      '@components/ModalComponent/LocationProviderModal/LocationProviderModal'
    ),
  {
    ...dynamicProps,
    ssr: false,
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
  console.log(modalView)
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
      {modalView === 'PROPERTY_DETAILS_PAGE_LOG_VIEW' && (
        <PropertyPageLogModalView />
      )}
      {modalView === 'FILTERS_VIEW' && <FilterModalView />}
      {modalView === 'CONTACT_US' && <ContactUsModalView />}
      {modalView === 'DELETE_MODAL' && <DeleteModalView />}
      {modalView === 'NAVIGATE_LOGIN' && <LoginNavigate />}
      {modalView === 'CANCEL_BOOKING' && <CancelBooking />}
      {modalView === 'LOCATION_PROVIDER_VIEW' && <LocationProviderModal />}
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
  const { uiLoader } = useContext(GlobalContext)
  const navBarlinks = navLinks.slice(0, 2).map((c) => ({
    label: c.name,
    href: `/${c.slug}`,
  }))

  return (
    <>
      <div className={cn(s.root)}>
        <Toaster position="top-center" />
        <div className="mb-[120px]">
          <Navbar />
        </div>
        <main className="fit min-h-screen">{children}</main>
        <Footer />
        <ModalUI />
        {uiLoader && <CommonLoader />}
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
