import { useState } from 'react';
import {
    Kitchen,
    Wifi,
    WashingMachine,
    TV,
    Parking,
    AirConditioning,
    DedicatedWorkplace,
} from '@components/icons';
import { Button } from "@components/ui";
import { useRouter } from 'next/router';

const PlaceCard = ({ Icon, title }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleCardClick = () => {
        setIsSelected(!isSelected);
    };
    
    return (
        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 sm:p-4 flex-shrink-0 flex-col flex-wrap ">
            <div className="cursor-pointer px-3 py-6 border border-[#484C52] rounded-md flex flex-col items-center justify-center" style={{ borderColor: isSelected ? '#F9C900' : '#484C52', backgroundColor: isSelected ? '#FFF8DB' : '' }} onClick={handleCardClick}>
                <Icon className="w-12 h-12" />
                <h1 className="mt-2 text-[#484C52] text-center">{title}</h1>
            </div>
        </div>
    );
}

const places = [
    { icon: Wifi, title: 'Wifi' },
    { icon: TV, title: 'TV' },
    { icon: Kitchen, title: 'Kitchen' },
    { icon: WashingMachine, title: 'Washing Machine' },
    { icon: Parking, title: 'Parking' },
    { icon: AirConditioning, title: 'Air Conditioning' },
    { icon: DedicatedWorkplace, title: 'Dedicated Workspace' },
];

const Index = () => {
    const router = useRouter();
    return (
        <div className="px-4 lg:w-[70%] container mx-auto mt-10">
            <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Tell guests what your place has to offer</h1>
                <h1 className='text-sm text-[#848484]'>You can add more amenities after you publish your listing.</h1>
                <div className="flex lg:flex-row flex-wrap -mx-2 lg:w-full md:w-full w-full sm:mt-0 mt-5">
                {places.map((place, index) => (
                        <PlaceCard key={index} Icon={place.icon} title={place.title} />
                    
                ))}
            </div>

            <div className="mt-4 sm:px-6 sm:mb-0 mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
                <div>
                    <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
                        Back
                    </h1>
                </div>
                <div className="sm:px-6 mt-4 sm:mt-0">
                    <h1 className="text-[#0F172A]">
                        <span className="font-bold">5</span> of 10
                    </h1>
                </div>
                <div>
                    <Button className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary" onClick={()=>router.push("/list-your-property/amenities/standout-amenities")}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Index;