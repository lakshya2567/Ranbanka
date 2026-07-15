// // import { Link } from "react-router-dom";
// // import { faBars, faTimes, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { useState } from "react";
// // import RanbankaLogo from "../assets/RanbankaLogo.png";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function Navbar() {
// //   const [isMenuOpen, setisMenuOpen] = useState(false);

// //   const containerVariants = {
// //     hidden: { x: "100%", opacity: 0 },
// //     show: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //         duration: 0.5,
// //         ease: "easeOut",
// //         when: "beforeChildren",
// //         staggerChildren: 0.2,
// //       },
// //     },
// //     exit: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
// //   };

// //   return (
// //     <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
// //       {/* Logo */}
// //       <div className="flex items-center gap-3">
// //         <img
// //           src={RanbankaLogo}
// //           alt="RanbankaLogo"
// //           className="w-14 h-14 object-contain"
// //         />
// //         <Link to="/" className="flex flex-col leading-tight">
// //           <h1 className="text-lg md:text-xl font-bold">
// //             RANBANKA SECURITY &
// //           </h1>
// //           <span className="text-sm md:text-base font-bold">
// //             ALLIED SERVICES (Pvt Ltd)
// //           </span>
// //         </Link>
// //       </div>

// //       {/* Email & Phone (desktop only) */}
// //       <div className="hidden md:flex items-center gap-6 bg-gray-100 text-gray-900 px-5 py-2 rounded-md border border-gray-300 shadow">
// //         <div className="flex items-center gap-2">
// //           <FontAwesomeIcon
// //             icon={faEnvelope}
// //             className="text-gray-700 hover:text-gray-600"
// //           />
// //           <span className="font-bold text-[15px]">Email:</span>
// //           <p className="hover:text-blue-500 font-medium text-gray-600">
// //             ranbanka165@gmail.com
// //           </p>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <FontAwesomeIcon
// //             icon={faPhone}
// //             className="text-red-600 hover:text-red-500"
// //           />
// //           <span className="font-bold text-[15px]">Phone:</span>
// //           <p className="hover:text-blue-500 font-medium text-gray-600">
// //             +91 9166567222
// //           </p>
// //         </div>
// //       </div>

// //       {/* Desktop Menu */}
// //       <div className="hidden md:flex space-x-6 font-medium">
// //         <Link to="/" className="hover:text-yellow-300">Home</Link>
// //         <Link to="/about" className="hover:text-yellow-300">About</Link>
// //         <Link to="/services" className="hover:text-yellow-300">Services</Link>
// //         <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
// //         <Link to="/client" className="hover:text-yellow-300">Client</Link>
// //       </div>

// //       {/* Mobile Toggle Button */}
// //       <button
// //         className="flex md:hidden"
// //         onClick={() => setisMenuOpen(!isMenuOpen)}
// //       >
// //         <FontAwesomeIcon
// //           icon={isMenuOpen ? faTimes : faBars}
// //           className="text-2xl transform transition-transform duration-300 hover:rotate-180"
// //         />
// //       </button>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {isMenuOpen && (
// //           <motion.div
// //             className="absolute z-50 md:hidden top-[70px] left-0 w-full bg-gray-800 text-white py-6 flex flex-col items-center gap-6 font-semibold shadow-lg"
// //             initial={{ x: "100%", opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             exit={{ x: "100%", opacity: 0 }}
// //             transition={{ duration: 0.5, ease: "easeInOut" }}
// //           >
// //             <motion.div
// //               className="flex flex-col items-center gap-6 w-full text-lg font-semibold"
// //               variants={containerVariants}
// //               initial="hidden"
// //               animate="show"
// //               exit="exit"
// //             >
// //               <motion.div variants={itemVariants}>
// //                 <Link to="/" className="hover:text-yellow-300" onClick={() => setisMenuOpen(false)}>Home</Link>
// //               </motion.div>
// //               <motion.div variants={itemVariants}>
// //                 <Link to="/about" className="hover:text-yellow-300" onClick={() => setisMenuOpen(false)}>About</Link>
// //               </motion.div>
// //               <motion.div variants={itemVariants}>
// //                 <Link to="/services" className="hover:text-yellow-300" onClick={() => setisMenuOpen(false)}>Services</Link>
// //               </motion.div>
// //               <motion.div variants={itemVariants}>
// //                 <Link to="/contact" className="hover:text-yellow-300" onClick={() => setisMenuOpen(false)}>Contact</Link>
// //               </motion.div>
// //               <motion.div variants={itemVariants}>
// //                 <Link to="/client" className="hover:text-yellow-300" onClick={() => setisMenuOpen(false)}>Client</Link>
// //               </motion.div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }



import { Link, useLocation } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RanbankaLogo from "../assets/RanbankaLogo.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/client", label: "Clients" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white shadow-lg border-b border-red-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={RanbankaLogo}
            alt="Ranbanka Security"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div className="flex flex-col leading-tight">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
              RANBANKA
            </h1>

            <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#C89B3C] tracking-wider">
              SECURITY & ALLIED SERVICES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative py-2 px-2 xl:px-3 rounded-xl transition-colors hover:text-[#C89B3C] ${
                isActive(link.to)
                  ? "text-[#C89B3C] font-semibold"
                  : "text-white"
              }`}
            >
              {link.label}

              {isActive(link.to) && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#C89B3C] rounded-full"
                />
              )}
            </Link>
          ))}

          <Link
            to="/contact"
            className={`bg-[#C89B3C] text-black px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isActive("/contact")
                ? "ring-2 ring-[#C89B3C] ring-offset-2 ring-offset-gray-950"
                : ""
            }`}
          >
            Contact Now
          </Link>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          className="lg:hidden text-2xl p-2 hover:text-[#C89B3C] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-gray-950 border-t border-gray-800"
          >
            <div className="flex flex-col px-5 py-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 transition-all ${
                    isActive(link.to)
                      ? "bg-[#C89B3C] text-black font-semibold"
                      : "hover:bg-gray-900 hover:text-[#C89B3C]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 bg-[#C89B3C] text-black text-center font-semibold py-3 rounded-xl hover:scale-[1.02] transition-transform"
              >
                Contact Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}