// import React from 'react'
// import { motion, useScroll } from "framer-motion";

// export default function ScrollLine() {
//     const { scrollYProgress } = useScroll()
//     return (
//         <>
//             <motion.div
//                 style={{
//                     scaleX: scrollYProgress,
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "5px",
//                     transformOrigin: "0%",
//                     zIndex: 9999,

//                     // Modern Gradient
//                     background: "linear-gradient(90deg, #ff7e29, #ff4d00)",

//                     // Glow Effect
//                     boxShadow: "0 0 12px rgba(255, 105, 0, 0.8)",

//                     // Smooth Animation
//                     transition: "scaleX 0.15s ease-out",
//                 }}
//             >
//             </motion.div>
//         </>
//     )
// }




import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollLine() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "4px",
                transformOrigin: "0%",
                zIndex: 9999,

                // Elegant Gold Gradient
                background:
                    "linear-gradient(90deg, #7a5a16 0%, #C89B3C 40%, #f7d774 60%, #C89B3C 100%)",

                // Smooth Glow
                boxShadow:
                    "0 0 8px rgba(200,155,60,0.6), 0 0 16px rgba(200,155,60,0.35)",

                borderRadius: "20px",
            }}
            animate={{
                opacity: [0.8, 1, 0.8],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}