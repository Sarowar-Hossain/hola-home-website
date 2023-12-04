import React, { useContext, useEffect, useState } from "react";
export const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  // states of reservartion
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [confirmPay, setConfirmPay] = useState(false);
  const [bookingPage, setBookingPage] = useState(true);

  //   Search state
  const [showSearch, setShowSearch] = useState(false);

  // Profile states
  const [profilePage, setProfilePage] = useState(true);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [confirmDelection, setConfirmDelection] = useState(false);

  // Property details
  const [allReview, setAllReview] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(true);

  return (
    <AppContext.Provider
      value={{
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
        propertyDetails,
        setPropertyDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
