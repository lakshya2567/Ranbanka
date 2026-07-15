// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ClientData from "./ClientDta";

// export default function ClientsPage() {
//   const [search, setSearch] = useState("");

//   const filteredClients = ClientData.filter((client) =>
//     client.name.toLowerCase().includes(search.toLowerCase()),
//   );
// console.log(ClientData)
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our Valued Clients
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Trusted by leading organizations across Rajasthan for reliable and
//             professional security services.
//           </p>
//           <div className="w-28 h-1 bg-[] mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Search Bar */}
//         <div className="max-w-md mx-auto mb-12">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search clients by name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full px-6 py-4 bg-white border border-red-100 rounded-2xl shadow-sm focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-200 text-lg placeholder-gray-400"
//             />
//             <div className="absolute right-5 top-1/2 -translate-y-1/2 text-red-400">
//               🔍
//             </div>
//           </div>
//         </div>

//         {/* Clients Grid */}
//         {filteredClients.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredClients.map((client, index) => (
//               <motion.div
//                 key={client.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.05 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 className="group bg-white border border-red-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
//               >
//                 {/* Client Logo / Icon Placeholder */}
//                 <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-red-100 transition-colors">
//                   🏢
//                 </div>

//                 <h2 className="text-2xl font-semibold text-gray-900 mb-2">
//                   {client.name}
//                 </h2>

//                 {client.location && (
//                   <p className="text-red-600 font-medium text-lg">
//                     {client.location}
//                   </p>
//                 )}

//                 {/* Subtle highlight line */}
//                 <div className="mt-8 w-12 h-0.5 bg-red-600 mx-auto rounded-full group-hover:w-20 transition-all"></div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20">
//             <p className="text-2xl text-gray-500">
//               No clients found matching your search.
//             </p>
//             <p className="text-gray-400 mt-2">
//               Try broadening your search term.
//             </p>
//           </div>
//         )}

//         {/* Trust Bar */}
//         <div className="mt-20 flex justify-center">
//           <div className="bg-red-600 text-white text-sm font-semibold px-10 py-4 rounded-full flex items-center gap-3 shadow-lg">
//             <span>🤝</span>
//             BUILDING LONG-TERM TRUST • OVER 100+ CLIENTS SERVED
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import slider1Laptop from "../SliderImages/banner1Laptop.jpeg";

// import {
//   Search,
//   Building2,
//   MapPin,
//   ShieldCheck,
// } from "lucide-react";

// import ClientData from "./ClientDta";

// export default function ClientsPage() {
//   const [search, setSearch] = useState("");

//   const filteredClients = ClientData.filter((client) =>
//     client.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <section className="relative bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">

//       <div className="">
//         <div className="w-full h-[800px]">
//           <img src={slider1Laptop} alt="" />

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
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="relative max-w-5xl mx-auto px-6 text-center"
//           >

//           </motion.div>
//         </div>
//         {/* Header */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 60,
//             filter: "blur(10px)",
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//           }}
//           transition={{ duration: 0.8 }}
//           className="text-center mt"
//         >
//           <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-5">
//             <ShieldCheck size={16} />
//             Trusted Clients
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5">
//             Our Valued{" "}
//             <span className="text-[#C89B3C]">
//               Clients
//             </span>
//           </h1>

//           <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Trusted by leading organizations across Rajasthan
//             for reliable and professional security services.
//           </p>

//           <div className="w-28 h-1 bg-[#C89B3C] mx-auto mt-6 rounded-full"></div>
//         </motion.div>

//         {/* Search */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//             filter: "blur(8px)",
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//           }}
//           transition={{ duration: 0.7 }}
//           className="max-w-xl mx-auto mb-14"
//         >
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search clients by name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full bg-white border border-[#C89B3C]/20 rounded-2xl px-6 py-4 pl-14 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] text-gray-800 placeholder-gray-400 transition-all"
//             />

//             <Search
//               size={22}
//               className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C89B3C]"
//             />
//           </div>
//         </motion.div>

//         {/* Clients Grid */}
//         {filteredClients.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

//             {filteredClients.map((client, index) => (
//               <motion.div
//                 key={client.id}
//                 initial={{
//                   opacity: 0,
//                   y: 70,
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
//                   duration: 0.7,
//                   delay: index * 0.01,
//                 }}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="group relative bg-white border border-[#C89B3C]/15 rounded-[28px] p-8 text-center shadow-lg hover:shadow-[0_20px_60px_rgba(200,155,60,0.20)] transition-all duration-500 overflow-hidden"
//               >

//                 {/* Name */}
//                 <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
//                   {client.name}
//                 </h2>

//                 {/* Location */}
//                 {client.location && (
//                   <div className="flex items-center justify-center gap-2 text-gray-600 mb-5">
//                     <MapPin
//                       size={16}
//                       className="text-[#C89B3C]"
//                     />

//                     <span className="text-sm font-medium">
//                       {client.location}
//                     </span>
//                   </div>
//                 )}

//                 {/* Bottom Line */}
//                 <div className="w-14 h-1 bg-[#C89B3C] mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             className="text-center py-24"
//           >
//             <div className="w-24 h-24 rounded-full bg-[#C89B3C]/10 flex items-center justify-center mx-auto mb-6">
//               <Search
//                 size={36}
//                 className="text-[#C89B3C]"
//               />
//             </div>

//             <h3 className="text-3xl font-bold text-gray-800 mb-3">
//               No Clients Found
//             </h3>

//             <p className="text-gray-500 text-lg">
//               Try searching with another keyword.
//             </p>
//           </motion.div>
//         )}

//         {/* Bottom Trust Bar */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//             filter: "blur(10px)",
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//           }}
//           transition={{ duration: 0.8 }}
//           className="mt-20 flex justify-center"
//         >
//           <div className="bg-[#C89B3C] text-white px-10 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(200,155,60,0.35)] text-sm md:text-base font-semibold">
//             <span>🤝</span>
//             BUILDING LONG-TERM TRUST • OVER 100+ CLIENTS SERVED
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";

import Image from "../assets/Client_Banner.jpeg";
import mobileimg from "../assets/ClientMobile_Banner.jpeg";

import { Search, MapPin, ShieldCheck } from "lucide-react";

import ClientData from "./ClientDta";

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  const filteredClients = ClientData.filter((client) =>
    client.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="relative bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">
      <div className="relative w-full h-[85vh] min-h-[650px] overflow-hidden">
        {/* Background Image */}
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

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-[#C89B3C]/20"></div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C89B3C]/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 blur-[120px] rounded-full"></div>

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
            className="max-w-5xl text-center"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold mb-8 shadow-xl">
              <ShieldCheck size={18} className="text-[#C89B3C]" />
              Trusted Security Partners Across Rajasthan
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
              Our Valuable{" "}
              <span className="text-[#C89B3C] drop-shadow-[0_0_20px_rgba(200,155,60,0.5)]">
                Clients
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12">
              Delivering trusted, professional, and reliable security services
              to businesses, industries, institutions, and organizations across
              Rajasthan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 hidden md:flex">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-5 min-w-[180px] shadow-2xl">
                <h3 className="text-4xl font-black text-[#C89B3C]">100+</h3>

                <p className="text-gray-200 text-sm mt-1">Happy Clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-5 min-w-[180px] shadow-2xl">
                <h3 className="text-4xl font-black text-[#C89B3C]">24/7</h3>

                <p className="text-gray-200 text-sm mt-1">Security Support</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-5 min-w-[180px] shadow-2xl">
                <h3 className="text-4xl font-black text-[#C89B3C]">20+</h3>

                <p className="text-gray-200 text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
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
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <ShieldCheck size={16} />
            Trusted Clients
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-5">
            Organizations That <span className="text-[#C89B3C]">Trust Us</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading organizations across Rajasthan for reliable and
            professional security services.
          </p>

          <div className="w-28 h-1 bg-[#C89B3C] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search clients by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#C89B3C]/20 rounded-2xl px-6 py-4 pl-14 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C] text-gray-800 placeholder-gray-400 transition-all"
            />

            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C89B3C]"
            />
          </div>
        </motion.div>

        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{
                  opacity: 0,
                  y: 70,
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
                  duration: 0.7,
                  delay: index * 0.03,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative bg-white border border-[#C89B3C]/15 rounded-[28px] p-8 text-center shadow-lg hover:shadow-[0_20px_60px_rgba(200,155,60,0.20)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C89B3C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="w-20 h-20 rounded-3xl bg-[#C89B3C]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500">
                  <ShieldCheck size={36} className="text-[#C89B3C]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                  {client.name}
                </h3>

                {client.location && (
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-5">
                    <MapPin size={16} className="text-[#C89B3C]" />

                    <span className="text-sm font-medium">
                      {client.location}
                    </span>
                  </div>
                )}

                <div className="w-14 h-1 bg-[#C89B3C] mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-center py-24"
          >
            <div className="w-24 h-24 rounded-full bg-[#C89B3C]/10 flex items-center justify-center mx-auto mb-6">
              <Search size={36} className="text-[#C89B3C]" />
            </div>

            <h3 className="text-3xl font-bold text-gray-800 mb-3">
              No Clients Found
            </h3>

            <p className="text-gray-500 text-lg">
              Try searching with another keyword.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.8 }}
          className="mt-24 flex justify-center"
        >
          <div className="bg-[#C89B3C] text-white px-10 py-4 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(200,155,60,0.35)] text-sm md:text-base font-semibold">
            <span>🤝</span>
            BUILDING LONG-TERM TRUST • OVER 100+ CLIENTS SERVED
          </div>
        </motion.div>
      </div>
    </section>
  );
}
