import Image from 'next/image';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { DownArrow2 } from '@components/icons'

const index = () => {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [countries, setCountries] = useState([]);
    const [houseNo, setHouseNo] = useState('');
    const [areaZone, setAreaZone] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    const handleInputChange = (event, setState) => {
        setState(event.target.value);
    };


    useEffect(() => {
        const fetchCountryNames = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                const countryNames = data.map(country => country.name.common);
                const sortedCountries = countryNames.sort((a, b) => a.localeCompare(b));
                setCountries(sortedCountries);
            } catch (error) {
                console.error('Error fetching country names:', error);
            }
        };

        fetchCountryNames();
    }, []);


    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10 ">
            <div className='px-4'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Confirm your address</h1>
                <h1 className='text-sm text-[#848484]'>Your address is only shared with guests after they’ve made a reservation.</h1>
            </div>
            <div className='flex flex-col sm:flex-row justify-between mt-2 sm:mt-10 gap-20 mx-auto ml-0 sm:ml-5'>
                <div className='sm:w-1/2 w-full order-2 sm:order-1 '>
                    <div>
                        <button
                            className="flex items-center justify-between w-full px-3 py-2 border border-gray-400 bg-gray-50 rounded-lg shadow-sm focus:ring focus:ring-yellow-200 focus:outline-none focus:border-none focus:ring-opacity-50"
                            type="button"
                            onClick={toggleDropdown}
                        >
                            <div className="flex flex-col">
                                <p className="text-[#848484] text-sm font-semibold px-2">
                                    Country/ region
                                </p>
                                <span className="text-[#0F172A] text-sm px-2 text-start">
                                    {selectedCountry || ""}
                                </span>
                            </div>
                            <DownArrow2 className={`w-2.5 h-2.5 ${isDropdownOpen ? "transform rotate-180" : ""} ms-3`} />
                        </button>

                        <div
                            id="dropdown"
                            className={`z-10 ${isDropdownOpen ? "" : "hidden"} bg-[#F7F8FA] absolute border-2 border-[#C4C4C4] rounded-lg shadow-xl sm:w-[25%] w-[87%] 2xl:w-[21%] overflow-y-auto max-h-48`}
                        >
                            {countries.map((country, index) => (
                                <button
                                    key={index}
                                    className={`block px-4 py-2 hover:bg-yellow-50 text-base font-medium w-full text-left ${selectedCountry === country ? "text-yellow-500" : ""}`}
                                    onClick={() => handleCountryClick(country)}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="mt-1 relative rounded-t-md shadow-sm">
                            <label className="absolute left-3 top-2 text-sm font-semibold px-2 text-[#B6B6B6]">House, flat, building</label>
                            <input
                                type="text"
                                name="houseNo"
                                value={houseNo}
                                onChange={(e) => handleInputChange(e, setHouseNo)}
                                className="appearance-none text-start block w-full px-5 pt-6 pb-2 border border-gray-300 rounded-t-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="relative shadow-sm">
                            <label className="absolute left-3 top-2 text-sm font-semibold px-2 text-[#B6B6B6]">Area/Zone</label>
                            <input
                                type="text"
                                name="areaZone"
                                value={areaZone}
                                onChange={(e) => handleInputChange(e, setAreaZone)}
                                className="appearance-none text-start block w-full px-5 pt-6 pb-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className=" relative shadow-sm">
                            <label className="absolute left-3 top-2 text-sm font-semibold px-2 text-[#B6B6B6]">Street address</label>
                            <input
                                type="text"
                                name="streetAddress"
                                value={streetAddress}
                                onChange={(e) => handleInputChange(e, setStreetAddress)}
                                className="appearance-none text-start block w-full px-5 pt-6 pb-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className=" relative shadow-sm">
                            <label className="absolute left-3 top-2 text-sm font-semibold px-2 text-[#B6B6B6]">City/Town</label>
                            <input
                                type="text"
                                name="city"
                                value={city}
                                onChange={(e) => handleInputChange(e, setCity)}
                                className="appearance-none text-start block w-full px-5 pt-6 pb-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className=" relative rounded-b-md shadow-sm">
                            <label className="absolute left-3 top-2 text-sm font-semibold px-2 text-[#B6B6B6]">Pin Code</label>
                            <input
                                type="text"
                                name="pincode"
                                value={pincode}
                                onChange={(e) => handleInputChange(e, setPincode)}
                                className="appearance-none text-start block w-full px-5 pt-6 pb-2 border border-gray-300 rounded-b-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <h1 className='sm:text-lg text-sm text-[#484C52] sm:mb-1 mb-3'>Show your specific location</h1>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="toggle"
                                className="sr-only"
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                            <label
                                htmlFor="toggle"
                                className={`cursor-pointer relative w-12 h-6 rounded-full transition duration-300 ${isChecked ? 'bg-yellow-500' : 'bg-gray-400'
                                    }`}
                            >
                                <div
                                    className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isChecked ? 'translate-x-6' : 'translate-x-0'
                                        }`}
                                ></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2 order-1 sm:order-2 bg-white relative mt-5 sm:mt-0'>
                    <Image
                        src={"/map1.png"}
                        width={100}
                        height={10}
                        layout="responsive"
                        objectFit="cover"
                        className='h-full w-full'
                    />
                    <Image
                        src={"/round-home.png"}
                        width={30}
                        height={30}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    />
                </div>
            </div>

            <div className="mt-10 sm:px-6 mb-0 sm:mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
                <div>
                    <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
                        Back
                    </h1>
                </div>
                <div className="sm:px-6 mt-4 sm:mt-0">
                    <h1 className="text-[#0F172A]">
                        <span className="font-bold">3</span> of 10
                    </h1>
                </div>
                <div>
                    <Button
                        className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary"
                        onClick={() => router.push('/list-your-property/amenities/offer-amenities')}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index;