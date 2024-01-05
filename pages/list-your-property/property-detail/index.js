// import React, { useState } from 'react'
// import { useRouter } from 'next/router'
// import { Button } from "@components/ui"

// const index = () => {
//     const router = useRouter();
//     const [count, setCount] = useState(1);
//     const [activeButton, setActiveButton] = useState(null);

//     const handleIncrement = () => {
//         setCount(count + 1);
//         setActiveButton('plus');
//     };

//     const handleDecrement = () => {
//         if (count > 0) {
//             setCount(count - 1);
//             setActiveButton('minus');
//         }
//     };

//     return (
//         <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10 ">
//             <div className='px-4'>
//                 <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Share basic property details</h1>
//                 <h1 className='text-sm text-[#848484]'>We’ll ask more details later such as bed types, amenities etc</h1>
//             </div>
//             <div className='flex justify-between items-center mx-auto mt-10 px-20 mb-3'>
//                 <h1 className='text-sm text-[#484C52]'>Guests</h1>
//                 <div className="flex justify-between items-center gap-3">
//                     <button
//                         style={{
//                             backgroundColor: activeButton === 'minus' ? '#FFF8DB' : 'white',
//                             borderColor: activeButton === 'minus' ? '#FCCF12' : '#B6B6B6',
//                         }}
//                         className="border text-[#484C52] rounded-full w-10 h-6 flex items-center justify-center py-2"
//                         onClick={handleDecrement}
//                     >
//                         -
//                     </button>
//                     <h1 className="text-sm text-[#484C52]">{count}</h1>
//                     <button
//                         style={{
//                             backgroundColor: activeButton === 'plus' ? '#FFF8DB' : 'white',
//                             borderColor: activeButton === 'plus' ? '#FCCF12' : '#B6B6B6',
//                         }}
//                         className="text-[#484C52] border rounded-full w-10 h-6 flex items-center justify-center py-2"
//                         onClick={handleIncrement}
//                     >
//                         +
//                     </button>
//                 </div>
//             </div>
//             <hr />
//             <div className="mt-10 sm:px-6 mb-0 sm:mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
//                 <div>
//                     <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
//                         Back
//                     </h1>
//                 </div>
//                 <div className="sm:px-6 mt-4 sm:mt-0">
//                     <h1 className="text-[#0F172A]">
//                         <span className="font-bold">4</span> of 10
//                     </h1>
//                 </div>
//                 <div>
//                     <Button
//                         className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary"
//                         onClick={() => router.push('/list-your-property/amenities/offer-amenities')}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default index

import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from "@components/ui"

const index = () => {
    const router = useRouter();
    const [values, setValues] = useState({
        guests: { label: 'Guests', count: 0 },
        bathrooms: { label: 'Bathrooms', count: 0 },
        bedrooms: { label: 'Bedrooms', count: 0 },
        beds: { label: 'Beds', count: 0 },
        // Add more values as needed
    });
    const [activeButton, setActiveButton] = useState(null);

    const handleIncrement = (key) => {
        setActiveButton(`plus-${key}`);
        setValues((prevValues) => ({
            ...prevValues,
            [key]: {
                ...prevValues[key],
                count: prevValues[key].count + 1,
            },
        }));
    };

    const handleDecrement = (key) => {
        setActiveButton(`minus-${key}`);
        setValues((prevValues) => ({
            ...prevValues,
            [key]: {
                ...prevValues[key],
                count: Math.max(prevValues[key].count - 1, 0),
            },
        }));
    };



    return (
        <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10 ">
            <div className='px-4'>
                <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Share basic property details</h1>
                <h1 className='text-sm text-[#848484]'>We’ll ask more details later such as bed types, amenities etc</h1>
            </div>
            <div className='mx-auto mt-10 px-2 sm:px-20 mb-3'>
            {Object.keys(values).map((key, index) => (
    <div key={key} className="flex flex-col gap-3">
        <div className="flex justify-between items-center mt-3">
            <h1 className='text-sm text-[#484C52]'>{values[key].label}</h1>
            <div className="flex justify-between items-center gap-3">
                <button
                    style={{
                        backgroundColor: activeButton === `minus-${key}` ? '#FFF8DB' : 'white',
                        borderColor: activeButton === `minus-${key}` ? '#FCCF12' : '#B6B6B6',
                    }}
                    className="border text-[#484C52] rounded-full w-10 h-6 flex items-center justify-center py-2"
                    onClick={() => handleDecrement(key)}
                >
                    -
                </button>
                <h1 className="text-sm text-[#484C52]">{values[key].count}</h1>
                <button
                    style={{
                        backgroundColor: activeButton === `plus-${key}` ? '#FFF8DB' : 'white',
                        borderColor: activeButton === `plus-${key}` ? '#FCCF12' : '#B6B6B6',
                    }}
                    className="text-[#484C52] border rounded-full w-10 h-6 flex items-center justify-center py-2"
                    onClick={() => handleIncrement(key)}
                >
                    +
                </button>
            </div>
        </div>
        {index < Object.keys(values).length - 1 && <hr style={{ border: 0, height: '1px', background: '#B6B6B6', margin: '10px 0' }} />}
    </div>
))}

            </div>

            <div className="mt-10 sm:px-6 mb-0 sm:mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
                <div>
                    <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
                        Back
                    </h1>
                </div>
                <div className="sm:px-6 mt-4 sm:mt-0">
                    <h1 className="text-[#0F172A]">
                        <span className="font-bold">4</span> of 10
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

export default index