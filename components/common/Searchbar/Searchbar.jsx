import { memo, useContext, useEffect, useState } from 'react'
import cn from 'clsx'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'
import { GlobalContext } from 'Context/Context'
import useSWR from 'swr'

const Searchbar = ({ className, id = 'search', setSearchText, searchText }) => {
  const router = useRouter()

  const {
    properties,
    setProperties,
    setSearchSuggestion,
    setSearchResult,
    setSearchSuggestionShow,
    setSearchLoader,
    queryURL,
    setQueryURL,
    setIsThereIsAnyFilterQuery,
  } = useContext(GlobalContext)

  console.log(queryURL)

  // const baseUrl = 'http://localhost:5001/hola-home/us-central1'
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const apiUrl = `${baseUrl}/propertiesApis?searchTerms=${searchText}`
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const {
    data: apiSearchResult,
    error: apiError,
    isLoading,
  } = useSWR(apiUrl, fetcher)

  useEffect(() => {
    if (apiSearchResult) {
      if (isLoading) {
        setSearchLoader(true)
      }
      if (apiSearchResult?.Data?.length) {
        setProperties(apiSearchResult?.Data)
        setSearchLoader(false)
      }
    }
  }, [
    // apiSearchResult,
    searchText,
  ])

  const handleSearchSuggestion = async (searchData) => {
    if (searchData?.length) {
      setSearchText(searchData)
      setSearchSuggestionShow(true)
      const refinedSearchResult = apiSearchResult?.Data?.map(
        ({ title, id, country, city, area }) => ({
          id,
          title,
          country,
          city,
          area,
        })
      )
      setSearchSuggestion(refinedSearchResult)
    } else {
      setSearchSuggestionShow(false)
      setSearchSuggestion([])
      setSearchText(null)
    }
  }

  const handleSearchResult = () => {
    if (searchText?.length) {
      const regex = /&searchTerms=[^&]*/g
      setQueryURL((prevQueryURL) => prevQueryURL?.replace(regex, ''))

      setSearchSuggestionShow(false)
      // setSearchResult(apiSearchResult?.Data)

      setQueryURL((prevQueryURL) => prevQueryURL+`&searchTerms=${searchText}`)
      if (queryURL) {
        setIsThereIsAnyFilterQuery(true)
      }
    } else {
      setSearchResult([])
      setSearchText(null)
      setIsThereIsAnyFilterQuery(false)
      console.log('please enter text for searching')
    }
  }

  const handleKeyUp = (e) => {
    e.preventDefault()
    const searchData = e.currentTarget.value
    setSearchText(searchData)
    if (e.key === 'Enter') {
      handleSearchResult()
    } else {
      handleSearchSuggestion(searchData)
    }
  }

  return (
    <div className={cn(s.root, className)}>
      <div className="mx-8">
        <input
          type="text"
          id={id}
          className={s.input}
          placeholder="Start your search"
          defaultValue={searchText}
          onKeyUp={handleKeyUp}
        />
      </div>
      <div
        onClick={handleSearchResult}
        className={`absolute inset-y-0 right-8  pr-3 flex items-center my-1.5 me-2 cursor-pointer py-[10px] px-[10px] bg-[#FCCF12] rounded-full`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="px-auto py-auto"
        >
          <path
            d="M8.875 8.875L12.25 12.25M5.875 10C6.4167 10 6.9531 9.8933 7.45357 9.686C7.95404 9.4787 8.40877 9.17486 8.79182 8.79182C9.17486 8.40877 9.4787 7.95404 9.686 7.45357C9.8933 6.9531 10 6.4167 10 5.875C10 5.3333 9.8933 4.7969 9.686 4.29643C9.4787 3.79596 9.17486 3.34123 8.79182 2.95818C8.40877 2.57514 7.95404 2.2713 7.45357 2.064C6.9531 1.8567 6.4167 1.75 5.875 1.75C4.78098 1.75 3.73177 2.1846 2.95818 2.95818C2.1846 3.73177 1.75 4.78098 1.75 5.875C1.75 6.96902 2.1846 8.01823 2.95818 8.79182C3.73177 9.5654 4.78098 10 5.875 10Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

export default memo(Searchbar)
