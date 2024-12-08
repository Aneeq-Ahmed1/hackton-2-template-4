import Image from 'next/image'
import React from 'react'

const Promotional = () => {
  return (

<div className="relative w-full min-h-screen bg-[#F2F0FF]">
  {/* Decorative Squares */}
  <div className="absolute w-16 h-3.5 top-[80%] left-[90%] md:top-[70%] md:left-[80%] lg:top-[696px] lg:left-[927px]">
    <div className="absolute w-2.5 h-2.5 bg-[#fb2e86] transform rotate-45"></div>
    <div className="absolute left-6 w-2.5 h-2.5 border border-[#fb2e86] transform rotate-45"></div>
    <div className="absolute left-12 w-2.5 h-2.5 border border-[#fb2e86] transform rotate-45"></div>
  </div>

  {/* Chair Section */}
  <div className="relative w-full lg:w-auto lg:max-w-lg lg:left-[1041px] lg:top-[39px]">
    <div className="absolute w-full h-full bg-[#ecd2fa]/30 rounded-full blur-md hidden lg:block"></div>
    <div className="absolute w-full h-full bg-[#ecd2fa]/30 rounded-full blur-md top-6"></div>
    <Image
      src="/promo/pink-chair.svg"
      alt="chair"
      width={1177}
      height={689}
      className="absolute top-[60px] left-[10px] object-contain mx-auto"
    />
  </div>

  {/* "Shop Now" Button */}
  <div className="absolute top-[70%] left-[10%] md:left-[20%] lg:top-[478px] lg:left-[375px]">
    <div className="w-40 h-12 bg-[#fb2e86] rounded-sm">
      <span className="absolute cursor-pointer text-white text-base font-semibold font-['Josefin Sans'] top-3 left-10">
        Shop Now
      </span>
    </div>
  </div>

  {/* Text Section */}
  <div className="absolute top-[30%] left-[10%] w-full max-w-xl lg:top-[203px] lg:left-[375px]">
    <p className="text-[#fb2e86] text-base font-bold font-['Lato']">
      Best Furniture For Your Castle....
    </p>
    <h1 className="mt-4 text-black text-4xl lg:text-5xl font-bold font-['Josefin Sans'] tracking-wide">
      New Furniture Collection<br />Trends in 2020
    </h1>
    <p className="mt-4 text-[#8a8fb9] text-sm lg:text-base font-['Lato'] leading-6 lg:leading-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing<br />
      in phasellus non in justo.
    </p>
  </div>

  {/* Lamp Section (Left side) */}
  <div className=" left-[5%] lg:left-[10%] lg:top-[20px]">
    <Image
      src="/promo/lamp.svg"
      alt="lamp"
      width={287}
      height={387}
      className="object-contain"
    />
  </div>
</div>









  )
}

export default Promotional
