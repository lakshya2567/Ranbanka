import React from "react";
import { motion } from "framer-motion";
// import logo from "../assets/RanbankaLogo.png"
import logo from "../assets/RanbankaLogo.png"


const HowWeAreDifferent = () => {
  const differences = [
    {
      number: "01",
      title: "We Value Our Guards",
      desc: "We treat our security personnel as our greatest asset. We ensure their loyalty and dedication by providing long-term employment, respect, and support until retirement at 58 years.",
    },
    {
      number: "02",
      title: "Transparency & Integrity",
      desc: "We maintain accurate, fully transparent records of all financial transactions, government dues, wages, and employee benefits.",
    },
    {
      number: "03",
      title: "Employee Welfare First",
      desc: "All our guards are insured, have individual PF accounts, and ESIC cards — ensuring their social security and well-being.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Are <span className="text-[#C89B3C]">Different</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets Ranbanka Security apart from the rest
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
         
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              
              <img
                src={logo}
                alt="Ranbanka Security Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, }}
            className="space-y-8"
          >
            {differences.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 bg-white p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#C89B3C] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.number}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

           
            <div className="pt-6">
              <p className="text-lg font-medium text-gray-700 bg-yellow-50 border-l-4 border-[#C89B3C] pl-6 py-2 italic">
                "We don't just provide security guards — we build a responsible
                and loyal security force."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowWeAreDifferent;