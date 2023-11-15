import { FooterData } from "data/FooterData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[80px] w-full bg-[#FCCF12] flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <p>© 2023 Holahome</p>-<p>Privacy</p>-<p>Terms</p>
        </div>
        <div className="flex justify-center items-center gap-6">
          <p className="font-medium text-[#484C52]">Connect with us</p>
          <div className="ml-4 flex items-center justify-center gap-8">
            {FooterData.map((data, index) => (
              <div key={index}>
                <Link href="" className="">
                  <Image
                    src={data?.icon}
                    alt={data?.label}
                    height={data?.height}
                    width={data?.width}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
