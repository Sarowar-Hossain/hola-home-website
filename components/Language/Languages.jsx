const { Text } = require("@components/ui");
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import englishLogo from "public/LanguageIcons/english.png"
import chineseLogo from "public/LanguageIcons/chinese.png"
import germanLogo from "public/LanguageIcons/german.png"
import spanishLogo from "public/LanguageIcons/spanish.png"

const Languages = () => {
  const language = [
    { name: "English", logo: englishLogo },
    { name: "Chinese", logo: chineseLogo },
    { name: "German", logo: germanLogo },
    { name: "Spanish", logo: spanishLogo },
  ];
  return (
    <>
      {/* <p className="mt-5 text-xl font-normal">Language</p>
      {language?.map((item) => {
        return <h1 key={item}>{item}</h1>;
      })} */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          id="LanguagesMenuContent"
          className="-ms-32 z-50 flex min-w-[200px] flex-col items-center justify-center space-y-6 rounded-md bg-white p-[5px] py-6 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
        >
          <p className="text-[20px] hidden lg:block font-normal">Language</p>
          {language?.map((item) => {
            return (
              <DropdownMenu.Item
                key={item.name}
                className="group relative space-x-[20px] hover:bg-[#FFF8DB] hover:border-[#FCCF12] cursor-pointer flex select-none items-center rounded-[10px] border px-[20px] py-[5px] text-[20px] font-medium leading-none outline-none"
              >
                <Image
                  src={item.logo}
                  width={30}
                  height={30}
                  alt="language-logo"
                />
                <h1>{item.name}</h1>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </>
  );
};
export default Languages;
