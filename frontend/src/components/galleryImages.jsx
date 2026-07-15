// import React from "react";
// import { ArrowRight } from "lucide-react";
// import img1 from "../assets/1.jpeg"
// // import img2 from "../assets/2.jpeg"
// import img3 from "../assets/3.jpeg"
// import img4 from "../assets/4.jpeg"
// import img5 from "../assets/5.jpeg"
// import img6 from "../assets/6.jpeg"
// import img7 from "../assets/7.jpeg"
// import img8 from "../assets/8.jpeg"
// import img9 from "../assets/9.jpeg"
// import { Link } from "react-router-dom";

// const galleryImages = [
//     img1,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
// ]

// export default function GallerySection() {
//     return (
//         <section className="w-full bg-white py-16 px-4 md:px-8">
//             <div className="max-w-7xl mx-auto">

//                 {/* Header */}
//                 <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
//                     <div>
//                         <p className="text-red-600 uppercase tracking-[3px] font-semibold mb-2">
//                             Our Gallery
//                         </p>

//                         <h2 className="text-4xl md:text-5xl font-black text-black">
//                             Security <span className="text-[#c89b3c]">Moments</span>
//                         </h2>
//                     </div>

//                     <Link
//                         href="/gallery"
//                         className="group flex items-center gap-3 bg-black hover:bg-[#c89b3c] text-white px-7 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg">
//                         View All
//                         <ArrowRight
//                             size={18}
//                             className="group-hover:translate-x-1 transition"
//                         />
//                     </Link>
//                 </div>

//                 {/* Gallery Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
//                     {galleryImages.map((img, index) => (
//                         <div
//                             key={index}
//                             className="max-w-[300px] max-h-[300px] sm:min-h-[200px] group relative overflow-hidden rounded shadow-md "
//                         >
//                             <img
//                                 src={img}
//                                 alt={`gallery-${index}`}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             />

//                             {/* Overlay */}
//                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>

//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// }



import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import img1 from "../assets/1.jpeg";
import img3 from "../assets/3.jpeg";
// import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
// import img6 from "../assets/6.jpeg";
// import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";
import img9 from "../assets/9.jpeg";

import { Link } from "react-router-dom";

const galleryImages = [
    img1,
    // img3,
    // img4,
    img5,
    // img6,
    // img7,
    img8,
    img9,
];

export default function GallerySection() {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">


                <motion.div
                    initial={{ opacity: 0, y: 70, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between flex-wrap gap-4 mb-12"
                >
                    <div>
                        <p className="text-red-600 uppercase tracking-[3px] font-semibold mb-2">
                            Our Gallery
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-black">
                            Security <span className="text-[#c89b3c]">Moments</span>
                        </h2>
                    </div>

                    <Link
                        to="/gallery"
                        className="group flex items-center gap-3 bg-black hover:bg-[#c89b3c] text-white px-7 py-4 rounded-2xl transition-all duration-300 font-semibold shadow-lg"
                    >
                        View All

                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition"
                        />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
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
                                duration: 0.8,
                                delay: index * 0.12,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 },
                            }}
                            className="max-w-[300px] max-h-[300px] sm:min-h-[200px] group relative overflow-hidden rounded-xl shadow-md"
                        >


                            <img
                                src={img}
                                alt={`gallery-${index}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500"></div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}