import Image from "next/image";


export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Dictum Morbi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/1.svg",
      rating: 4,
    },
    {
      id: 2,
      name: "Sodales Sit",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/2.svg",
      rating: 5,
    },
    {
      id: 3,
      name: "Nibh Varius",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/3.svg",
      rating: 3,
    },
    {
      id: 4,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/4.svg",
      rating: 4,
    },
    {
      id: 5,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/5.svg",
      rating: 5,
    },
    {
      id: 6,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/6.svg",
      rating: 2,
    },
    {
      id: 7,
      name: "Mauris Quis",
      description: "Magna in est adipiscing in phasellus non in justo.",
      price: 26.0,
      oldPrice: 52.0,
      image: "/shop/7.svg",
      rating: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F2F0FF] py-10 mb-6 ">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#151875] mb-2">Shop</h1>
          <p className="text-sm text-gray-600">
            Home . Pages . <span className="text-pink-500">Shop</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row text-[#151875]">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-4 border-r bg-gray-100">
          {/* Product Brand */}
          <div className="mb-6 text-[#acabc3]">
            <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Product Brand</h2>
            {["Coaster Furniture", "Fusion Dot High Fashion", "Unique Furniture Restoration"].map(
              (brand) => (
                <label key={brand} className="block mb-2">
                  <input type="checkbox" className="mr-2" />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Discount Offer */}
          <div className="mb-6 text-[#acabc3]">
            <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Discount Offer</h2>
            {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map((offer) => (
              <label key={offer} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {offer}
              </label>
            ))}
          </div>

          {/* Rating Item */}
          <div className="mb-6 text-[#acabc3]">
            <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Rating Item</h2>
            {[5, 4, 3].map((stars, index) => (
              <label key={index} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span className="flex items-center">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
              </label>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-6 text-[#acabc3]">
            <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Categories</h2>
            {["Prestashop", "Magento", "Bigcommerce", "osCommerce", "3dcart"].map((category) => (
              <label key={category} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            ))}
          </div>
          <div className="mb-6 text-[#acabc3]">
            <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Price Filter</h2>
            {["$0.00 - $150.00", "$150.00 - $350.00", "$150.00 - $504.00", "$450.00 +", ].map((category) => (
              <label key={category} className="block mb-2">
                <input type="checkbox" className="mr-2" />
                {category}
              </label>
            ))}
            
            {/* <input
              type="text"
              className="w-52 h-8 bg-white rounded-sm border border-[#bcbddb] px-2"
              placeholder="$10.00 - $20000"/> */}

<div className="relative w-52">
  {/* Input Field */}
  <input
    type="text"
    className="w-full h-8 bg-white rounded-sm border border-[#bcbddb] pl-2 pr-10"
    placeholder="$10.00 - $20000"
  />
  {/* Search Icon (Telescope) */}
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 17a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6zm0 0l7 7m-7-7V5"
      />
    </svg>
  </div>
</div>
<div className="my-6 text-[#acabc3]">
  <h2 className="text-lg font-bold mb-2 text-[#151875] underline">Filter By Color</h2>
  <div className="flex flex-wrap items-center">
    {/* Row 1 */}
    <div className="flex items-center space-x-3 mb-2 w-full">
      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
      <p className="text-gray-600">Blue</p>

      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
      <p className="text-gray-600">Orange</p>

      <div className="w-6 h-6 bg-[#FFBF95] rounded-full"></div>
      <p className="text-gray-600">Brown</p>
    </div>

    {/* Row 2 */}
    <div className="flex items-center space-x-3 w-full">
      <div className="w-6 h-6 bg-[#33D221] rounded-full"></div>
      <p className="text-gray-600">Red</p>

      <div className="w-6 h-6 bg-[#E248FF] rounded-full"></div>
      <p className="text-gray-600">Green</p>

      <div className="w-6 h-6 bg-[#26CBFF] rounded-full"></div>
      <p className="text-gray-600">Yellow</p>
    </div>
  </div>
</div>



          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full lg:w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4 text-[#151875]">Product Grid with Features</h1>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border p-4 bg-white rounded-lg shadow-md flex items-center space-x-4"
              >
                {/* Product Image */}
                <div className="w-1/4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={284}
                    height={197}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="w-3/4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    {/* Colorful Dots */}
                    <div className="flex space-x-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, index) => (
                        <span
                          key={index}
                          className={`${
                            index < product.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          } text-lg`}
                        >
                          ★
                        </span>
                      ))}
                  </div>

                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>

                  {/* Price and Old Price */}
                  <div className="mt-2">
                    <span className="text-lg font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    <span className="ml-2 line-through text-gray-500">
                      ${product.oldPrice}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-2 flex space-x-2">
                    <button className="text-gray-500 hover:text-indigo-600">❤</button>
                    <button className="text-gray-500 hover:text-indigo-600">🔍</button>
                    <button className="text-gray-500 hover:text-indigo-600">🛒</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>        
      </div>
      <div className="flex justify-center items-center">
    <Image className="py-20" src="post-3/16.svg" alt="post-16" width="904" height="93" />
</div>
    </div>
    
  );
}
