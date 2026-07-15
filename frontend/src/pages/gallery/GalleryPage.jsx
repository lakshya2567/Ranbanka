import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
import Image from "../../assets/Gallery_Banner.jpeg";
import mobileimg from "../../assets/GalleryMobile_Banner.jpeg";

// Vite environment variables
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const API_URL = `${API_BASE}/api/gallery`;
const IMAGE_BASE = API_BASE;

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(API_URL);
        setGalleryItems(res.data.data);
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  return (
    <>
      {/* Banner Section - Same as before */}
      <section className="relative overflow-hidden h-[85vh] min-h-[650px] text-white">
        <div className="absolute inset-0">
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
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-[#C89B3C]/20"></div>
        </div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#C89B3C]/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 blur-[120px] rounded-full"></div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl text-center"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-7 py-3 rounded-full text-white text-sm md:text-base font-semibold mb-8">
              <FaCamera size={18} className="text-[#C89B3C]" />
              Security Operations Gallery
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8">
              Moments Of <span className="text-[#C89B3C]">Excellence</span>
              <br />
              In Security Services
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Explore our professional security operations, industrial
              protection, event management, surveillance systems, and training
              activities across Rajasthan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-[#C89B3C]/5 to-white overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#C89B3C]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#C89B3C]/10 blur-[120px] rounded-full"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-[#C89B3C]/10 text-[#C89B3C] px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <FaCamera size={15} />
              Photo Collection
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-5">
              Our Professional <span className="text-[#C89B3C]">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visual showcase of our dedicated security team, operational
              excellence, and successful protection services delivered across
              various industries.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-16 h-16 border-4 border-[#C89B3C] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 80, scale: 0.95, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[28px] break-inside-avoid shadow-xl cursor-pointer"
                >
                  <img
                    src={`${IMAGE_BASE}/${item.image}`}
                    alt={item.title}
                    className="w-full object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[28px]"></div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Section - Same as before */}
      <section className="relative py-24 bg-black overflow-hidden mb-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89B3C]/20 blur-[180px] rounded-full"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Trusted Security
              <br />
              <span className="text-[#C89B3C]">Across Rajasthan</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Delivering professional protection services with dedication,
              discipline, and modern security solutions for industries, events,
              and businesses.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}