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
  const { bookmarkList, setBookMarkList, setCurrentBookmarkItem } =
    useContext(GlobalContext)
  const swiperRef = useRef(null)
  const { openModal, setModalView, closeModal } = useUI()
  const {
    images,
    reviews,
    hostType,
    hotelName,
    propertyDetails,
    dailyCost,
    totalCost,
  } = property

  const handleBookMark = (data) => {
    if (bookmarkList.find((item) => item?.id === data?.id)) {
      // const updateData = bookmarkList.filter((pt) => pt.id !== data.id)
      setCurrentBookmarkItem(data.id)
      openModal(), setModalView('BOOKMARKMODAL_VIEW')
      //   setBookmark(false)
    } else {
      setBookMarkList([...bookmarkList, data])
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
        {images?.map((image, i) => (
          <SwiperSlide key={i}>
            <div>
              <Link href={`/properties/${property?.id}`}>
                <Image
                  src={image}
                  height={415}
                  width={415}
                  alt="Carousel Image"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <CardStar />
          <p className="text-xl font-semibold">5.0</p>
          <p className="text-[#878787] font-normal">({reviews} reviews)</p>
          <p className="italic text-[#878787] font-normal">{hostType}</p>
        </div>
        <Link href={`/properties/${property?.id}`}>
          <p className="mt-1 text-2xl font-bold hover:text-accent-5 hover:underline">
            {hotelName}
          </p>
        </Link>
        <ul className={`mt-2 flex gap-2`}>
          {propertyDetails?.map((detail, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              {detail}{' '}
              <Dot
                className={`w-[3px] h-[3px] ${
                  propertyDetails?.length - 1 === i ? 'hidden' : 'inline-block'
                }`}
              />
            </li>
          ))}
        </ul>
        <p className="my-2 font-semibold">${dailyCost} per night</p>
        <p className="text-[#878787]">
          <span className="text-2xl font-bold text-[#484C52]">
            ${totalCost}
          </span>{' '}
          total
        </p>
      </div>
      <div
        onClick={() => handleBookMark(property)}
        className={`absolute ${
          bookmarkList.some((item) => item.id === property.id)
            ? 'bg-white h-[35px] w-[30px] flex justify-center items-center rounded-md'
            : ''
        } right-3 top-3 z-10 cursor-pointer`}
      >
        <Bookmark
          fill={
            bookmarkList.some((item) => item.id === property.id)
              ? '#FCCF12'
              : '#313131B2'
          }
        />
      </div>
    </div>
  )
}

export default Card
