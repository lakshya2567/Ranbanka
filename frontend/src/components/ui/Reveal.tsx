// import { useEffect, useRef, useState } from 'react';

// type RevealProps = {
//     children: React.ReactNode;
//     direction?: 'up' | 'down' | 'left' | 'right';
//     delay?: number;
// };

// export default function Reveal({
//     children,
//     direction = 'up',
//     delay = 0,
// }: RevealProps) {
//     const ref = useRef<HTMLDivElement | null>(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.15 }
//         );

//         if (ref.current) observer.observe(ref.current);

//         return () => observer.disconnect();
//     }, []);

//     const directionClasses = {
//         up: 'translate-y-12',
//         down: '-translate-y-12',
//         left: 'translate-x-12',
//         right: '-translate-x-12',
//     };

//     return (
//         <div
//             ref={ref}
//             style={{ transitionDelay: `${delay}ms` }}
//             className={`
//         transition-all duration-700 ease-out
//         ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[direction]}`}
//       `}
//         >
//             {children}
//         </div>
//     );
// }

// import { useEffect, useRef, useState } from 'react';

// type RevealProps = {
//     children: React.ReactNode;
//     direction?: 'up' | 'down' | 'left' | 'right';
//     delay?: number;
//     className?: string; // ✅ ADD THIS
//     bounce?: boolean;
// };

// export default function Reveal({
//     children,
//     direction = 'up',
//     delay = 0,
//     bounce = true,
// }: RevealProps) {
//     const ref = useRef<HTMLDivElement | null>(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setVisible(true);
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.15 }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     const directionClasses = {
//         up: 'translate-y-12',
//         down: '-translate-y-12',
//         left: 'translate-x-12',
//         right: '-translate-x-12',
//     };

//     return (
//         <div
//             ref={ref}
//             style={{ animationDelay: `${delay}ms` }}
//             className={`
//         ${visible
//                     ? bounce && direction === 'up'
//                         ? 'animate-bounce-in-up'
//                         : 'transition-all duration-700 ease-out opacity-100 translate-x-0 translate-y-0'
//                     : `opacity-0 ${directionClasses[direction]}`
//                 }
//       `}
//         >
//             {children}
//         </div>
//     );
// }

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    className?: string;
    bounce?: boolean;
};

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className = "",
    bounce = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // ✅ FIX
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const directionClasses = {
        up: "translate-y-12",
        down: "-translate-y-12",
        left: "translate-x-12",
        right: "-translate-x-12",
    };

    return (
        <div
            ref={ref}
            style={{ animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` }}
            className={`
                ${className}
                ${visible
                    ? bounce && direction === "up"
                        ? "animate-reveal-bounce"
                        : "opacity-100 translate-x-0 translate-y-0 transition-all duration-700 ease-out"
                    : `opacity-0 ${directionClasses[direction]}`
                }
            `}
        >
            {children}
        </div>
    );
}