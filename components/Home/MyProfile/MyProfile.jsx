import { Button, Container, Text } from '@components/ui'
import React, { useState } from 'react'
import displayPic from 'public/profileDP.png'
import Image from 'next/image'
import { Loader, Plus } from 'lucide-react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useRouter } from 'next/router'
import { storage } from '@config/firebase.config'
import validator from 'validator'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const MyProfile = () => {
  const router = useRouter()
  const [isNameEdit, setIsNameEdit] = useState(false)
  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPhoneNoEdit, setIsPhoneNoEdit] = useState(false)
  const [uploader, setUploader] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editedData, setEditedData] = useState({})
  const [validatePhnNo, setValidatePhnNo] = useState(false)
  const [validEmail, setValidateEmail] = useState(false)
  const [validName, setValidateName] = useState(false)

  const handleInputChange = (fieldName, value) => {
    setEditedData((prevData) => ({ ...prevData, [fieldName]: value }))
  }

  const uploadProfileImage = async () => {
    const input = document.getElementById('profileImg')
    input.onchange = async () => {
      const imageFile = input.files[0]
      if (!imageFile) {
        return
      }
      setUploader(true)
      const storageRef = ref(storage, `profilePicture/${imageFile.name}`)
      try {
        await uploadBytes(storageRef, imageFile)
        const downloadURL = await getDownloadURL(storageRef)
        setEditedData((prevData) => ({ ...prevData, dpUrl: downloadURL }))
        handleInputChange('dpUrl', downloadURL)
        setUploader(false)
      } catch (error) {
        setUploader(false)
      }
    }
  }

  const validateEmail = () => {
    const email = editedData?.email
    if (!email) {
      setValidateEmail('Please enter a email!')
    } else if (!validator.isEmail(email)) {
      setValidateEmail('Please enter a valid email address!')
    } else {
      setValidateEmail(false)
      setIsEmailEdit(false)
      // Call uploader function or any other logic here
    }
  }

  const validateName = () => {
    const fullName = editedData?.fullName
    if (!fullName) {
      setValidateName('Please enter your name!')
    } else if (typeof fullName !== 'string' || !/^[a-zA-Z]+$/.test(fullName)) {
      setValidateName('Name must be characters!')
    } else if (fullName.length < 3) {
      setValidateName('Name must be at least 3 characters!')
    } else {
      setValidateName(false)
      setIsNameEdit(false)
      // Call uploader function
    }
  }

  const validatePhoneNumber = () => {
    const phoneRegex = /^\+?[0-9]*$/
    const phoneNumber = editedData?.phoneNo
    if (
      !phoneRegex.test(phoneNumber) ||
      phoneNumber.length < 9 ||
      phoneNumber.length > 15
    ) {
      setValidatePhnNo('Please enter a valid phone number!')
    } else {
      setValidatePhnNo(false)
      setIsPhoneNoEdit(false)
      //call uploader function
    }
  }

  return (
    <Container clear className="text-accent-7 space-y-5 md:space-y-10">
      <Text
        variant="heroBody"
        className=" hidden md:block text-2xl xl:text-4xl mt-10"
      >
        Personal info
      </Text>
      <div className="flex justify-center items-center flex-col-reverse lg:grid lg:grid-cols-2 ">
        {/* Forms */}
        <div className="space-y-4 lg:space-y-7 w-full">
          <div className="flex justify-between">
            <div className="text-base md:text-2xl w-full">
              <div className="flex items-center justify-between">
                <h1 className="font-medium">Full Name</h1>

                {isNameEdit ? (
                  <button
                    onClick={validateName}
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
              <input
                readOnly={`${isNameEdit ? '' : 'readOnly'}`}
                className={`font-normal caret-primary outline-none text-[#777E8B] mt-3 py-2 w-full  ${
                  isNameEdit
                    ? 'focus:outline-none  bg-accent-2  rounded-lg ps-4'
                    : 'bg-white'
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
              {validName && <p className="text-red text-sm">{validName}</p>}
            </div>
          </div>

          <hr />

          <div className="flex justify-between">
            <div className="text-base md:text-2xl w-full">
              <div className="flex items-center justify-between ">
                <h1 className="font-medium">Phone Number</h1>
                {isPhoneNoEdit ? (
                  <button
                    onClick={validatePhoneNumber}
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
              <PhoneInput
                readOnly={!isPhoneNoEdit}
                placeholder="Enter Your Phone No."
                value={editedData?.phoneNo}
                onChange={(value) => {
                  setEditedData({
                    ...editedData,
                    phoneNo: value,
                  })
                  handleInputChange('phoneNo', value)
                }}
                className={`font-normal caret-primary outline-none text-[#777E8B] mt-3 py-2 w-full  ${
                  isPhoneNoEdit &&
                  'border-2 focus:outline-none bg-accent-2 border-accent-2  rounded-lg ps-2'
                }`}
                numberInputProps={{
                  className: `rounded-md px-4 focus:outline-none ${
                    isPhoneNoEdit
                      ? 'bg-accent-2 focus:bg-accent-2 '
                      : 'bg-white'
                  } `,
                }}                
              />

              {validatePhnNo && (
                <p className="text-red text-sm">{validatePhnNo}</p>
              )}
            </div>
          </div>

          <hr />

          <div className="flex justify-between ">
            <div className="text-base md:text-2xl w-full">
              <div className="flex items-center justify-between ">
                <h1 className="font-medium">Email Address</h1>
                <p>
                  {isEmailEdit ? (
                    <button
                      onClick={validateEmail}
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
                </p>
              </div>
              <input
                readOnly={`${isEmailEdit ? '' : 'readOnly'}`}
                className={`font-normal caret-primary outline-none text-[#777E8B] mt-3 py-2 w-full ${
                  isEmailEdit
                    ? 'focus:outline-none  bg-accent-2  rounded-lg ps-4'
                    : 'bg-white'
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
              {validEmail && <p className="text-red text-sm">{validEmail}</p>}
            </div>
          </div>

          <hr />
        </div>
        {/* Dp */}
        <div className="mb-7 flex flex-col items-center justify-center space-y-7">
          <h2 className="text-base font-normal text-[#484C52] md:text-2xl  hidden md:block">
            Display Picture
          </h2>
          <div className="relative rounded-full border">
            {/* <Image
              src={displayPic}
              sizes="100vw"
              alt="userIcon"
              className="h-auto w-[150px] md:w-[245px]"
            /> */}
            <div className="md:h-[245px] h-[150px] w-[150px] md:w-[245px] overflow-hidden rounded-full">
              {editedData?.dpUrl ? (
                <Image
                  src={editedData?.dpUrl}
                  alt="profile picture"
                  className="rounded-full"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <Image
                  src={displayPic}
                  alt="profile picture"
                  className="rounded-full"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div
              onClick={uploadProfileImage}
              className="absolute bottom-1 right-3 rounded-full bg-[#FCCF12] fill-white stroke-white p-1 shadow-lg md:bottom-3 md:right-4 md:p-3 text-white cursor-pointer"
            >
              {uploader ? (
                <div className="flex">
                  <Loader className="animate-spin text-white" />
                </div>
              ) : (
                <label for="profileImg" className="cursor-pointer">
                  <Plus />
                  <input id="profileImg" type="file" className="hidden" />
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Delete Button */}
      <div className="flex justify-center lg:justify-start pb-6">
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
