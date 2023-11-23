import { createContext, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  // states of reservartion
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [confirmPay, setConfirmPay] = useState(false)
  const [bookingPage, setBookingPage] = useState(true)

  // bookmark data
  const [bookmarkList, setBookMarkList] = useState([])

  //   Search state
  const [showSearch, setShowSearch] = useState(false)

  // Profile states
  const [profilePage, setProfilePage] = useState(true)
  const [deleteAccount, setDeleteAccount] = useState(false)
  const [confirmDelection, setConfirmDelection] = useState(false)

  // Property details
  const [allReview, setAllReview] = useState(false)
  // const [propertyDetails, setPropertyDetails] = useState(true)

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
    // propertyDetails,
    // setPropertyDetails,
    bookmarkList,
    setBookMarkList,
  }

  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  )
}
