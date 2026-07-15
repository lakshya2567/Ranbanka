// import React from "react";
// import { motion } from "framer-motion";

// export default function MissionSection() {
//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="bg-gradient-to-br from-red-50 via-white to-yellow-50 border border-red-100 rounded-3xl p-12 md:p-16 shadow-xl relative">
//           {/* Decorative Elements */}
//           <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>

//           <div className="flex flex-col items-center text-center">
//             {/* Icon / Badge */}
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 text-white rounded-2xl mb-8 shadow-lg">
//               🎯
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Our <span className="text-red-600">Mission</span>
//             </h2>

//             <div className="max-w-3xl">
//               <p className="text-lg md:text-xl leading-relaxed text-gray-700">
//                 At <strong>Ranbanka Security & Allied Services</strong>, our
//                 mission is to deliver professional, disciplined, and trustworthy
//                 security solutions that bring safety and complete peace of mind
//                 to our clients across Rajasthan.
//               </p>

//               <p className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6">
//                 We are committed to{" "}
//                 <span className="font-semibold text-red-700">
//                   excellence, ethics, and efficiency
//                 </span>{" "}
//                 in every guard we train and every service we provide.
//               </p>
//             </div>

//             {/* Values Highlights */}
//             <div className="grid grid-cols-3 gap-6 mt-12 w-full max-w-md">
//               {["Discipline", "Trust", "Excellence"].map((value, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-2xl font-bold text-yellow-500 mb-1">
//                     ★
//                   </div>
//                   <p className="font-semibold text-gray-800">{value}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionSection() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Discipline",
      desc: "Professional guards trained with strict discipline and commitment.",
    },
    {
      icon: BadgeCheck,
      title: "Trust",
      desc: "Reliable security services trusted by businesses & individuals.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Delivering high-quality protection with modern security standards.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80, filter: "blur(6px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <p className="text-red-600 uppercase tracking-[3px] font-semibold mb-3">
              Our Mission
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight text-black mb-8">
              Protecting People <br />
              With <span className="text-[#c89b3c]">Trust & Excellence</span>
            </h2>

            <div className="relative bg-white rounded-[35px] p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c89b3c]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#c89b3c] to-[#e0b45b] text-white flex items-center justify-center text-4xl shadow-lg mb-8">
                  🎯
                </div>

                <p className="text-lg md:text-xl leading-9 text-gray-700">
                  At{" "}
                  <span className="font-bold text-black">
                    Ranbanka Security & Allied Services
                  </span>
                  , our mission is to provide disciplined, professional, and
                  trusted security solutions that ensure complete safety and
                  peace of mind for every client.
                </p>

                <p className="text-lg md:text-xl leading-9 text-gray-700 mt-6">
                  We are dedicated to maintaining the highest standards of{" "}
                  <span className="font-bold text-[#C89B3C]">
                    integrity, efficiency, and operational excellence
                  </span>{" "}
                  in every service we deliver.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(6px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="space-y-6"
          >
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-[30px] p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-[#fff5df] flex items-center justify-center shrink-0 group-hover:bg-[#c89b3c] transition-all duration-500">
                      <Icon
                        size={36}
                        className="text-[#c89b3c] group-hover:text-white transition-all duration-500"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-black mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-8 text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-black to-[#1a1a1a] rounded-[30px] p-8 text-white shadow-2xl border border-[#c89b3c]/20">
              <h3 className="text-3xl font-bold mb-4">Your Safety, Our Duty</h3>

              <p className="text-gray-300 text-lg leading-8">
                We continuously strive to become Rajasthan’s most trusted
                security partner through dedication, professionalism, and
                advanced security practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
