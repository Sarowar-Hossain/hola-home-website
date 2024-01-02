import { Button, Text } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const NotFound = ({ handleOpenFilters }) => {
  const { queryURL, setQueryURL } = useContext(GlobalContext)
  const router = useRouter()
  return (
    <div className="text-center flex flex-col items-center">
      <Image
        src={'/404.png'}
        height={250}
        width={350}
        alt="booking image"
        className="mx-auto"
      />
      <Text className="text-lg font-medium text-[#0F172A] md:text-xl ">
        Opps !!
      </Text>
      <Text className="my-4  text-sm text-[#484C52] md:text-base opacity-95">
        No nearby properties found!
      </Text>
      <Button
        onClick={handleOpenFilters}
        className="mt-4 w-full p-0 py-1.5 md:w-[200px] text-sm "
        variant="slim"
      >
        Change Filters
      </Button>
      <Button
        onClick={() => setQueryURL()}
        className="mt-2 w-full p-0 py-1.5 md:w-[200px] text-sm border-yellow-500"
        variant="naked"
      >
        Go back to Home page
      </Button>
    </div>
  )
}

export default NotFound
