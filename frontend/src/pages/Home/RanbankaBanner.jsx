// import React from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom';
// import banner1 from "../../shortBanner/banner1.jpeg";
// import banner2 from "../../shortBanner/banner2.jpeg";
// import banner3 from "../../shortBanner/banner3.jpeg";
// import banner4 from "../../shortBanner/banner4.jpeg";

// import {
//     ShieldCheck,
//     Building2,
//     Camera,
//     UserCheck,
//     Briefcase,
//     ArrowRight,
// } from "lucide-react";


// export default function RanbankaBanner() {
//     return (
//         <section className="py-24 bg-[#fafafa] overflow-hidden">

//             <div className="max-w-7xl mx-auto px-6">

//                 <div className="grid lg:grid-cols-2 gap-14 items-center">

//                     {/* Left Image */}

//                     <motion.div
//                         initial={{
//                             opacity: 0,
//                             x: -80,
//                             filter: "blur(12px)",
//                         }}
//                         whileInView={{
//                             opacity: 1,
//                             x: 0,
//                             filter: "blur(0px)",
//                         }}
//                         transition={{ duration: 0.9 }}
//                         className="relative"
//                     >

//                         <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#C89B3C]/10">

//                             <img
//                                 src={banner1}
//                                 alt="Ranbanka Security"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>

//                         <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl border border-[#C89B3C]/10 px-6 py-4">

//                             <h4 className="text-3xl font-black text-[#C89B3C]">
//                                 24×7
//                             </h4>

//                             <p className="text-gray-600 font-medium text-sm">
//                                 Protection & Support
//                             </p>
//                         </div>

//                     </motion.div>

//                     {/* Right Content */}

//                     <motion.div
//                         initial={{
//                             opacity: 0,
//                             x: 80,
//                             filter: "blur(12px)",
//                         }}
//                         whileInView={{
//                             opacity: 1,
//                             x: 0,
//                             filter: "blur(0px)",
//                         }}
//                         transition={{ duration: 0.9 }}
//                     >

//                         <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-7">

//                             <ShieldCheck size={16} />

//                             Trusted Security Partner
//                         </div>

//                         <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-7">

//                             Delivering Reliable
//                             <span className="text-[#C89B3C]">
//                                 {" "}Security Solutions
//                             </span>

//                             <br />

//                             Across Rajasthan
//                         </h2>

//                         <p className="text-lg text-gray-600 leading-relaxed mb-8">

//                             Ranbanka Security & Allied Services Private Limited
//                             provides professional security solutions with trained
//                             manpower, modern surveillance systems, and reliable
//                             protection services for industries, businesses,
//                             residential societies, events, and institutions.
//                         </p>

//                         {/* Features */}

//                         <div className="grid sm:grid-cols-2 gap-5 mb-10">

//                             <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

//                                 <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

//                                     <ShieldCheck size={22} />
//                                 </div>

//                                 <div>

//                                     <h4 className="font-bold text-gray-900 mb-1">
//                                         Trusted Protection
//                                     </h4>

//                                     <p className="text-sm text-gray-600">
//                                         Reliable security solutions for every sector.
//                                     </p>

//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

//                                 <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

//                                     <Camera size={22} />
//                                 </div>

//                                 <div>

//                                     <h4 className="font-bold text-gray-900 mb-1">
//                                         Advanced Monitoring
//                                     </h4>

//                                     <p className="text-sm text-gray-600">
//                                         CCTV surveillance with 24×7 monitoring support.
//                                     </p>

//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

//                                 <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

//                                     <UserCheck size={22} />
//                                 </div>

//                                 <div>

//                                     <h4 className="font-bold text-gray-900 mb-1">
//                                         Trained Staff
//                                     </h4>

//                                     <p className="text-sm text-gray-600">
//                                         Skilled and disciplined security professionals.
//                                     </p>

//                                 </div>
//                             </div>

//                             <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

//                                 <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

//                                     <Briefcase size={22} />
//                                 </div>

//                                 <div>

//                                     <h4 className="font-bold text-gray-900 mb-1">
//                                         Customized Services
//                                     </h4>

//                                     <p className="text-sm text-gray-600">
//                                         Tailored protection plans for every client.
//                                     </p>

//                                 </div>
//                             </div>

//                         </div>

//                         <Link
//                             to={"/services"}
//                         >
//                             <button className="inline-flex items-center gap-3 bg-[#C89B3C] hover:bg-[#b68a31] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:gap-5">

//                                 Explore Our Services

//                                 <ArrowRight size={18} />

//                             </button>
//                         </Link>

//                     </motion.div>

//                 </div>

//             </div>
//         </section>
//     )
// }






import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import banner1 from "../../shortBanner/banner1.jpeg";
import banner2 from "../../shortBanner/banner2.jpeg";
import banner3 from "../../shortBanner/banner3.jpeg";
import banner4 from "../../shortBanner/banner4.jpeg";

import {
    ShieldCheck,
    Camera,
    UserCheck,
    Briefcase,
    ArrowRight,
} from "lucide-react";

export default function RanbankaBanner() {
    const banners = [banner1, banner2, banner3, banner4];

    return (
        <section className="py-14 md:py-20 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        className="w-full order-1 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 md:mb-7">
                            <ShieldCheck size={16} />
                            Trusted Security Partner
                        </div>

                        <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-black text-gray-900 leading-[1.15] mb-5 md:mb-7">
                            Delivering Reliable
                            <span className="text-[#C89B3C]"> Security Solutions</span>
                            <br />
                            Across Rajasthan
                        </h2>

                        <p className="text-[15px] sm:text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                            Ranbanka Security & Allied Services Private Limited
                            provides professional security solutions with trained
                            manpower, modern surveillance systems, and reliable
                            protection services for industries, businesses,
                            residential societies, events, and institutions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-10">
                            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-[#C89B3C]/10 flex gap-4">
                                <div className="min-w-[48px] h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                                    <ShieldCheck size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">Trusted Protection</h4>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Reliable security solutions for every sector.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-[#C89B3C]/10 flex gap-4">
                                <div className="min-w-[48px] h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                                    <Camera size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">Advanced Monitoring</h4>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">CCTV surveillance with 24×7 monitoring support.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-[#C89B3C]/10 flex gap-4">
                                <div className="min-w-[48px] h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                                    <UserCheck size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">Trained Staff</h4>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Skilled and disciplined security professionals.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-[#C89B3C]/10 flex gap-4">
                                <div className="min-w-[48px] h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                                    <Briefcase size={22} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">Customized Services</h4>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">Tailored protection plans for every client.</p>
                                </div>
                            </div>
                        </div>

                        <Link to={"/services"}>
                            <button className="inline-flex items-center gap-3 bg-[#C89B3C] hover:bg-[#b68a31] text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:gap-5">
                                Explore Our Services
                                <ArrowRight size={18} />
                            </button>
                        </Link>
                    </motion.div>

                    {/* images */}

                    <motion.div
                        initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full order-2 lg:order-2"
                    >
                        {/* Grid System for Images */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {banners.map((banner, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group"
                                >
                                    <div className="aspect-auto md:aspect-[4/4] bg-gray-200">
                                        <img
                                            src={banner}
                                            alt={`Security Banner ${index + 1}`}
                                            className="w-full h-full object-fill object-center transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Overlay effect on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}