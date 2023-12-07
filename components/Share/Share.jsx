import Card from '@components/common/Card/Card'
import { Button, Text } from '@components/ui'
import { allProperty } from 'data/AllProperty'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

const Share = () => {
  const router = useRouter()

  const copyToClipboard = () => {
    const link = router.asPath
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success('Link copied to clipboard!')
      })
      .catch((err) => {
        toast.error('Failed to copy the link')
      })
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10 md:w-[60vw]">
      <Text className='text-[#484C52]' variant="pageHeading">Share Property</Text>
      <div className="max-w-[370px]">
        {allProperty?.slice(0, 1)?.map((property, index) => (
          <Card property={property} key={index + 1} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
        <div className='sm:w-[70%]'>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="text"
            readOnly
            value={router?.asPath}
          />
        </div>
        <Button className="sm:w-[30%]" onClick={copyToClipboard} variant="slim">
          Copy Link
        </Button>
      </div>
    </div>
  )
}

export default Share
