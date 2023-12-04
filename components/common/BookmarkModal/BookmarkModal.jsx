import React from 'react'

const BookmarkModal = () => {
  return (
    <div className=" bg-white rounded-md flex flex-col justify-center items-center  gap-3 text-center">
      <h1>Remove Bookmark</h1>
      <p>Are you sure you want to remove the bookmark?</p>
      <div className="flex justify-center gap-10 items-center">
        <button className="border  border-accent-6 px-6  rounded-md font-medium bg-white text-accent-7">
          Cancel
        </button>
        <button className=" px-6 py-0.5 rounded-md font-medium bg-primary text-accent-7">
          Remove
        </button>
      </div>
    </div>
  )
}

export default BookmarkModal
