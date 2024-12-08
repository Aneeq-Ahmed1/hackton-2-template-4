import React from 'react'
import { GlobeAltIcon, CurrencyDollarIcon, UserIcon, HeartIcon  } from '@heroicons/react/24/solid';







const Headingbar = () => {
  return (
       
<div className="flex flex-col text-base font-semibold whitespace-nowrap text-zinc-100">
  <div className="flex flex-col justify-center items-center px-4 sm:px-10 lg:px-16 py-2.5 w-full bg-violet-600">
    <div className="flex flex-wrap gap-5 w-full max-w-screen-xl justify-between">
      {/* Left Section: User Info */}
      <div className="flex gap-6 sm:gap-8 my-auto" role="list">
        <div className="text-[#f1f1f1] text-sm sm:text-base">mhhasanul@gmail.com</div>
        <div className="text-[#f1f1f1] text-sm sm:text-base">(12345)67890</div>
      </div>

      {/* Right Section: Language, Currency, Login & Wishlist */}
      <div className="flex gap-4 sm:gap-6 justify-end items-center">
        <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] flex items-center">
          <GlobeAltIcon className="h-5 w-5 mr-2" /> 
          English
        </div>
        <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] flex items-center">
          <CurrencyDollarIcon className="h-5 w-5 mr-2" />
           USD
        </div>
        <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
          <UserIcon className="h-5 w-5 mr-2" />
           Login
        </div>
        <div className="text-[#f1f1f1] text-sm sm:text-base font-semibold font-['Josefin Sans'] cursor-pointer flex items-center">
          <HeartIcon className="h-5 w-5 mr-2" />
           Wishlist
        </div>
      </div>
    </div>
  </div>
  </div>


   
  
  )
}

export default Headingbar
