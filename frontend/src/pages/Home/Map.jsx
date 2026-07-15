import React from "react";
import { motion } from "framer-motion";

import { MapPin, Phone, Mail } from "lucide-react";

export default function MapContactSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#C89B3C]/5 to-white">
      <div className="max-w-7xl mx-auto px-6">
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* ================= MAP BOX ================= */}

          <div className="overflow-hidden rounded-[30px] bg-white border border-[#C89B3C]/10 shadow-lg h-[420px]">
            {/* Top */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Location
                </h3>

                <p className="text-sm text-gray-500">Jaipur, Rajasthan</p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                <MapPin size={24} />
              </div>
            </div>

            {/* Map */}
            {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.123456789!2d75.787123!3d26.912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU0JzQ0LjQiTiA3NcKwNDcnMTMuMiJF!5e0!3m2!1sen!2sin!4v1676961268712"
                            className="w-full h-[340px]"
                            allowFullScreen=""
                            loading="lazy"
                            title="Ranbanka Security Location"
                        ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.466333053564!2d75.75761167529396!3d26.888691476661588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e023d05e97%3A0x6380bea67c4a2bb9!2sRanbanka%20Security%20%26%20Allied%20Services%20%7C%20Security%20Guards%20%26%20Bouncers%20Services%20in%20Jaipur%20%2C%20Rajasthan.!5e0!3m2!1sen!2sin!4v1783146321393!5m2!1sen!2sin"
              className="w-full h-[340px]"
              allowFullScreen=""
              loading="lazy"
              title="Ranbanka Security Location"
            ></iframe>
          </div>

          {/* ================= CONTACT BOX ================= */}

          <div className="bg-white border border-[#C89B3C]/10 rounded-[30px] shadow-lg p-8  flex flex-col justify-between">
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-4 py-2 rounded-full text-sm font-semibold mb-5">
                <MapPin size={15} />
                Contact Details
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-4">
                Let’s Connect
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8">
                Professional security solutions for industries, businesses,
                events, and residential properties.
              </p>

              {/* Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>

                    <p className="text-gray-600 text-sm">
                      165 , Laxman Colony , Shyam Nagar , Sodala , Jaipur ,
                      302013
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                    <Phone size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>

                    <p className="text-gray-600 text-sm">+91 9166567777</p>
                    <p className="text-gray-600 text-sm">+91 9166567333</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C89B3C]/10 flex items-center justify-center text-[#C89B3C]">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>

                    <p className="text-gray-600 text-sm">
                      ranbanka165@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
