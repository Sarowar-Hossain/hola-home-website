import { Layout } from '@components/common'
import {
  Cross2,
  DarkStar,
  Location,
  PageBackButton,
  Save,
  Share,
  Star,
} from '@components/icons'
import { Button, Container, Text, useUI } from '@components/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ReviewCard from '@components/common/ReviewCard/ReviewCard'
import { DemoPropertyImage } from 'data/DemoPropertyImage'
import { amenities, details, reviews } from 'data/Details'
import { GlobalContext } from 'Context/Context'
import CustomErrorToast from '@utils/CustomErrorToast'

const swipeThreshold = 50

const DetailsPage = () => {
  const router = useRouter()

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x
    if (offset > swipeThreshold) {
      showPrev()
    } else if (offset < -swipeThreshold) {
      showNext()
    }
  }

  const {
    bookmarkList,
    setBookMarkList,
    setCurrentBookmarkItem,
    bookingData,
    setBookingData,
  } = useContext(GlobalContext)

  console.log(bookingData)

  const { setModalView, openModal } = useUI()

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [selectedAdults, setSelectedAdults] = useState(2)
  const [selectedChildren, setSelectedChildren] = useState(0)
  const [selectedStayType, setSelectedStayType] = useState('night Stay')
  const [isDateAvailableDates, setIsDateAvailableDates] = useState(false)
  const [bookmarked, setBookMarked] = useState(false)
  const [profileView, setProfileView] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  //this function will used for handle the bookmark
  //onClick={() => handleBookMark(data)}

  // const handleBookMark = (data) => {
  //   if (bookmarkList.find((item) => item?.id === router?.query?.id)) {
  //     setCurrentBookmarkItem(router?.query?.id)
  //     openModal(), setModalView('BOOKMARKMODAL_VIEW')
  //   } else {
  //     setBookMarkList([...bookmarkList, data])
  //   }
  // }

  const handleBookNow = () => {
    if (
      bookingData?.checkIN === undefined ||
      bookingData?.checkOut === undefined
    ) {
      return CustomErrorToast(`Please add dates to view availability!`)
    }
    openModal(), setModalView('PROPERTY_DETAILS_PAGE_LOG_VIEW')
    setIsDateAvailableDates(true)
  }

  const openImageModal = (index) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const showNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === DemoPropertyImage.length - 1 ? 0 : prevIndex + 1
    )
  }

  const showPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? DemoPropertyImage.length - 1 : prevIndex - 1
    )
  }

  const handleModal = () => {
    openModal()
    setModalView('SHARE_VIEW')
  }

  return (
    <>
      <Container className="py-10">
        <div className="flex justify-between items-center">
          <span className="cursor-pointer" onClick={() => router.back()}>
            <PageBackButton />
          </span>
          <div className="flex gap-3">
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => setProfileView(true)}
            >
              <Image src="/host.png" fill alt="" className="object-cover" />
            </div>
            <div>
              <Text className="text-accent-4">Private Host</Text>
              <Text className="text-accent-9 text-lg font-medium text-right">
                Charles
              </Text>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-start sm:items-end">
          <div>
            <Text variant="pageHeading" className="text-accent-9">
              The Astin Villa Hotel
            </Text>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" />
              <span className="text-accent-8 text-[18px]">
                5.0 <span className="text-accent-4">(22 Reviews)</span>
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <div
              className="text-accent-6 font-semibold flex items-center gap-1 cursor-pointer"
              onClick={handleModal}
            >
              <Share />
              <span className="hidden sm:block">Share</span>
            </div>
            <div
              className="font-semibold flex items-center gap-1 cursor-pointer"

              // onClick={handleBookmark}
            >
              <span
                className={`${
                  bookmarked ? 'text-yellow-500' : 'text-transparent'
                }`}
              >
                <Save />
              </span>
              <span className="hidden sm:block">Save</span>
            </div>
          </div>
        </div>
        <div className="mt-5 rounded-lg overflow-hidden md:hidden relative details-page">
          <Swiper
            modules={[Autoplay, Pagination, A11y, FreeMode]}
            spaceBetween={10}
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 1000 }}
          >
            {DemoPropertyImage?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-[40vh] w-screen relative">
                  <Image
                    className="object-cover"
                    onClick={() => openImageModal(index)}
                    src={image}
                    fill
                    alt="Carousel Image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5 rounded-lg overflow-hidden hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            {DemoPropertyImage.slice(0, 1).map((img, index) => (
              <div
                key={index}
                className="col-span-1 cursor-pointer"
                onClick={() => openImageModal(index)}
              >
                <img
                  src={img}
                  alt={`Image ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
              {DemoPropertyImage.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => openImageModal(index + 1)}
                >
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md flex justify-center items-center z-50">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={DemoPropertyImage[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                className="w-[95vw] md:w-[70vw] h-[60vh] md:h-[85vh] object-cover rounded-md"
                drag="x"
                dragElastic={0.8}
                onDragEnd={handleDragEnd}
              />
            </AnimatePresence>
            <button
              onClick={showPrev}
              className="absolute bottom-5 mr-10 md:left-5 md:top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-200 max-h-10"
            >
              <ChevronLeftCircle className="w-8 md:w-10 h-8 md:h-10" />
            </button>
            <button
              onClick={showNext}
              className="absolute bottom-5 ml-10 md:right-5 md:top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-all duration-200 max-h-10"
            >
              <ChevronRightCircle className="w-8 md:w-10 h-8 md:h-10" />
            </button>
            <button
              onClick={closeModal}
              className="absolute left-5 top-5 text-white hover:text-yellow-400 transition-all duration-200"
            >
              X Close
            </button>
            <p className="top-5 absolute text-accent-9 text-lg text-white">
              {currentImageIndex + 1}/{DemoPropertyImage?.length}
            </p>
          </div>
        )}
        <div className="mt-8 lg:flex gap-5">
          <div>
            <div className="sm:border-b sm:pb-3">
              <Text variant="pageHeading" className="text-accent-6">
                The Astin Villa Hotel
              </Text>
              <span className="flex items-center gap-1">
                <Location />
                <Text variant="body" className="text-accent-6">
                  12 Eze Adele Road, Rumuomasi Lagos,Wallace, Australia.
                </Text>
              </span>
            </div>
            <div className="mt-8 border-b pb-4">
              <Text variant="sectionHeading">Details</Text>
              <div className="flex gap-10">
                {details?.map((d, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center gap-1"
                    >
                      <span className="bg-slate-100 p-2 rounded">
                        {d?.logo}
                      </span>
                      <Text>{d?.type}</Text>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-8 border-b pb-4">
              <Text variant="sectionHeading">Description</Text>
              <Text>
                The villa is located in the most popular tourist area in
                Toronto, perfect for those of you who like backpackers. We’ll
                bring you through some of the most unique hotels that you never
                thought you’ll find in Bali. Let's find out!
              </Text>
            </div>
            <div className="mt-8 border-b pb-8">
              <Text variant="sectionHeading" className="mb-5">
                Amenities
              </Text>
              <div className="flex flex-wrap gap-10">
                {amenities?.map((d, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col justify-center items-center gap-1"
                    >
                      <span className="bg-slate-100 p-2 rounded">
                        {d?.logo}
                      </span>
                      <Text>{d?.title}</Text>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="mt-8 border-b pb-12">
              <div className="flex justify-between items-center max-w-3xl">
                <Text variant="sectionHeading">Reviews</Text>
                <Link className="font-semibold text-yellow-400" href="/reviews">
                  See All
                </Link>
              </div>
              <div className="flex flex-col gap-5 mt-2">
                {reviews?.map((review, i) => {
                  return <ReviewCard review={review} i={i} key={i} />
                })}
              </div>
            </div>
            <div className="mt-8 border-b pb-4">
              <Text variant="sectionHeading">Location</Text>
              <Image
                className="mt-5"
                src="/map.png"
                height={445}
                width={820}
                alt="map"
              />
            </div>
          </div>
          <div className="max-w-[486px] mx-auto rounded-xl px-3 py-10 shadow-md h-[100%] flex flex-col gap-5">
            <div className="flex justify-between">
              <Text className="text-xl text-[#484C52] font-semibold">
                $208 <span className="font-normal text-base">night</span>
              </Text>
              <Text className="flex items-center gap-1">
                <DarkStar /> 4.85 · 20 reviews
              </Text>
            </div>
            <div className="flex border rounded-md py-2">
              <div className="border-r pl-2">
                <Text className="font-medium text-accent-6 leading-5 -mb-1">
                  CHECK IN
                </Text>
                <DatePicker
                  selected={bookingData?.checkIN}
                  onChange={(date) => {
                    setBookingData({ ...bookingData, checkIN: date })
                  }}
                  selectsStart
                  startDate={bookingData?.checkIN}
                  endDate={bookingData?.checkOut}
                  minDate={new Date()}
                />
              </div>
              <div className="pl-2">
                <Text className="font-medium text-accent-6 leading-5 -mb-1">
                  CHECK OUT
                </Text>
                <DatePicker
                  selected={bookingData?.checkOut}
                  onChange={(date) => {
                    setBookingData({ ...bookingData, checkOut: date })
                  }}
                  selectsEnd
                  startDate={bookingData?.checkIN}
                  endDate={bookingData?.checkOut}
                  minDate={startDate}
                />
              </div>
            </div>
            <div className="flex border rounded-md py-2">
              <div className="border-r pl-2 w-full">
                <Text className="font-medium text-accent-6 leading-5 -mb-[2px]">
                  ADULTS
                </Text>
                <select
                  className="bg-accent-0 outline-none w-full"
                  name=""
                  id=""
                  value={bookingData?.adults}
                  onChange={(e) => {
                    setBookingData({
                      ...bookingData,
                      adults: parseInt(e.target.value, 10),
                    })
                  }}
                >
                  <option defaultChecked value="0">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="pl-2 w-full">
                <Text className="font-medium text-accent-6 leading-5 -mb-[2px]">
                  CHILDREN
                </Text>
                <select
                  className="bg-accent-0 outline-none w-full"
                  name=""
                  id=""
                  value={bookingData?.children}
                  onChange={(e) => {
                    setBookingData({
                      ...bookingData,
                      children: parseInt(e.target.value, 10),
                    })
                  }}
                >
                  <option defaultChecked value="0">
                    0
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="w-full border rounded-md px-2 py-1">
              <Text>STAY TYPE</Text>
              <select
                className="outline-none bg-accent-0 w-full"
                name=""
                id=""
                value={bookingData?.stayType}
                onChange={(e) => {
                  setBookingData({
                    ...bookingData,
                    stayType: e.target.value,
                  })
                }}
              >
                <option value="2 hours">2 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="6 hours">6 hours</option>
                <option value="9 hours">9 hours</option>
                <option value="night Stay">night Stay</option>
              </select>
            </div>
            <Button
              className="w-full text-[#484C52]"
              variant=""
              onClick={handleBookNow}
            >
              Book Now
            </Button>
            {isDateAvailableDates && (
              <p className="text-[#5FC85DE5] text-center">
                Available for these dates.
              </p>
            )}
          </div>
        </div>
      </Container>
      {profileView && (
        <div className="fixed z-50 bg-black inset-0 bg-opacity-80 h-screen flex flex-col items-center md:items-end">
          <div className="flex items-center gap-3 relative bg-white max-w-[627px] sm:min-w-[500px] rounded-xl p-3 sm:p-5 top-16 md:-left-36">
            <div className="relative w-20 h-20 sm:w-36 sm:h-36">
              <Image src="/host.png" fill alt="" className="object-cover" />
            </div>
            <div className="flex flex-col">
              <Text className="text-accent-9 leading-5 sm:leading-7">
                <span className="font-semibold">Name:</span> Charles
              </Text>
              <Text className="text-accent-9 leading-5 sm:leading-7">
                <span className="font-semibold">Mobile Number :</span> +91 123
                456 7894
              </Text>
              <Text className="text-accent-9 leading-5 sm:leading-7">
                <span className="font-semibold">Email :</span>{' '}
                charlesma@gmail.com
              </Text>
            </div>
            <span
              onClick={() => setProfileView(false)}
              className="absolute top-0 right-0 sm:right-4 sm:top-4 cursor-pointer"
            >
              <Cross2 />
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailsPage
Layout.DetailsPage = Layout
