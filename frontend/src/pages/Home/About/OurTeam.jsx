// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const teamMembers = [
//   {
//     name: "Rahul Kumawat",
//     role: "Founder & Director",
//     img: "https://qph.cf2.quoracdn.net/main-qimg-842a9774582b275a7fa8d86617976768-pjlq",
//   },
//   {
//     name: "Rahul Kumawat",
//     role: "Operations Head",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG1friB_AWiryoc6NFPDpF0QbJxt3Coymew&s",
//   },
//   {
//     name: "Rahul Kumawat",
//     role: "Security Training Incharge",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
//   },
//   {
//     name: "Rahul Kumawat",
//     role: "Security Training Incharge",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
//   },
//   {
//     name: "Rahul Kumawat",
//     role: "Security Training Incharge",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
//   },
//   {
//     name: "Rahul Kumawat",
//     role: "Security Training Incharge",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
//   },
//   // Add more real team members here later
// ];

// export default function OurTeam() {
//   return (
//     <section className="py-16">
//       <div className="max-w-7xl mx-auto px-6 p-10">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-3">
//             Our <span className="text-red-600">Leadership Team</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Ex-servicemen and seasoned security professionals dedicated to
//             excellence
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={24}
//           slidesPerView={1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-3xl m-2 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
//                 <div className="h-72 overflow-hidden">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>

//                 <div className="p-6 text-center">
//                   <h3 className="font-bold text-xl text-gray-900">
//                     {member.name}
//                   </h3>
//                   <p className="text-red-600 font-medium mt-1">{member.role}</p>

//                   <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "Rahul Kumawat",
    role: "Founder & Director",
    // img: "https://qph.cf2.quoracdn.net/main-qimg-842a9774582b275a7fa8d86617976768-pjlq",
  },
  {
    name: "Rahul Kumawat",
    role: "Operations Head",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG1friB_AWiryoc6NFPDpF0QbJxt3Coymew&s",
  },
  {
    name: "Rahul Kumawat",
    role: "Security Training Incharge",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
  },
  {
    name: "Rahul Kumawat",
    role: "Security Training Incharge",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
  },
  {
    name: "Rahul Kumawat",
    role: "Security Training Incharge",
    // img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
  },
  {
    name: "Rahul Kumawat",
    role: "Security Training Incharge",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYum4xF18325kz8z_xV5zRh5wWCfBePhz89sWrf2BcQGr6_ENjncmZDKJaYUx8e4pdSQ&usqp=CAU",
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-between flex-wrap gap-4 mb-10"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Our{" "}
              <span className="text-[#C89B3C] relative group cursor-pointer">
                Leadership Team

                <span className="absolute left-0 bottom-0 h-[5px] w-[20px] bg-[#C89B3C] rounded-full transition-all duration-500 group-hover:w-full"></span>
              </span>
            </h2>

            <p className="text-gray-600">
              Ex-servicemen and seasoned security professionals dedicated to
              excellence
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button className="team-prev bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300">
              <ChevronLeft size={22} />
            </button>

            <button className="team-next bg-white shadow-lg border border-gray-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-300">
              <ChevronRight size={22} />
            </button>
          </div>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={1400}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".team-prev",
            nextEl: ".team-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="teamSwiper pb-14"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.9,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="h-72 overflow-hidden">
                  <motion.img
                    // src={member.img}
                    // alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-[#C89B3C] font-medium mt-1">
                    {member.role}
                  </p>

                  <motion.div
                    initial={{
                      width: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      width: "64px",
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15,
                    }}
                    className="h-1 bg-[#C89B3C] mx-auto mt-4 rounded-full"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}