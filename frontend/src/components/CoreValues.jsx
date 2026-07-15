import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const values = [
  {
    title: "Discipline",
    description:
      "We uphold unwavering discipline in every operation, ensuring consistent and reliable security services.",
    img: "https://img.freepik.com/premium-photo/photo-security-officer-monitoring-multiple-surveillance-screens_1325814-11388.jpg?w=1380",
  },
  {
    title: "Integrity",
    description:
      "Our team values honesty and trustworthiness — guaranteeing client confidentiality and ethical conduct.",
    img: "https://images.unsplash.com/photo-1652739758426-56a564265f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SW50ZWdyaXR5JTIwc2VjdXJpdHklMjBwaWN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Alertness",
    description:
      "We maintain heightened vigilance and proactive threat detection to protect your premises effectively.",
    img: "https://media.istockphoto.com/id/590615122/photo/male-security-guard-standing-at-the-entrance.webp?a=1&b=1&s=612x612&w=0&k=20&c=KBSCpXjKEx7_RoX4xnSnvil3-cDx93Ht433TENwhdWg=",
  },
  {
    title: "Respect",
    description:
      "We respect every individual, property, and protocol, delivering service with dignity and professionalism.",
    img: "https://images.unsplash.com/photo-1715292060893-84a546c0e8fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFdlJTIwcmVzcGVjdCUyMGV2ZXJ5JTIwaW5kaXZpZHVhbCUyQyUyMHByb3BlcnR5JTJDJTIwYW5kJTIwcHJvdG9jb2wlMkMlMjBkZWxpdmVyaW5nJTIwc2VydmljZSUyMHdpdGglMjBkaWduaXR5JTIwYW5kJTIwcHJvZmVzc2lvbmFsaXNtfGVufDB8fDB8fHww",
  },
]

export default function CoreValues() {
  const [visibleCount, setVisibleCount] = useState(0)
  const sectionRef = useRef()

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden text-gray-900 min-h-screen"
    >
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full rotate-[-90deg] drop-shadow-lg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="url(#animatedGradient)"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="282.6"
              strokeDashoffset={282.6 * (1 - visibleCount / values.length)}
              animate={{ strokeDashoffset: 282.6 * (1 - visibleCount / values.length) }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="animatedGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f43f5e">
                  <animate attributeName="stop-color" values="#f43f5e;#3b82f6;#14b8a6;#f43f5e" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#3b82f6">
                  <animate attributeName="stop-color" values="#3b82f6;#14b8a6;#f43f5e;#3b82f6" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-[#C89B3C]">
              {Math.round((visibleCount / values.length) * 100)}%
            </span>
          </div>
        </div>
      </div>

     
      <div className="text-center max-w-3xl mx-auto mb-16 mt-24">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <p className="text-gray-600 text-lg">
          We are guided by principles that shape our work and define our commitment to your safety and trust.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto z-10 relative">
        {values.map((item, index) => (
          <ValueBlock
            key={index}
            index={index}
            title={item.title}
            desc={item.description}
            img={item.img}
            onVisible={() => {
              if (index + 1 > visibleCount) {
                setVisibleCount(index + 1)
              }
            }}
          />
        ))}
      </div>
    </section>
  )
}

function ValueBlock({ title, desc, img, onVisible, index }) {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true })

  useEffect(() => {
    if (inView) onVisible()
  }, [inView])

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <img
        src={img}
        alt={title}
        className="w-[120px] h-[120px] object-cover rounded-xl shadow-md"
      />
      <div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-md">{desc}</p>
      </div>
    </motion.div>
  )
}
