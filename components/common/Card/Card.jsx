import Image from 'next/image'
import React, { useState, useRef, useEffect, useContext } from 'react'
import { Autoplay, Pagination, A11y, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import Dot from '@components/icons/Dot'
import CardStar from '@components/icons/CardStar'
import Bookmark from '@components/icons/Bookmark'
import { GlobalContext } from 'Context/Context'
import { useUI } from '@components/ui'
import { useRouter } from 'next/router'

const Card = ({ property }) => {
  const [bookmark, setBookmark] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const {
    bookmarkList,
    setBookMarkList,
    setCurrentBookmarkItem,
    bookmarkLength,
  } = useContext(GlobalContext)
  const swiperRef = useRef(null)
  const { openModal, setModalView, closeModal } = useUI()
  const {
    imageUrlList,
    totalRating,
    averageRating,
    type,
    title,
    propertyDetails,
    priceOf1Day,
    onOfBathrooms,
    onOfBedrooms,
    onOfBeds,
    onOfGuests,
    id
  } = property

  const handleBookMark = (id) => {
    if (bookmarkList.find((item) => item === id)) {
      // const updateData = bookmarkList.filter((pt) => pt.id !== data.id)
      setCurrentBookmarkItem(id)
      openModal(), setModalView('BOOKMARKMODAL_VIEW')
      //   setBookmark(false)
    } else {
      setBookMarkList([...bookmarkList, id])
      //   setBookmark(true)
    }
  }

  useEffect(() => {
    if (swiperRef.current && isHovered && !swiperRef.current.autoplay.running) {
      swiperRef.current.autoplay.start()
    } else if (
      swiperRef.current &&
      !isHovered &&
      swiperRef.current.autoplay.running
    ) {
      swiperRef.current.autoplay.stop()
    }
  }, [isHovered])

  return (
    <div
      className="slider-container relative mx-auto max-w-[360px] rounded-t-xl md:w-full border rounded-lg shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        style={{
          '--swiper-pagination-color': '#FCCF12',
          '--swiper-pagination-bullet-inactive-color': '#999999',
          '--swiper-pagination-bullet-inactive-opacity': '1',
        }}
        modules={[Autoplay, Pagination, A11y, FreeMode]}
        spaceBetween={10}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {imageUrlList?.map((image, i) => (
          <SwiperSlide key={i}>
            <div>
              <Link href={`/properties/${property?.id}`}>
                <Image
                  src={image}
                  height={280}
                  width={415}
                  alt="Carousel Image"
                  className='object-cover  min-h-[280px] max-h-min rounded-md'
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <CardStar />
          <p className="text-xl font-semibold">{averageRating}</p>
          <p className="text-[#878787] font-normal">({totalRating} reviews)</p>
          <p className="italic text-[#878787] font-normal">{type}</p>
        </div>
        <Link href={`/properties/${property?.id}`}>
          <p className="mt-1 text-2xl font-bold hover:text-accent-5 hover:underline">
            {title}
          </p>
        </Link>
        <ul className={`mt-2 flex items-center gap-2`}>
          <li className="flex items-center justify-center gap-2">
            {onOfGuests} Sleeps
            <Dot className={`w-[3px] h-[3px]`} />
          </li>
          <li className="flex items-center justify-center gap-2">
            {onOfBedrooms} bedroom
            <Dot className={`w-[3px] h-[3px]`} />
          </li>
          <li className="flex items-center justify-center gap-2">{onOfBeds} beds</li>
        </ul>
        <p className="my-2 font-semibold">${priceOf1Day} per night</p>
        <p className="text-[#878787]">
          <span className="text-2xl font-bold text-[#484C52]">
            ${priceOf1Day}
          </span>{' '}
          total
        </p>
      </div>
      <div
        onClick={() => handleBookMark(property?.id)}
        className={`absolute ${
          bookmarkList.some((item) => item === property.id)
            ? 'bg-white h-[35px] w-[30px] flex justify-center items-center rounded-md'
            : ''
        } right-3 top-3 z-10 cursor-pointer`}
      >
        <Bookmark
          fill={
            bookmarkList.some((item) => item === property.id)
              ? '#FCCF12'
              : '#313131B2'
          }
        />
      </div>
    </div>
  )
}

export default Card
