// import React from "react";
// import MissionSection from "../../../components/MissionSection";
// import WhyChooseUs from "../../../components/WhyChooseUs";
// import ServicesWeOffer from "../../../components/ServicesWeOffer";
// import MissionStatement from "./MissionStatement";
// import SystemCompany from "./SystemCompany";
// import OurTeam from "./OurTeam";
// import HeroSlider from "../../HeroSection";
// import WhoWeAreSection from "./WhoWeAreSection";
// import { motion } from "framer-motion";
// import about from "../../../SliderImages/about.jpeg"

// export default function About() {
//   return (
//     <main className="bg-white text-gray-900">

//       {/* Introduction Section */}
//       {/* <section className="py-16 px-6 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               Who We Are
//             </h2>

//             <p className="text-lg leading-relaxed text-gray-700 mb-6">
//               Ranbanka Security & Allied Services is a professionally managed
//               security agency based in Rajasthan, dedicated to delivering
//               high-quality, disciplined, and reliable security solutions to
//               clients across various industries.
//             </p>

//             <p className="text-lg leading-relaxed text-gray-700 mb-8">
//               Our mission is to provide complete peace of mind through unmatched
//               protection, integrity, and customer-focused service.
//             </p>

//             <h3 className="text-2xl font-semibold mb-4 text-red-600">
//               We Specialize In:
//             </h3>

//             <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-lg text-gray-700">
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 Corporate & Industrial Security Guards
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 Event & VIP Protection
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 Armed & Unarmed Guards
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 24×7 CCTV Surveillance
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 Bouncer Services
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-red-600 mt-1.5">•</span>
//                 Facility & Housekeeping Management
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section> */}
//       <WhoWeAreSection />

//       {/* Rest of the Components */}
//       <MissionSection />
//       <OurTeam />
//       <WhyChooseUs />
//       <ServicesWeOffer />
//       <MissionStatement />
//       <SystemCompany />

//       {/* Final CTA */}
//       <motion.section
//         initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
//         whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//         transition={{ duration: 1 }}
//         className=" py-16">
//         <div className="max-w-4xl mx-auto px-6">

//           <div className="mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-14 text-center relative overflow-hidden">

//             {/* Top Gradient Line */}
//             <div className="absolute top-0 left-0 w-full h-1 bg-[#C89B3C]"></div>

//             {/* Heading */}
//             <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
//               Ready to Work with Us?
//             </h2>

//             {/* Description */}
//             <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
//               Join hands with Rajasthan’s most trusted security partner
//             </p>

//             {/* Button */}
//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center bg-[#C89B3C] text-white font-semibold px-8 md:px-10 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 text-base md:text-lg"
//             >
//               Get In Touch Today
//             </a>
//           </div>
//         </div>
//       </motion.section>
//     </main>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

import { ShieldCheck, Users, Award, Building2, ArrowRight } from "lucide-react";

import MissionSection from "../../../components/MissionSection";
import WhyChooseUs from "../../../components/WhyChooseUs";
import ServicesWeOffer from "../../../components/ServicesWeOffer";
import MissionStatement from "./MissionStatement";
import SystemCompany from "./SystemCompany";
import OurTeam from "./OurTeam";
import WhoWeAreSection from "./WhoWeAreSection";

import about from "../../../assets/About_Banner.jpeg";
import logo from "../../../assets/RanbankaLogo.png";
import mobileimg from "../../../assets/AboutMobile_Banner.jpeg";

export default function About() {
  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* ================= HERO SECTION ================= */}

      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <img
          src={about}
          alt="Clients Banner"
          className="w-full h-full object-cover hidden lg:flex"
        />
        <img
          src={mobileimg}
          alt="Clients Banner"
          className="w-full h-full object-cover flex lg:hidden"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#C89B3C]/20"></div>

        {/* Blur Glow */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#C89B3C]/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
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
            viewport={{ once: true }}
            className="max-w-6xl text-center"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-7 py-3 rounded-full text-white text-sm md:text-base font-semibold mb-8">
              <ShieldCheck size={18} className="text-[#C89B3C]" />
              Trusted Security Agency In Rajasthan
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
              Protecting People,
              <br />
              Businesses & <span className="text-[#C89B3C]">Properties</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Ranbanka Security & Allied Services is committed to delivering
              professional, disciplined, and reliable security solutions with
              trust, integrity, and excellence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a
                href="/contact"
                className="bg-[#C89B3C] hover:bg-[#b68a31] text-white px-9 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_10px_40px_rgba(200,155,60,0.35)]"
              >
                Contact Us
              </a>

              <a
                href="/services"
                className="border border-white/20 bg-white/10 backdrop-blur-xl text-white px-9 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 hidden lg:grid">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-5">
                <h3 className="text-4xl font-black text-[#C89B3C]">10+</h3>

                <p className="text-gray-200 text-sm mt-2">Years Experience</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-5">
                <h3 className="text-4xl font-black text-[#C89B3C]">100+</h3>

                <p className="text-gray-200 text-sm mt-2">Happy Clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-5">
                <h3 className="text-4xl font-black text-[#C89B3C]">500+</h3>

                <p className="text-gray-200 text-sm mt-2">Security Staff</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl py-6 px-5">
                <h3 className="text-4xl font-black text-[#C89B3C]">24/7</h3>

                <p className="text-gray-200 text-sm mt-2">Protection Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT INTRO ================= */}

      <section className="relative py-24 bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">
        {/* Blur */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#C89B3C]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#C89B3C]/10 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{
                opacity: 0,
                x: -80,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Building2 size={16} />
                About Our Company
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                Security With
                <br />
                <span className="text-[#C89B3C]">Trust & Discipline</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Ranbanka Security & Allied Services is a professionally managed
                security agency dedicated to delivering trusted protection
                services for industries, businesses, institutions, and
                residential properties.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our trained security personnel and advanced operational systems
                ensure complete safety, discipline, and peace of mind for every
                client.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-4 bg-white rounded-3xl p-5 shadow-lg border border-[#C89B3C]/10">
                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                    <Users size={28} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Professional Team
                    </h4>

                    <p className="text-gray-600 text-sm">
                      Trained & disciplined guards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-3xl p-5 shadow-lg border border-[#C89B3C]/10">
                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                    <Award size={28} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      Trusted Services
                    </h4>

                    <p className="text-gray-600 text-sm">
                      Reliable security solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
                <img
                  src={logo}
                  alt="About"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#C89B3C] flex items-center justify-center text-white">
                      <ShieldCheck size={30} />
                    </div>

                    <div>
                      <h3 className="text-white text-2xl font-bold">
                        Professional Security
                      </h3>

                      <p className="text-gray-200">
                        Trusted protection services across Rajasthan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= OTHER COMPONENTS ================= */}

      <WhoWeAreSection />

      <MissionSection />

      {/* <OurTeam /> */}

      {/* <WhyChooseUs /> */}

      <ServicesWeOffer />

      {/* <MissionStatement /> */}

      <SystemCompany />

      {/* ================= FINAL CTA ================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 80,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-28 bg-black overflow-hidden"
      >
        {/* Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89B3C]/20 blur-[180px] rounded-full"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready To Secure
            <br />
            <span className="text-[#C89B3C]">Your Business?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Join hands with Rajasthan’s trusted security partner and experience
            professional protection services designed for complete peace of
            mind.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C89B3C] hover:bg-[#b68a31] text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_40px_rgba(200,155,60,0.35)] text-lg"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>

            <a
              href="/services"
              className="inline-flex items-center gap-3 border border-white/20 bg-white/10 backdrop-blur-xl text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
