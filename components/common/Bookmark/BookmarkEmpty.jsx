import { Button } from '@components/ui'
import { useRouter } from 'next/router'
import React from 'react'

const BookmarkEmpty = () => {
  const router = useRouter()
  return (
    <div className="text-accent-8 space-y-7 md:space-y-11 mt-6 md:mt-16 px-4">
      <h1 className="font-medium md:font-normal text-2xl md:text-4xl">
        Bookmarks
      </h1>
      <div className="space-y-4 md:space-y-7">
        <p className="font-medium md:font-normal text-2xl md:text-4xl">
          Create your first bookmark
        </p>
        <p className="font-normal text-xl pb-5 md:pb-0">
          As you search, click the bookmark icon to save your favorite places
          and Experiences to a bookmarks.
        </p>
        <Button
          onClick={() => router.push('/')}
          className=" px-6 py-2 rounded-md text-lg font-semibold bg-primary text-accent-7"
        >
          Start Searching
        </Button>
      </div>
    </div>
  )
}

export default BookmarkEmpty
