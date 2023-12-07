import BookmarkEmpty from '@components/common/Bookmark/BookmarkEmpty'
import Card from '@components/common/Card/Card'
import { GlobalContext } from 'Context/Context'
import React, { useContext } from 'react'

const index = () => {
  const { bookmarkList } = useContext(GlobalContext)

  return (
    <div className="container mx-auto">
      {bookmarkList?.length == 0 ? (
        <BookmarkEmpty />
      ) : (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-2 pb-10 ">
          {bookmarkList.slice(0, 12).map((item, index) => {
            return <Card property={item} key={index + 1} />
          })}
        </div>
      )}
      <div className='flex justify-center my-6'>
        {bookmarkList?.length >= 12 ? (
          <button className="hover:bg-primary px-6 py-2 rounded-full font-bold hover:text-accent-7 bg-white border-2 border-primary text-[#FCCF12]">
            Show More
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default index
