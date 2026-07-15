// import React from "react";
// import RanbankaLogo from "../assets/RanbankaLogo.png";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-950 text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-10">

//           <div>
//             <Link to={"/"}>
//               <div className="flex items-center gap-3 mb-4 cursor-pointer">
//                 <img
//                   src={RanbankaLogo}
//                   alt="Ranbanka Security"
//                   className="w-12 h-12 object-contain"
//                 />
//                 <h3 className="text-2xl font-bold text-[#C89B3C]">
//                   Ranbanka Security
//                 </h3>
//               </div>
//             </Link>
//             <p className="text-gray-400 leading-relaxed mb-6">
//               Professional Security & Allied Services across Rajasthan. Trusted.
//               Disciplined. Reliable.
//             </p>

//             <div className="space-y-2 text-sm text-gray-400">
//               <p>
//                 <strong className="text-white">BRN:</strong> 8005220022000998
//               </p>
//               <p>
//                 <strong className="text-white">ISO:</strong> 9001:2015 Certified
//               </p>
//               <p>
//                 <strong className="text-white">PAN:</strong> AAGCR3052G
//               </p>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
//               Our Services
//             </h4>
//             <ul className="space-y-3 text-gray-400">
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Industrial Security
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Event Security
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Armed Guards
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 CCTV Surveillance
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 VIP Protection
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Facility Management
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
//               We Serve
//             </h4>
//             <ul className="space-y-3 text-gray-400">
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Factories & Industries
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Banks & Financial Institutions
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Hospitals & Schools
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Events & Weddings
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Corporate Offices
//               </li>
//               <li className="hover:text-white transition-colors cursor-pointer">
//                 Residential Societies
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
//               Get In Touch
//             </h4>

//             <div className="space-y-5 text-sm">
//               <div className="flex items-start gap-3">
//                 <div className="text-[#C89B3C] mt-1">📞</div>
//                 <div>
//                   <p className="text-gray-400 text-xs mb-1">CALL US</p>
//                   <a
//                     href="tel:9166567777"
//                     className="block hover:text-[#C89B3C] transition-colors"
//                   >
//                     +91 91665 67777
//                   </a>
//                   <a
//                     href="tel:9166567222"
//                     className="block hover:text-[#C89B3C] transition-colors"
//                   >
//                     +91 91665 67222
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="text-[#C89B3C] mt-1">✉️</div>
//                 <div>
//                   <p className="text-gray-400 text-xs mb-1">EMAIL</p>
//                   <a
//                     href="mailto:ranbanka165@gmail.com"
//                     className="hover:text-[#C89B3C] transition-colors"
//                   >
//                     ranbanka165@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="text-[#C89B3C] mt-1">📍</div>
//                 <div>
//                   <p className="text-gray-400 text-xs mb-1">LOCATION</p>
//                   <p className="text-gray-400 leading-relaxed">
//                     Jaipur, Rajasthan, India
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 space-y-1">
//               <p>Labour Licence: SCA/2018/14/145688</p>
//               <p>PF No: RJ/RAJ/002942</p>
//               <p>ESIC No: 15-000-4679-000-1018</p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
//           <p>
//             {new Date().getFullYear()} Ranbanka Security & Allied Services.
//             All Rights Reserved.
//           </p>

//           {/* <div className="flex gap-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-white transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-white transition-colors">
//               Terms & Conditions
//             </a>
//           </div> */}

//           <p className="mt-4 md:mt-0 text-[#C89B3C] font-medium">
//             Ex-Servicemen Led • ISO Certified
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";
import RanbankaLogo from "../assets/RanbankaLogo.png";
import { Link } from "react-router-dom";

import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to={"/"}>
              <div className="flex items-center gap-3 mb-4 cursor-pointer">
                <img
                  src={RanbankaLogo}
                  alt="Ranbanka Security"
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold text-[#C89B3C]">
                  Ranbanka Security
                </h3>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-6">
              Professional Security & Allied Services across Rajasthan. Trusted.
              Disciplined. Reliable.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-6">
              <a
                href="https://wa.me/9166567777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-green-500 hover:scale-110 hover:bg-green-600 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="https://www.instagram.com/ranbanka1652026/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61589467088101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>
            </div>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-white">BRN:</strong> 8005220022000998
              </p>
              <p>
                <strong className="text-white">ISO:</strong> 9001:2015 Certified
              </p>
              <p>
                <strong className="text-white">PAN:</strong> AAGCR3052G
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
              Our Services
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Industrial Security
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Event Security
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Armed Guards
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                CCTV Surveillance
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                VIP Protection
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Facility Management
              </li>
            </ul>
          </div>

          {/* We Serve */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
              We Serve
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Factories & Industries
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Banks & Financial Institutions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Hospitals & Schools
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Events & Weddings
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Corporate Offices
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Residential Societies
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-[#C89B3C]">
              Get In Touch
            </h4>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <div className="text-[#C89B3C] mt-1">📞</div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">CALL US</p>

                  <a
                    href="tel:9166567777"
                    className="block hover:text-[#C89B3C] transition-colors"
                  >
                    +91 91665 67777
                  </a>

                  <a
                    href="tel:9166567222"
                    className="block hover:text-[#C89B3C] transition-colors"
                  >
                    +91 91665 67222
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C89B3C] mt-1">✉️</div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">EMAIL</p>

                  <a
                    href="mailto:ranbanka165@gmail.com"
                    className="hover:text-[#C89B3C] transition-colors sm:text-base md:text-xs lg:text-base"
                  >
                    ranbanka165@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-[#C89B3C] mt-1">📍</div>

                <div>
                  <p className="text-gray-400 text-xs mb-1">LOCATION</p>

                  <p className="text-gray-400 leading-relaxed">
                    165 , Laxman Colony , Shyam Nagar , Sodala , Jaipur , 302013
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-gray-500 space-y-1">
              <p>Labour Licence: SCA/2018/14/145688</p>
              <p>PF No: RJ/RAJ/002942</p>
              <p>ESIC No: 15-000-4679-000-1018</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            {new Date().getFullYear()} Ranbanka Security & Allied Services. All
            Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0 text-[#C89B3C] font-medium">
            Ex-Servicemen Led • ISO Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
