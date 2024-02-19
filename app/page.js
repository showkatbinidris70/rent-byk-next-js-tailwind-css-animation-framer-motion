import Image from "next/image";
import Image_6 from "@/public/assects/images/image-6.png";
import Cycle_Image_1 from "@/public/assects/images/Combat(5)-2.png";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="bg-[#2f2f2f] w-full">
        <div className="bg-image">
          <div className="container px-2 sm:px-4">
            {/* search bar */}
            <div className="flex justify-between py-4">
              <div className="flex gap-1 sm:gap-4">
                <div className="transition transform hover:translate-x-1">
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
                <div className="transition transform hover:translate-x-1">
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
                <div className="transition transform hover:translate-x-1">
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
              <div class="relative">
                <input
                  type="text"
                  id="password"
                  class="w-60 sm:w-64 pl-3 pr-10 py-2 bg-[#2f2f2f] border-2 text-white border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Search here..."
                />
                <button class="block w-7 h-7 text-center text-xl leading-0 absolute top-2 ms-52 sm:ms-56 bg-white ps-1 rounded-full  text-white focus:outline-none hover:text-gray-900 transition-colors">
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
            {/* main content */}
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="my-1 md:my-0 w-full hidden md:block">
                <div className="flex gap-36 lg:gap-4 items-center my-5 md:my-20 lg:my-64">
                  <div className="flex gap-2 items-center">
                    <div className="transition transform hover:-translate-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="78"
                        height="57"
                        viewBox="0 0 78 57"
                        fill="none"
                      >
                        <path
                          d="M61.5781 27.4079C60.164 27.4079 58.8039 27.6296 57.5216 28.0353C57.2696 27.7494 57.0103 27.4698 56.7439 27.1968C61.662 25.3947 67.5112 26.1601 72.0003 30.4636C73.0537 31.4719 74.6451 29.8633 73.5894 28.8502C68.0733 23.5679 60.78 22.9075 54.902 25.5315C53.6788 24.5501 52.346 23.7089 50.9294 23.0242C50.8695 22.9959 50.812 22.9983 50.7544 22.9806L51.4099 21.0052L53.0325 16.131C53.7599 16.3362 54.3412 16.7018 54.9284 17.0402C55.9661 17.6382 57.0926 16.986 57.8404 16.0272C58.4192 15.2877 59.5732 13.442 59.288 12.5434C59.004 11.6435 57.6714 10.5114 56.7846 10.5114C53.0733 10.5114 53.0805 12.8559 48.8131 12.8559C46.9772 12.8559 45.8735 12.9361 45.8531 13.731C45.7908 16.3515 47.2252 17.4176 48.1108 17.0001C49.1163 16.5249 49.9551 16.2418 50.6741 16.0944L49.2792 20.2917L46.2929 29.2783C39.5928 19.3966 28.3941 16.9034 24.3723 16.3161C24.7786 15.2311 25.1848 14.1473 25.5887 13.0623C25.7253 12.6955 25.5635 12.2297 25.2999 11.9667L22.9786 9.63983C24.9499 8.71758 27.2784 8.43572 29.3731 8.39798C29.4438 8.3968 29.4966 8.36731 29.5601 8.35552V8.85556C29.5601 9.16573 29.8117 9.41929 30.1221 9.41929C30.4325 9.41929 30.6841 9.16573 30.6841 8.85556V8.39798H34.616C34.7663 8.39611 34.9098 8.33578 35.0151 8.23016C35.1204 8.12454 35.179 7.98221 35.178 7.83425V6.70679C35.1793 6.55873 35.1208 6.41622 35.0155 6.31054C34.9101 6.20485 34.7664 6.14462 34.616 6.14306H30.6841V5.47437C30.6841 5.16421 30.4325 4.91064 30.1221 4.91064C29.8117 4.91064 29.5601 5.16303 29.5601 5.47437V6.17727C29.4966 6.16783 29.4438 6.14188 29.3731 6.14306C26.4299 6.19613 23.0541 6.67613 20.5663 8.40859C19.9791 8.81783 19.797 9.63393 20.3386 10.1776L23.2015 13.0481L22.0655 16.0861L22.0067 16.0826L21.7347 16.9683L19.4758 24.3204C14.4678 23.3804 8.99126 24.6694 4.62799 28.8479C3.57343 29.8609 5.16366 31.4707 6.21703 30.4612C9.91879 26.9149 14.5445 25.7733 18.8095 26.4892L18.5459 27.3466L18.601 27.5671C17.9587 27.4727 17.3067 27.4067 16.6381 27.4067C9.20457 27.4079 3.15759 33.4721 3.15759 40.9267C3.15759 48.3814 9.20457 54.4456 16.6393 54.4456C24.0739 54.4456 30.1209 48.3814 30.1209 40.9267C30.1209 35.01 26.3065 29.9836 21.0193 28.1544C20.9769 27.9078 20.9294 27.662 20.8767 27.4173L20.9965 27.0258C26.5594 28.8549 31.0461 33.9344 31.2474 40.9515C31.2893 42.421 33.5339 42.4245 33.4919 40.9515C33.4811 40.5522 33.4567 40.1534 33.4188 39.7557H33.257C32.9565 39.7522 32.6695 39.6318 32.4589 39.4208C32.2482 39.2097 32.1311 38.9252 32.133 38.6294C32.133 38.0727 32.5452 37.6305 33.0737 37.5397C32.9943 37.1786 32.904 36.8199 32.8029 36.4641C33.0629 36.825 33.3325 37.1693 33.6094 37.5019H36.1199C36.6988 37.5019 37.1601 37.9501 37.2201 38.5138L40.5299 39.8417C41.8565 40.3736 41.2777 42.5531 39.9332 42.0129L35.7844 40.3477C35.7542 40.5393 35.7386 40.7328 35.7377 40.9267C35.7377 43.4163 37.7497 45.433 40.2316 45.433C41.515 45.433 42.6642 44.8882 43.4839 44.0225C43.5211 44.0261 43.5546 44.0461 43.5918 44.0461H46.4571C46.7576 44.0424 47.0444 43.9219 47.2549 43.7109C47.4655 43.4999 47.5828 43.2156 47.5812 42.9198C47.5812 42.6949 47.5125 42.4751 47.3841 42.289C47.2557 42.1029 47.0734 41.9591 46.8609 41.8761H48.1444C48.2211 42.9823 48.4224 44.0532 48.7508 45.0698L40.1728 45.9708C39.9907 45.9944 39.8229 46.0038 39.6587 46.0038C37.2716 46.0038 35.1756 43.631 35.1756 40.9267C35.1756 40.6567 35.202 40.3925 35.2475 40.133L34.3164 39.7604L34.3104 39.7557H34.1678C34.0939 40.1418 34.0558 40.5338 34.054 40.9267C34.054 44.2855 36.6221 47.1219 39.6599 47.1219C39.8732 47.1219 40.0877 47.1089 40.3083 47.0818L49.1486 46.1536C51.1894 51.0208 55.9913 54.4456 61.5781 54.4456C69.0116 54.4456 75.0598 48.3814 75.0598 40.9267C75.0598 33.4721 69.0116 27.4079 61.5781 27.4079ZM21.2877 33.228C22.6177 34.041 23.7145 35.175 24.4739 36.5224C25.2334 37.8699 25.6303 39.3859 25.627 40.9267C25.627 45.8953 21.5945 49.9393 16.6393 49.9393C11.684 49.9393 7.65148 45.8953 7.65148 40.9267C7.65148 35.957 11.684 31.9142 16.6393 31.9142C17.4841 31.9142 18.2978 32.0404 19.0731 32.2597C19.0132 34.8791 18.3529 38.0303 15.9214 40.0611L15.931 40.0729C15.7502 40.2181 15.6193 40.4146 15.5562 40.6358C15.4931 40.8569 15.5009 41.0918 15.5785 41.3084C15.6561 41.525 15.7997 41.7127 15.9898 41.846C16.1799 41.9793 16.4071 42.0516 16.6404 42.053C16.9022 42.0487 17.1538 41.9525 17.3499 41.7818L17.3583 41.7936C17.3822 41.7735 17.4014 41.7511 17.4254 41.7311L17.4398 41.7169C20.1601 39.3936 21.0816 36.1044 21.2877 33.228ZM21.6544 24.8864L22.6647 21.5972C25.0063 23.3545 26.7331 26.0717 28.3569 28.9564C26.4717 27.109 24.1777 25.716 21.6544 24.8864ZM43.4576 37.7979C43.0438 37.3643 42.5442 37.0186 41.9897 36.7819C41.4351 36.5452 40.8372 36.4226 40.2327 36.4216C39.0679 36.4216 38.0158 36.878 37.2177 37.6069C37.0463 37.4736 36.8737 37.3427 36.7107 37.1988C37.5137 36.378 38.5502 35.8508 39.6599 35.8508C39.8241 35.8508 39.9919 35.8614 40.1596 35.8827L43.9633 36.2813L43.4576 37.7979ZM44.3252 35.1963L40.2915 34.7717C40.082 34.7452 39.8711 34.7318 39.6599 34.7316C38.2195 34.7316 36.8881 35.3744 35.8839 36.4039C33.1348 33.5299 31.3876 29.342 29.3468 26.2073C27.6595 23.6175 25.7145 21.1939 23.3034 19.5216L23.6186 18.4967C26.9848 18.9614 39.1674 21.3684 45.369 32.0581L44.3252 35.1963ZM58.0585 32.6371C58.8103 33.9596 59.4015 35.3644 59.8201 36.8226L53.9397 36.2035C54.9065 34.6254 56.345 33.3799 58.0585 32.6371ZM60.1137 37.976C60.194 38.3334 60.2659 38.6942 60.3258 39.0563C60.0945 39.2143 59.8944 39.4148 59.735 39.6448L52.6934 39.6342C52.8098 38.8194 53.038 38.024 53.3717 37.2696L60.1137 37.976ZM50.0474 25.107C50.9857 25.5752 51.8749 26.1118 52.7066 26.7062C50.9122 27.8397 49.3474 29.2913 48.0917 30.9872L50.0474 25.107ZM48.1624 39.6283L47.0682 39.6259C47.1797 38.5928 47.393 37.6092 47.6854 36.6728L48.752 36.7861C48.4572 37.6942 48.257 38.6459 48.1624 39.6283ZM49.1474 35.7011L48.0689 35.5867C49.3081 32.4704 51.5944 29.8658 54.5473 28.2063C54.8121 28.4528 55.0674 28.7063 55.3166 28.9658C52.5328 30.4439 50.3534 32.8232 49.1474 35.7011ZM52.6431 41.8797C54.9523 41.882 57.2748 41.8844 59.5529 41.8844C59.9124 42.6474 60.6805 43.1805 61.5781 43.1805C62.8196 43.1805 63.8251 42.1733 63.8251 40.9279C63.8251 40.0328 63.3002 39.265 62.544 38.9018C62.5152 38.7237 62.4865 38.5433 62.4541 38.3676C63.5123 38.7721 64.3871 39.6236 64.3871 40.9279C64.3871 42.6038 62.9407 43.5461 61.5062 43.7324L53.3729 44.5863C52.9879 43.7269 52.7417 42.8137 52.6431 41.8797ZM61.5781 49.9393C58.3521 49.9393 55.5239 48.2187 53.9397 45.6512L61.638 44.8434C63.9233 44.5438 65.51 42.9352 65.51 40.9267C65.51 39.0834 64.1654 37.5892 62.1857 37.1245C61.7544 35.3536 61.1061 33.6409 60.2551 32.0238C60.6925 31.9533 61.1349 31.9167 61.5781 31.9142C66.5358 31.9142 70.5659 35.957 70.5659 40.9267C70.5659 45.8953 66.5358 49.9393 61.5781 49.9393Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="text-5xl font-semibold text-white leading-10">
                      RentByk
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center py-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 35 35"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_274)">
                            <path
                              d="M17.5 8.29792L24.7917 14.8604V26.25H21.875V17.5H13.125V26.25H10.2083V14.8604L17.5 8.29792ZM17.5 4.375L2.91667 17.5H7.29167V29.1667H16.0417V20.4167H18.9583V29.1667H27.7083V17.5H32.0833L17.5 4.375Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_274">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-2xl font-semibold text-white leading-normal">
                        <a
                          href="/"
                          class="block md:inline-block text-white px-3 py-3 border-b-2 md:border-none transition transform hover:translate-x-2"
                        >
                          Home
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_279)">
                            <path
                              d="M15 2.5L8.125 13.75H21.875L15 2.5ZM15 7.3L17.4125 11.25H12.575L15 7.3ZM21.875 16.25C18.7625 16.25 16.25 18.7625 16.25 21.875C16.25 24.9875 18.7625 27.5 21.875 27.5C24.9875 27.5 27.5 24.9875 27.5 21.875C27.5 18.7625 24.9875 16.25 21.875 16.25ZM21.875 25C20.15 25 18.75 23.6 18.75 21.875C18.75 20.15 20.15 18.75 21.875 18.75C23.6 18.75 25 20.15 25 21.875C25 23.6 23.6 25 21.875 25ZM3.75 26.875H13.75V16.875H3.75V26.875ZM6.25 19.375H11.25V24.375H6.25V19.375Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_279">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-2xl font-semibold text-white leading-normal">
                        <a
                          href="/category"
                          class="block md:inline-block text-white px-3 py-3 border-b-2 md:border-none transition transform hover:translate-x-2"
                        >
                          Category
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center py-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_1_284)">
                            <path
                              d="M19.375 6.875C20.75 6.875 21.875 5.75 21.875 4.375C21.875 3 20.75 1.875 19.375 1.875C18 1.875 16.875 3 16.875 4.375C16.875 5.75 18 6.875 19.375 6.875ZM6.25 15C2.75 15 0 17.75 0 21.25C0 24.75 2.75 27.5 6.25 27.5C9.75 27.5 12.5 24.75 12.5 21.25C12.5 17.75 9.75 15 6.25 15ZM6.25 25.625C3.875 25.625 1.875 23.625 1.875 21.25C1.875 18.875 3.875 16.875 6.25 16.875C8.625 16.875 10.625 18.875 10.625 21.25C10.625 23.625 8.625 25.625 6.25 25.625ZM13.5 13.125L16.5 10.125L17.5 11.125C19.125 12.75 21.25 13.75 23.875 13.75V11.25C22 11.25 20.5 10.5 19.375 9.375L17 7C16.375 6.5 15.75 6.25 15 6.25C14.25 6.25 13.625 6.5 13.25 7L9.75 10.5C9.25 11 9 11.625 9 12.25C9 13 9.25 13.625 9.75 14L13.75 17.5V23.75H16.25V16L13.5 13.125ZM23.75 15C20.25 15 17.5 17.75 17.5 21.25C17.5 24.75 20.25 27.5 23.75 27.5C27.25 27.5 30 24.75 30 21.25C30 17.75 27.25 15 23.75 15ZM23.75 25.625C21.375 25.625 19.375 23.625 19.375 21.25C19.375 18.875 21.375 16.875 23.75 16.875C26.125 16.875 28.125 18.875 28.125 21.25C28.125 23.625 26.125 25.625 23.75 25.625Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_284">
                              <rect width="30" height="30" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="text-2xl font-semibold text-white leading-normal">
                        <a
                          href="/rent-bikes"
                          class="block md:inline-block text-white px-3 py-3 border-b-2 md:border-none transition transform hover:translate-x-2"
                        >
                          Rent Bikes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div
                    className="p-1"
                    style={{
                      writingMode: "vertical-lr",
                      transform: "rotate(180deg)",
                    }}
                  >
                    Scroll Down
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_376)">
                        <path
                          d="M29.1666 17.5L27.1104 15.4438L18.9583 23.5813V5.83337H16.0416V23.5813L7.90415 15.4292L5.83331 17.5L17.5 29.1667L29.1666 17.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_376">
                          <rect width="35" height="35" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              {/* navbar */}
              <div className="md:hidden mb-12 md:mb-0">
                <Navbar />
              </div>
              <div className="my-1 md:my-0 w-full">
                {/* cycle */}
                <div className="flex gap-4 items-center justify-between sm:mt-32 md:mt-2">
                  <div className="w-11/12">
                    <div className="flex justify-center mt-2">
                      <Image src={Image_6} />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={Cycle_Image_1}
                        className="transition transform hover:translate-x-3"
                      />
                    </div>
                  </div>
                  <div className="w-1/12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="152"
                      viewBox="0 0 36 152"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_1_347)">
                        <ellipse
                          cx="17.8042"
                          cy="55.6888"
                          rx="13.6646"
                          ry="13.9242"
                          fill="#3F4C69"
                        />
                        <path
                          d="M30.1024 55.6888C30.1024 62.6486 24.5722 68.2466 17.8042 68.2466C11.0363 68.2466 5.50611 62.6486 5.50611 55.6888C5.50611 48.729 11.0363 43.1311 17.8042 43.1311C24.5722 43.1311 30.1024 48.729 30.1024 55.6888Z"
                          stroke="white"
                          stroke-width="2.73292"
                        />
                      </g>
                      <path
                        d="M26.4586 10.2031C26.4586 15.0864 22.5759 19.0304 17.8043 19.0304C13.0327 19.0304 9.15007 15.0864 9.15007 10.2031C9.15007 5.31984 13.0327 1.37584 17.8043 1.37584C22.5759 1.37584 26.4586 5.31984 26.4586 10.2031Z"
                        fill="#019DB5"
                        stroke="white"
                        stroke-width="0.910973"
                      />
                      <path
                        d="M26.4586 101.175C26.4586 106.058 22.5759 110.002 17.8043 110.002C13.0327 110.002 9.15007 106.058 9.15007 101.175C9.15007 96.2912 13.0327 92.3472 17.8043 92.3472C22.5759 92.3472 26.4586 96.2912 26.4586 101.175Z"
                        fill="#E24229"
                        stroke="white"
                        stroke-width="0.910973"
                      />
                      <path
                        d="M26.4586 142.019C26.4586 146.902 22.5759 150.846 17.8043 150.846C13.0327 150.846 9.15007 146.902 9.15007 142.019C9.15007 137.136 13.0327 133.192 17.8043 133.192C22.5759 133.192 26.4586 137.136 26.4586 142.019Z"
                        fill="#505356"
                        stroke="white"
                        stroke-width="0.910973"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="23.199"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="26.9122"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="30.6253"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="34.3384"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="38.0515"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="73.3261"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="77.0392"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="80.7524"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="84.4655"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="88.1786"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="114.17"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="117.884"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="121.597"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="125.31"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <ellipse
                        cx="17.8043"
                        cy="129.023"
                        rx="0.910973"
                        ry="0.928279"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_d_1_347"
                          x="0.495756"
                          y="40.8537"
                          width="34.617"
                          height="35.1362"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="2.73292" />
                          <feGaussianBlur stdDeviation="1.82195" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_1_347"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_1_347"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between gap-1 pb-2 mt-32 md:mt-1">
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
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                      <Image
                        src={Cycle_Image_1}
                        className="transition transform hover:translate-x-2"
                      />
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
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2 hover:bg-white hover:text-[#059E3c]">
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
                      <Image
                        src={Cycle_Image_1}
                        className="transition transform hover:translate-x-2"
                      />
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
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2 hover:bg-white hover:text-[#059E3c]">
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
                      <Image
                        src={Cycle_Image_1}
                        className="transition transform hover:translate-x-2"
                      />
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
                    <div className="flex items-center justify-center bg-[#059E3C] rounded-md py-2 mt-2 hover:bg-white hover:text-[#059E3c]">
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
            <div className="flex justify-end lg:hidden">
              <div>
                <div
                  className="p-1"
                  style={{
                    writingMode: "vertical-lr",
                    transform: "rotate(180deg)",
                  }}
                >
                  Scroll Down
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_1_376)">
                      <path
                        d="M29.1666 17.5L27.1104 15.4438L18.9583 23.5813V5.83337H16.0416V23.5813L7.90415 15.4292L5.83331 17.5L17.5 29.1667L29.1666 17.5Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_376">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
