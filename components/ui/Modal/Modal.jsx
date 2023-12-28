import { useRef, useEffect, useCallback, useContext } from 'react'
import s from './Modal.module.css'
import FocusTrap from '@lib/focus-trap'
import { Cross } from '@components/icons'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { GlobalContext } from 'Context/Context'
import { useUI } from '../context'
import cn from 'clsx'

const Modal = ({ children, onClose }) => {
  const { setUIView, uiView, modalView } = useUI()
  const { setIsLogoutModalShow, isLogoutModalShow } = useContext(GlobalContext)
  const ref = useRef()

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        setIsLogoutModalShow(false)
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  const handleCloseModal = () => {
    setUIView('SIGN_UP_VIEW')
    onClose()
  }

  return (
    <div className={s.root}>
      <div
        className={cn(
          s.modal,
          `${
            modalView === 'FILTERS_VIEW' && 'p-0 rounded-none md:rounded-t-xl'
          }`
        )}
        role="dialog"
        ref={ref}
      >
        {!isLogoutModalShow && (
          <button
            onClick={handleCloseModal}
            aria-label="Close panel"
            className={cn(
              s.close,
              `${uiView === 'PHONE_LOGIN_VIEW' && 'hidden'} ${
                modalView === 'FILTERS_VIEW' && 'hidden'
              }  ${modalView === 'DELETE_MODAL' && 'hidden'} ${
                modalView === 'LOCATION_PROVIDER_VIEW' && 'hidden'
              }`
            )}
          >
            <Cross className="h-6 w-6 bg-accent-8 text-white rounded-full hover:bg-accent-6" />
          </button>
        )}
        <FocusTrap focusFirst>{children}</FocusTrap>
      </div>
    </div>
  )
}

export default Modal

/*
KT: This is the centralized modal component. To use it go to Layout and define your desired modal
*/
