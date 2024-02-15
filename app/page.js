import Image from "next/image";
import Image_6 from "@/public/assects/images/image-6.png";
import Cycle_Image_1 from "@/public/assects/images/Combat(5)-2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-[#2f2f2f] h-full">
        <div className="bg-image">
          <div className="container max-w-7xl px-4">
            <div className="sm:flex gap-4 py-5">
              <div className="w-full py-2 sm:py-0">
                <div className="flex gap-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_289)">
                        <path
                          d="M16 0C11.658 0 11.112 0.02 9.406 0.096C7.7 0.176 6.538 0.444 5.52 0.84C4.45219 1.24164 3.48498 1.87165 2.686 2.686C1.87215 3.48539 1.24221 4.45248 0.84 5.52C0.444 6.536 0.174 7.7 0.096 9.4C0.02 11.11 0 11.654 0 16.002C0 20.346 0.02 20.89 0.096 22.596C0.176 24.3 0.444 25.462 0.84 26.48C1.25 27.532 1.796 28.424 2.686 29.314C3.574 30.204 4.466 30.752 5.518 31.16C6.538 31.556 7.698 31.826 9.402 31.904C11.11 31.98 11.654 32 16 32C20.346 32 20.888 31.98 22.596 31.904C24.298 31.824 25.464 31.556 26.482 31.16C27.5491 30.7582 28.5156 30.1282 29.314 29.314C30.204 28.424 30.75 27.532 31.16 26.48C31.554 25.462 31.824 24.3 31.904 22.596C31.98 20.89 32 20.346 32 16C32 11.654 31.98 11.11 31.904 9.402C31.824 7.7 31.554 6.536 31.16 5.52C30.7578 4.45245 30.1279 3.48535 29.314 2.686C28.5153 1.87135 27.548 1.24129 26.48 0.84C25.46 0.444 24.296 0.174 22.594 0.096C20.886 0.02 20.344 0 15.996 0H16.002H16ZM14.566 2.884H16.002C20.274 2.884 20.78 2.898 22.466 2.976C24.026 3.046 24.874 3.308 25.438 3.526C26.184 3.816 26.718 4.164 27.278 4.724C27.838 5.284 28.184 5.816 28.474 6.564C28.694 7.126 28.954 7.974 29.024 9.534C29.102 11.22 29.118 11.726 29.118 15.996C29.118 20.266 29.102 20.774 29.024 22.46C28.954 24.02 28.692 24.866 28.474 25.43C28.2175 26.1247 27.8081 26.7529 27.276 27.268C26.716 27.828 26.184 28.174 25.436 28.464C24.876 28.684 24.028 28.944 22.466 29.016C20.78 29.092 20.274 29.11 16.002 29.11C11.73 29.11 11.222 29.092 9.536 29.016C7.976 28.944 7.13 28.684 6.566 28.464C5.871 28.2078 5.24225 27.7992 4.726 27.268C4.1935 26.7521 3.78345 26.1233 3.526 25.428C3.308 24.866 3.046 24.018 2.976 22.458C2.9 20.772 2.884 20.266 2.884 15.992C2.884 11.72 2.9 11.216 2.976 9.53C3.048 7.97 3.308 7.122 3.528 6.558C3.818 5.812 4.166 5.278 4.726 4.718C5.286 4.158 5.818 3.812 6.566 3.522C7.13 3.302 7.976 3.042 9.536 2.97C11.012 2.902 11.584 2.882 14.566 2.88V2.884ZM24.542 5.54C24.2899 5.54 24.0402 5.58966 23.8072 5.68615C23.5743 5.78264 23.3626 5.92407 23.1844 6.10236C23.0061 6.28064 22.8646 6.4923 22.7682 6.72525C22.6717 6.95819 22.622 7.20786 22.622 7.46C22.622 7.71214 22.6717 7.96181 22.7682 8.19475C22.8646 8.4277 23.0061 8.63936 23.1844 8.81765C23.3626 8.99593 23.5743 9.13736 23.8072 9.23385C24.0402 9.33034 24.2899 9.38 24.542 9.38C25.0512 9.38 25.5396 9.17772 25.8996 8.81765C26.2597 8.45757 26.462 7.96922 26.462 7.46C26.462 6.95078 26.2597 6.46242 25.8996 6.10236C25.5396 5.74229 25.0512 5.54 24.542 5.54ZM16.002 7.784C14.9121 7.767 13.8298 7.96697 12.818 8.37228C11.8061 8.77759 10.885 9.38014 10.1083 10.1448C9.33157 10.9096 8.71473 11.8211 8.29368 12.8265C7.87264 13.8319 7.6558 14.911 7.6558 16.001C7.6558 17.091 7.87264 18.1701 8.29368 19.1755C8.71473 20.1809 9.33157 21.0924 10.1083 21.8572C10.885 22.6219 11.8061 23.2244 12.818 23.6297C13.8298 24.035 14.9121 24.235 16.002 24.218C18.1591 24.1843 20.2164 23.3038 21.73 21.7665C23.2435 20.2292 24.0918 18.1583 24.0918 16.001C24.0918 13.8437 23.2435 11.7728 21.73 10.2355C20.2164 8.69817 18.1591 7.81765 16.002 7.784ZM16.002 10.666C17.4167 10.666 18.7734 11.228 19.7737 12.2283C20.774 13.2286 21.336 14.5853 21.336 16C21.336 17.4147 20.774 18.7714 19.7737 19.7717C18.7734 20.772 17.4167 21.334 16.002 21.334C14.5873 21.334 13.2306 20.772 12.2303 19.7717C11.23 18.7714 10.668 17.4147 10.668 16C10.668 14.5853 11.23 13.2286 12.2303 12.2283C13.2306 11.228 14.5873 10.666 16.002 10.666Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_289">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M13.912 11.0992V13.3024H12.2992V15.9952H13.912V24H17.2272V15.9952H19.4512C19.4512 15.9952 19.6608 14.704 19.7616 13.2912H17.24V11.4512C17.24 11.1744 17.6016 10.8048 17.96 10.8048H19.7648V8H17.3088C13.8304 8 13.912 10.696 13.912 11.0992Z"
                        fill="white"
                      />
                      <path
                        d="M6.4 3.2C5.55131 3.2 4.73737 3.53714 4.13726 4.13726C3.53714 4.73737 3.2 5.55131 3.2 6.4V25.6C3.2 26.4487 3.53714 27.2626 4.13726 27.8627C4.73737 28.4629 5.55131 28.8 6.4 28.8H25.6C26.4487 28.8 27.2626 28.4629 27.8627 27.8627C28.4629 27.2626 28.8 26.4487 28.8 25.6V6.4C28.8 5.55131 28.4629 4.73737 27.8627 4.13726C27.2626 3.53714 26.4487 3.2 25.6 3.2H6.4ZM6.4 0H25.6C27.2974 0 28.9252 0.674284 30.1255 1.87452C31.3257 3.07475 32 4.70261 32 6.4V25.6C32 27.2974 31.3257 28.9252 30.1255 30.1255C28.9252 31.3257 27.2974 32 25.6 32H6.4C4.70261 32 3.07475 31.3257 1.87452 30.1255C0.674284 28.9252 0 27.2974 0 25.6V6.4C0 4.70261 0.674284 3.07475 1.87452 1.87452C3.07475 0.674284 4.70261 0 6.4 0Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M29.3333 2.66666L14.6667 17.3333"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.3333 2.66666L20 29.3333L14.6667 17.3333L2.66666 12L29.3333 2.66666Z"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full py-2 sm:py-0 flex justify-start sm:justify-end">
                <div class="relative">
                  <input
                    type="text"
                    id="password"
                    class="w-64 pl-3 pr-10 py-2 bg-[#2f2f2f] border-2 text-white border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Search here..."
                  />
                  <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 ms-56 bg-white ps-1 rounded-full  text-white focus:outline-none hover:text-gray-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_371)">
                        <path
                          d="M16.0208 15.961H15.1979L14.9062 15.6744C15.9271 14.4643 16.5417 12.8934 16.5417 11.1844C16.5417 7.37381 13.5104 4.28497 9.77083 4.28497C6.03125 4.28497 3 7.37381 3 11.1844C3 14.9951 6.03125 18.0839 9.77083 18.0839C11.4479 18.0839 12.9896 17.4576 14.1771 16.4174L14.4583 16.7146V17.5532L19.6667 22.8498L21.2188 21.2683L16.0208 15.961ZM9.77083 15.961C7.17708 15.961 5.08333 13.8275 5.08333 11.1844C5.08333 8.54141 7.17708 6.40788 9.77083 6.40788C12.3646 6.40788 14.4583 8.54141 14.4583 11.1844C14.4583 13.8275 12.3646 15.961 9.77083 15.961Z"
                          fill="#2F2F2F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_371">
                          <rect
                            width="20"
                            height="20.4749"
                            fill="white"
                            transform="translate(0 0.208984)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="w-full md:w-2/5">
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
                <h2>dddd</h2>
              </div>
              <div className="w-full md:w-3/5 px-2">
                <div className="flex gap-4 items-center justify-between">
                  <div className="w-11/12">
                    <div className="flex justify-center mt-2">
                      <Image src={Image_6} />
                    </div>
                    <div className="flex justify-center">
                      <Image src={Cycle_Image_1} />
                    </div>
                  </div>
                  <div className="w-1/12">crolll bar</div>
                </div>
                <div className="flex justify-between gap-1 pb-2">
                  <div className="text-3xl font-semibold capitalize leading-10 tracking-tighter text-white">
                    explore bikes
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="text-xl font-semibold capitalize leading-loose underline tracking-tighter text-white"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="sm:flex justify-between gap-2">
                  <div className="border-solid border-2 border-white rounded-xl shadow-sm p-3 my-2">
                    <div className="flex justify-between gap-2">
                      <div className="text-white text-base font-normal">
                        Firefox
                      </div>
                      <div className="text-white text-base font-normal">
                        Combat
                      </div>
                    </div>
                    <div
                      className="text-end text-white font-light"
                      style={{ fontSize: "8.848px" }}
                    >
                      MTB
                    </div>
                    <div className="my-4 flex justify-center">
                      <Image src={Cycle_Image_1} />
                    </div>
                    <div className="flex gap-2 justify-between">
                      <div
                        className="text-white font-normal max-w-16"
                        style={{ fontSize: "10.021px" }}
                      >
                        Available at Bike Station
                      </div>
                      <div>
                        <div className="text-white text-2xl py-0 font-medium">
                          200INR
                        </div>
                        <div
                          className="text-end text-white font-light -mt-2"
                          style={{ fontSize: "10.932px" }}
                        >
                          per hour
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2">
                      <Link
                        href="#"
                        className="font-medium"
                        style={{ fontSize: "14.576px" }}
                      >
                        Book your Cycle
                      </Link>
                    </div>
                  </div>
                  <div className="border-solid border-2 border-white rounded-xl shadow-sm p-3 my-2">
                    <div className="flex justify-between gap-2">
                      <div className="text-white text-base font-normal">
                        Firefox
                      </div>
                      <div className="text-white text-base font-normal">
                        Combat
                      </div>
                    </div>
                    <div
                      className="text-end text-white font-light"
                      style={{ fontSize: "8.848px" }}
                    >
                      MTB
                    </div>
                    <div className="my-4 flex justify-center">
                      <Image src={Cycle_Image_1} />
                    </div>
                    <div className="flex gap-2 justify-between">
                      <div
                        className="text-white font-normal max-w-16"
                        style={{ fontSize: "10.021px" }}
                      >
                        Available at Bike Station
                      </div>
                      <div>
                        <div className="text-white text-2xl py-0 font-medium">
                          200INR
                        </div>
                        <div
                          className="text-end text-white font-light -mt-2"
                          style={{ fontSize: "10.932px" }}
                        >
                          per hour
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2">
                      <Link
                        href="#"
                        className="font-medium"
                        style={{ fontSize: "14.576px" }}
                      >
                        Book your Cycle
                      </Link>
                    </div>
                  </div>
                  <div className="border-solid border-2 border-white rounded-xl shadow-sm p-3 my-2">
                    <div className="flex justify-between gap-2">
                      <div className="text-white text-base font-normal">
                        Firefox
                      </div>
                      <div className="text-white text-base font-normal">
                        Combat
                      </div>
                    </div>
                    <div
                      className="text-end text-white font-light"
                      style={{ fontSize: "8.848px" }}
                    >
                      MTB
                    </div>
                    <div className="my-4 flex justify-center">
                      <Image src={Cycle_Image_1} />
                    </div>
                    <div className="flex gap-2 justify-between">
                      <div
                        className="text-white font-normal max-w-16"
                        style={{ fontSize: "10.021px" }}
                      >
                        Available at Bike Station
                      </div>
                      <div>
                        <div className="text-white text-2xl py-0 font-medium">
                          200INR
                        </div>
                        <div
                          className="text-end text-white font-light -mt-2"
                          style={{ fontSize: "10.932px" }}
                        >
                          per hour
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2">
                      <Link
                        href="#"
                        className="font-medium"
                        style={{ fontSize: "14.576px" }}
                      >
                        Book your Cycle
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="wrapper hidden">
        <div class="semi-circle">
          <div className="flex">
            <div className="w-1/2">111</div>
            <div className="w-1/2 text-white pt-20 bg-red-200">111</div>
          </div>
        </div>
      </div> */}
      <div class="relative bg-black h-screen hidden">
        <div class="absolute left-0 top-0 w-2/5 h-full bg-green-500 rounded-r-full"></div>
        <div class="container mx-auto relative h-full">
          <div>
            <div class="absolute left-0 w-1/2 h-full">
              <div class="text-white">Left Side Content</div>
            </div>
            <div class="absolute right-0 w-1/2 h-full">
              <div className="flex justify-end">
                <div class="relative mt-1">
                  <input
                    type="text"
                    id="password"
                    class="w-64 pl-3 pr-10 py-2 bg-black border-2 text-white border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Search here..."
                  />
                  <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 ms-56 bg-white ps-1 rounded-full  text-white focus:outline-none hover:text-gray-900 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 25 26"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_371)">
                        <path
                          d="M16.0208 15.961H15.1979L14.9062 15.6744C15.9271 14.4643 16.5417 12.8934 16.5417 11.1844C16.5417 7.37381 13.5104 4.28497 9.77083 4.28497C6.03125 4.28497 3 7.37381 3 11.1844C3 14.9951 6.03125 18.0839 9.77083 18.0839C11.4479 18.0839 12.9896 17.4576 14.1771 16.4174L14.4583 16.7146V17.5532L19.6667 22.8498L21.2188 21.2683L16.0208 15.961ZM9.77083 15.961C7.17708 15.961 5.08333 13.8275 5.08333 11.1844C5.08333 8.54141 7.17708 6.40788 9.77083 6.40788C12.3646 6.40788 14.4583 8.54141 14.4583 11.1844C14.4583 13.8275 12.3646 15.961 9.77083 15.961Z"
                          fill="#2F2F2F"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_371">
                          <rect
                            width="20"
                            height="20.4749"
                            fill="white"
                            transform="translate(0 0.208984)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex justify-center my-20">
                <Image src={Image_6} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="rent-left-bg-style h-screen bg-[#059E3C] hidden"
        style={{ clipPath: "circle(66.1% at 0 52%)" }}
      >
        <div className="container max-w-7xl">
          <div className="md:flex gap-4">
            <div className="w-full">11</div>
            <div className="w-full">11</div>
          </div>
        </div>
      </div>
    </div>
  );
}
