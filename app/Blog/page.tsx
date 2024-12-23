
import React from "react";
import Image from "next/image";
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F2F0FF]  py-10 mb-6 ">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#151875] mb-2">Blog Page</h1>
          <p className="text-sm text-gray-600">
            Home . Pages . <span className="text-pink-500">Blog Page</span>
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <Image src="/blog/m1.svg" alt="Blog"  height={453} width={870}  className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-[#151875] mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-[#8A8FB9] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="/page1"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </article>
        </section>

        {/* Sidebar Section */}
        <aside className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Search for posts"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#151875]">Categories</h3>
            <ul className="text-sm text-[#8A8FB9] space-y-1 grid grid-cols-2">
              <li className="hover:text-purple-600 cursor-pointer">
                Hobbies (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (14)
              </li>
              <li className="hover:text-purple-600 cursor-pointer">
                Women (21)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#151875]">Recent Post</h3>
            <ul className="space-y-3">
                
              <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                
                <Image
                  src="/blog/s1.svg"
                  alt="Recent"
                  height={70}
                    width={51}
                  className="w-10 h-10 rounded object-cover"
                />
                <h1>Its is a long established fact<br/>Aug 09 2022</h1>
               
              </li>
              <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                <Image
                  src="/blog/s2.svg"
                  alt="Recent"
                  height={70}
                  width={51}
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
              
              <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                <Image
                  src="/blog/s3.svg"
                  alt="Recent"
                  height={70}
                  width={51}
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
              <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                <Image
                  src="/blog/s4.svg"
                  alt="Recent"
                  height={70}
                  width={51}
                  className="w-10 h-10 rounded object-cover"
                />
                    <h1>Its is a long established fact<br/>Aug 09 2022</h1>
              </li>
            </ul>
          </div>
          
        </aside>
        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <Image src="/blog/m2.svg" alt="Blog"  height={453} width={870}  className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-[#8A8FB9] mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-[#8A8FB9] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="/Blog/page1"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
            
          </article>
        </section>
        <div>
            <h3 className="text-lg font-semibold text-[#151875]">
              Sale products
            </h3>
            <ul className="space-y-3">
                
                <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                  
                  <Image
                    src="/blog/s5.svg"
                    alt="Recent"
                    height={70}
                    width={51}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <h1>Elit ornare in enim mauris<br/>Aug 09 2022</h1>
                 
                </li>
                <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                  <Image
                    src="/blog/s6.svg"
                    alt="Recent"
                    height={70}
                    width={51}
                    className="w-10 h-10 rounded object-cover"
                  />
                      <h1>Viverra pulvinar et enim<br/>Aug 09 2022</h1>
                </li>
                
                <li className="flex items-center space-x-2 text-sm text-[#8A8FB9]">
                  <Image
                    src="/blog/s7.svg"
                    alt="Recent"
                    height={70}
                    width={51}
                    className="w-10 h-10 rounded object-cover"
                  />
                      <h1>Mattis varius donec fd<br/>Aug 09 2022</h1>
                </li>
               
              </ul>
              <h3 className="my-4 text-lg font-semibold text-[#151875]">
              Offer products
            </h3>
            <Image
                    src="/blog/s8.svg"
                    alt="Recent"
                    height={282}
                    width={267}
                    className="cursor-pointer rounded object-cover"
                  />
            <h3 className="my-4 text-lg font-semibold text-[#151875]">
              Follow
            </h3>
            <Image
                    src="/blog/s9.svg"
                    alt="Recent"
                    height={25}
                    width={103}
                    className="cursor-pointer rounded object-cover"
                  /> 
             <h3 className="my-4 text-lg font-semibold text-[#151875]">
              Tags
            </h3> 
            <Image
                    src="/blog/s10.svg"
                    alt="Recent"
                    height={64}
                    width={228}
                    className="cursor-pointer rounded object-cover"
                  />     

          </div>

        

        {/* Blog Section */}
        <section className="md:col-span-3">
          <article className="bg-white shadow rounded-lg overflow-hidden">
            <Image src="/blog/m3.svg" alt="Blog" height={453} width={870} className="w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center text-xs text-[#151875] mb-2">
                <span className="flex items-center gap-1">
                  <i className="fa fa-pen"></i> Surf Aviation
                </span>
                <span>Aug 09 2020</span>
              </div>
              <h2 className="text-lg font-bold text-[#151875]">
                Mauris at orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-[#8A8FB9] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
              </p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </article>
        </section>
      </main>
      <div className="flex justify-center items-center ">
    <Image className="py-20" src="post-3/16.svg" alt="post-16" width="904" height="93" />
</div>
    </div>
  );
};

export default BlogPage;
