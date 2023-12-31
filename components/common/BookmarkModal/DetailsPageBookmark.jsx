import { useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import React, { useContext } from 'react'

const DetailsPageBookmark = () => {
  const { closeModal } = useUI()
  const { setMarked } = useContext(GlobalContext)

  const handleRemoveBookmark = () => {
    setMarked(false)
    closeModal()
  }

  return (
    <div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-3 text-center">
      <h1>Remove Bookmark</h1>
      <p>Are you sure you want to remove the bookmark?</p>
      <div className="flex justify-center gap-10 items-center">
        <button
          onClick={() => closeModal()}
          className="border  border-accent-6 px-6  rounded-md font-medium bg-white text-accent-7"
        >
          Cancel
        </button>
        <button
          onClick={handleRemoveBookmark}
          className=" px-6 py-0.5 rounded-md font-medium bg-primary text-accent-7"
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default DetailsPageBookmark
