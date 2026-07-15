// import React from "react";

// const SystemCompany = () => {
//   const compliances = [
//     { label: "BRN NO", value: "800522002000998" },
//     { label: "ISO", value: "9001 : 2015" },
//     { label: "ESIC No", value: "15-000-4679-000-1018" },
//     { label: "PF No", value: "RJ/RAJ/002942" },
//     { label: "PAN No", value: "AAGCR3052G" },
//     { label: "Registration No", value: "1113/HG HQ (S NO)/2021" },
//     { label: "GSTIN No", value: "08AAGCR3052G1ZF" },
//     { label: "Udyog Aadhaar", value: "RJ170088590" },
//     { label: "Labour Licence", value: "SCA/2018/14/145688" },
//     { label: "Email", value: "ranbanka165@gmail.com" },
//     { label: "Mobile", value: "916567777, 916567222" },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl shadow-xl p-10 md:p-16">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//               Systems Complying with
//             </h2>
//             <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
//               All Mandatory Legal & Statutory Requirements
//             </h3>
//             <div className="w-28 h-1 bg-red-600 mx-auto rounded-full"></div>
//           </div>

//           {/* Compliance Grid */}
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg">
//               {compliances.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white border border-red-100 rounded-2xl p-5 hover:shadow-md transition-all duration-300"
//                 >
//                   <div className="font-semibold text-gray-700 min-w-[140px] sm:text-right">
//                     {item.label}
//                   </div>
//                   <div className="text-gray-800 font-medium break-all">
//                     {item.value}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Highlight */}
//           <div className="mt-16 flex justify-center">
//             <div className="bg-red-600 text-white text-sm font-semibold px-10 py-4 rounded-full flex items-center gap-3 shadow-lg">
//               <span>✅</span>
//               FULLY COMPLIANT • LEGALLY SECURE • TRANSPARENT
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SystemCompany;



import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Building2,
  FileCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const SystemCompany = () => {
  const compliances = [
    { label: "BRN NO", value: "800522002000998" },
    { label: "ISO", value: "9001 : 2015" },
    { label: "ESIC No", value: "15-000-4679-000-1018" },
    { label: "PF No", value: "RJ/RAJ/002942" },
    { label: "PAN No", value: "AAGCR3052G" },
    { label: "Registration No", value: "1113/HG HQ (S NO)/2021" },
    { label: "GSTIN No", value: "08AAGCR3052G1ZF" },
    { label: "Udyog Aadhaar", value: "RJ170088590" },
    { label: "Labour Licence", value: "SCA/2018/14/145688" },
    { label: "Email", value: "ranbanka165@gmail.com" },
    { label: "Mobile", value: "916567777, 916567222" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-[1400px] mx-auto relative py-20 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-xl border border-white/40 rounded-[35px] p-8 md:p-14 overflow-hidden shadow-2xl"
        >
          {/* Animated Top Gradient Border */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 h-2 bg-[#C89B3C]"
          ></motion.div>

          {/* Heading */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 10,
              }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 shadow-md mb-5"
            >
              <ShieldCheck className="text-[#C89B3C] w-10 h-10" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              Systems Complying With
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold text-[#C89B3C] mt-3"
            >
              All Mandatory Legal & Statutory Requirements
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 rounded-full bg-[#C89B3C] mx-auto mt-5"
            ></motion.div>
          </div>

          {/* Compliance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {compliances.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              
                className="group bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}
                    className="min-w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center"
                  >
                    {index % 2 === 0 ? (
                      <BadgeCheck className="text-[#C89B3C] w-6 h-6" />
                    ) : (
                      <FileCheck className="text-[#C89B3C] w-6 h-6" />
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">
                      {item.label}
                    </h4>

                    <p className="text-gray-900 font-bold text-base md:text-lg break-all">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 20px 40px rgba(200,155,60,0.35)",
              }}
              transition={{ duration: 0.3 }}
              className="group bg-[#C89B3C] text-white px-8 py-4 rounded-full shadow-xl flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide"
            >
              <Building2 className="w-5 h-5" />
              FULLY COMPLIANT • LEGALLY SECURE • TRANSPARENT
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SystemCompany;