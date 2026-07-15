// import React from "react";
// import { motion } from "framer-motion";

// import {
//     ArrowRight,
//     CalendarDays,
//     Clock3,
//     ShieldCheck,
//     Search,
// } from "lucide-react";

// import blog1 from "../../assets/Industrialsecurity.jpg";
// import blog2 from "../../assets/14.jpeg";
// import blog3 from "../../assets/20.jpeg";
// import blog4 from "../../assets/24.jpeg";

// export default function BlogPage() {

//     const blogs = [
//         {
//             id: 1,
//             image: blog1,
//             category: "Industrial Security",
//             date: "15 July 2026",
//             read: "5 Min Read",
//             title:
//                 "Why Industrial Security Is Essential For Modern Businesses",
//             description:
//                 "Professional industrial security services help businesses prevent theft, ensure safety, and maintain smooth operations.",
//         },

//         {
//             id: 2,
//             image: blog2,
//             category: "CCTV Surveillance",
//             date: "20 July 2026",
//             read: "4 Min Read",
//             title:
//                 "Benefits Of 24×7 CCTV Monitoring For Offices & Industries",
//             description:
//                 "Modern CCTV surveillance systems improve monitoring, increase security, and provide real-time protection.",
//         },

//         {
//             id: 3,
//             image: blog3,
//             category: "Event Security",
//             date: "28 July 2026",
//             read: "6 Min Read",
//             title:
//                 "Professional Event Security Tips For Large Gatherings",
//             description:
//                 "Learn how trained security personnel ensure crowd management and event safety during public gatherings.",
//         },

//         {
//             id: 4,
//             image: blog4,
//             category: "Corporate Security",
//             date: "02 August 2026",
//             read: "5 Min Read",
//             title:
//                 "How Security Guards Improve Workplace Safety & Discipline",
//             description:
//                 "Professional guards help create a secure and disciplined work environment for employees and visitors.",
//         },
//     ];

//     return (
//         <>
//             {/* ================= HERO SECTION ================= */}

//             <section className="relative h-[65vh] min-h-[550px] overflow-hidden">

//                 {/* Background */}
//                 <img
//                     src={blog1}
//                     alt="Blog Banner"
//                     className="w-full h-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/75"></div>

//                 {/* Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#C89B3C]/20"></div>

//                 {/* Content */}
//                 <div className="absolute inset-0 flex items-center">

//                     <div className="max-w-7xl mx-auto w-full px-6">

//                         <motion.div
//                             initial={{
//                                 opacity: 0,
//                                 y: 80,
//                                 filter: "blur(12px)",
//                             }}
//                             whileInView={{
//                                 opacity: 1,
//                                 y: 0,
//                                 filter: "blur(0px)",
//                             }}
//                             transition={{ duration: 1 }}
//                             viewport={{ once: true }}
//                             className="max-w-4xl"
//                         >

//                             {/* Tag */}
//                             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-sm text-white font-medium mb-7">

//                                 <ShieldCheck
//                                     size={16}
//                                     className="text-[#C89B3C]"
//                                 />

//                                 Professional Security Insights
//                             </div>

//                             {/* Heading */}
//                             <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">

//                                 Security
//                                 <span className="text-[#C89B3C]">
//                                     {" "}Blog
//                                 </span>
//                             </h1>

//                             {/* Text */}
//                             <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl">

//                                 Latest security industry updates, surveillance
//                                 solutions, professional protection strategies,
//                                 and expert safety insights.
//                             </p>

//                         </motion.div>

//                     </div>
//                 </div>
//             </section>

//             {/* ================= BLOG SECTION ================= */}

//             <section className="relative py-24 bg-[#f8f8f8] overflow-hidden">

//                 <div className="max-w-7xl mx-auto px-6">

//                     {/* Top Section */}
//                     <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16">

//                         <div>

//                             <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">

//                                 Latest
//                                 <span className="text-[#C89B3C]">
//                                     {" "}Articles
//                                 </span>
//                             </h2>

//                             <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">

//                                 Stay updated with professional security trends,
//                                 industrial protection strategies, and surveillance
//                                 technology insights.
//                             </p>

//                         </div>

//                         {/* Search */}
//                         <div className="relative w-full lg:w-[350px]">

//                             <input
//                                 type="text"
//                                 placeholder="Search articles..."
//                                 className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 pl-14 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/20 focus:border-[#C89B3C]"
//                             />

//                             <Search
//                                 size={20}
//                                 className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C89B3C]"
//                             />
//                         </div>

//                     </div>

//                     {/* Blog Layout */}
//                     <div className="grid lg:grid-cols-2 gap-8">

//                         {blogs.map((blog, index) => (
//                             <motion.div
//                                 key={blog.id}
//                                 initial={{
//                                     opacity: 0,
//                                     y: 80,
//                                     filter: "blur(10px)",
//                                 }}
//                                 whileInView={{
//                                     opacity: 1,
//                                     y: 0,
//                                     filter: "blur(0px)",
//                                 }}
//                                 transition={{
//                                     duration: 0.8,
//                                     delay: index * 0.08,
//                                 }}
//                                 viewport={{ once: true }}
//                                 whileHover={{
//                                     y: -6,
//                                 }}
//                                 className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-md hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
//                             >

//                                 {/* Image */}
//                                 <div className="relative overflow-hidden h-[320px]">

//                                     <img
//                                         src={blog.image}
//                                         alt={blog.title}
//                                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                                     />

//                                     {/* Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

//                                     {/* Category */}
//                                     <div className="absolute top-5 left-5 bg-[#C89B3C] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">

//                                         {blog.category}
//                                     </div>

//                                 </div>

//                                 {/* Content */}
//                                 <div className="p-8">

//                                     {/* Meta */}
//                                     <div className="flex items-center gap-6 text-sm text-gray-500 mb-5">

//                                         <div className="flex items-center gap-2">

//                                             <CalendarDays size={16} />

//                                             {blog.date}
//                                         </div>

//                                         <div className="flex items-center gap-2">

//                                             <Clock3 size={16} />

//                                             {blog.read}
//                                         </div>

//                                     </div>

//                                     {/* Title */}
//                                     <h3 className="text-3xl font-black text-gray-900 leading-tight mb-5 group-hover:text-[#C89B3C] transition-all duration-300">

//                                         {blog.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className="text-gray-600 leading-relaxed text-lg mb-8">

//                                         {blog.description}
//                                     </p>

//                                     {/* Button */}
//                                     <button className="group/btn inline-flex items-center gap-3 text-[#C89B3C] font-bold text-lg">

//                                         Read Full Article

//                                         <ArrowRight
//                                             size={20}
//                                             className="group-hover/btn:translate-x-2 transition-all duration-300"
//                                         />
//                                     </button>

//                                 </div>

//                             </motion.div>
//                         ))}

//                     </div>
//                 </div>
//             </section>

//             {/* ================= CTA ================= */}

//             <section className="relative py-24 bg-black overflow-hidden">

//                 {/* Blur */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#C89B3C]/20 blur-[160px] rounded-full"></div>

//                 <div className="relative max-w-5xl mx-auto px-6 text-center">

//                     <motion.div
//                         initial={{
//                             opacity: 0,
//                             y: 60,
//                             filter: "blur(10px)",
//                         }}
//                         whileInView={{
//                             opacity: 1,
//                             y: 0,
//                             filter: "blur(0px)",
//                         }}
//                         transition={{ duration: 1 }}
//                         viewport={{ once: true }}
//                     >

//                         <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">

//                             Need Professional
//                             <br />

//                             <span className="text-[#C89B3C]">
//                                 Security Services?
//                             </span>
//                         </h2>

//                         <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">

//                             Connect with our experienced team for trusted
//                             industrial, corporate, and event security solutions.
//                         </p>

//                         <button className="bg-[#C89B3C] hover:bg-[#b68a31] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-[0_10px_40px_rgba(200,155,60,0.35)]">

//                             Contact Our Team
//                         </button>

//                     </motion.div>
//                 </div>
//             </section>
//         </>
//     );
// }




import React from "react";
import { motion } from "framer-motion";

import {
    ArrowRight,
    CalendarDays,
    Clock3,
    ShieldCheck,
} from "lucide-react";

import Image from "../../assets/Blog_Banner.jpeg";
import mobileimg from "../../assets/BlogMobile_Banner.jpeg";

import blog1 from "../../assets/Industrialsecurity.jpg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";
import img8 from "../../assets/8.jpeg";
import blog2 from "../../assets/14.jpeg";
import blog3 from "../../assets/20.jpeg";
import blog4 from "../../assets/24.jpeg";
import blog5 from "../../assets/18.jpeg";
import blog6 from "../../assets/22.jpeg";

export default function BlogPage() {

    const blogs = [
        {
            id: 1,
            image: blog1,
            category: "Industrial Security",
            date: "15 July 2026",
            read: "5 Min",
            title:
                "Why Industrial Security Is Essential For Modern Businesses",
        },

        {
            id: 2,
            image: blog2,
            category: "CCTV Surveillance",
            date: "20 July 2026",
            read: "4 Min",
            title:
                "Benefits Of 24×7 CCTV Monitoring For Offices & Industries",
        },

        {
            id: 3,
            image: blog3,
            category: "Event Security",
            date: "28 July 2026",
            read: "6 Min",
            title:
                "Professional Event Security Tips For Large Gatherings",
        },

        {
            id: 4,
            image: blog4,
            category: "Corporate Security",
            date: "02 August 2026",
            read: "5 Min",
            title:
                "How Security Guards Improve Workplace Safety",
        },

        {
            id: 5,
            image: blog5,
            category: "Facility Management",
            date: "10 August 2026",
            read: "4 Min",
            title:
                "Complete Facility Management Solutions For Businesses",
        },

        {
            id: 6,
            image: blog6,
            category: "Security Services",
            date: "14 August 2026",
            read: "5 Min",
            title:
                "Choosing The Right Security Agency For Your Business",
        },

        // ================= NEW BLOGS =================

        {
            id: 7,
            image: img3,
            category: "Security Training",
            date: "18 August 2026",
            read: "4 Min",
            title:
                "Professional Security Guard Training Standards In India",
        },

        {
            id: 8,
            image: img4,
            category: "Industrial Protection",
            date: "22 August 2026",
            read: "5 Min",
            title:
                "Essential Safety Measures For Industrial Premises",
        },

        {
            id: 9,
            image: img5,
            category: "Event Management",
            date: "25 August 2026",
            read: "4 Min",
            title:
                "How Event Security Teams Handle Large Public Gatherings",
        },

        {
            id: 10,
            image: img6,
            category: "Corporate Security",
            date: "28 August 2026",
            read: "6 Min",
            title:
                "Modern Corporate Security Solutions For Offices",
        },

        {
            id: 11,
            image: img7,
            category: "Security Monitoring",
            date: "02 September 2026",
            read: "5 Min",
            title:
                "24×7 Surveillance Monitoring For Better Protection",
        },

        {
            id: 12,
            image: img8,
            category: "Facility Security",
            date: "05 September 2026",
            read: "4 Min",
            title:
                "Why Every Business Needs Professional Security Services",
        },
    ];
    return (
        <>

            <section className="relative w-full h-[90vh] min-h-[700px]  overflow-hidden">

              
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

                
                <div className="absolute inset-0 bg-black/10"></div>

               
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#C89B3C]/20"></div>

               
                <div className="absolute inset-0 flex items-center">

                    <div className="max-w-7xl mx-auto px-6 w-full">

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
                            transition={{ duration: 0.9 }}
                            viewport={{ once: true }}
                            className="max-w-3xl"
                        >

                          
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-sm text-white font-medium mb-6">

                                <ShieldCheck
                                    size={16}
                                    className="text-[#C89B3C]"
                                />

                                Security Industry Insights
                            </div>

                         
                            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-5">

                                Security Blog
                            </h1>

                           
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">

                                Latest updates, professional security tips,
                                surveillance solutions, and industry insights.
                            </p>

                        </motion.div>

                    </div>
                </div>
            </section>


            <section className="py-20 bg-[#fafafa]">

                <div className="max-w-7xl mx-auto px-6">

                   
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                            filter: "blur(10px)",
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-14"
                    >

                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">

                            Latest
                            <span className="text-[#C89B3C]">
                                {" "}Articles
                            </span>
                        </h2>

                        {/* <div className="w-24 h-1 rounded-full bg-[#C89B3C]"></div> */}

                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{
                                    opacity: 0,
                                    y: 70,
                                    filter: "blur(10px)",
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -6,
                                }}
                                className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-md hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
                            >

                               
                                <div className="relative h-[230px] overflow-hidden">

                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                   
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                                    
                                    <div className="absolute top-4 left-4 bg-[#C89B3C] text-white text-xs font-semibold px-3 py-2 rounded-full">

                                        {blog.category}
                                    </div>

                                </div>

                                
                                <div className="p-6">

                                   
                                    <div className="flex items-center gap-5 text-sm text-gray-500 mb-4">

                                        <div className="flex items-center gap-2">

                                            <CalendarDays size={15} />

                                            {blog.date}
                                        </div>

                                        <div className="flex items-center gap-2">

                                            <Clock3 size={15} />

                                            {blog.read}
                                        </div>

                                    </div>

                                    
                                    <h3 className="text-2xl font-black text-gray-900 leading-snug mb-5 group-hover:text-[#C89B3C] transition-all duration-300">

                                        {blog.title}
                                    </h3>

                               
                                    <button className="group/btn inline-flex items-center gap-3 text-[#C89B3C] font-bold">

                                        Read More

                                        <ArrowRight
                                            size={18}
                                            className="group-hover/btn:translate-x-2 transition-all duration-300"
                                        />
                                    </button>

                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}