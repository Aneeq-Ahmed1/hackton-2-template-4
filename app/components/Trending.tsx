import Image from 'next/image'
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-full px-4">
          {/* Product Cards */}
           {["1", "2", "3", "4"].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
            >
              <div className="w-full h-60 bg-[#f6f7fb]"></div>
              <Image
                className="mt-[-50px]"
                src={`/post-3/${item}.svg`}
                alt="Cantilever Chair"
                width={150}
                height={150}
              />
              <div className="text-center mt-4">
                <p className="text-[#fb2e86] text-lg font-bold font-['Lato']">
                  Cantilever chair
                </p>
                <p className="text-[#151875] text-sm font-normal font-['Lato']">
                  $26.00
                </p>
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
    <Image className="w-52 h-52" src="/post-3/5.svg" alt="Product Image" width={400}height={400} />
  </div>

  {/* Card 2 */}
  <div className="w-full sm:w-96 h-64 bg-[#fff6fb] shadow flex items-center justify-between px-4 p-8">
    <div className="text-[#151875] text-2xl font-semibold font-['Josefin Sans']">
      23% off in all products
    </div>
    <Image className="w-52 h-52" src="/post-3/6.svg" alt="Product Image" width={400}height={400} />
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
    <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/7.svg" alt='post-3' width={400}height={400}/>
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
    <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/8.svg" alt='post8' width={400}height={400} />
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
    <Image className="w-16 h-16 left-[21px] top-[2px] absolute" src="/post-3/9.svg" alt='post-9' width={400}height={400} />
  </div>
</div>



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
      <button className="w-28 mx-auto flex justify-center text-white text-base font-normal font-['Josefin Sans'] tracking-tight text-center pt-3">
        Shop Now
      </button>
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
    <Image
      className="w-full h-full object-cover rounded-full"
      src="/post-3/10.svg"
      alt="Product"
      width={400}
      height={400}
    />
  </div>
</div>
</div>
<div className="text-[#151875] text-5xl p-8 font-bold font-['Josefin Sans']">Top Categories</div>

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
  <Image src="/post-3/11.png" alt="aa" width={400}height={400} />
  <Image src="/post-3/12.png" alt="aa" width={400}height={400}/>
  <Image src="/post-3/13.png" alt="aa" width={400}height={400}/>
  <Image src="/post-3/14.png" alt="aa" width={400}height={400}/>
</div>
<Image className="cursor-pointer w-full h-full" src="post-3/15.svg" alt='post-15' width={400}height={400} />

<Image className="py-6" src="post-3/16.svg" alt='post-16' width={904}height={93}/>

     {/* Leatest Blog */}

<div className="text-[#151875] text-5xl p-8 font-bold font-['Josefin Sans']">Leatest Blog</div>




<div className="flex flex-wrap justify-center space-x-6 space-y-6">
<Image src={"/post-3/Leatest-1.svg"} alt='product-1' width={384} height={384}/>
<Image src={"/post-3/Leatest-2.svg"} alt='product-1' width={384} height={384}/>
<Image src={"/post-3/Leatest-3.svg"} alt='product-1' width={384} height={384}/>

</div>
</div>
</div>


  )
}

export default Trending

