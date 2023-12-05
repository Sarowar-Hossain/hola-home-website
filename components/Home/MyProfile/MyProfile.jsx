import { Button, Container, Text } from '@components/ui'
import React, { useState } from 'react'
import displayPic from 'public/profileDP.png'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const MyProfile = () => {
  const [isNameEdit, setIsNameEdit] = useState(false)
  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPhoneNoEdit, setIsPhoneNoEdit] = useState(false)

  const [editedData, setEditedData] = useState({})

  const handleInputChange = (fieldName, value) => {
    setEditedData((prevData) => ({ ...prevData, [fieldName]: value }))
    // setIsChanged(true)
  }

  return (
    <Container
      clear
      className="text-accent-7 space-y-5 md:space-y-10"
    >
      <Text variant="heroBody" className=" hidden md:block text-2xl xl:text-4xl mt-10">
        Personal info
      </Text>
      <div className="flex justify-center items-center flex-col-reverse md:grid md:grid-cols-2">
        {/* Forms */}
        <div className="space-y-4 lg:space-y-7 w-[95%]">
          <div className="flex justify-between ">
            <span className="text-base md:text-2xl">
              <h1 className="font-medium">Full Name</h1>
              <input
                readOnly={`${isNameEdit ? '' : 'readOnly'}`}
                className={`font-normal outline-none text-[#777E8B] mt-2 ${
                  isNameEdit && 'border-none focus:outline-none'
                }`}
                placeholder="Enter Your Full Name"
                type="text"
                defaultValue={editedData?.fullName}
                onChange={(e) => {
                  setEditedData({
                    ...editedData,
                    fullName: e.target.value.trim(),
                  })
                  handleInputChange('fullName', e.target.value.trim())
                }}
              />
            </span>

            {isNameEdit ? (
              <button
                onClick={() => setIsNameEdit(false)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                title="Save Name"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsNameEdit(true)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg underline"
                title="Edit Name"
              >
                Edit
              </button>
            )}
          </div>

          <hr />

          <div className="flex justify-between">
            <span className="text-base md:text-2xl">
              <h1 className="font-medium">Phone Number</h1>
              <input
                readOnly={`${isPhoneNoEdit ? '' : 'readOnly'}`}
                className={`font-normal outline-none text-[#777E8B] mt-2 ${
                  isPhoneNoEdit && 'border-none focus:outline-none'
                }`}
                placeholder="Enter Your Phone No."
                type="text"
                defaultValue={editedData?.phoneNo}
                onChange={(e) => {
                  setEditedData({
                    ...editedData,
                    phoneNo: e.target.value.trim(),
                  })
                  handleInputChange('phoneNo', e.target.value.trim())
                }}
              />
            </span>

            {isPhoneNoEdit ? (
              <button
                onClick={() => setIsPhoneNoEdit(false)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                title="Save Name"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsPhoneNoEdit(true)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg underline"
                title="Edit Name"
              >
                Edit
              </button>
            )}
          </div>

          <hr />

          <div className="flex justify-between">
            <span className="text-base md:text-2xl">
              <h1 className="font-medium">Email Address</h1>
              <input
                readOnly={`${isEmailEdit ? '' : 'readOnly'}`}
                className={`font-normal outline-none text-[#777E8B] mt-2 ${
                  isEmailEdit && 'border-none focus:outline-none'
                }`}
                placeholder="user@gmail.com"
                type="text"
                defaultValue={editedData?.email}
                onChange={(e) => {
                  setEditedData({
                    ...editedData,
                    email: e.target.value.trim(),
                  })
                  handleInputChange('email', e.target.value.trim())
                }}
              />
            </span>

            {isEmailEdit ? (
              <button
                onClick={() => setIsEmailEdit(false)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                title="Save Name"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEmailEdit(true)}
                className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg underline"
                title="Edit Name"
              >
                Edit
              </button>
            )}
          </div>

          <hr />
        </div>
        {/* Dp */}
        <div className="mb-7 flex flex-col items-center justify-center space-y-7">
          <h2 className="text-base font-normal text-[#484C52] md:text-2xl  hidden md:block">
            Display Picture
          </h2>
          <div className="relative rounded-full border">
            <Image
              src={displayPic}
              sizes="100vw"
              alt="userIcon"
              className="h-auto w-[150px] md:w-[245px]"
            />
            <span className="absolute bottom-2 right-2 rounded-full bg-[#FCCF12] fill-white stroke-white p-1 shadow-lg md:bottom-4 md:right-4 md:p-3 text-white">
              <Plus />
            </span>
          </div>
        </div>
      </div>
      {/* Delete Button */}
      <div className="flex justify-center md:justify-start">
        <Button
          className=" text-xl font-medium text-accent-8"
          variant="slim"
          onClick={() => {
            setProfilePage(false)
            setDeleteAccount(true)
          }}
        >
          Delete Account
        </Button>
      </div>
    </Container>
  )
}

export default MyProfile
