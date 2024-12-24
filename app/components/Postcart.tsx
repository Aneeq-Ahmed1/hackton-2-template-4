// import Image from 'next/image'
// import React from 'react'


// const Postcart = () => {
//   return (

// <div className="flex flex-col justify-center items-center pt-12">
//   {/* Featured Products Title */}
//   <div className="text-[#1a0b5b] text-5xl font-bold font-['Josefin Sans']">
//     Featured Products
//   </div>

//   {/* Product Cards Container */}
//   <div className="flex flex-wrap justify-center mt-8">
//     {/* Product Cards */}
//     {['one', '2', '3', '4'].map((item, index) => (
//       <div key={index} className="w-full sm:w-1/3 lg:w-1/4 p-2">
//         <div className="w-64 h-96 relative">
//           <div className="w-64 h-96 absolute left-0 top-0 bg-white shadow" />
//           <div className="w-64 h-60 absolute left-0 top-0 bg-[#f6f7fb]" />
//           <div className="absolute left-[71px] top-[251px] text-[#fb2e86] text-lg font-bold font-['Lato']">
//             Cantilever chair
//           </div>
//           <div className="absolute left-[92px] top-[301px] text-[#151875] text-sm font-normal font-['Josefin Sans']">
//             Code - Y523201
//           </div>
//           <div className="absolute left-[115px] top-[327px] text-[#151875] text-sm font-normal font-['Lato']">
//             $42.00
//           </div>
//           <Image className="w-44 h-44 absolute left-[40px] top-[46px]" src={`/post/${item}.svg`} alt="Cantilever Chair" width={400}height={400} />
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Line Center-Bottom */}
//   <div className="w-full flex justify-center mt-12 mb-4">
//     <div className="w-24 h-1 relative">
//       <div className="w-6 h-1 left-0 top-0 absolute bg-[#fb2e86] rounded-lg" />
//       <div className="w-4 h-1 left-[31px] top-0 absolute bg-[#febad7] rounded-lg" />
//       <div className="w-4 h-1 left-[53px] top-0 absolute bg-[#febad7] rounded-lg" />
//       <div className="w-4 h-1 left-[75px] top-0 absolute bg-[#febad7] rounded-lg" />
//     </div>
//   </div>
//   <div className="text-[#151875] p-12 text-5xl font-bold font-['Josefin Sans']">Latest Products</div>

//   {/* Filter Options */}
//   <div className="flex justify-center space-x-6 py-5">
//     {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((item, index) => (
//       <div key={index} className="text-[#151875] text-lg font-normal font-['Lato']">{item}</div>
//     ))}
//   </div>

//   {/* Product Cards (Latest Products) */}
//   <div className="flex flex-wrap justify-center space-x-6 space-y-6">
//     {/* Cards */}
//     {['1', '2', '3', '4', '5', '6'].map((item, index) => (
//       <div key={index} className="w-full sm:w-1/3 lg:w-1/4 p-2">
//         <div className="w-96 h-80 relative">
//           <div className="w-96 h-80 left-0 top-0 absolute">
//             <div className="left-0 top-[285.55px] absolute text-[#151875] text-base font-normal font-['Josefin Sans']">Comfort Handy Craft</div>
//             <div className="left-[255.89px] top-[286.53px] absolute text-[#151875] text-sm font-normal font-['Josefin Sans']">$42.00</div>
//             <div className="left-[307.46px] top-[288.48px] absolute text-[#fb2448] text-xs font-normal font-['Josefin Sans'] line-through">$65.00</div>
//             <div className="w-40 h-px left-0 top-[305.04px] absolute border-2 border-[#eeeffb]"></div>
//             <div className="w-96 h-64 left-0 top-0 absolute bg-[#f7f7f7]" />
//             <Image className="w-56 h-56 left-[73px] top-[33px] absolute" src={`/post-2/${item}.svg`} alt='post-2' width={400}height={400} />
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   <div className="text-[#151875] text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-12 mx-auto">
//     What Shopex Offers!
//   </div>

//   {/* Support Cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 pb-12">
//     {/* Support Cards */}
//     {['1', '2', '3', '4'].map((item, index) => (
//       <div key={index} className="w-64 h-80 relative">
//         <div className="w-64 h-80 left-0 top-0 absolute bg-white shadow">
//           <Image className="w-16 h-16 left-[50%] top-[20%] absolute transform -translate-x-1/2" src={`/support/${item}.svg`} alt="Support Image" width={400}height={400} />
//           <div className="w-56 h-32 left-[27px] top-[148px] absolute">
//             <div className="left-[42px] top-0 absolute text-[#151875] text-xl font-semibold font-['Josefin Sans']">24/7 Support</div>
//             <div className="w-56 h-20 left-0 top-[42px] absolute text-center text-[#1a0b5b]/30 text-base font-bold font-['Lato'] leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//   )
// }

// export default Postcart













import Image from 'next/image';
import React from 'react';

const Postcart = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-12 px-4">
      {/* Featured Products Title */}
      <div className="text-[#1a0b5b] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center">
        Featured Products
      </div>

{/* Product Cards Container */}
<div className="flex flex-wrap justify-between mt-8 gap-4 w-full">
  {/* Product Cards */}
  {['one', '2', '3', '4'].map((item, index) => (
    <div key={index} className="flex-grow-0 flex-shrink-0 w-96 p-2">
      <div className="relative bg-white shadow rounded-lg overflow-hidden">
        {/* Background */}
        <div className="bg-[#f6f7fb] h-60 w-full"></div>

        {/* Image */}
        <Image
          className="absolute left-1/2 top-12 transform -translate-x-1/2"
          src={`/post/${item}.svg`}
          alt="Cantilever Chair"
          width={150}
          height={150}
        />

        {/* Text */}
        <div className="text-center mt-20">
          <p className="text-[#fb2e86] text-lg font-bold font-['Lato']">Cantilever chair</p>
          <p className="text-[#151875] text-sm font-normal font-['Josefin Sans']">Code - Y523201</p>
          <p className="text-[#151875] text-sm font-normal font-['Lato']">$42.00</p>
        </div>
      </div>
    </div>
  ))}
</div>






      

      {/* Line Center-Bottom */}
      <div className="w-full flex justify-center mt-12 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-1 bg-[#fb2e86] rounded-lg"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-4 h-1 bg-[#febad7] rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
        Latest Products
      </div>

      {/* Filter Options */}
      <div className="flex justify-center flex-wrap gap-4 py-5">
        {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((item, index) => (
          <div key={index} className="text-[#151875] text-lg font-normal font-['Lato']">
            {item}
          </div>
        ))}
      </div>

      {/* Product Cards (Latest Products) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {['1', '2', '3', '4', '5', '6'].map((item, index) => (
          <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden">
            <div className="bg-[#f7f7f7] h-64 w-full"></div>
            <Image
              className="absolute left-1/2 top-8 transform -translate-x-1/2"
              src={`/post-2/${item}.svg`}
              alt="Latest Product"
              width={150}
              height={150}
            />
            <div className="text-center mt-4">
              <p className="text-[#151875] text-base font-semibold">Comfort Handy Craft</p>
              <p className="text-[#151875] text-sm">$42.00</p>
              <p className="text-[#fb2448] text-sm line-through">$65.00</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[#151875] text-3xl sm:text-4xl lg:text-5xl font-bold font-['Josefin Sans'] text-center pt-12 pb-8">
        What Shopex Offers!
      </div>

      {/* Support Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 pb-12">
        {['1', '2', '3', '4'].map((item, index) => (
          <div key={index} className="relative bg-white shadow rounded-lg overflow-hidden text-center p-6">
            <Image
              className="mx-auto mb-4"
              src={`/support/${item}.svg`}
              alt="Support"
              width={60}
              height={60}
            />
            <p className="text-[#151875] text-xl font-semibold">24/7 Support</p>
            <p className="text-[#1a0b5b]/50 text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postcart;
