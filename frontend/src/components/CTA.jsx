import React from "react";
import { ArrowRight, ShieldCheck, PhoneCall, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityCTASection() {
    return (
        <section className="w-full bg-gray-50 py-24 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                 
                <div className="relative bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden">

                    
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 p-10 md:p-16">

                        
                        <motion.div
                            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, }}
                        >

                            
                            <div className="inline-flex items-center gap-3 bg-[#fff5df] border border-[#C89B3C]/20 rounded-full px-5 py-3 mb-8">
                                <div className="w-3 h-3 bg-[#C89B3C] rounded-full animate-pulse"></div>

                                <span className="text-[#C89B3C] font-bold tracking-[2px] uppercase text-sm">
                                    24×7 Available Security Services
                                </span>
                            </div>

                            
                            <h2 className="text-4xl md:text-6xl font-black leading-tight text-black mb-8">
                                Ready To Secure <br />
                                Your <span className="text-[#C89B3C]">Business?</span>
                            </h2>

                            
                            <p className="text-lg md:text-xl text-gray-600 leading-9 mb-10 max-w-2xl">
                                We provide trusted and professional security services for
                                industries, corporates, residential societies, VIPs, and
                                events across Rajasthan with trained guards and advanced
                                surveillance systems.
                            </p>

                            
                            <div className="flex flex-col sm:flex-row gap-5">
                                <a
                                    href="/contact"
                                    className="group bg-[#C89B3C] hover:bg-black text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                                >
                                    Get Free Consultation

                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition"
                                    />
                                </a>

                                <a
                                    href="/services"
                                    className="group border-2 border-black hover:bg-black hover:text-white text-black font-semibold px-8 py-5 rounded-2xl text-lg transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    View Services

                                    <ArrowRight
                                        size={20}
                                        className="group-hover:translate-x-1 transition"
                                    />
                                </a>
                            </div>
                        </motion.div>

                       
                        <motion.div className="grid gap-6"
                            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            transition={{ duration: 1, }}
                        >

                            
                            <div className="group bg-gray-50 hover:bg-black rounded-[30px] p-7 transition-all duration-500 border border-gray-100">
                                <div className="flex items-start gap-5">

                                    <div className="w-16 h-16 rounded-2xl bg-[#fff5df] flex items-center justify-center shrink-0">
                                        <ShieldCheck
                                            size={34}
                                            className="text-[#C89B3C]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-black group-hover:text-white mb-3 transition">
                                            Trusted Protection
                                        </h3>

                                        <p className="text-gray-600 group-hover:text-gray-300 leading-8 transition">
                                            Highly trained and verified guards delivering reliable
                                            protection services for every environment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                           
                            <div className="group bg-gray-50 hover:bg-black rounded-[30px] p-7 transition-all duration-500 border border-gray-100">
                                <div className="flex items-start gap-5">

                                    <div className="w-16 h-16 rounded-2xl bg-[#fff5df] flex items-center justify-center shrink-0">
                                        <BadgeCheck
                                            size={34}
                                            className="text-[#C89B3C]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-black group-hover:text-white mb-3 transition">
                                            Licensed & Professional
                                        </h3>

                                        <p className="text-gray-600 group-hover:text-gray-300 leading-8 transition">
                                            Fully authorized security services operated with modern
                                            technology and professional discipline.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="group bg-gray-50 hover:bg-black rounded-[30px] p-7 transition-all duration-500 border border-gray-100">
                                <div className="flex items-start gap-5">

                                    <div className="w-16 h-16 rounded-2xl bg-[#fff5df] flex items-center justify-center shrink-0">
                                        <PhoneCall
                                            size={34}
                                            className="text-[#C89B3C]"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-black group-hover:text-white mb-3 transition">
                                            24/7 Operational Support
                                        </h3>

                                        <p className="text-gray-600 group-hover:text-gray-300 leading-8 transition">
                                            Quick response teams and round-the-clock support to ensure
                                            complete peace of mind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}