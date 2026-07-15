import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function TopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 40,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: 40,
                        scale: 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-[#C89B3C] text-white shadow-[0_10px_30px_rgba(200,155,60,0.45)] flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                    <ChevronUp size={28} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}