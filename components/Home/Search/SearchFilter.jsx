import { Searchbar } from '@components/common'
import { useRouter } from 'next/router'
import { useUI } from '@components/ui/context'

import React from 'react'
import { Text } from '@components/ui'
import FilterButton from '../Filter/FilterButton'

const SearchFilter = ({ view }) => {
  const {
    displaySidebar,
    setModalView,
    openModal,
    setSidebarView,
    openSidebar,
  } = useUI()
  const router = useRouter()

  const filterView = () => {
    if (view === 'lg') {
      setModalView('FILTER_VIEW')
      openModal()
    } else {
      setSidebarView('FILTER_MENU_VIEW')
      openSidebar()
    }
  }

  return (
    <>
      <section
        className={`container w-full mx-auto flex items-center justify-center lg:grid lg:grid-cols-12   ${
          displaySidebar ? 'pt-0 md:pt-10' : 'pt-10'
        }`}
      >
        {/* <div className="md:col-span-3"></div> */}
        {/* search bar */}
          <Searchbar
            className={`h-[48px] rounded-lg border-[#FCCF12]  w-full lg:w-[750px] `}
          />
        {/* filter button */}
        <div className='hidden lg:inline-block'>
          <FilterButton view={view} filterView={filterView} />
        </div>
      </section>
      {/* <div className="text-center">
        <Text variant="heroBody">Toronto, Ontario</Text>
        <p className="text-sm font-normal lg:text-lg">20 properties</p>
      </div> */}
    </>
  )
}

export default SearchFilter
