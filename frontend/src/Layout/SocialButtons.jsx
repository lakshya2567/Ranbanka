import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialButtons() {
    return (
        <div className="fixed bottom-25 right-6 z-50 flex flex-col gap-4">

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/+919166567777"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.12,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-14 h-14 rounded-2xl bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] flex items-center justify-center cursor-pointer"
            >
                <FaWhatsapp size={28} />
            </motion.a>

            {/* Instagram Button */}
            <motion.a
                href="https://www.instagram.com/ranbanka1652026/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.12,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-[0_10px_30px_rgba(225,48,108,0.45)] flex items-center justify-center cursor-pointer"
            >
                <FaInstagram size={28} />
            </motion.a>

        </div>
    );
}