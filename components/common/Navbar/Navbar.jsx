import Link from "next/link";
import React from "react";
import { NavLinks } from "@/data/NavLinks";
import Globe from "@/components/icons/Globe";
import ArrowDown from "@/components/icons/ArrowDown";
import Menu from "@/components/icons/Menu";
import ProfileIcon from "@/components/icons/ProfileIcon";
import Image from "next/image";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <div className="h-[80px] w-full bg-[#FCCF12] flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div onClick={() => router.push("/")}>
          {/* logo */}
          <img
            src="/navlogo.png"
            className="h-[55px] w-[115px] hover:cursor-pointer"
            alt=""
          />
        </div>

        <div className="flex items-center gap-10">
          {/* navlinks */}
          {NavLinks.map((item, index) => (
            <Link
              href={item.path}
              key={index + 1}
              className="font-medium hover:text-white text-[#484C52]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          {/* profile and language icon */}
          <div className="flex gap-2 items-center justify-center border rounded-2xl px-2 py-1 border-[#484C52] text-[#484C52] hover:cursor-pointer hover:border-white">
            <Globe />
            <ArrowDown />
          </div>

          <div className="border rounded-2xl hover:border-white  border-[#484C52]">
            <div className="flex text-[#484C52] items-center gap-3 px-3 py-1 hover:cursor-pointer">
              <Menu />
              <ProfileIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
