// import React from "react";

// const MissionStatement = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl shadow-xl p-10 md:p-16">
//           {/* Header */}
//           <div className="text-center mb-10">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
//               Our Mission
//             </h2>
//             <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
//           </div>

//           {/* Mission Quote */}
//           <div className="max-w-4xl mx-auto">
//             <div className="italic text-xl md:text-2xl leading-relaxed text-gray-700 text-center mb-10">
//               “Our mission is to secure you and your business, home, and
//               establishments with
//               <span className="text-red-600 font-semibold">
//                 {" "}
//                 foolproof security and safety
//               </span>
//               through highly skilled, time-tested professionals from the ranks
//               of Ex-Army, Ex-Police, and Central Government Services.”
//             </div>

//             <div className="text-lg leading-relaxed text-gray-600 text-justify md:text-left">
//               <p className="mb-6">
//                 We provide high-quality, specialized security services that
//                 benefit our clients and their valued assets — be it hotels,
//                 factories, offices, or residential premises.
//               </p>
//               <p>
//                 By hiring and retaining committed personnel, providing
//                 continuous training, and using the best equipment, Ranbanka
//                 Security & Allied Services has become a recognized leader in
//                 security solutions across Rajasthan.
//               </p>
//             </div>
//           </div>

//           {/* Bottom Highlight */}
//           <div className="mt-12 flex justify-center">
//             <div className="bg-[#C89B3C] text-white text-sm font-semibold px-8 py-3 rounded-full flex items-center gap-3 shadow-md">
//               <span>🎯</span>
//               DISCIPLINE • DEDICATION • PROTECTION
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionStatement;




import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const MissionStatement = () => {
  return (
    <motion.section className="relative py-20 overflow-hidden"
      initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, }}
    >

      <div className="max-w-[1400px] mx-auto relative max-w-6xl mx-auto px-6">

        {/* Main Card */}
        <div className="relative bg-white/80 backdrop-blur-xl border border-white/40  rounded-[35px] p-8 md:p-14 overflow-hidden">

          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-[#C89B3C]"></div>

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-5 shadow-md">
              <ShieldCheck className="text-[#C89B3C] w-10 h-10" />
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Mission
            </h2>

            <div className="flex justify-center mt-4">
              <div className="w-24 h-1 rounded-full bg-[#C89B3C]"></div>
            </div>
          </div>

          {/* Quote Box */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="absolute -top-6 -left-2 text-7xl text-red-100 font-bold">
              "
            </div>

            <div className="relative  border border-red-100 rounded-3xl p-8 md:p-10 shadow-lg">
              <p className="text-lg md:text-2xl leading-relaxed text-gray-700 text-center italic font-medium">
                Our mission is to secure you and your business,
                home, and establishments with
                <span className="text-[#C89B3C] font-bold">
                  {" "}
                  foolproof security and safety
                </span>{" "}
                through highly skilled, time-tested professionals
                from the ranks of Ex-Army, Ex-Police, and Central
                Government Services.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Star className="text-[#C89B3C] w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Quality Security
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                We provide high-quality and specialized security
                services for hotels, factories, offices, and
                residential premises while ensuring maximum safety
                and reliability.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#C89B3C]/20 flex items-center justify-center">
                  <ShieldCheck className="text-[#C89B3C] w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Trusted Professionals
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Through continuous training, advanced equipment,
                and dedicated personnel, Ranbanka Security &
                Allied Services has become a trusted leader across
                Rajasthan.
              </p>
            </div>
          </div>

          {/* Bottom Badge */}
          <div className="mt-14 flex justify-center">
            <div className="group bg-[#C89B3C] text-white px-8 py-4 rounded-full shadow-xl flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide hover:scale-105 transition-all duration-300">
              <span className="text-lg">🎯</span>
              DISCIPLINE • DEDICATION • PROTECTION
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionStatement;