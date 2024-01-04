import React, { useState } from 'react';
import { HouseIcon, Door,EmptyHouse,People } from '@components/icons';
import { Button } from '@components/ui';
import { useRouter } from 'next/router';

const PlaceCard = ({ Icon, title, subtitle }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="w-full p-2 sm:p-4 flex-shrink-0">
      <div
        className={`cursor-pointer p-6 border border-[#484C52] rounded-md flex flex-row items-center justify-between ${
          isSelected ? 'border-[#F9C900] bg-[#FFF8DB]' : ''
        }`}
        onClick={handleCardClick}
      >
        <div className="flex flex-col">
          <h1 className="text-[#484C52] font-bold">{title}</h1>
          <h1 className="text-[#848484]">{subtitle}</h1>
        </div>
        <div className="ml-4">
          <Icon className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

const places = [
  { icon: HouseIcon, title: 'An entire place', subtitle: 'Guests have the whole place to themselves.' },
  { icon: Door, title: 'A room', subtitle: 'Guests have their own room in a home, plus shared spaces.' },
  { icon: EmptyHouse, title: 'A shared room', subtitle: 'Guests sleep in a room or common area that is shared with others.' },
];

const Index = () => {
  const router = useRouter();
  return (
    <div className="px-4 lg:w-[60%] container mx-auto sm:mt-40 mt-10">
      <h1 className="text-3xl text-[#484C52] mb-6">What type of place will guests have?</h1>
      <div className="flex flex-wrap lg:w-3/4 md:w-3/4 w-full">
        {places.map((place, index) => (
          <PlaceCard key={index} Icon={place.icon} title={place.title} subtitle={place.subtitle} />
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
            <span className="font-bold">2</span> of 10
          </h1>
        </div>
        <div>
          <Button
            className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary"
            onClick={() => router.push('/list-your-property/location')}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

