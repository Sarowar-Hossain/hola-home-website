import Card from '@components/common/Card/Card'
import { Button, Text } from '@components/ui'
import { allProperty } from 'data/AllProperty'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
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

const Share = () => {
  const router = useRouter()

  const copyToClipboard = () => {
    const link = 'localhost:3000' + router.asPath
    navigator.clipboard
      .writeText(link)
      .then(() => {
        toast.success('Link copied to clipboard!')
      })
      .catch((err) => {
        toast.error('Failed to copy the link')
      })
  }

  const [bookmark, setBookmark] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { bookmarkList, setBookMarkList, setCurrentBookmarkItem } =
    useContext(GlobalContext)
  const swiperRef = useRef(null)
  const { openModal, setModalView, closeModal } = useUI()

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
    <div className="flex flex-col justify-center items-center gap-5 md:gap-10 md:w-[60vw] modal-card">
      <Text className="text-[#484C52]" variant="pageHeading">
        Share Property
      </Text>
      <div className="max-w-[370px]">
        {allProperty?.slice(0, 1)?.map((property, index) => (
          <div
            key={index}
            className="relative mx-auto max-w-[300px] rounded-lg shadow-lg overflow-hidden"
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
              {property?.images?.map((image, i) => (
                <SwiperSlide key={i}>
                  <div className="w-80 h-48 relative">
                    <Image
                      src={image}
                      className="object-cover"
                      fill
                      alt="property image"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-2">
              <div className="flex items-center gap-1">
                <CardStar />
                <p className="text-xl font-semibold">5.0</p>
                <p className="text-accent-5">({property?.reviews} reviews)</p>
                <p className="italic text-accent-5">{property?.hostType}</p>
              </div>
              <Link href="/properties/654d6a4d6ad4a6d74">
                <p className="mt-1 text-2xl font-bold">{property?.hotelName}</p>
              </Link>
              <ul className={`mt-2 flex gap-2`}>
                {property?.propertyDetails?.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2"
                  >
                    {detail}{' '}
                    <Dot
                      className={`w-[3px] h-[3px] ${
                        property?.propertyDetails?.length - 1 === i
                          ? 'hidden'
                          : 'inline-block'
                      }`}
                    />
                  </li>
                ))}
              </ul>
              <p className="my-2 font-semibold text-xl text-[#484C52]">
                ${property?.dailyCost}{' '}
                <span className="text-base text-[#878787]">/ Night</span>
              </p>
            </div>
            <div
              onClick={() => handleBookMark(property)}
              className={`absolute ${
                bookmarkList.some((item) => item.id === property?.id)
                  ? 'text-[#FCCF12]'
                  : 'text-white'
              } right-3 top-3 z-10 cursor-pointer`}
            >
              <Bookmark />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 items-center w-full">
        <div className="sm:w-[70%]">
          <input
            className="bg-gray-200 p-2 rounded-lg w-full outline-none"
            type="text"
            readOnly
            value={'localhost:3000' + router?.asPath}
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
