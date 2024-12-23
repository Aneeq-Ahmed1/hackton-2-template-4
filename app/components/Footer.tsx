import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (


<div>
  <div className="w-full h-auto bg-[#eeeffb]">
    {/* First Section: Image and other content */}
    <div className="px-[20px] sm:px-[40px] md:px-[310px] py-[40px] sm:py-[60px] md:py-[95px] flex flex-col sm:flex-row justify-between items-start">
      
      {/* Left Side: Image and other content */}
      <div className="flex flex-col w-full sm:w-1/4 mb-8 sm:mb-0">
        <Image src="/hekto.svg" alt="Hekto Logo" width={98} height={34} />

        <div className="py-10 flex items-center border-gray-300 rounded-md overflow-hidden w-full">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 sm:w-64 text-sm focus:outline-none flex-1"
          />

          {/* Sign Up Button */}
          <button className="text-white bg-[#fb2e86] px-6 py-2 flex items-center justify-center">
            Sign Up
          </button>
        </div>

        <p className="text-[#8A8FB9]">
          Contact Info <br />
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>

      {/* Right Side: Categories Section */}
      <div className="flex flex-col w-full sm:w-1/4 mb-8 sm:mb-0 sm:ml-8">
        <div className="text-black text-xl font-semibold font-['Josefin Sans'] mb-9">Categories</div>
        <ul className="space-y-4 text-[#8A8FB9]">
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>
      </div>

      {/* Customer Care Section */}
      <div className="flex flex-col w-full sm:w-1/4 mb-8 sm:mb-0 sm:ml-8">
        <div className="text-black text-xl font-semibold font-['Josefin Sans'] mb-9">Customer Care</div>
        <ul className="space-y-4 text-[#8A8FB9]">
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>
      </div>

      {/* Pages Section */}
      <div className="flex flex-col w-full sm:w-1/4 sm:ml-8">
        <div className="text-black text-xl font-semibold font-['Josefin Sans'] mb-9">Pages</div>
        <ul className="space-y-4 text-[#8A8FB9]">
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </div>
  


<div className="w-full h-14 bg-[#e7e4f8] flex justify-between items-center px-4 flex-col sm:flex-row">
  
  <div className="text-[#9da0ae] leading-[19.2px] text-base font-semibold font-['Lato'] text-center sm:text-left sm:ml-96">
    ©Webecy - All Rights Reserved
  </div>

  <div className="cursor-pointer flex justify-center sm:ml-auto sm:mr-96">
    <Image src={"/footer-icon.svg"} alt="f-icon" width={90} height={50} />
  </div>
  
</div>

  </div>
</div>


  )
}

export default Footer
