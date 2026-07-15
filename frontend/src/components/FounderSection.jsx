// import React from "react";
// import { ShieldCheck, Award, Users, PhoneCall } from "lucide-react";
// import founder from "../assets/RanBanka-Owner.jpeg"
// import { motion } from "framer-motion";

// export default function FounderSection() {
//     return (
//         <section className="w-full bg-[#f8f8f8] py-16 px-4 md:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-10 items-center">

//                     {/* left */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -80, filter: "blur(6px)", }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", }}
//                         transition={{ duration: 1, ease: "easeOut", }}
//                         className="relative group">
//                         <div className="absolute inset-0 bg-gradient-to-tr from-[#c89b3c] to-black rounded-[35px] rotate-3 scale-[1.02] opacity-20 group-hover:rotate-1 transition-all duration-500"></div>

//                         <div className="relative overflow-hidden rounded-[35px] shadow-2xl bg-white p-3">



//                             <img
//                                 src={founder}
//                                 alt="Owner"
//                                 className="w-full h-[500px] object-cover rounded-[28px]"
//                             />

//                             <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-xl border border-[#c89b3c]/30">
//                                 <h3 className="text-2xl font-bold text-[#d4a84f]">
//                                     Ranbanka Security
//                                 </h3>
//                                 <h3 className="text-xl font-bold text-[#d4a88f]">
//                                     Parbat rathore
//                                 </h3>
//                                 <p className="text-sm text-gray-300 mt-1">
//                                     Founder & Managing Director
//                                 </p>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* right */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 80, filter: "blur(6px)", }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", }}
//                         transition={{ duration: 1, ease: "easeIn", }}
//                      >
//                         <p className="text-red-600 uppercase tracking-[3px] font-semibold mb-3">
//                             About The Company
//                         </p>

//                         <h2 className="text-2xl md:text-6xl font-black leading-tight text-black mb-6">
//                             Rajasthan’s Trusted <br />
//                             <span className="text-[#c89b3c]">Security Partner</span>
//                         </h2>

//                         <p className="text-gray-600 text-lg leading-8 mb-8">
//                             Ranbanka Security Services Pvt. Ltd. is committed to delivering
//                             professional security solutions with discipline, integrity, and
//                             excellence.
//                         </p>

//                         {/* Features */}
//                         <div className="grid sm:grid-cols-2 gap-5 mb-10">

//                             <div className="bg-white rounded-2xl p-2 shadow-md border border-gray-100 hover:shadow-xl transition">
//                                 <div className="w-10 h-10 rounded-xl bg-[#fff5df] flex items-center justify-center mb-2">
//                                     <ShieldCheck className="text-[#c89b3c]" size={30} />
//                                 </div>

//                                 <h3 className="font-bold text-lg mb-2">
//                                     Trusted Protection
//                                 </h3>

//                                 <p className="text-gray-600 text-sm leading-6">
//                                     Highly trained & verified guards ensuring complete safety.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition">
//                                 <div className="w-14 h-14 rounded-xl bg-[#fff5df] flex items-center justify-center mb-4">
//                                     <Award className="text-[#c89b3c]" size={30} />
//                                 </div>

//                                 <h3 className="font-bold text-lg mb-2">
//                                     Professional Service
//                                 </h3>

//                                 <p className="text-gray-600 text-sm leading-6">
//                                     Premium quality security operations with rapid response.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition">
//                                 <div className="w-14 h-14 rounded-xl bg-[#fff5df] flex items-center justify-center mb-4">
//                                     <Users className="text-[#c89b3c]" size={30} />
//                                 </div>

//                                 <h3 className="font-bold text-lg mb-2">
//                                     Skilled Team
//                                 </h3>

//                                 <p className="text-gray-600 text-sm leading-6">
//                                     Experienced manpower trained for all security environments.
//                                 </p>
//                             </div>

//                             <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition">
//                                 <div className="w-14 h-14 rounded-xl bg-[#fff5df] flex items-center justify-center mb-4">
//                                     <PhoneCall className="text-[#c89b3c]" size={30} />
//                                 </div>

//                                 <h3 className="font-bold text-lg mb-2">
//                                     24/7 Support
//                                 </h3>

//                                 <p className="text-gray-600 text-sm leading-6">
//                                     Dedicated support team available anytime for assistance.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Buttons */}
//                         <div className="flex flex-wrap gap-5">
//                             <a
//                                 href="/about"
//                                 className="bg-[#c89b3c] hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:scale-105"
//                             >
//                                 About Company
//                             </a>

//                             <a
//                                 href="/contact"
//                                 className="border-2 border-black hover:bg-black hover:text-white text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
//                             >
//                                 Contact Us
//                             </a>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React from "react";
import {
    ShieldCheck,
    Award,
    Users,
    PhoneCall,
} from "lucide-react";

import founder from "../assets/RanBanka-Owner.jpeg";
import { motion } from "framer-motion";

export default function FounderSection() {
    return (
        <section className="w-full bg-[#f8f8f8] py-10 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative overflow-hidden rounded-[28px] shadow-2xl bg-white p-2">
                            <img
                                src={founder}
                                alt="Owner"
                                className="w-full h-[380px] md:h-[430px] object-cover rounded-[22px]"
                            />

                            {/* Overlay */}
                            <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-[#c89b3c]/30">
                                <h3 className="text-lg md:text-xl font-bold text-[#d4a84f]">
                                    Ranbanka Security
                                </h3>

                                <p className="text-sm text-[#d4d4d4]">
                                    Captain Retire <span className="font-bold">Parbat Singh Rathore</span>
                                </p>

                                <p className="text-xs text-gray-400">
                                    Founder & Managing Director
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-red-600 uppercase tracking-[2px] font-semibold mb-2 text-sm">
                            About The Company
                        </p>

                        <h2 className="text-3xl md:text-5xl font-black leading-tight text-black mb-4">
                            Rajasthan’s Trusted <br />
                            <span className="text-[#c89b3c]">
                                Security Partner
                            </span>
                        </h2>

                        <p className="text-gray-600 text-base leading-7 mb-6">
                            Ranbanka Security Services Pvt. Ltd. delivers
                            professional security solutions with discipline,
                            integrity, and excellence.
                        </p>

                        {/* FEATURES */}
                        <div className="grid grid-cols-2 gap-4 mb-7">

                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                                <ShieldCheck
                                    className="text-[#c89b3c] mb-2"
                                    size={26}
                                />

                                <h3 className="font-bold text-sm mb-1">
                                    Trusted Protection
                                </h3>

                                <p className="text-gray-600 text-xs leading-5">
                                    Trained guards for complete safety.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                                <Award
                                    className="text-[#c89b3c] mb-2"
                                    size={26}
                                />

                                <h3 className="font-bold text-sm mb-1">
                                    Professional Service
                                </h3>

                                <p className="text-gray-600 text-xs leading-5">
                                    Premium operations with fast response.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                                <Users
                                    className="text-[#c89b3c] mb-2"
                                    size={26}
                                />

                                <h3 className="font-bold text-sm mb-1">
                                    Skilled Team
                                </h3>

                                <p className="text-gray-600 text-xs leading-5">
                                    Experienced manpower for all sectors.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                                <PhoneCall
                                    className="text-[#c89b3c] mb-2"
                                    size={26}
                                />

                                <h3 className="font-bold text-sm mb-1">
                                    24/7 Support
                                </h3>

                                <p className="text-gray-600 text-xs leading-5">
                                    Support team always available.
                                </p>
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/about"
                                className="bg-[#c89b3c] hover:bg-black text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            >
                                About Company
                            </a>

                            <a
                                href="/contact"
                                className="border-2 border-black hover:bg-black hover:text-white text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            >
                                Contact Us
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}