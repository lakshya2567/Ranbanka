// import React from "react";
// import { motion } from "framer-motion";

// export default function OurMotto() {
//   return (
//     <section className="py-20 text-black relative overflow-hidden">
//       <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
//         {/* Decorative Shield Icon */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center justify-center w-24 h-24 bg-[#C89B3C] rounded-3xl mb-8 shadow-2xl shadow-red-600/50"
//         >
//           <span className="text-5xl">🛡️</span>
//         </motion.div>

//         <h2 className="text-4xl md:text-5xl font-bold mb-8">
//           Our <span className="text-[#C89B3C]">Motto</span>
//         </h2>

//         {/* Main Motto */}
//         <div className="mb-10">
//           <p className="text-3xl md:text-4xl font-semibold text-[#C89B3C] leading-tight tracking-wide">
//             "Discipline • Dedication • Protection"
//           </p>
//         </div>

//         {/* Description */}
//         <div className="max-w-3xl mx-auto">
//           <p className="text-lg md:text-xl  leading-relaxed">

//             At{" "}
//             <strong className="font-bold">
//               Ranbanka Security & Allied Services
//             </strong>
//             , we live by these three pillars. Discipline in every action,
//             dedication in every duty, and uncompromising protection for our
//             clients, their people, and their property.
//           </p>
//         </div>

//         {/* Bottom Tagline */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mt-12 text-[#C89B3C] font-medium tracking-widest text-sm"
//         >
//           WE STAND GUARD SO YOU CAN LIVE IN PEACE
//         </motion.div>
//       </div>

//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:40px_40px]"></div>
//       </div>
//     </section>
//   );
// }





import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, BadgeCheck } from "lucide-react";

export default function OurMotto() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-[#111111] to-black text-white">

     
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89B3C]/20 blur-[120px] rounded-full"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

       
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#C89B3C]/30 bg-white/5 backdrop-blur-md shadow-lg">
            <ShieldCheck className="text-[#C89B3C]" size={24} />
            <span className="tracking-[4px] uppercase text-sm text-gray-300">
              Our Commitment
            </span>
          </div>
        </motion.div>

  
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Our{" "}
            <span className="text-[#C89B3C] drop-shadow-[0_0_25px_rgba(200,155,60,0.7)]">
              Motto
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Built on trust, driven by discipline, and focused on delivering
            uncompromising security solutions.
          </p>
        </motion.div>

        
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: "Discipline",
              icon: <BadgeCheck size={34} />,
              desc: "Maintaining professionalism and strict standards in every operation.",
            },
            {
              title: "Dedication",
              icon: <Star size={34} />,
              desc: "Committed to serving clients with loyalty, focus, and responsibility.",
            },
            {
              title: "Protection",
              icon: <ShieldCheck size={34} />,
              desc: "Ensuring complete safety for people, property, and assets.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#C89B3C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>

              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-[#C89B3C] flex items-center justify-center text-black shadow-lg mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#C89B3C]">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-2xl border border-[#C89B3C]/30 bg-[#C89B3C]/10 backdrop-blur-lg shadow-2xl">
            <p className="text-xl md:text-2xl font-semibold tracking-wide text-[#C89B3C]">
              “WE STAND GUARD SO YOU CAN LIVE IN PEACE”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}