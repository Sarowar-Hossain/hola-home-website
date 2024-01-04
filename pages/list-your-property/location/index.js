import Image from 'next/image';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';
import { useState } from 'react';

const index = () => {
    const router = useRouter();
    const [setshowCompass, setsetshowCompass] = useState(false);
    const [parentDivColor, setParentDivColor] = useState('bg-white');
    const [showErrorToast, setShowErrorToast] = useState(false);

    const toggleBottomDiv = () => {
        setsetshowCompass(!setshowCompass);
        setParentDivColor('bg-white');
        setShowErrorToast(false);

    };

    const clickHandler = () =>{
        setParentDivColor('bg-[#C4C4C4]');
        setShowErrorToast(true);
    }
    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4">
            <div className='px-4'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Where’s your place located</h1>
                <h1 className='text-sm text-[#848484]'>Your address is only shared with guests after they’ve made a reservation.</h1>
            </div>
            <div className="mt-8 px-0 sm:px-4 mx-auto relative">
                <Image
                    src="/map2.png"
                    height={600}
                    width={820}
                    alt="map"
                    className='sm:w-full :w-[400px] h-[300px]'
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center md:top-10 lg:top-10 lg:left-1/3 md:left-1/3 md:transform-none">
                    {/* Parent Div */}
                    <div className={`relative ${parentDivColor} rounded-lg shadow-xl border border-solid border-gray-300 w-72`}> 
                        {/* Top Div (SVG and Input) */}
                        <div className={`flex flex-col ${setshowCompass ? 'border rounded-b-xl border-gray-300' : ''} w-full rounded-lg border border-solid border-gray-300 bg-white z-50`}>
                            <div className='px-6'>
                                <div className="flex items-center py-2 gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none" onClick={toggleBottomDiv}>
                                        <path d="M16 2C13.0837 2.00344 10.2878 3.16347 8.22564 5.22563C6.16348 7.28778 5.00345 10.0837 5.00001 13C4.99652 15.3832 5.77499 17.7018 7.21601 19.6C7.21601 19.6 7.51601 19.995 7.56501 20.052L16 30L24.439 20.047C24.483 19.994 24.784 19.6 24.784 19.6L24.785 19.597C26.2253 17.6996 27.0034 15.3821 27 13C26.9966 10.0837 25.8365 7.28778 23.7744 5.22563C21.7122 3.16347 18.9163 2.00344 16 2ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2197 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C19.9987 14.0605 19.5768 15.0771 18.827 15.827C18.0771 16.5768 17.0605 16.9987 16 17Z" fill="#484C52" />
                                    </svg>
                                    <input
                                        type="text"
                                        placeholder="Enter your address"
                                        className="outline-none text-lg sm:text-sm font-semibold text-[#484C52] ml-2 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Div */}
                        {setshowCompass && (
                            <div className='flex items-center mt-3'>
                                <div className='flex items-center px-6 mb-3 gap-3 w-full' onClick={clickHandler}>
                                    <Image
                                        src="/compass.png"
                                        alt="Compass"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-sm sm:text-xs font-normal text-[#484C52] ml-2">Use my current location</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {showErrorToast && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center lg:w-[60%] md:w-[60%] lg:top-72 md:top-72  lg:left-1/4 md:left-1/4 md:transform-none border border-solid border-gray-300 py-3 px-6 bg-white rounded-xl shadow-xl sm:mt-0 mt-24">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <Image
                                src="/toastError.png"
                                alt="Toast Error"
                                width={32}
                                height={32}
                            />
                        </div>
                        <p className="text-[#484C52] text-start w-56 ml-3 text-sm">
                            We couldn’t find your location. Please enter your address instead.
                        </p>
                    </div>
                
                </div>
                )}
            </div>
            <div className="flex items-center justify-center mt-7 ">
                {" "}
                <Button
                    className=" px-16 sm:px-10  py-2 text-[#484C52] rounded-md text-xl sm:text-lg font-medium bg-primary shadow-md " onClick={() => router.push("/list-your-property/location/confirm-address")}
                >
                    Confirm Address
                </Button>
            </div>

            <div className="mt-10 sm:px-6 sm:mb-0 mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
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
                        onClick={() => router.push('/list-your-property/location/confirm-address')}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default index;
