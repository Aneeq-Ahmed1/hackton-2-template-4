import Image from 'next/image'
import React from 'react'

const Promotional = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#F2F0FF] flex flex-col lg:flex-row lg:items-center">
      {/* Decorative Squares */}
      <div className="absolute w-16 h-3.5 top-[85%] left-[75%] sm:top-[80%] sm:left-[80%] md:top-[70%] md:left-[85%] lg:top-[70%] lg:left-[90%]">
        <div className="absolute w-2.5 h-2.5 bg-[#fb2e86] transform rotate-45"></div>
        <div className="absolute left-6 w-2.5 h-2.5 border border-[#fb2e86] transform rotate-45"></div>
        <div className="absolute left-12 w-2.5 h-2.5 border border-[#fb2e86] transform rotate-45"></div>
      </div>


<div className="hidden lg:block absolute top-[10%] left-[5%] sm:top-[12%] sm:left-[8%] lg:top-[20px] lg:left-[10%] z-10">
  <Image
    src="/promo/lamp.svg"
    alt="lamp"
    width={287}
    height={387}
    className="object-contain"
  />
</div>

      {/* Text Section */}
      <div className="order-2 lg:order-1 px-5 sm:px-8 lg:pl-[15%] lg:pr-0 mt-8 lg:mt-0 text-center lg:text-left">
        <p className="text-[#fb2e86] text-sm sm:text-base font-bold font-['Lato']">
          Best Furniture For Your Castle....
        </p>
        <h1 className="mt-4 text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] tracking-wide">
          New Furniture Collection<br />Trends in 2020
        </h1>
        <p className="mt-4 text-[#8a8fb9] text-xs sm:text-sm md:text-base font-['Lato'] leading-5 sm:leading-6 lg:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing<br />
          in phasellus non in justo.
        </p>
        <div className="mt-6">
          <button className="w-36 h-10 sm:w-40 sm:h-12 bg-[#fb2e86] text-white text-sm sm:text-base font-semibold font-['Josefin Sans'] rounded">
            Shop Now
          </button>
        </div>
      </div>

      {/* Chair Section */}
      <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end relative">
        <div className="absolute hidden lg:block w-64 h-64 bg-[#ecd2fa]/30 rounded-full blur-md"></div>
        <Image
          src="/promo/pink-chair.svg"
          alt="chair"
          width={600}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Promotional;
