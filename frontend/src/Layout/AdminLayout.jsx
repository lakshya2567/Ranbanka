// import React, { useState, useEffect } from "react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import {
//   FiHome,
//   FiImage,
//   FiPhone,
//   FiLogOut,
//   FiMenu,
//   FiX,
//   FiChevronRight,
// } from "react-icons/fi";

// export default function AdminLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   // 🔒 Check authentication on mount
//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       navigate("/admin/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     localStorage.removeItem("adminInfo");
//     navigate("/admin/AdminLogin");
//   };

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const navItems = [
//     { path: "/admin/dashboard", label: "Dashboard", icon: FiHome },
//     { path: "/admin/gallery", label: "Gallery", icon: FiImage },
//     { path: "/admin/contact", label: "Contact", icon: FiPhone },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
//       {/* Sidebar - same as before */}
//       <aside
//         className={`${
//           sidebarOpen ? "w-72" : "w-20"
//         } bg-gray-900 text-white flex flex-col transition-all duration-300 ease-in-out shadow-2xl z-20`}
//       >
//         {/* Logo */}
//         <div className="flex items-center justify-between px-6 h-20 border-b border-gray-700">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center text-black font-bold text-xl">
//               R
//             </div>
//             {sidebarOpen && (
//               <span className="text-xl font-bold tracking-wider">Admin</span>
//             )}
//           </div>
//           <button onClick={toggleSidebar} className="text-gray-400 hover:text-white transition">
//             {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
//                   isActive
//                     ? "bg-[#C89B3C] text-black shadow-lg"
//                     : "text-gray-300 hover:bg-gray-800 hover:text-white"
//                 }`
//               }
//             >
//               <item.icon size={22} />
//               {sidebarOpen && (
//                 <>
//                   <span className="flex-1 font-medium">{item.label}</span>
//                   <FiChevronRight size={16} className="opacity-50" />
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Logout */}
//         <div className="border-t border-gray-700 p-4">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-4 w-full px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200"
//           >
//             <FiLogOut size={22} />
//             {sidebarOpen && <span className="font-medium">Logout</span>}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="h-20 bg-white shadow-sm flex items-center px-8 justify-between border-b border-gray-200">
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleSidebar}
//               className="lg:hidden text-gray-600 hover:text-gray-900"
//             >
//               <FiMenu size={28} />
//             </button>
//             <h1 className="text-2xl font-bold text-gray-800">Welcome back, Admin</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-500 hidden sm:block">
//               {new Date().toLocaleDateString()}
//             </span>
//             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C89B3C] to-yellow-600 flex items-center justify-center text-white font-bold">
//               A
//             </div>
//           </div>
//         </header>

//         <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiImage,
  FiPhone,
  FiLogOut,
  FiMenu,
  FiX,
  FiShield,
} from "react-icons/fi";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [clock, setClock] = useState(new Date());
  const navigate = useNavigate();

  // 🔒 Check authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Live clock — small detail, reinforces "control room" feel
  useEffect(() => {
    const id = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/admin/AdminLogin");
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: FiHome, index: "01" },
    { path: "/admin/gallery", label: "Gallery", icon: FiImage, index: "02" },
    { path: "/admin/contact", label: "Contact", icon: FiPhone, index: "03" },
  ];

  return (
    <div className="flex h-screen bg-[#F7F6F3] overflow-hidden font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-72" : "w-[76px]"
        } bg-[#0B0C0F] text-white flex flex-col transition-[width] duration-200 ease-out z-20 border-r border-black`}
      >
        {/* Logo */}
        <div
          className={`flex items-center justify-between h-20 border-b border-white/10 ${
            sidebarOpen ? "px-6" : "px-0 justify-center"
          }`}
        >
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 shrink-0 bg-[#C89B3C] flex items-center justify-center text-black">
              <FiShield size={20} strokeWidth={2.5} />
            </div>
            {sidebarOpen && (
              <div className="whitespace-nowrap leading-none">
                <p className="text-[16px] font-bold tracking-[0.12em] uppercase text-white">
                  Ranbanka
                </p>
                <p className="text-[9px] font-medium tracking-[0.14em] uppercase text-gray-500 mt-1">
                  Security &amp; Allied Services
                </p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Toggle sidebar"
            >
              <FiX size={20} />
            </button>
          )}
        </div>

        {!sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-white transition-colors flex items-center justify-center py-3 border-b border-white/10"
            aria-label="Expand sidebar"
          >
            <FiMenu size={18} />
          </button>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-8 px-3 space-y-1">
          {sidebarOpen && (
            <p className="px-4 pb-3 text-[11px] font-medium tracking-[0.15em] uppercase text-gray-600">
              Menu
            </p>
          )}
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center gap-4 px-4 py-3 transition-colors duration-150 ${
                  isActive
                    ? "bg-white/[0.06] text-white"
                    : "text-gray-500 hover:bg-white/[0.03] hover:text-gray-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`absolute left-0 top-0 h-full w-[2px] transition-colors duration-150 ${
                      isActive ? "bg-[#C89B3C]" : "bg-transparent"
                    }`}
                  />
                  <item.icon
                    size={18}
                    className={isActive ? "text-[#C89B3C]" : ""}
                  />
                  {sidebarOpen && (
                    <>
                      <span className="flex-1 text-[13px] font-medium tracking-wide">
                        {item.label}
                      </span>
                      <span className="text-[11px] font-mono text-gray-600">
                        {item.index}
                      </span>
                    </>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 p-3">
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 w-full px-4 py-3 text-gray-500 hover:bg-red-500/10 hover:text-red-400 transition-colors duration-150"
          >
            <FiLogOut size={18} />
            {sidebarOpen && (
              <span className="text-[13px] font-medium tracking-wide">
                Log out
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white flex items-center px-8 justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-900"
              aria-label="Toggle sidebar"
            >
              <FiMenu size={24} />
            </button>
            <div>
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400">
                Ranbanka Control Panel
              </p>
              <h1 className="text-xl font-semibold text-gray-900 tracking-tight">
                Welcome back, Admin
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-emerald-700">
                Systems Secure
              </span>
            </div>
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[13px] font-mono text-gray-800">
                {clock.toLocaleTimeString()}
              </span>
              <span className="text-[11px] text-gray-400">
                {clock.toLocaleDateString(undefined, {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="w-px h-8 bg-gray-200 hidden sm:block" />
            <div className="w-10 h-10 bg-[#0B0C0F] flex items-center justify-center text-[#C89B3C] font-semibold text-sm">
              A
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-[#F7F6F3]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}