import React from "react";
import {
  ShieldCheck,
  Building2,
  Camera,
  Users,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeAreSection() {
  const services = [
    {
      title: "Corporate & Industrial Security",
      icon: Building2,
    },
    {
      title: "Event & VIP Protection",
      icon: Users,
    },
    {
      title: "Armed & Unarmed Guards",
      icon: ShieldCheck,
    },
    {
      title: "24×7 CCTV Surveillance",
      icon: Camera,
    },
    {
      title: "Bouncer Services",
      icon: BadgeCheck,
    },
    {
      title: "Facility Management",
      icon: Sparkles,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-white rounded-[40px] border border-gray-100 overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center p-8 md:p-14 lg:p-20">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div className="inline-flex items-center gap-3 bg-[#fff5df] border border-[#C89B3C]/20 rounded-full px-5 py-3 mb-8">
                <div className="w-3 h-3 bg-[#C89B3C] rounded-full animate-pulse"></div>

                <span className="text-[#C89B3C] font-bold tracking-[2px] uppercase text-sm">
                  About Our Company
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-black mb-8">
                Who{" "}
                <span className="text-[#C89B3C] relative cursor-pointer group">
                  We Are
                  <span className="absolute left-2 bottom-0 h-[5px] w-[20px] bg-[#C89B3C] rounded-full transition-all duration-500 group-hover:w-full"></span>
                </span>
              </h2>

              {/* Paragraphs */}
              <p className="text-lg md:text-xl leading-9 text-gray-600 mb-8">
                Ranbanka Security & Allied Services is a professionally managed
                security company based in Rajasthan, delivering trusted,
                disciplined, and high-quality security solutions across multiple
                industries.
              </p>

              <p className="text-lg md:text-xl leading-9 text-gray-600 mb-10">
                Our mission is to provide complete peace of mind through
                professional protection, operational excellence, integrity, and
                customer-focused services tailored to every client’s needs.
              </p>

              {/* Button */}
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#C89B3C] hover:bg-black text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl hover:scale-105"
              >
                Contact Us
                <span className="text-xl">→</span>
              </a>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              {/* Title */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-3">
                  We Specialize In
                </h3>

                <p className="text-gray-500 text-lg">
                  Professional security solutions tailored for every environment
                  and business sector.
                </p>
              </div>

              {/* Service Cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {services.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group bg-gray-50 rounded-[28px] p-6 border border-gray-100  transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#fff5df] flex items-center justify-center mb-5 group-hover:bg-[#C89B3C] transition-all duration-500">
                        <Icon
                          size={30}
                          className="text-[#c89b3c] group-hover:text-white transition-all duration-500"
                        />
                      </div>

                      <h4 className="text-xl font-bold text-black leading-8 transition">
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
