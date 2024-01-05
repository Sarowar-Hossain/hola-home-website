import { useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'

const BookmarkModal = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const { closeModal } = useUI()
  const [loading, setLoading] = useState(false)
  const {
    bookmarkList,
    setBookMarkList,
    currentBookMarkItem,
    setCurrentBookmarkItem,
  } = useContext(GlobalContext)

  const handleRemoveBookmark = async () => {
    if (currentBookMarkItem !== null) {
      console.log(currentBookMarkItem)
      const updatedBookmarks = bookmarkList.filter(
        (item) => item !== currentBookMarkItem
      )
      setBookMarkList(updatedBookmarks)
      const bookmarkIds = JSON.parse(localStorage.getItem('bookmarkIds'))
      const updatedBookmarkIds = bookmarkIds.filter(
        (item) => item !== currentBookMarkItem
      )
      const userId = localStorage.getItem('userId')
      if (updatedBookmarkIds) {
        try {
          setLoading(true)
          const response = await axios.post(
            baseUrl + '/manageUsersApis/update-bookmarks',
            {
              id: userId,
              newPropertyIds: updatedBookmarkIds,
            }
          )
          toast.success('Bookmark removed successfully')
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      }
      setCurrentBookmarkItem(null)
      closeModal()
    }
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
          disabled={loading}
          onClick={handleRemoveBookmark}
          className=" px-6 py-0.5 rounded-md font-medium bg-primary text-accent-7"
        >
          {loading ? 'loading...' : 'Remove'}
        </button>
      </div>
    </div>
  )
}

export default BookmarkModal
