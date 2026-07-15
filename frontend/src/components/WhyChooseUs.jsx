// import React from "react";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       title: "Trained Professionals",
//       desc: "All our guards undergo rigorous physical, tactical, and psychological training to handle real-world threats and emergencies effectively.",
//       icon: "👮‍♂️",
//     },
//     {
//       title: "Tech-Integrated Security",
//       desc: "We use advanced surveillance systems, GPS patrolling, real-time monitoring, and modern security tools for maximum efficiency.",
//       icon: "📡",
//     },
//     {
//       title: "24/7 Control Room Support",
//       desc: "Our dedicated command center provides round-the-clock support, rapid response, and instant assistance whenever needed.",
//       icon: "🕒",
//     },
//     {
//       title: "Client-Centric Approach",
//       desc: "We customize every security solution according to your specific needs, risk assessment, and operational requirements.",
//       icon: "🎯",
//     },
//     {
//       title: "Ex-Servicemen Led",
//       desc: "Our team is led by experienced ex-servicemen, bringing discipline, integrity, and professionalism to every assignment.",
//       icon: "⭐",
//     },
//     {
//       title: "Transparent & Reliable",
//       desc: "Fully transparent operations with proper documentation, PF, ESIC, and timely reporting to build long-term trust.",
//       icon: "🤝",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Why Choose <span className="text-red-600">Ranbanka</span>?
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             What makes us the preferred security partner across Rajasthan
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-red-100"
//             >
//               <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
//                 {feature.icon}
//               </div>

//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

//               <div className="h-1 w-12 bg-red-600 mt-8 rounded-full group-hover:w-20 transition-all duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import {
  ShieldCheck,
  Radar,
  Headphones,
  Target,
  Star,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Trained Professionals",
      desc: "All our guards undergo rigorous physical, tactical, and psychological training to handle real-world threats and emergencies effectively.",
      icon: ShieldCheck,
    },
    {
      title: "Tech-Integrated Security",
      desc: "Advanced surveillance systems, GPS patrolling, and real-time monitoring for maximum protection.",
      icon: Radar,
    },
    {
      title: "24/7 Support",
      desc: "Dedicated command center with rapid response and instant assistance anytime you need.",
      icon: Headphones,
    },
    {
      title: "Client-Centric Approach",
      desc: "Customized security solutions based on your operational and safety requirements.",
      icon: Target,
    },
    {
      title: "Ex-Servicemen Led",
      desc: "Experienced ex-servicemen bringing discipline, professionalism, and integrity.",
      icon: Star,
    },
    {
      title: "Reliable & Transparent",
      desc: "Complete transparency with proper documentation, reporting, PF, and ESIC compliance.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

    
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-[#C89B3C] text-white text-sm font-semibold mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose{" "}
            <span className="text-[#C89B3C] relative group cursor-pointer">Ranbanka Security

              <span className="absolute left-0 bottom-0 h-[5px] w-[20px] bg-[#C89B3C] rounded-full transition-all duration-500 group-hover:w-full"></span>
            </span>?
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We provide trusted, professional, and technology-driven security
            solutions tailored for businesses, industries, and events.
          </p>
        </div>

        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
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
                key={index}
                className="group relative bg-white border border-gray-200 rounded-3xl p-7 transition-all duration-500 overflow-hidden"
              >


               
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-[#C89B3C] w-8 h-8" />
                </div>

             
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 h-1 w-12 rounded-full bg-[#C89B3C] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}