// import React from "react";
// import { Link } from "react-router-dom";

// import Ranbanka from '../assets/Ranbanka.jpg'

// export default function HeroSection() {
//   return (
//     <section className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto h-[100vh] px-6  flex flex-col md:flex-row items-center justify-between gap-10" style={{backgroundImage:`url(${Ranbanka})`,backgroundRepeat:'no-repeat',backgroundPosition:'center', opacity:1,backgroundSize:'cover'}}>
//         {/* Text Content */}
//         <div className="md:w-1/2">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             Reliable Security Services You Can Trust
//           </h1>

//           <p className="text-lg mb-6 text-gray-300">
//             At <strong>Ranbanka Security & Allied Services</strong>, we provide
//             trained guards, surveillance systems, and professional protection
//             services across Rajasthan — ensuring your safety is never
//             compromised.
//           </p>

//           <div className="flex gap-4">
//             <Link
//               to="/contact"
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
//             >
//               Visit Now
//             </Link>
//             <Link
//               to="/services"
//               className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
//             >
//               View Our Services
//             </Link>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="md:w-1/2 " style={{ backgroundImage: `url${Ranbanka}` }}>
//           {/* <img
//             src="/hero-security.png"
//             alt="Security personnel"
//             className="rounded-lg shadow-lg"
//           /> */}
//           {/* <img
//             src="https://via.placeholder.com/500x350?text=Security+Guard"
//             alt="Security"
//           /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { Link } from "react-router-dom";
// import Ranbanka from "../assets/Ranbanka.jpg";
// import slide1 from "../assets/slide1.jpeg"
// import slide2 from "../assets/slide2.jpeg"
// import slide3 from "../assets/slide3.jpeg"
// import slide4 from "../assets/slide4.jpeg"

// export default function HeroSection() {
//   return (
//     <section className="relative h-screen border border-black border-4 flex items-center bg-gray-950 text-white overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${Ranbanka})` }}
//       >
//         {/* Dark Red-Tinted Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-red-950/30 to-black/40" />
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full z-10">
//         <div className="max-w-2xl">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//             Your Safety,
//             <br />
//             <span className="text-red-500">Our Honour</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
//             Professional security services across Rajasthan. Trained guards,
//             advanced surveillance, and complete protection you can trust.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <Link
//               to="/contact"
//               className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-red-600/40 hover:scale-105"
//             >
//               Get In Touch
//             </Link>

//             <Link
//               to="/services"
//               className="border-2 border-yellow-400 hover:border-yellow-300 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-900 hover:scale-105"
//             >
//               Our Services
//             </Link>
//           </div>

//           {/* Trust Bar */}
//           <div className="flex items-center gap-8 mt-12 text-sm text-gray-300">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
//               <span>24×7 Security Services</span>
//             </div>
//             <div className="hidden sm:block">•</div>
//             <div>Rajasthan's Most Trusted Security Partner</div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400">
//         <span className="text-xs tracking-[3px] font-medium">
//           SCROLL TO EXPLORE
//         </span>
//         <div className="w-px h-10 bg-gradient-to-b from-transparent via-red-400 to-transparent"></div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaUserShield,
  FaVideo,
  FaWalking,
  FaShieldAlt,
  FaBuilding,
  FaBroom,
  FaIndustry,
  FaUserTie,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

// import slider1Laptop from "../SliderImages/banner1Laptop.jpeg";
// import slider1Tab from "../SliderImages/banner1Tab.jpeg";
// import slider1Mobile from "../SliderImages/banner1Mobile.jpeg";
// import slider2Laptop from "../SliderImages/banner2Laptop.jpeg";
// import slider2Tab from "../SliderImages/banner2Tab.jpeg";
// import slider2Mobile from "../SliderImages/banner2Mobile.jpeg";
// import slider3Laptop from "../SliderImages/banner3Laptop.jpeg";
// import slider3Tab from "../SliderImages/banner3Tab.jpeg";
// import slider3Mobile from "../SliderImages/banner3Mobile.jpeg";
// import slider4Laptop from "../SliderImages/banner4Laptop.jpeg";
// import slider4Tab from "../SliderImages/banner4Tab.jpeg";
// import slider4Mobile from "../SliderImages/banner4Mobile.jpeg";

import Image from "../assets/Home_Banner.png";
import logo from "../assets/RanbankaLogo.png";
import mobileimg from "../assets/HomeMobile_Banner.jpeg";

export default function HeroSlider() {
  // const slides = [
  //   {
  //     laptop: slider1Laptop,
  //     tab: slider1Tab,
  //     mobile: slider1Mobile,
  //   },
  //   {
  //     laptop: slider2Laptop,
  //     tab: slider2Tab,
  //     mobile: slider2Mobile,
  //   },
  //   {
  //     laptop: slider3Laptop,
  //     tab: slider3Tab,
  //     mobile: slider3Mobile,
  //   },
  //   {
  //     laptop: slider4Laptop,
  //     tab: slider4Tab,
  //     mobile: slider4Mobile,
  //   },
  // ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative">
          {/* Banner Images */}
          <div className="relative w-full overflow-hidden">
            {/* Desktop */}
            <img
              src={Image}
              alt="banner"
              className="hidden lg:block w-full h-[700px] object-cover"
            />

            {/* Mobile */}
            <img
              src={mobileimg}
              alt="banner"
              className="block lg:hidden w-full h-[650px] object-cover"
            />
          </div>

          {/* ================= Desktop Content ================= */}
          <div className="hidden lg:flex absolute inset-0 items-center  gap-6 pl-16 z-10">
            <img
              src={logo}
              alt="Ranbanka Security Logo"
              className="w-32 h-32 object-contain"
            />




            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1 }}
              className=""
            >
              <div>
                <h1 className="text-2xl lg:text-7xl leading-tight">
                  <span className="text-white font-bold">
                    RANBANKA SECURITY &
                  </span>
                  </h1>
                  
                  <h1 className="text-2xl lg:text-4xl leading-tight">
                  <span className="text-yellow-400 font-bold">
                    ALLIED SERVICES
                  </span>
                  
                  <span className="text-yellow-400 font-bold">
                    PRIVATE LIMITED
                  </span>
                  </h1>
                

                <div className="flex items-center gap-3 my-3">
                  <span className="h-px w-50 bg-yellow-400/60"></span>
                  <span className="text-yellow-400">🛡</span>
                  <span className="h-px w-50 bg-yellow-400/60"></span>
                </div>

                <p className="text-white text-xl lg:text-4xl font-medium">
                  YOUR SAFETY.
                  <span className="text-yellow-400"> OUR DUTY.</span>
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-yellow-400 text-lg font-semibold">
                    STRENGTH
                  </span>

                  <span className="text-yellow-400">•</span>

                  <span className="text-white text-lg font-semibold">
                    VIGILANCE
                  </span>

                  <span className="text-yellow-400">•</span>

                  <span className="text-yellow-400 text-lg font-semibold">
                    COMMITMENT
                  </span>
                </div>


              </div>
            </motion.div>
          </div>


          {/* ================= Mobile Content ================= */}
          {/* ================= Mobile Content ================= */}
          <div className="absolute inset-0 lg:hidden z-10 flex items-center bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            <div className="w-full px-10 pb-12">
              {/* Logo */}
              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 mb-4 object-contain"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{ duration: 1 }}
                className=""
              >
                {/* Company Name */}
                <h1 className="text-white font-bold text-3xl leading-tight">
                  RANBANKA SECURITY &
                  <br />
                  <span className="text-[#D5B15B]">ALLIED SERVICES</span>
                  <br />
                  <span className="text-[#D5B15B]">PRIVATE LIMITED</span>
                </h1>

                {/* Divider */}
                <div className="flex items-center gap-2 my-4">
                  <span className="w-25 h-px bg-[#D5B15B]"></span>
                  <span className="text-[#D5B15B] text-xs">🛡</span>
                  <span className="w-25 h-px bg-[#D5B15B]"></span>
                </div>

                {/* Tagline */}
                <p className="text-white text-xl font-medium">
                  YOUR SAFETY.
                  <span className="text-[#D5B15B] font-semibold"> OUR DUTY.</span>
                </p>

                {/* Points */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-[11px] font-semibold">
                  <span className="text-[#D5B15B]">STRENGTH</span>
                  <span className="text-[#D5B15B]">•</span>

                  <span className="text-white">VIGILANCE</span>
                  <span className="text-[#D5B15B]">•</span>

                  <span className="text-[#D5B15B]">COMMITMENT</span>
                </div>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center text-5xl font-bold mt-5 mb-5 w-[35%]">
          Services
        </div> */}
      <div className="hidden lg:flex">
        <Marquee
          speed={60}
          gradient={false}
          pauseOnHover={true}
          className="bg-black py-2 lg:py-5 mt-5"
        >
          <div className="flex items-center gap-16 text-white text-lg font-medium">
            <div className="flex items-center gap-3">
              <FaUserShield className="text-[#C89B3C] text-3xl md:text-5xl" />
              <span>Manned Security</span>
            </div>

            <div className="flex items-center gap-3">
              <FaVideo className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Surveillance & Monitoring</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWalking className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Patrolling Services</span>
            </div>

            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Risk Management</span>
            </div>

            <div className="flex items-center gap-3">
              <FaBuilding className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Corporate Security</span>
            </div>

            <div className="flex items-center gap-3">
              <FaBroom className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Housekeeping</span>
            </div>

            <div className="flex items-center gap-3">
              <FaIndustry className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Industrial Security</span>
            </div>

            <div className="flex items-center gap-3 mr-10">
              <FaUserTie className="text-[#C89B3C] text-3xl lg:text-5xl" />
              <span>Bouncer Support</span>
            </div>
          </div>
        </Marquee>
      </div>
    </div >
  );
}
