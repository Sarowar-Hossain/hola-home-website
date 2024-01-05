import { Button } from "@components/ui";
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
  const router = useRouter();
  const [price, setPrice] = useState("");
  const [twoHoursPrice, setTwoHoursPrice] = useState("");
  const [threeHoursPrice, setThreeHoursPrice] = useState("");
  const [sixHoursPrice, setSixHoursPrice] = useState("");
  const [nineHoursPrice, setNineHoursPrice] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleNext = () => {
    if (price === "") {
      setPriceError(true);
    } else {
      setPriceError(false);
      router.push('/list-your-property/property-listing');
    }
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
};

  return (
    <div className="container mx-auto mt-20 lg:w-[60%] 2xl:w-[45%] px-4 mb-10">
      <div className='px-2 sm:px-4'>
        <h1 className="sm:text-3xl text-xl text-[#484C52] sm:mb-1 mb-3">Set price for your property</h1>
        <h1 className='text-lg sm:text-lg text-[#848484] '>You can change it later</h1>
      </div>
      <div className="mt-5 mx-auto px-4">
        <label className="block text-[#484C52] text-lg mb-2">
          Enter Price for 1 day <span className="text-[#FB2B3A]">*</span>
        </label>
        <input
          type="text"
          className={`border ${priceError ? 'border-[#EB5757]' : 'border-[#C4C4C4]'} bg-white w-full h-10 rounded-2xl px-5 focus:outline-none focus:border-[#C4C4C4]`}
          placeholder={"$    Enter price"}
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            setPriceError(false);
          }}
        />
        <p className="text-[#B6B6B6] ml-10 my-1 text-sm sm:text-normal">Similar listings price $ 122- $200</p>
        {priceError && (
          <p className="text-[#EB5757]">This field cannot be empty</p>
        )}
      </div>
      <div className="mt-5 mx-auto px-2 sm:px-4 flex justify-start gap-3 sm:gap-8 items-center">
        <h1 className='sm:text-xl text-base text-[#484C52] sm:mb-0 mb-3'>Would you like to set hourly pricing?</h1>
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
      {isChecked && (
          <div className="mt-5 mx-auto px-4">
          <div className="mt-3">
          <label className="block text-[#484C52] text-lg mb-2">
            Enter Price for 2 hours
          </label>
          <input
            type="text"
            className={`border border-[#C4C4C4] bg-white w-full h-10 rounded-2xl px-5 focus:outline-none focus:border-[#C4C4C4]`}
            placeholder={"$    Enter price"}
            value={twoHoursPrice}
            onChange={(e) => {
              setTwoHoursPrice(e.target.value);
              
            }}
          />
          <p className="text-[#B6B6B6] ml-10 my-1 text-sm sm:text-normal">Similar listings price $ 122- $200</p>
          </div>
          <div className="mt-3">
          <label className="block text-[#484C52] text-lg mb-2">
            Enter Price for 3 hours
          </label>
          <input
            type="text"
            className={`border border-[#C4C4C4] bg-white w-full h-10 rounded-2xl px-5 focus:outline-none focus:border-[#C4C4C4]`}
            placeholder={"$    Enter price"}
            value={threeHoursPrice}
            onChange={(e) => {
              setThreeHoursPrice(e.target.value);
              
            }}
          />
          <p className="text-[#B6B6B6] ml-10 my-1 text-sm sm:text-normal">Similar listings price $ 122- $200</p>
          </div>
          <div className="mt-3">
          <label className="block text-[#484C52] text-lg mb-2">
            Enter Price for 6 hours
          </label>
          <input
            type="text"
            className={`border border-[#C4C4C4] bg-white w-full h-10 rounded-2xl px-5 focus:outline-none focus:border-[#C4C4C4]`}
            placeholder={"$    Enter price"}
            value={sixHoursPrice}
            onChange={(e) => {
              setSixHoursPrice(e.target.value);
              
            }}
          />
          <p className="text-[#B6B6B6] ml-10 my-1 text-sm sm:text-normal">Similar listings price $ 122- $200</p>
          </div>
          <div className="mt-3">
          <label className="block text-[#484C52] text-lg mb-2">
            Enter Price for 9 hours
          </label>
          <input
            type="text"
            className={`border border-[#C4C4C4] bg-white w-full h-10 rounded-2xl px-5 focus:outline-none focus:border-[#C4C4C4]`}
            placeholder={"$    Enter price"}
            value={nineHoursPrice}
            onChange={(e) => {
              setNineHoursPrice(e.target.value);
              
            }}
          />
          <p className="text-[#B6B6B6] ml-10 my-1 text-sm sm:text-normal">Similar listings price $ 122- $200</p>
          </div>  
        </div>
        )}
      <div className="mt-5 mx-auto px-4">
        <p><span className="text-[#FB2B3A]">*</span>Mandatory</p>
      </div>
      
      <div className="mt-10 sm:px-6 mb-0 sm:mb-10 flex justify-between items-center sm:flex sm:justify-between sm:items-center">
        <div>
          <h1 className="text-[#484C52] underline cursor-pointer" onClick={() => router.back()}>
            Back
          </h1>
        </div>
        <div className="sm:px-6 mt-4 sm:mt-0">
          <h1 className="text-[#0F172A]">
            <span className="font-bold">9</span> of 10
          </h1>
        </div>
        <div>
          <Button
            className="cursor-pointer py-2 md:mr-4 px-6 rounded-md text-base font-medium bg-primary"
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
