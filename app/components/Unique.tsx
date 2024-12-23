import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (

<div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-10 px-6 py-12 bg-[#f1f0ff]">
  {/* Left Section: Image */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <div
      style={{ backgroundColor: '#f1f0ff' }} // Inline Debugging
      className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]  !bg-[#f1f0ff]"
    >
      <Image
        className="absolute w-full h-full object-cover"
        src="/sofa.svg"
        alt="Product Image"
        width={200}
        height={200}
      />
    </div>
  </div>

  {/* Right Section: Text and Features */}
  <div className="w-full lg:w-1/2 flex flex-col space-y-6">
    {/* Title */}
    <div className="text-[#151875] text-3xl sm:text-4xl font-bold font-['Josefin Sans'] leading-snug tracking-wide">
      Unique Features Of Latest & Trending Products
    </div>

    {/* Features */}
    <div className="space-y-4">
      <div className="flex items-start space-x-4">
        <div className="w-4 h-4 bg-[#f52b70] rounded-full"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato']">
          All frames constructed with hardwood solids and laminates.
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-4 h-4 bg-[#2b2bf5] rounded-full"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato']">
          Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails.
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <div className="w-4 h-4 bg-[#2bf5cc] rounded-full"></div>
        <div className="text-[#acabc3] text-base font-medium font-['Lato']">
          Arms, backs, and seats are structurally reinforced for durability.
        </div>
      </div>
    </div>

    {/* Product Name and Price */}
    <div>
      <div className="text-[#151875] text-lg font-semibold font-['Josefin Sans']">
        B&B Italian Sofa
      </div>
      <div className="text-[#151875] text-lg font-['Lato']">$32.00</div>
    </div>

    {/* Add to Cart Button */}
    <button className="w-40 h-11 bg-[#fb2e86] text-white text-base font-semibold font-['Josefin Sans'] rounded-sm">
      Add To Cart
    </button>
  </div>
</div>











  )
}

export default Unique
