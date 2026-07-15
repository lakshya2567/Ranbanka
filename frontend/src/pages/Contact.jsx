// // import React, { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     subject: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.id]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Add your form submission logic here (e.g., emailjs, backend API)
// //     alert(
// //       "Thank you! Your message has been received. We will contact you soon.",
// //     );
// //     setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
// //   };

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-6">
// //         {/* Header */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
// //             Get In Touch
// //           </h2>
// //           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
// //             We're here to help. Reach out to us for any security-related
// //             inquiries or service requirements.
// //           </p>
// //           <div className="w-28 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
// //         </div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
// //           {/* Left: Contact Information */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-10 md:p-12 flex flex-col"
// //           >
// //             <h3 className="text-3xl font-semibold text-gray-900 mb-10">
// //               Contact Information
// //             </h3>

// //             <div className="space-y-10 flex-1">
// //               {/* Address */}
// //               <div className="flex items-start gap-5">
// //                 <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
// //                   📍
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-xl text-gray-900 mb-1">
// //                     Our Office
// //                   </h4>
// //                   <p className="text-gray-700 leading-relaxed">
// //                     Ranbanka Security & Allied Services
// //                     <br />
// //                     Jaipur, Rajasthan
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Phone */}
// //               <div className="flex items-start gap-5">
// //                 <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
// //                   📞
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-xl text-gray-900 mb-1">
// //                     Call Us
// //                   </h4>
// //                   <p className="text-gray-700 text-lg">91656 77777</p>
// //                   <p className="text-gray-700 text-lg">91656 72222</p>
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="flex items-start gap-5">
// //                 <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
// //                   ✉️
// //                 </div>
// //                 <div>
// //                   <h4 className="font-semibold text-xl text-gray-900 mb-1">
// //                     Email Us
// //                   </h4>
// //                   <p className="text-red-600 font-medium">
// //                     ranbanka165@gmail.com
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Map */}
// //             <div className="mt-12">
// //               <div className="text-sm font-medium text-gray-500 mb-3">
// //                 Our Location
// //               </div>
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.123456789!2d75.787123!3d26.912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU0JzQ0LjQiTiA3NcKwNDcnMTMuMiJF!5e0!3m2!1sen!2sin!4v1676961268712"
// //                 className="w-full h-80 rounded-2xl border border-red-100"
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 title="Ranbanka Security Location"
// //               ></iframe>
// //             </div>
// //           </motion.div>

// //           {/* Right: Contact Form */}
// //           <motion.form
// //             onSubmit={handleSubmit}
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="bg-white border border-red-100 rounded-3xl p-10 md:p-12 shadow-xl"
// //           >
// //             <h3 className="text-3xl font-semibold text-gray-900 mb-8">
// //               Send us a Message
// //             </h3>

// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   Your Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   placeholder="Enter your full name"
// //                   className="w-full px-5 py-4 border border-red-100 rounded-2xl focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
// //                   required
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   Phone Number
// //                 </label>
// //                 <input
// //                   type="tel"
// //                   id="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   placeholder="91656 77777"
// //                   className="w-full px-5 py-4 border border-red-100 rounded-2xl focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
// //                   required
// //                 />
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 Your Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 placeholder="your@email.com"
// //                 className="w-full px-5 py-4 border border-red-100 rounded-2xl focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
// //                 required
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 Subject
// //               </label>
// //               <input
// //                 type="text"
// //                 id="subject"
// //                 value={formData.subject}
// //                 onChange={handleChange}
// //                 placeholder="How can we help you?"
// //                 className="w-full px-5 py-4 border border-red-100 rounded-2xl focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition"
// //                 required
// //               />
// //             </div>

// //             <div className="mb-8">
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 rows="6"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 placeholder="Write your message here..."
// //                 className="w-full px-5 py-4 border border-red-100 rounded-3xl focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100 transition resize-y"
// //                 required
// //               ></textarea>
// //             </div>

// //             <button
// //               type="submit"
// //               className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl"
// //             >
// //               Send Message
// //               <span>→</span>
// //             </button>
// //           </motion.form>
// //         </div>

// //         {/* Trust Line */}
// //         <div className="mt-16 flex justify-center">
// //           <div className="bg-red-600 text-white text-sm font-semibold px-10 py-4 rounded-full flex items-center gap-3 shadow-lg">
// //             <span>🛡️</span>
// //             SECURE • RESPONSIVE • PROFESSIONAL
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Send, ShieldCheck } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert(
//       "Thank you! Your message has been received. We will contact you soon.",
//     );

//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-[#C89B3C] text-white px-5 py-2 rounded-full text-sm font-semibold mb-5">
//             <ShieldCheck size={16} />
//             CONTACT US
//           </div>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
//             Get In Touch
//           </h2>

//           <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             We're here to help. Reach out to us for any security-related
//             inquiries or service requirements.
//           </p>

//           <div className="w-28 h-1 bg-[#C89B3C] mx-auto mt-6 rounded-full"></div>
//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-10 items-stretch">
//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-xl"
//           >
//             <h3 className="text-3xl font-bold text-gray-900 mb-10">
//               Contact Information
//             </h3>

//             <div className="space-y-8">
//               {/* Address */}
//               <div className="flex items-start gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
//                   <MapPin size={26} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-1">
//                     Our Office
//                   </h4>

//                   <p className="text-gray-600 leading-relaxed">
//                     Ranbanka Security & Allied Services
//                     <br />
//                     165 , laxman Colony , shyam Nagar , Sodala , Jaipur , 302013
//                   </p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
//                   <Phone size={24} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-1">
//                     Call Us
//                   </h4>

//                   <p className="text-gray-600">+91 91656 77777</p>

//                   <p className="text-gray-600">+91 91656 72222</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-5">
//                 <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
//                   <Mail size={24} />
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-1">
//                     Email Us
//                   </h4>

//                   <p className="text-[#C89B3C] font-medium break-all">
//                     ranbanka165@gmail.com
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="mt-10 overflow-hidden rounded-3xl border border-gray-100">
//               <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.466333053564!2d75.75761167529396!3d26.888691476661588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e023d05e97%3A0x6380bea67c4a2bb9!2sRanbanka%20Security%20%26%20Allied%20Services%20%7C%20Security%20Guards%20%26%20Bouncers%20Services%20in%20Jaipur%20%2C%20Rajasthan.!5e0!3m2!1sen!2sin!4v1783146321393!5m2!1sen!2sin"
//               className="w-full h-[340px]"
//               allowFullScreen=""
//               loading="lazy"
//               title="Ranbanka Security Location"
//             ></iframe>
//             </div>
//           </motion.div>

//           {/* Right Side Form */}
//           <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-xl"
//           >
//             <h3 className="text-3xl font-bold text-gray-900 mb-8">
//               Send a Message
//             </h3>

//             {/* Inputs */}
//             <div className="grid md:grid-cols-2 gap-5 mb-5">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   id="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Phone Number
//                 </label>

//                 <input
//                   type="tel"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 9876543210"
//                   className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="mb-5">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your@email.com"
//                 className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
//                 required
//               />
//             </div>

//             {/* Subject */}
//             <div className="mb-5">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Subject
//               </label>

//               <input
//                 type="text"
//                 id="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="How can we help?"
//                 className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
//                 required
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-8">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Message
//               </label>

//               <textarea
//                 id="message"
//                 rows="6"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message..."
//                 className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all resize-none"
//                 required
//               ></textarea>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#C89B3C] hover:opacity-95 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl cursor-pointer"
//             >
//               Send Message
//               <Send size={20} />
//             </button>
//           </motion.form>
//         </div>

//         {/* Bottom Badge */}
//         <div className="mt-14 flex justify-center">
//           <div className="bg-[#C89B3C] text-white text-sm font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg">
//             <span>🛡️</span>
//             SECURE • RESPONSIVE • PROFESSIONAL
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ShieldCheck, Loader2 } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg({ type: "", text: "" });
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact/createContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        setStatusMsg({
          type: "error",
          text: data.message || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatusMsg({
        type: "success",
        text: data.message || "Thank you! Your message has been received.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatusMsg({
        type: "error",
        text: "Unable to send message. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C89B3C] text-white px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <ShieldCheck size={16} />
            CONTACT US
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Get In Touch
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're here to help. Reach out to us for any security-related
            inquiries or service requirements.
          </p>

          <div className="w-28 h-1 bg-[#C89B3C] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
                  <MapPin size={26} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Our Office
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    Ranbanka Security & Allied Services
                    <br />
                    165 , laxman Colony , shyam Nagar , Sodala , Jaipur , 302013
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Call Us
                  </h4>

                  <p className="text-gray-600">+91 91656 77777</p>

                  <p className="text-gray-600">+91 91656 72222</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-[#C89B3C]">
                  <Mail size={24} />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Email Us
                  </h4>

                  <p className="text-[#C89B3C] font-medium break-all">
                    ranbanka165@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.466333053564!2d75.75761167529396!3d26.888691476661588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e023d05e97%3A0x6380bea67c4a2bb9!2sRanbanka%20Security%20%26%20Allied%20Services%20%7C%20Security%20Guards%20%26%20Bouncers%20Services%20in%20Jaipur%20%2C%20Rajasthan.!5e0!3m2!1sen!2sin!4v1783146321393!5m2!1sen!2sin"
                className="w-full h-[340px]"
                allowFullScreen=""
                loading="lazy"
                title="Ranbanka Security Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-[30px] p-8 md:p-10 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Send a Message
            </h3>

            {/* Status message */}
            {statusMsg.text && (
              <div
                className={`mb-6 px-5 py-4 rounded-2xl text-sm font-medium ${
                  statusMsg.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {statusMsg.text}
              </div>
            )}

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
                required
                disabled={loading}
              />
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all"
                required
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-300 transition-all resize-none"
                required
                disabled={loading}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C89B3C] hover:opacity-95 text-white font-semibold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  Sending...
                  <Loader2 size={20} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Bottom Badge */}
        <div className="mt-14 flex justify-center">
          <div className="bg-[#C89B3C] text-white text-sm font-semibold px-8 py-4 rounded-full flex items-center gap-3 shadow-lg">
            <span>🛡️</span>
            SECURE • RESPONSIVE • PROFESSIONAL
          </div>
        </div>
      </div>
    </section>
  );
}