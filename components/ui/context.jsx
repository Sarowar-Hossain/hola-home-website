import React, { useCallback, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'

const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'AUTH_MODAL',
  uiView: 'SIGN_UP_VIEW',
  displayallScreenModal: false,
  allScreenModalView: '',
  sidebarView: 'CART_VIEW',
  userAvatar: '',
}

export const UIContext = React.createContext(initialState)

UIContext.displayName = 'UIContext'

function uiReducer(state, action) {
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      }
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      }
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      }
    }
    case 'OPEN_ALLSCREENMODAL': {
      return {
        ...state,
        displayallScreenModal: true,
        displaySidebar: false,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      }
    }
    case 'CLOSE_ALLSCREENMODAL': {
      return {
        ...state,
        displayallScreenModal: false,
      }
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      }
    }
    case 'SET_UI_VIEW': {
      return {
        ...state,
        uiView: action.view,
      }
    }
    case 'SET_ALLSCREENMODAL_VIEW': {
      return {
        ...state,
        allScreenModalView: action.view,
      }
    }
    case 'SET_SIDEBAR_VIEW': {
      return {
        ...state,
        sidebarView: action.view,
      }
    }
    case 'SET_USER_AVATAR': {
      return {
        ...state,
        userAvatar: action.value,
      }
    }
  }
}

export const UIProvider = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const openSidebar = useCallback(
    () => dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch]
  )
  const closeSidebar = useCallback(
    () => dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch]
  )
  const toggleSidebar = useCallback(
    () =>
      state.displaySidebar
        ? dispatch({ type: 'CLOSE_SIDEBAR' })
        : dispatch({ type: 'OPEN_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  )
  const closeSidebarIfPresent = useCallback(
    () => state.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' }),
    [dispatch, state.displaySidebar]
  )

  const openDropdown = useCallback(
    () => dispatch({ type: 'OPEN_DROPDOWN' }),
    [dispatch]
  )
  const closeDropdown = useCallback(
    () => dispatch({ type: 'CLOSE_DROPDOWN' }),
    [dispatch]
  )

  const openModal = useCallback(
    () => dispatch({ type: 'OPEN_MODAL' }),
    [dispatch]
  )
  const openAllScreenModal = useCallback(
    () => dispatch({ type: 'OPEN_ALLSCREENMODAL' }),
    [dispatch]
  )
  const closeModal = useCallback(
    () => dispatch({ type: 'CLOSE_MODAL' }),
    [dispatch]
  )
  const closeAllScreenModal = useCallback(
    () => dispatch({ type: 'CLOSE_ALLSCREENMODAL' }),
    [dispatch]
  )

  const setUserAvatar = useCallback(
    (value) => dispatch({ type: 'SET_USER_AVATAR', value }),
    [dispatch]
  )

  const setModalView = useCallback(
    (view) => dispatch({ type: 'SET_MODAL_VIEW', view }),
    [dispatch]
  )
  const setUIView = useCallback(
    (view) => dispatch({ type: 'SET_UI_VIEW', view }),
    [dispatch]
  )
  const setAllScreenModalView = useCallback(
    (view) => dispatch({ type: 'SET_ALLSCREENMODAL_VIEW', view }),
    [dispatch]
  )

  const setSidebarView = useCallback(
    (view) => dispatch({ type: 'SET_SIDEBAR_VIEW', view }),
    [dispatch]
  )

  const value = useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openDropdown,
      closeDropdown,
      openModal,
      closeModal,
      openAllScreenModal,
      closeAllScreenModal,
      setModalView,
      setUIView,
      setAllScreenModalView,
      setSidebarView,
      setUserAvatar,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  )

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
)
