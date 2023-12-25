import { Searchbar } from '@components/common'
import Card from '@components/common/Card/Card'
import CommonLoader from '@components/common/CommonLoader/CommonLoader'
import CardSkeleton from '@components/common/Skeleton/CardSkeleton'
import { DownArrow, Filter, Location } from '@components/icons'
import { Text, useUI } from '@components/ui'
import { GlobalContext } from 'Context/Context'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import useSWR from 'swr'

const Properties = () => {
  const router = useRouter()
  const skeletonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const { setModalView, openModal } = useUI()
  const {
    showSearch,
    properties,
    searchSuggestion,
    searchResult,
    setSearchResult,
    searchSuggestionShow,
    setSearchSuggestionShow,
    searchLoader,
    setSearchLoader,
  } = useContext(GlobalContext)
  const [searchText, setSearchText] = useState(null)

  const apiUrl =
    'https://us-central1-hola-home.cloudfunctions.net/propertiesApis'
  // const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(apiUrl, fetcher)

  const combinedDataLength = searchResult?.length || properties?.length

  const handleOpenFilters = () => {
    openModal()
    setModalView('FILTERS_VIEW')
  }

  return (
    <div className="flex items-center justify-center">
      {error ? (
        <p>error screen</p>
      ) : (
        <div>
          {!data ? (
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-2 pb-10 ">
              <CardSkeleton data={skeletonData} />
              {/* <CommonLoader /> */}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mb-6">
              {' '}
              <div className="relative w-full flex flex-col items-center justify-center">
                <div className="hidden lg:inline-block w-full lg:w-1/2">
                  {showSearch && (
                    <div>
                      <Searchbar
                        setSearchText={setSearchText}
                        searchText={searchText}
                      />
                      <div
                        onClick={handleOpenFilters}
                        className="absolute right-3 top-2 flex items-center gap-1 font-semibold border-2 border-[#DDD] hover:border-[#b8b8b8] active:border-[#DDD] px-4 py-1 rounded-lg cursor-pointer"
                      >
                        <Filter />
                        <Text>Filters</Text>
                        <DownArrow />
                      </div>
                    </div>
                  )}
                </div>
                <div className="lg:hidden w-full flex justify-center">
                  <Searchbar
                    setSearchText={setSearchText}
                    searchText={searchText}
                  />
                  <div
                    onClick={handleOpenFilters}
                    className="flex items-center gap-1 font-semibold border-2 border-[#DDD] hover:border-[#b8b8b8] active:border-[#DDD] px-4 py-1 rounded-lg cursor-pointer mr-8"
                  >
                    <Filter />
                    <Text>Filters</Text>
                    <DownArrow />
                  </div>
                </div>
                <div
                  className={`${
                    searchSuggestion?.length > 0 && searchSuggestionShow
                      ? 'inline-block'
                      : 'hidden'
                  } bg-white flex flex-col w-2/3 lg:w-2/6 rounded-xl absolute top-12 z-40  py-6 `}
                >
                  {searchLoader ? (
                    <p>loading...</p>
                  ) : (
                    <>
                      {' '}
                      {searchSuggestion?.slice(0, 8)?.map((item, index) => {
                        return (
                          <Link
                            href={`/properties/${item.id}`}
                            target="_blank"
                            key={index}
                            className="flex justify-start gap-8 items-center py-2 px-5 hover:bg-accent-2 cursor-pointer border-b"
                          >
                            <Location className="h-[25px] w-[20px] " />

                            <div className="">
                              <p>
                                Name:{' '}
                                <span className="font-semibold text-accent-7">
                                  {item.title}
                                </span>{' '}
                              </p>
                              <p>
                                {' '}
                                Location:{' '}
                                <span className="font-semibold text-accent-7">
                                  {item.country}, {item.city}
                                </span>{' '}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </>
                  )}

                  <div
                    className={`flex justify-center items-center shadow-xl ${
                      searchSuggestion?.length > 8 ? 'inline-block' : 'hidden'
                    }`}
                  >
                    <button
                      className={`underline font-medium hover:text-accent-5 `}
                    >
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
                  : data?.Data.slice(0, 12).map((property, index) => (
                      <Card property={property} key={index + 1} />
                    ))}
              </div>
              {combinedDataLength > 11 && (
                <button className="hover:bg-primary px-6 py-2 rounded-full font-bold hover:text-accent-7 bg-white border-2 border-primary text-[#FCCF12]">
                  Show More
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Properties
