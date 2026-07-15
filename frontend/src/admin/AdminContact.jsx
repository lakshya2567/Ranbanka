import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function AdminContact() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <FiMail className="text-[#C89B3C] text-3xl mb-4" />
          <h4 className="font-semibold text-gray-800">Email</h4>
          <p className="text-gray-600">info@ranbanka.com</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <FiPhone className="text-[#C89B3C] text-3xl mb-4" />
          <h4 className="font-semibold text-gray-800">Phone</h4>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <FiMapPin className="text-[#C89B3C] text-3xl mb-4" />
          <h4 className="font-semibold text-gray-800">Address</h4>
          <p className="text-gray-600">Jaipur, Rajasthan</p>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Form Submissions</h3>
        <p className="text-gray-500">No submissions yet.</p>
      </div>
    </div>
  );
}