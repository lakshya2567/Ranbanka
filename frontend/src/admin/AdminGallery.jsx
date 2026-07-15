import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FiPlus, FiEdit2, FiTrash2, FiX, FiImage } from "react-icons/fi";

// Vite environment variables
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const API_URL = `${API_BASE}/api/gallery`;
const IMAGE_BASE = API_BASE;

export default function AdminGallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ title: "", text: "" });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Fetch all gallery items
  const fetchItems = async () => {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data.data || []);
    } catch (err) {
      console.error("API Error:", err.message);
      toast.error("Failed to load gallery");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Open modal for add / edit
  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ title: item.title, text: item.text });
      setPreview(`${IMAGE_BASE}/${item.image}`);
      setImageFile(null);
    } else {
      setEditingItem(null);
      setFormData({ title: "", text: "" });
      setPreview(null);
      setImageFile(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
    setFormData({ title: "", text: "" });
    setPreview(null);
    setImageFile(null);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit (Create or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("text", formData.text);
    if (imageFile) data.append("image", imageFile);

    try {
      if (editingItem) {
        await axios.put(`${API_URL}/${editingItem._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Gallery updated successfully!");
      } else {
        await axios.post(API_URL, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Gallery item added successfully!");
      }
      fetchItems();
      closeModal();
    } catch (err) {
      console.error("Submit Error:", err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Deleted successfully!");
      fetchItems();
    } catch (err) {
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black text-gray-900">
              Gallery <span className="text-[#C89B3C]">Management</span>
            </h1>
            <p className="text-gray-600 mt-2">Add, edit or remove gallery images</p>
          </div>
          <button
            onClick={() => openModal()}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#C89B3C] hover:bg-[#b8942e] text-white font-semibold px-6 py-3 rounded-full transition shadow-lg hover:shadow-xl"
          >
            <FiPlus size={20} />
            Add New Image
          </button>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-16 h-16 border-4 border-[#C89B3C] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
            <FiImage className="mx-auto text-gray-300 text-6xl mb-4" />
            <p className="text-gray-500 text-xl">No gallery items yet. Start adding!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <div
                key={item._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={`${IMAGE_BASE}/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 truncate">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.text}</p>
                  <div className="flex items-center justify-end gap-3 mt-4">
                    <button
                      onClick={() => openModal(item)}
                      className="text-blue-600 hover:text-blue-800 transition p-2 rounded-full hover:bg-blue-50"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500 hover:text-red-700 transition p-2 rounded-full hover:bg-red-50"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingItem ? "Edit Gallery Item" : "Add New Gallery Item"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <FiX size={24} className="text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent outline-none transition"
                  placeholder="Enter title"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Text / Description
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent outline-none transition resize-none"
                  placeholder="Enter description"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Image
                </label>
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium">
                    Choose File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {preview && (
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200">
                      <img src={preview} alt="preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
                {!editingItem && !imageFile && (
                  <p className="text-sm text-gray-400 mt-1">* Required for new item</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#C89B3C] hover:bg-[#b8942e] text-white font-bold py-3 rounded-xl transition shadow-lg"
              >
                {editingItem ? "Update Item" : "Add Item"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}