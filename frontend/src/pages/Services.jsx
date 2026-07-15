

// import React from "react";
// import { motion } from "framer-motion";

// import {
//   ShieldCheck,
//   Building2,
//   Camera,
//   UserCheck,
//   Briefcase,
//   ArrowRight,
// } from "lucide-react";

// import IndustriesServed from "../assets/Industrialsecurity.jpg";
// import serviceImg from "../SliderImages/services.jpeg";

// export default function Services() {

//   const services = [
//     {
//       title: "Industrial Security",
//       description:
//         "Highly trained guards for factories, warehouses, and industrial premises with 24/7 monitoring & patrolling.",
//       image: IndustriesServed,
//       icon: <Building2 size={30} />,
//     },

//     {
//       title: "Event Security",
//       description:
//         "Professional crowd control, VIP protection, and seamless security for weddings, corporate & public events.",
//       image:
//         "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368737.jpg?t=st=1753705158~exp=1753708758~hmac=e9324c114de56106c6fdbca601eb52ed863308d15dac35d3146f71b53076c4b6&w=1380",
//       icon: <ShieldCheck size={30} />,
//     },

//     {
//       title: "CCTV Surveillance",
//       description:
//         "Advanced CCTV installation, 24x7 live monitoring, and remote surveillance solutions.",
//       image:
//         "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368736.jpg?t=st=1753705981~exp=1753709581~hmac=3ad270aac77cdfd7f3c3421c1a0e6120b6fc75e1369d76641e332b8c71e6283d&w=1380",
//       icon: <Camera size={30} />,
//     },

//     {
//       title: "Personal Security Officers",
//       description:
//         "Trained PSOs for VIPs, celebrities, politicians, and high-profile individuals.",
//       image:
//         "https://img.freepik.com/free-photo/security-guard-protecting-client_23-2148404004.jpg?t=st=1753706122~exp=1753709722~hmac=0bb2e6631db40299671280b4ce8cd1d24171d3ed2bfaf469dfff9518314e39d8&w=1380",
//       icon: <UserCheck size={30} />,
//     },

//     {
//       title: "Facility Management",
//       description:
//         "Complete housekeeping, maintenance, and facility management services for offices & societies.",
//       image:
//         "https://img.freepik.com/free-photo/engineers-study-detailed-schematics-solar-panel-assembly-lines-factory_482257-120018.jpg?t=st=1753706188~exp=1753709788~hmac=44367bc6ee3ebea04f0a3ee2767ccf75b3e0f0cff16b91620ea9101c20e4b64b&w=1380",
//       icon: <Briefcase size={30} />,
//     },
//   ];

//   const industriesServed = [
//     "Factories & Industries",
//     "Banks & Financial Institutions",
//     "Hospitals",
//     "Schools & Educational Institutes",
//     "Hotels & Resorts",
//     "Corporate Offices",
//     "Residential Societies",
//     "Events & Weddings",
//     "Government Facilities",
//     "Shopping Malls",
//     "Construction Sites",
//     "Warehouses & Logistics",
//   ];

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}

//       <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">

//         {/* Background Image */}
//         <img
//           src={serviceImg}
//           alt="Services Banner"
//           className="w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/10"></div>

//         {/* Gold Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-[#C89B3C]/20"></div>

//         {/* Blur Glow */}
//         <div className="absolute top-10 left-10 w-80 h-80 bg-[#C89B3C]/20 blur-[140px] rounded-full"></div>

//         <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 blur-[120px] rounded-full"></div>

//         {/* Content */}
//         <div className="absolute inset-0 flex items-center justify-center px-6">

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 80,
//               filter: "blur(12px)",
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//             className="max-w-6xl text-center"
//           >

//             {/* Tag */}
//             <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-7 py-3 rounded-full text-white text-sm md:text-base font-semibold mb-8">

//               <ShieldCheck
//                 size={18}
//                 className="text-[#C89B3C]"
//               />

//               Professional Security Solutions
//             </div>

//             {/* Heading */}
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">

//               Premium{" "}

//               <span className="text-[#C89B3C]">
//                 Security Services
//               </span>

//               <br />

//               For Every Industry
//             </h1>

//           </motion.div>
//         </div>
//       </section>

//       {/* ================= SERVICES SECTION ================= */}

//       <section className="relative py-24 bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">

//         <div className="max-w-7xl mx-auto px-6">

//           {/* Heading */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 60,
//               filter: "blur(10px)",
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-20"
//           >

//             <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">

//               <ShieldCheck size={16} />

//               Our Services
//             </div>

//             <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-5">

//               What We{" "}

//               <span className="text-[#C89B3C]">
//                 Offer
//               </span>
//             </h2>

//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">

//               Professional security services designed to protect
//               people, properties, businesses, and events with
//               complete reliability.
//             </p>
//           </motion.div>

//           {/* Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   y: 80,
//                   scale: 0.95,
//                   filter: "blur(14px)",
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                   scale: 1,
//                   filter: "blur(0px)",
//                 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.08,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -12,
//                 }}
//                 className="group relative bg-white rounded-[32px] overflow-hidden border border-[#C89B3C]/10 shadow-lg hover:shadow-[0_20px_60px_rgba(200,155,60,0.22)] transition-all duration-500"
//               >

//                 {/* Image */}
//                 <div className="relative h-72 overflow-hidden">

//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                   {/* Icon */}
//                   <div className="absolute top-5 left-5 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">

//                     {service.icon}
//                   </div>

//                   {/* Service Title */}
//                   <div className="absolute bottom-6 left-6">

//                     <h3 className="text-3xl font-bold text-white">
//                       {service.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-8">

//                   <p className="text-gray-600 leading-relaxed text-[15px] mb-7">

//                     {service.description}
//                   </p>

//                   {/* Button */}
//                   <button className="flex items-center gap-2 text-[#C89B3C] font-semibold group-hover:gap-4 transition-all duration-300">

//                     Learn More

//                     <ArrowRight size={18} />
//                   </button>
//                 </div>

//                 {/* Hover Border */}
//                 <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C89B3C] group-hover:w-full transition-all duration-500"></div>

//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= INDUSTRIES SECTION ================= */}

//       <section className="relative py-24 bg-white overflow-hidden">

//         <div className="max-w-6xl mx-auto px-6">

//           {/* Heading */}
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 60,
//               filter: "blur(10px)",
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//               filter: "blur(0px)",
//             }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >

//             <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">

//               <ShieldCheck size={16} />

//               Industries We Serve
//             </div>

//             <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-5">

//               Trusted Across{" "}

//               <span className="text-[#C89B3C]">
//                 Multiple Industries
//               </span>
//             </h3>

//             <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">

//               Delivering reliable security solutions for industries,
//               institutions, corporate offices, and residential
//               properties.
//             </p>
//           </motion.div>

//           {/* Industry Cards */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

//             {industriesServed.map((industry, index) => (
//               <motion.div
//                 key={index}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.9,
//                   filter: "blur(12px)",
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   filter: "blur(0px)",
//                 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.05,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 className="group bg-white border border-[#C89B3C]/10 rounded-3xl p-7 shadow-lg hover:shadow-[0_15px_40px_rgba(200,155,60,0.18)] transition-all duration-300"
//               >

//                 <div className="flex items-center gap-5">

//                   <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] text-xl font-bold group-hover:scale-110 transition-all duration-300">

//                     ✓
//                   </div>

//                   <span className="font-semibold text-gray-800 text-lg leading-relaxed">

//                     {industry}
//                   </span>
//                 </div>

//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );




import React from "react";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Building2,
  Camera,
  UserCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import IndustriesServed from "../assets/Industrialsecurity.jpg";
import Image from ".././assets/Services_Banner.jpeg";
import companyBanner from "../shortBanner/banner1.jpeg";
import img19 from "../assets/19.jpeg";
import mobileimg from "../assets/ServicesMobile_Banner.jpeg";


export default function Services() {

  const services = [
    {
      title: "Industrial Security",
      description:
        "Highly trained guards for factories, warehouses, and industrial premises with 24/7 monitoring & patrolling.",
      image: IndustriesServed,
      icon: <Building2 size={30} />,
    },

    {
      title: "Event Security",
      description:
        "Professional crowd control, VIP protection, and seamless security for weddings, corporate & public events.",
      image:
        "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368737.jpg?t=st=1753705158~exp=1753708758~hmac=e9324c114de56106c6fdbca601eb52ed863308d15dac35d3146f71b53076c4b6&w=1380",
      icon: <ShieldCheck size={30} />,
    },

    {
      title: "CCTV Surveillance",
      description:
        "Advanced CCTV installation, 24x7 live monitoring, and remote surveillance solutions.",
      image:
        "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368736.jpg?t=st=1753705981~exp=1753709581~hmac=3ad270aac77cdfd7f3c3421c1a0e6120b6fc75e1369d76641e332b8c71e6283d&w=1380",
      icon: <Camera size={30} />,
    },

    {
      title: "Personal Security Officers",
      description:
        "Trained PSOs for VIPs, celebrities, politicians, and high-profile individuals.",
      image:
        "https://img.freepik.com/free-photo/security-guard-protecting-client_23-2148404004.jpg?t=st=1753706122~exp=1753709722~hmac=0bb2e6631db40299671280b4ce8cd1d24171d3ed2bfaf469dfff9518314e39d8&w=1380",
      icon: <UserCheck size={30} />,
    },

    {
      title: "Facility Management",
      description:
        "Complete housekeeping, maintenance, and facility management services for offices & societies.",
      image:
        "https://img.freepik.com/free-photo/engineers-study-detailed-schematics-solar-panel-assembly-lines-factory_482257-120018.jpg?t=st=1753706188~exp=1753709788~hmac=44367bc6ee3ebea04f0a3ee2767ccf75b3e0f0cff16b91620ea9101c20e4b64b&w=1380",
      icon: <Briefcase size={30} />,
    },

    // NEW BOUNCER SERVICE
    {
      title: "Bouncer Services",
      description:
        "Professional bouncers for clubs, parties, events, VIP security & crowd management.",
      image:
        img19,
      icon: <ShieldCheck size={30} />,
    },

    // NEW MENTOR SERVICE
    {
      title: "Mentor Services",
      description:
        "Experienced mentors for staff supervision, training guidance & operational management.",
      image:
        "https://img.freepik.com/free-photo/business-people-meeting-office-working_23-2148908923.jpg?w=1380",
      icon: <UserCheck size={30} />,
    },
  ];

  const industriesServed = [
    "Factories & Industries",
    "Banks & Financial Institutions",
    "Hospitals",
    "Schools & Educational Institutes",
    "Hotels & Resorts",
    "Corporate Offices",
    "Residential Societies",
    "Events & Weddings",
    "Government Facilities",
    "Shopping Malls",
    "Construction Sites",
    "Warehouses & Logistics",
  ];

  return (
    <>

      <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden">

        <img
          src={Image}
          alt="Clients Banner"
          className="w-full h-full object-cover hidden lg:flex"
        />
        <img
          src={mobileimg}
          alt="Clients Banner"
          className="w-full h-full object-cover flex lg:hidden"
        />

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-[#C89B3C]/20"></div>

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
            className="max-w-6xl text-center"
          >

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-7 py-3 rounded-full text-white text-sm md:text-base font-semibold mb-8">

              <ShieldCheck
                size={18}
                className="text-[#C89B3C]"
              />

              Professional Security Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">

              Premium
              <span className="text-[#C89B3C]">
                {" "}Security Services
              </span>

              <br />

              For Every Industry
            </h1>

          </motion.div>
        </div>
      </section>


      <section className="py-24 bg-[#fafafa] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: -80,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              <div className="overflow-hidden rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-[#C89B3C]/10">

                <img
                  src={companyBanner}
                  alt="Ranbanka Security"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl border border-[#C89B3C]/10 px-6 py-4">

                <h4 className="text-3xl font-black text-[#C89B3C]">
                  24×7
                </h4>

                <p className="text-gray-600 font-medium text-sm">
                  Protection & Support
                </p>
              </div>

            </motion.div>

            {/* Right Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.9 }}
            >

              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-7">

                <ShieldCheck size={16} />

                Trusted Security Partner
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-7">

                Delivering Reliable
                <span className="text-[#C89B3C]">
                  {" "}Security Solutions
                </span>

                <br />

                Across Rajasthan
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">

                Ranbanka Security & Allied Services Private Limited
                provides professional security solutions with trained
                manpower, modern surveillance systems, and reliable
                protection services for industries, businesses,
                residential societies, events, and institutions.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-5 mb-10">

                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

                    <ShieldCheck size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-gray-900 mb-1">
                      Trusted Protection
                    </h4>

                    <p className="text-sm text-gray-600">
                      Reliable security solutions for every sector.
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

                    <Camera size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-gray-900 mb-1">
                      Advanced Monitoring
                    </h4>

                    <p className="text-sm text-gray-600">
                      CCTV surveillance with 24×7 monitoring support.
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

                    <UserCheck size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-gray-900 mb-1">
                      Trained Staff
                    </h4>

                    <p className="text-sm text-gray-600">
                      Skilled and disciplined security professionals.
                    </p>

                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-[#C89B3C]/10 shadow-sm">

                  <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">

                    <Briefcase size={22} />
                  </div>

                  <div>

                    <h4 className="font-bold text-gray-900 mb-1">
                      Customized Services
                    </h4>

                    <p className="text-sm text-gray-600">
                      Tailored protection plans for every client.
                    </p>

                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      <section className="relative py-24 bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >

            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">

              <ShieldCheck size={16} />

              Our Services
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-5">

              What We
              <span className="text-[#C89B3C]">
                {" "}Offer
              </span>
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.95,
                  filter: "blur(14px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group bg-white rounded-[32px] overflow-hidden border border-[#C89B3C]/10 shadow-lg hover:shadow-[0_20px_60px_rgba(200,155,60,0.22)] transition-all duration-500"
              >

                <div className="relative h-72 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute top-5 left-5 w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">

                    {service.icon}
                  </div>

                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8">

                  <p className="text-gray-600 leading-relaxed text-[15px] mb-7">

                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-[#C89B3C] font-semibold group-hover:gap-4 transition-all duration-300">

                    Learn More

                    <ArrowRight size={18} />
                  </button>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>


      <section className="relative py-24 bg-white overflow-hidden">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">

              <ShieldCheck size={16} />

              Industries We Serve
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-5">

              Trusted Across
              <span className="text-[#C89B3C]">
                {" "}Multiple Industries
              </span>
            </h3>

          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

            {industriesServed.map((industry, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group bg-white border border-[#C89B3C]/10 rounded-3xl p-7 shadow-lg hover:shadow-[0_15px_40px_rgba(200,155,60,0.18)] transition-all duration-300"
              >

                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C] text-xl font-bold">

                    ✓
                  </div>

                  <span className="font-semibold text-gray-800 text-lg leading-relaxed">

                    {industry}
                  </span>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}