import { allProperty } from 'data/AllProperty'
import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  // for nav menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // for logout modal
  const [isLogoutModalShow, setIsLogoutModalShow] = useState(false)
  const [propertyPageLogModal, setPropertyPageLogModal] = useState(false)

  // states of reservartion
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [confirmPay, setConfirmPay] = useState(false)
  const [bookingPage, setBookingPage] = useState(true)
  // bookmark data
  const [bookmarkList, setBookMarkList] = useState([])
  const [currentBookMarkItem, setCurrentBookmarkItem] = useState(null)
  const [bookmarkLength, setBookmarkLength] = useState()

  //   Search state
  const [showSearch, setShowSearch] = useState(false)
  const [searchLoader, setSearchLoader] = useState(false)
  const [searchSuggestion, setSearchSuggestion] = useState([])
  const [searchSuggestionShow, setSearchSuggestionShow] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  // all property data
  const [properties, setProperties] = useState(allProperty)

  // booking data store
  const [bookingData, setBookingData] = useState({
    adults: 2,
    children: 0,
    stayType: 'night Stay',
  })

  // user booking filter dropdown

  const [isFilterShow, setIsFilterShow] = useState(false)

  // Profile states
  const [profilePage, setProfilePage] = useState(true)
  const [deleteAccount, setDeleteAccount] = useState(false)
  const [confirmDelection, setConfirmDelection] = useState(false)
  // Property details
  const [allReview, setAllReview] = useState(false)
  // const [propertyDetails, setPropertyDetails] = useState(true)

  const [userData, setUserData] = useState(null)

  const [marked, setMarked] = useState(false)
  const [uiLoader, setUiLoader] = useState(false)

  const [bookmarks, setBookmarks] = useState([])

  const info = {
    acceptPolicy,
    setAcceptPolicy,
    confirmPay,
    setConfirmPay,
    bookingPage,
    setBookingPage,
    showSearch,
    setShowSearch,
    deleteAccount,
    setDeleteAccount,
    profilePage,
    setProfilePage,
    confirmDelection,
    setConfirmDelection,
    allReview,
    setAllReview,
    isMenuOpen,
    setIsMenuOpen,
    bookmarkList,
    setBookMarkList,
    isLogoutModalShow,
    setIsLogoutModalShow,
    currentBookMarkItem,
    setCurrentBookmarkItem,
    marked,
    setMarked,
    properties,
    setProperties,
    searchSuggestion,
    setSearchSuggestion,
    searchResult,
    setSearchResult,
    searchSuggestionShow,
    setSearchSuggestionShow,
    propertyPageLogModal,
    setPropertyPageLogModal,
    userData,
    setUserData,
    bookingData,
    setBookingData,
    uiLoader,
    setUiLoader,
    isFilterShow,
    setIsFilterShow,
    bookmarks,
    setBookmarks,
    bookmarkLength,
    setBookmarkLength,
    searchLoader,
    setSearchLoader,
  }

  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  )
}
