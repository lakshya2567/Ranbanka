// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const services = [
//   {
//     title: "Industrial Security",
//     desc: "Trained guards for factories, warehouses, and industrial plants. 24/7 patrolling, access control, and shift-wise deployment for complete safety.",
//     img: "https://media.istockphoto.com/id/185005137/photo/security-system.webp?a=1&b=1&s=612x612&w=0&k=20&c=IhGhNiz6MBR8ab8ktPP7QSmfrdrQmCBDBduA-utuygo=",
//   },
//   {
//     title: "Event Security",
//     desc: "Professional crowd management for weddings, corporate events, rallies, and public gatherings. VIP protection and seamless event security.",
//     img: "https://media.istockphoto.com/id/130406310/photo/security-guards-blocking-paparazzi.webp?a=1&b=1&s=612x612&w=0&k=20&c=zv-1EpQvlXbZsdhCfIDdZkFQUeE8wSoBKjzWtH2a8rg=",
//   },
//   {
//     title: "VIP & Celebrity Protection",
//     desc: "Highly trained close protection officers for VIPs, celebrities, and dignitaries. Discreet escorts, travel security, and threat management.",
//     img: "https://media.istockphoto.com/id/1126700583/photo/bodyguard-ready-to-provide-instant-protection.webp?a=1&b=1&s=612x612&w=0&k=20&c=KGCiSPRusb75RE-sunOdTJV_5j_KktLerEY6AFG6lGw=",
//   },
//   {
//     title: "CCTV Surveillance",
//     desc: "Advanced CCTV systems with 24/7 real-time monitoring, remote access, and dedicated control room operations.",
//     img: "https://media.istockphoto.com/id/181098768/photo/security-monitors-in-office-building.webp?a=1&b=1&s=612x612&w=0&k=20&c=I9xdynUuje5RrxUR2cEOZYSBzaFk_TYqXy1zTsuuZTA=",
//   },
//   {
//     title: "Armed Security Guards",
//     desc: "Licensed armed guards for banks, cash-in-transit, high-risk sites, and sensitive installations. Rapid response and professional deterrence.",
//     img: "https://media.istockphoto.com/id/170224563/photo/police-officers-with-rifles.webp?a=1&b=1&s=612x612&w=0&k=20&c=5YKYor-QRXMsTH-CPZemUzza190d9KOeZmJY4_4QEyU=",
//   },
//   {
//     title: "Facility Management",
//     desc: "Complete facility support including housekeeping, maintenance, electrical services, and campus management.",
//     img: "https://media.istockphoto.com/id/2148122334/photo/team-working-around-a-conference-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=AnRtv91-TZnnSMXHQEDHj29VRlWtZ8QNq9PCjcGkuiQ=",
//   },
// ];

// export default function ServicesWeOffer() {
//   return (
//     <section className="w-full bg-gray-50 py-20 px-4 border">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-red-600">Services</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Professional security and allied services delivered with discipline,
//             integrity, and excellence across Rajasthan.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {services.map((service, index) => (
//             <ServiceCard key={index} service={service} index={index} />
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 text-center">
//           <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-10 md:p-14 shadow-xl">
//             <h3 className="text-3xl font-semibold mb-4">
//               Need Reliable Security Services?
//             </h3>
//             <p className="text-lg mb-8 opacity-90">
//               Get a free consultation from Rajasthan’s most trusted security
//               partner
//             </p>
//             <a
//               href="/contact"
//               className="inline-block bg-white text-red-700 hover:bg-yellow-400 hover:text-gray-900 font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
//             >
//               Get Free Consultation
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // Individual Service Card
// function ServiceCard({ service, index }) {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
//     >
//       <div className="relative">
//         <img
//           src={service.img}
//           alt={service.title}
//           className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//         <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
//           {index + 1}
//         </div>
//       </div>

//       <div className="p-8 flex-1 flex flex-col">
//         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//           {service.title}
//         </h3>
//         <p className="text-gray-600 leading-relaxed flex-1">{service.desc}</p>

//         <div className="mt-6 pt-6 border-t border-gray-100">
//           <a
//             href="/contact"
//             className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
//           >
//             Learn More →
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  Camera,
  CarFront,
  Users,
  Building2,
  ArrowRight,
  UserCheck,
  Dumbbell,
} from "lucide-react";

const services = [
  {
    title: "SECURITY GUARD SERVICES",
    desc: "Trained, verified & disciplined personnel for all types of premises.",
    icon: ShieldCheck,
  },
  {
    title: "HOUSE KEEPING",
    desc: "24/7 real-time monitoring with advanced CCTV & smart systems.",
    icon: Camera,
  },
  {
    title: "PATROLLING SERVICES",
    desc: "Routine & random patrolling to ensure complete area security.",
    icon: CarFront,
  },
  {
    title: "RISK MANAGEMENT",
    desc: "Identify, assess & mitigate risks with expert security planning.",
    icon: Users,
  },
  {
    title: "CORPORATE SECURITY",
    desc: "Tailored security solutions for corporates, offices & industries.",
    icon: Building2,
  },
  {
    title: "MENTOR SERVICES",
    desc: "Professional mentors for guidance, supervision & staff management.",
    icon: UserCheck,
  },
  {
    title: "BOUNCER SERVICES",
    desc: "Highly trained bouncers for events, clubs, VIP & crowd management.",
    icon: Dumbbell,
  },
];

export default function CoreServices() {
  return (
    <section className="w-full bg-white py-14 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-start justify-between flex-wrap gap-4 mb-10"
        >
          <div>
            <p className="text-red-600 text-sm font-semibold tracking-[2px] uppercase mb-2">
              What We Offer
            </p>

            <h2 className="text-xl md:text-3xl font-black uppercase text-black leading-tight">
              Our <span className="text-[#c89b3c]">Core Services</span>
            </h2>
          </div>

          <a
            href="/services"
            className="flex items-center gap-2 text-sm font-bold uppercase text-black hover:text-red-600 transition"
          >
            View All Services
            <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white">
              <ArrowRight size={14} />
            </span>
          </a>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
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
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white border border-gray-200 rounded-[28px] p-7 text-center hover:shadow-2xl"
              >

                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-[#d4a84f] flex items-center justify-center mb-6 relative"
                >
                  <div className="absolute inset-2 rounded-full bg-[#fff9ed]" />

                  <Icon
                    size={34}
                    className="relative z-10 text-[#c89b3c]"
                    strokeWidth={2.2}
                  />
                </motion.div>


                <h3 className="text-[17px] leading-6 font-extrabold uppercase text-black mb-4 min-h-[60px]">
                  {service.title}
                </h3>


                <p className="text-gray-600 text-sm leading-6 min-h-[70px]">
                  {service.desc}
                </p>


                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 flex justify-end"
                >
                  <button className="text-black">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}