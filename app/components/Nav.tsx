import React from 'react'
import Image from 'next/image';
import Link from 'next/link';




// import Products from './Products';



const Nav = () => {
  return (

<div className="bg-white p-8">
  {/* Container */}
  <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4">
    {/* Logo */}
    <div>
      <Image src="/hekto.svg" alt="Hekto Logo" width={98} height={34} />
    </div>
        {/* <Link href="about" target="_blank">About</Link> */}

    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-12 text-sm font-medium">
      <Link
        href="/"
        className="text-pink-500 hover:text-pink-500 flex items-center ${myFont.className}"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
          
        }}
      > Home<span className="text-gray-800 ml-1 text-lg">&#x25BC;</span>
      </Link>

      <Link
        href="/"
        className="text-gray-800 hover:text-pink-500"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Pages
      </Link>

      <Link
        href="/ProductDetails"
        className="text-gray-800 hover:text-pink-500"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Products
      </Link>

      <Link
        href="/Blog"
        className="text-gray-800 hover:text-pink-500"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Blog
      </Link>

      <Link
        href="Shop"
        className="text-gray-800 hover:text-pink-500"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
        }}
      >
        Shop
      </Link>

      <Link
        href="Contact"
        className="text-gray-800 hover:text-pink-500"
        style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
          width: "57px",
        }}
      >
        Contact
      </Link>
    </div>

    {/* Mobile Hamburger Menu (optional) */}
    <div className="md:hidden flex items-center">
      <button className="text-gray-800 hover:text-pink-500">
        {/* Add your hamburger menu icon here */}
      </button>
    </div>

    {/* Search Bar */}
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 w-full sm:w-64 text-sm focus:outline-none"
      />
      <button className="bg-pink-500 px-4 py-3 flex items-center justify-center">
        <Image src="/search.svg" alt="search icon" width={16} height={16} />
      </button>
    </div>
  </div>
</div>











 
  );
};








export default Nav
