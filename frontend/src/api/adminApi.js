const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const getToken = () => localStorage.getItem("adminToken");

const request = async (endpoint, options = {}) => {
  const token = getToken();

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await res.json();

  if (res.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
  }

  return { status: res.status, data };
};

export const loginAdmin = (email, password) =>
  request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export const fetchContacts = (page = 1, status = "") =>
  request(`/api/contact/getContacts?page=${page}${status ? `&status=${status}` : ""}`);

export const updateContactStatus = (id, status) =>
  request(`/api/contact/updateStatus/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });

export const deleteContact = (id) =>
  request(`/api/contact/hardDeleteContact/${id}/hard`, {
    method: "DELETE",
  });