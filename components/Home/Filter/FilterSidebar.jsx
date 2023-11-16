import { Button, Input, Text } from "@components/ui";
import { useState } from "react";

const FilterSidebar = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const propertyType = ["House", "Flat", "Guest house", "Hotel"];

  const amenities = ["Pool", "Wi-Fi", "Hot Tub", "Air conditioning"];
  const accessibility = [
    "Wheelchair accessible",
    "Lift",
    "Step-free guest entrance",
  ];
  const propertyReviews = [
    "4+ stars",
    "Rated highly for cleaniness",
    "Rated highly for location",
  ];

  return (
    <>
      <Text variant="heading" className="text-xl font-medium text-[#484C52] ">
        Filters
      </Text>
      <hr className="w-full" />
      <div className="flex flex-col-reverse ">
        <div className="space-y-4 px-2 pb-16">
          {/* *********** Price Range *********** */}
          <div className="text-[#484C52] ">
            <Text variant="sectionHeading" className="text-lg font-medium  ">
              Price range
            </Text>
            <div className="flex items-center justify-between font-normal">
              <div className="flex w-[149px] flex-col rounded-lg border border-[#FCCF12] px-4 py-1">
                <label htmlFor="Location" className=" text-xs text-[#484C52] ">
                  Minimum
                </label>
                <Input
                  id="Location"
                  type="number"
                  placeholder="$0"
                  className="h-6 border-none p-0 text-sm font-light text-[#0F172A] focus:outline-none"
                />
              </div>
              <div className="mx-2 h-0 w-[30px] border border-[#0F172A]"></div>
              <div className="flex w-[149px] flex-col rounded-lg border border-[#FCCF12] px-4 py-1">
                <label htmlFor="Location" className=" text-xs text-[#484C52] ">
                  Maximum
                </label>
                <Input
                  id="Location"
                  type="number"
                  placeholder="$100"
                  className="h-6 border-none p-0 text-sm font-light text-[#0F172A] focus:outline-none"
                />
              </div>
            </div>
          </div>
          {/* *********** Property Type *********** */}
          <div className="text-[#484C52]">
            <Text variant="sectionHeading" className="text-lg font-medium ">
              Property Type
            </Text>
            <div className="grid grid-cols-2 justify-between gap-3 self-center font-normal">
              {propertyType.map((item) => {
                return (
                  <div className="flex w-[165px] flex-col rounded-lg border border-[#FCCF12] px-4 py-2 hover:bg-[#FFF8DB]">
                    <Text variant="paragraph">{item}</Text>
                  </div>
                );
              })}
            </div>
          </div>
          {/* *********** bed and bath *********** */}
          <div className="grid space-y-7 text-[#484C52]">
            <div>
              <Text variant="sectionHeading" className="text-lg font-medium">
                Bedrooms
              </Text>
              <div className="flex justify-between font-normal">
                {Array(7)
                  .fill(1)
                  .map((item, index) => {
                    return (
                      <div className="flex flex-col rounded-lg border border-[#FCCF12] px-3 py-1 hover:bg-[#FFF8DB]">
                        <Text variant="paragraph">{index + 1}</Text>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <Text variant="sectionHeading" className="text-lg font-medium">
                Bathrooms
              </Text>
              <div className="flex justify-between font-normal">
                {Array(7)
                  .fill()
                  .map((item, index) => {
                    return (
                      <div className="flex flex-col rounded-lg border border-[#FCCF12] px-3 py-1 hover:bg-[#FFF8DB]">
                        <Text variant="paragraph">{index + 1}</Text>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* *********** Amenities *********** */}
          <div className="grid space-y-2 text-[#484C52]">
            <div>
              <Text variant="sectionHeading" className="text-lg font-medium">
                Amenities
              </Text>
              <div className="grid gap-y-1 font-normal">
                {amenities.map((item, index) => {
                  return (
                    <label className="flex items-center justify-between text-base">
                      {item}
                      <input
                        type="checkbox"
                        name="myCheckbox"
                        // defaultChecked={true}
                        className="accent-pink-5000"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <p className="text-base font-medium underline">Show more</p>
          </div>
          {/* *********** Accessibility & Property Reviews *********** */}
          <div className="grid space-y-7 text-[#484C52]">
            <div>
              <Text variant="sectionHeading" className="text-lg font-medium">
                Accessibility
              </Text>
              <div className="space-y-1 font-normal">
                {accessibility.map((item, index) => {
                  return (
                    <label className="flex items-center justify-between text-base">
                      {item}
                      <input
                        type="checkbox"
                        name="myCheckbox"
                        // defaultChecked={true}
                        className="accent-pink-5000"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              <Text variant="sectionHeading" className="text-lg font-medium">
                Property Reviews
              </Text>
              <div className="space-y-1 font-normal">
                {propertyReviews.map((item, index) => {
                  return (
                    <label className="flex items-center justify-between text-base">
                      {item}
                      <input
                        type="checkbox"
                        name="myCheckbox"
                        // defaultChecked={true}
                        className="accent-pink-5000"
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
          {/* *********** Accessibility & Property Reviews *********** */}
          <div className="grid text-[#484C52]">
            <div className="flex justify-between">
              <label className="text-lg font-medium">Self check-in</label>
              <input
                type="checkbox"
                name="myCheckbox"
                // defaultChecked={true}
                className="accent-pink-5000"
              />
            </div>
          </div>
        </div>
        {/* *********** Button *********** */}
        <div className="mb-4 mt-0 flex items-center justify-between bg-[#FFFAE7] px-5 py-4">
          <p className="text-sm font-medium">Clear all</p>
          <Button
            variant="slim"
            // type="submit"
            className="w-[170px] px-0 py-3 text-sm font-medium text-[#484C52]"
            // loading={loading}
            // disabled={disabled}
          >
            Show 562 homes
          </Button>
        </div>
      </div>
    </>
  );
};
export default FilterSidebar;
