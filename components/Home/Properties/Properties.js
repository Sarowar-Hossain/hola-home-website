import { Searchbar } from '@components/common'
import Card from '@components/common/Card/Card'
import { Location } from '@components/icons'
import { GlobalContext } from 'Context/Context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

const Properties = () => {
  const router = useRouter()
  const {
    showSearch,
    properties,
    searchSuggestion,
    searchResult,
    setSearchResult,
    searchSuggestionShow,
    setSearchSuggestionShow,
  } = useContext(GlobalContext)
  const [searchText, setSearchText] = useState(null)

  const combinedDataLength = searchResult?.length || properties?.length

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="hidden lg:inline-block w-full lg:w-1/2">
          {showSearch && (
            <Searchbar setSearchText={setSearchText} searchText={searchText} />
          )}
        </div>
        <div className="inline-block lg:hidden w-full">
          <Searchbar setSearchText={setSearchText} searchText={searchText} />
        </div>
        <div
          className={`${
            searchSuggestion?.length > 0 && searchSuggestionShow
              ? 'inline-block'
              : 'hidden'
          } bg-white flex flex-col w-2/3 lg:w-2/6 rounded-xl absolute top-12 z-50 space-y-3 py-6`}
        >
          {searchSuggestion?.slice(0, 8)?.map((item, index) => {
            return (
              <Link
                href={`/properties/${item.id}`}
                target="_blank"
                key={index}
                className="flex justify-start gap-8 items-center py-1 rounded-xl px-5 hover:bg-accent-2 cursor-pointer"
              >
                <Location className="h-[25px] w-[20px] " />
                <div className="">
                  <p>
                    Name:{' '}
                    <span className="font-semibold text-accent-7">
                      {item.hotelName}
                    </span>{' '}
                  </p>
                  <p>
                    {' '}
                    Location:{' '}
                    <span className="font-semibold text-accent-7">
                      {item.location}
                    </span>{' '}
                  </p>
                </div>
              </Link>
            )
          })}

          <div
            className={`flex justify-center items-center ${
              searchSuggestion?.length > 8 ? 'inline-block' : 'hidden'
            }`}
          >
            <button className={`underline font-medium hover:text-accent-5 `}>
              Show More
            </button>
          </div>
        </div>

        {searchText && searchSuggestion?.length === 0 && (
          <div className="bg-white flex justify-center items-center font-medium text-lg mx-auto w-2/3 lg:w-2/6 rounded-xl text-accent-6 absolute top-12 z-50 py-6">
            No data found!
          </div>
        )}
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-2 pb-10 ">
        {searchResult?.length > 0
          ? searchResult
              ?.slice(0, 12)
              .map((property, index) => (
                <Card property={property} key={index + 1} />
              ))
          : properties
              .slice(0, 12)
              .map((property, index) => (
                <Card property={property} key={index + 1} />
              ))}
      </div>

      {combinedDataLength > 11 && (
        <button className="hover:bg-primary px-6 py-2 rounded-full font-bold hover:text-accent-7 bg-white border-2 border-primary text-[#FCCF12]">
          Show More
        </button>
      )}
    </div>
  )
}

export default Properties
