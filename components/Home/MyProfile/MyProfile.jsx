import { Button, Container, Text } from '@components/ui'
import React, { useContext, useEffect, useState } from 'react'
import displayPic from 'public/profileDP.png'
import Image from 'next/image'
import { Loader, Plus } from 'lucide-react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useRouter } from 'next/router'
import { storage } from '@config/firebase.config'
import validator from 'validator'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { AuthContext } from 'Context/AuthProvider'
import toast from 'react-hot-toast'
import axios from 'axios'
import CommonLoader from '@components/common/CommonLoader/CommonLoader'

const MyProfile = () => {
  const { user } = useContext(AuthContext)
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const router = useRouter()
  const [isNameEdit, setIsNameEdit] = useState(false)
  const [isDobEdit, setIsDobEdit] = useState(false)
  const [isEmailEdit, setIsEmailEdit] = useState(false)
  const [isPhoneNoEdit, setIsPhoneNoEdit] = useState(false)
  const [imageEdit, setImageEdit] = useState(false)
  const [uploader, setUploader] = useState(false)
  const [submitting, setSubmitting] = useState(true)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [editedData, setEditedData] = useState()

  const [validations, setValidations] = useState({})
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/manageUsersApis/check-user`,
          {
            id: user?.uid,
          }
        )
        setData(response.data)
        setEditedData({
          id: response?.data?.uid,
          fullName: response?.data?.name,
          phoneNo: response?.data?.phoneNumber,
          email: response?.data?.email,
          dpUrl: response?.data?.dpUrl,
          dob: response?.data?.dob,
        })
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {
        setSubmitting(false)
      }
    }
    if (user?.uid) {
      fetchUserData()
    }
  }, [user?.uid, baseUrl])

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
        setImageEdit(true)
      } catch (error) {
        setUploader(false)
      }
    }
  }

  const validateAndSave = async () => {
    let newValidations = {}

    const isValidDob = (dob) => {
      const today = new Date()
      const birthDate = new Date(dob)
      const oldestValidDate = new Date()
      oldestValidDate.setFullYear(oldestValidDate.getFullYear() - 120)
      if (isNaN(birthDate.getTime())) {
        return false
      }
      if (birthDate >= today || birthDate < oldestValidDate) {
        return false
      }
      return true
    }

    if (isNameEdit || isPhoneNoEdit || isEmailEdit || imageEdit || isDobEdit) {
      if (
        isNameEdit &&
        editedData?.fullName &&
        editedData.fullName.length < 3
      ) {
        newValidations.fullName = 'Name must be at least 3 characters!'
      }
      if (
        isDobEdit &&
        editedData?.dob &&
        !isValidDob(editedData.dob) // Assuming isValidDob is a function you've defined
      ) {
        newValidations.dob = 'Please enter a valid date of birth!'
      }
      if (
        isEmailEdit &&
        editedData?.email &&
        !validator.isEmail(editedData.email)
      ) {
        newValidations.email = 'Please enter a valid email address!'
      }
      if (
        isPhoneNoEdit &&
        editedData?.phoneNo &&
        (!/^\+?[0-9]*$/.test(editedData.phoneNo) ||
          editedData.phoneNo.length < 9 ||
          editedData.phoneNo.length > 15)
      ) {
        newValidations.phoneNo = 'Please enter a valid phone number!'
      }
      setValidations(newValidations)
      if (Object.keys(newValidations).length === 0) {
        setLoading(true)
        try {
          const response = await axios.post(
            `${baseUrl}/manageUsersApis/update-user`,
            {
              id: user?.uid,
              name: editedData?.fullName,
              phoneNumber: editedData?.phoneNo,
              email: editedData?.email,
              dpUrl: editedData?.dpUrl,
              dob: editedData?.dob,
            }
          )
          toast.success('User updated successfully!')
          setIsNameEdit(false)
          setIsDobEdit(false)
          setIsEmailEdit(false)
          setIsPhoneNoEdit(false)
          setImageEdit(false)
        } catch (error) {
          console.error(error)
          toast.error('Failed to submit your information')
        } finally {
          setLoading(false)
        }
      } else {
        toast.error('Please check your submission')
      }
    } else {
      setValidations({})
    }
  }

  console.log(data)

  return (
    <>
      {user === null || submitting ? (
        <>
          <div className="min-h-[80vh] flex items-center justify-center">
            <CommonLoader />
          </div>
        </>
      ) : (
        <>
          <div className="container mx-auto w-full space-y-10">
            <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center px-4">
              {/* Forms */}
              <div className="w-full md:w-3/5 space-y-4 lg:space-y-7">
                <h1 className=" hidden md:block text-3xl font-medium text-[#484C52] mt-10">
                  Personal info
                </h1>
                <div className="flex justify-between">
                  <div className="text-base md:text-2xl w-full">
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl">Full Name</h1>

                      {isNameEdit ? (
                        <button
                          onClick={() => setIsNameEdit(false)}
                          className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                          title="Save Name"
                        >
                          Cancel
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
                      value={editedData?.fullName}
                      // defaultValue={editedData?.fullName}
                      onChange={(e) => {
                        setEditedData({
                          ...editedData,
                          fullName: e.target.value,
                        })
                        handleInputChange('fullName', e.target.value)
                      }}
                    />
                    {isNameEdit && validations?.fullName && (
                      <p className="text-red text-sm">
                        {validations?.fullName}
                      </p>
                    )}
                  </div>
                </div>

                <hr />

                <div className="flex justify-between ">
                  <div className="text-base md:text-2xl w-full">
                    <div className="flex items-center justify-between ">
                      <h1 className="text-2xl">Date of birth</h1>
                      <p>
                        {isDobEdit ? (
                          <button
                            onClick={() => setIsDobEdit(false)}
                            className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                            title="Save Name"
                          >
                            Cancel
                          </button>
                        ) : (
                          <button
                            onClick={() => setIsDobEdit(true)}
                            className={`cursor-pointer text-base font-semibold px-3 h-6 rounded-lg underline ${
                              data?.authType === 'email' && 'hidden'
                            }`}
                            title="Edit Name"
                          >
                            Edit
                          </button>
                        )}
                      </p>
                    </div>
                    <input
                      readOnly={`${isDobEdit ? '' : 'readOnly'}`}
                      className={`font-normal caret-primary outline-none text-[#777E8B] mt-3 py-2 w-full ${
                        isDobEdit
                          ? 'focus:outline-none  bg-accent-2  rounded-lg ps-4'
                          : 'bg-white'
                      }`}
                      placeholder="Provide your date of birth"
                      type="date"
                      value={editedData?.dob}
                      onChange={(e) => {
                        setEditedData({
                          ...editedData,
                          dob: e.target.value.trim(),
                        })
                        handleInputChange('dob', e.target.value.trim())
                      }}
                    />
                    {isDobEdit && validations.dob && (
                      <p className="text-red text-sm">{validations.dob}</p>
                    )}
                  </div>
                </div>

                <hr />

                <div className="flex justify-between">
                  <div className="text-base md:text-2xl w-full">
                    <div className="flex items-center justify-between ">
                      <h1 className="text-2xl">Phone Number</h1>
                      {isPhoneNoEdit ? (
                        <button
                          onClick={() => setIsPhoneNoEdit(false)}
                          className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                          title="Save Name"
                        >
                          Cancel
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

                    {isPhoneNoEdit && validations?.phoneNo && (
                      <p className="text-red text-sm">{validations?.phoneNo}</p>
                    )}
                  </div>
                </div>

                <hr />

                <div className="flex justify-between ">
                  <div className="text-base md:text-2xl w-full">
                    <div className="flex items-center justify-between ">
                      <h1 className="text-2xl">Email Address</h1>
                      <p>
                        {isEmailEdit ? (
                          <button
                            onClick={() => setIsEmailEdit(false)}
                            className="cursor-pointer text-base font-semibold px-3 h-6 rounded-lg bg-primary"
                            title="Save Name"
                          >
                            Cancel
                          </button>
                        ) : (
                          <button
                            onClick={() => setIsEmailEdit(true)}
                            className={`cursor-pointer text-base font-semibold px-3 h-6 rounded-lg underline ${
                              (data?.authType === 'google' ||
                                data?.authType === 'email') &&
                              'hidden'
                            }`}
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
                      value={editedData?.email}
                      // defaultValue={editedData?.email}
                      onChange={(e) => {
                        setEditedData({
                          ...editedData,
                          email: e.target.value.trim(),
                        })
                        handleInputChange('email', e.target.value.trim())
                      }}
                    />
                    {isEmailEdit && validations.email && (
                      <p className="text-red text-sm">{validations.email}</p>
                    )}
                  </div>
                </div>

                <hr />
                <div className="flex flex-col md:flex-row justify-between pb-6 gap-3 max-w-md md:max-w-full mx-auto">
                  <Button
                    className="text-xl font-medium text-accent-8 bg-red hover:bg-white text-white hover:text-red"
                    variant="slim"
                    onClick={() => {
                      router.push('/delete-account')
                    }}
                  >
                    Delete Account
                  </Button>
                  {(isNameEdit ||
                    isPhoneNoEdit ||
                    isEmailEdit ||
                    imageEdit ||
                    isDobEdit) && (
                    <Button
                      loading={loading}
                      onClick={validateAndSave}
                      className={`${
                        loading ? 'text-accent-0' : 'text-accent-5'
                      }`}
                    >
                      Save
                    </Button>
                  )}
                </div>
              </div>
              {/* Dp */}
              <div className=" mb-7 flex flex-col items-center justify-center space-y-7">
                <h2 className="text-base font-normal text-[#484C52] md:text-2xl  hidden md:block">
                  Display Picture
                </h2>
                <div className="relative rounded-full border">
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
          </div>
        </>
      )}
    </>
  )
}

export default MyProfile
