import Dot from '@components/icons/Dot'
import { FooterData } from 'data/FooterData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-[110px] w-full bg-[#FCCF12] flex lg:flex-row flex-col justify-center items-center px-2 py-1 space-y-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-2 lg:gap-6 text-[#484C52]">
          <p className="hidden lg:inline-block">© 2023 Holahome</p>
          <Dot className="hidden lg:inline-block" />
          <p>Privacy</p>
          <Dot className="hidden lg:inline-block" />
          <p>Terms</p>
        </div>
        <div className="flex lg:flex-row flex-col justify-end lg:justify-center items-end lg:items-center gap-2 lg:gap-6">
          <p className="font-medium text-[#484C52] ">Connect with us</p>
          <div className="ml-4 flex items-center justify-center gap-4 lf:gap-8">
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
      <p className="lg:hidden inline-block font-medium text-[#484C52]">
        © 2023 Holahome
      </p>
    </div>
  )
}

export default Footer
