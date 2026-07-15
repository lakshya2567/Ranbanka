// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth", 
//         });
//     }, [pathname]);

//     return null;
// };

// export default ScrollToTop;



import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        setBlur(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const timer = setTimeout(() => {
            setBlur(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div
            className={`fixed inset-0 pointer-events-none z-[9999] transition-all duration-700 ${blur
                    ? "backdrop-blur-xl bg-black/10 opacity-100"
                    : "backdrop-blur-0 bg-transparent opacity-0"
                }`}
        />
    );
};

export default ScrollToTop;