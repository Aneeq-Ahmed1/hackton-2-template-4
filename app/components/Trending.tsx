import React from 'react'

const Trending = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-12">
  {/* Featured Products Title */}
  <div className="text-[#1a0b5b] text-5xl font-bold font-['Josefin Sans']">
    Trending Products
  </div>

  {/* Product Cards Container */}
  <div className="flex flex-wrap justify-center mt-8">
    {/* Product Cards */}
    {['1', '2', '3', '4'].map((item, index) => (
      <div key={index} className="w-full sm:w-1/3 lg:w-1/4 p-2">
        <div className="w-64 h-96 relative">
          <div className="w-64 h-96 absolute left-0 top-0 bg-white shadow" />
          <div className="w-64 h-60 absolute left-0 top-0 bg-[#f6f7fb]" />
          <div className="absolute left-[71px] top-[251px] text-[#fb2e86] text-lg font-bold font-['Lato']">
            Cantilever chair
          </div>
          
          <div className="absolute left-[115px] top-[327px] text-[#151875] text-sm font-normal font-['Lato']">
            $26.00
          </div>
          <img className="w-44 h-44 absolute left-[40px] top-[46px]" src={`/post-3/${item}.svg`} alt="Cantilever Chair" />
        </div>
      </div>
    ))}
  </div>
  
  <div className="flex flex-wrap justify-center gap-4 m-4">
  {/* Card 1 */}
  <div className="w-full sm:w-96 h-64 bg-[#fff6fb] shadow flex items-center justify-between px-4 p-8">
    <div className="text-[#151875] text-2xl font-semibold font-['Josefin Sans']">
      23% off in all products
    </div>
    <img className="w-52 h-52" src="/post-3/5.svg" alt="Product Image" />
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-96 h-64 bg-[#fff6fb] shadow flex items-center justify-between px-4 p-8">
    <div className="text-[#151875] text-2xl font-semibold font-['Josefin Sans']">
      23% off in all products
    </div>
    <img className="w-52 h-52" src="/post-3/6.svg" alt="Product Image" />
  </div>
  <div className="flex flex-col items-center space-y-4">
  {/* Card 1 */}
  <div className="w-64 h-20 relative flex flex-col justify-between">
    <div className="w-64 h-20 left-0 top-0 absolute">
      <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
      <div className="w-36 h-8 left-[116px] top-[21px] absolute">
        <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
          Executive Seat chair
        </div>
        <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $32.00
        </div>
      </div>
    </div>
    <img className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/7.svg" />
  </div>

  {/* Card 2 */}
  <div className="w-64 h-20 relative flex flex-col justify-between">
    <div className="w-64 h-20 left-0 top-0 absolute">
      <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
      <div className="w-36 h-8 left-[116px] top-[21px] absolute">
        <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
          Executive Seat chair
        </div>
        <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $32.00
        </div>
      </div>
    </div>
    <img className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/8.svg" />
  </div>

  {/* Card 3 */}
  <div className="w-64 h-20 relative flex flex-col justify-between">
    <div className="w-64 h-20 left-0 top-0 absolute">
      <div className="w-28 h-20 left-0 top-0 absolute bg-[#f5f6f8]" />
      <div className="w-36 h-8 left-[116px] top-[21px] absolute">
        <div className="left-0 top-0 absolute text-center text-[#151875] text-base font-semibold font-['Josefin Sans']">
          Executive Seat chair
        </div>
        <div className="left-0 top-[21px] absolute text-center text-[#151875] text-xs font-normal font-['Josefin Sans'] line-through">
          $32.00
        </div>
      </div>
    </div>
    <img className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/9.svg" />
  </div>
</div>
{/* <div className="flex justify-center items-center w-full">
  <div className="text-center text-[#151875] text-5xl font-bold font-['Josefin Sans']">
    Discount Item
  </div>
  
</div>
<div className="w-96 h-96 relative">
  <div className="left-[1px] top-[140px] absolute text-[#151875] text-4xl font-bold font-['Josefin Sans'] leading-10 tracking-wide">20% Discount Of All Products</div>
  <div className="left-[1px] top-[202px] absolute text-[#fb2e86] text-xl font-normal font-['Josefin Sans'] leading-7 tracking-tight">Eams Sofa Compact</div>
  <div className="w-48 h-14 left-0 top-[434px] absolute">
    <div className="w-48 h-14 left-0 top-0 absolute bg-[#fb2e86] rounded-sm" />
    <div className="w-28 left-[48px] top-[20px] absolute text-white text-base font-normal font-['Josefin Sans'] tracking-tight">Shop Now</div>
  </div>
  <div className="w-96 h-12 left-[1px] top-[250px] absolute text-[#b7bacb] text-base font-normal font-['Lato'] leading-loose tracking-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</div>
  <div className="left-[23px] top-[327px] absolute text-[#b8b8dc] text-base font-normal font-['Lato'] leading-loose tracking-tight">Material expose like metals</div>
  <div className="left-[23px] top-[367px] absolute text-[#b8b8dc] text-base font-normal font-['Lato'] leading-loose tracking-tight">Simple neutral colours.</div>
  <div className="left-[295px] top-[367px] absolute text-[#b8b8dc] text-base font-normal font-['Lato'] leading-loose tracking-tight">Material expose like metals</div>
  <div className="left-[295px] top-[327px] absolute text-[#b8b8dc] text-base font-normal font-['Lato'] leading-loose tracking-tight">Clear lines and geomatric figures</div>
  <div className="w-96 h-96 left-[515px] top-0 absolute">
    <div className="w-96 h-96 left-[114px] top-[81px] absolute bg-[#fcecf1] rounded-full" />
    <img className="w-96 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/699x597" />
  </div>
  <div className="w-6 h-6 left-[266px] top-[332px] absolute" />
  <div className="w-6 h-6 left-[266px] top-[371px] absolute" />
</div> */}


<div className="w-full flex justify-center items-center">
  <div className="text-left text-[#151875] text-3xl sm:text-4xl md:text-5xl font-bold font-['Josefin Sans']">
    Discount Item
  </div>
</div>

<div className="w-full flex justify-between items-center relative mt-8 sm:mt-12 md:mt-16 px-4 sm:px-8 lg:px-16 flex-wrap">
  <div className="w-full sm:w-96 lg:w-[45%] relative mb-8 sm:mb-0">
    {/* Discount Title */}
    <div className="text-[#151875] text-2xl sm:text-3xl md:text-4xl font-bold font-['Josefin Sans'] leading-10 tracking-wide mb-4">
      20% Discount Of All Products
    </div>

    {/* Product Name */}
    <div className="text-[#fb2e86] text-sm sm:text-xl font-normal font-['Josefin Sans'] leading-7 tracking-tight mb-4">
      Eams Sofa Compact
    </div>

    {/* Shop Now Button */}
    <div className="w-48 h-14 bg-[#fb2e86] rounded-sm mb-8">
      <div className="w-28 mx-auto text-white text-base font-normal font-['Josefin Sans'] tracking-tight text-center pt-3">
        Shop Now
      </div>
    </div>

    {/* Description */}
    <div className="w-96 h-12 text-[#b7bacb] text-sm sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
    </div>

    {/* Features */}
    <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
      Material expose like metals
    </div>
    <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
      Simple neutral colours.
    </div>
    <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight mb-2">
      Material expose like metals
    </div>
    <div className="text-[#b8b8dc] text-xs sm:text-base font-normal font-['Lato'] leading-loose tracking-tight">
      Clear lines and geometric figures
    </div>
  </div>

  {/* Image Section inside Circle */}
  <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-[#fcecf1] rounded-full flex justify-center items-center mb-8 sm:mb-0">
    <img
      className="w-full h-full object-cover rounded-full"
      src="/post-3/10.svg"
      alt="Product"
    />
  </div>
</div>
</div>
<div className="text-[#151875] text-5xl p-8 font-bold font-['Josefin Sans']">Top Categories</div>
{/* <div>
<img src="/post-3/11.png" alt="aa" />
<img src="/post-3/12.png" alt="aa" />
<img src="/post-3/13.png" alt="aa" />
<img src="/post-3/14.png" alt="aa" />
</div> */}
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
  <img src="/post-3/11.png" alt="aa" />
  <img src="/post-3/12.png" alt="aa" />
  <img src="/post-3/13.png" alt="aa" />
  <img src="/post-3/14.png" alt="aa" />
</div>
<img className="w-full h-full" src="post-3/15.svg" />

<img className="w-96 h-24" src="post-3/16.svg" />
</div>

</div>




  )
}

export default Trending
