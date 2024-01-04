import BookmarkEmpty from '@components/common/Bookmark/BookmarkEmpty'
import Card from '@components/common/Card/Card'
import CommonLoader from '@components/common/CommonLoader/CommonLoader'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'


const fetchBookmarks = async () => {
  const userId = localStorage.getItem('userId')
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const { data } = await axios.post(baseUrl + '/manageUsersApis/get-all-bookmarks', { id: userId });
  return data;
};

const index = () => {
  const { data: bookmarkList, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: fetchBookmarks,
  });

  if (isLoading) {
    return (
      <CommonLoader />
    )
  }

  return (
    <div className="container mx-auto">
      {bookmarkList?.length == 0 ? (
        <BookmarkEmpty />
      ) : (
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-2 pb-10 ">
          {bookmarkList?.slice(0, 12)?.map((item, index) => {
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
