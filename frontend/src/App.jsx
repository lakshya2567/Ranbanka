import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Phone from "./pages/Phone";
import Client from "./components/Client";

// Pages
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import ScrollToTop from "./components/ScrollToTop";
import GallerySection from "./components/galleryImages";
import GalleryPage from "./pages/gallery/GalleryPage";
import BlogPage from "./pages/blog/Blog";
import TopButton from "./Layout/TopButton";
import ScrollLine from "./Layout/ScrollLine";
import SocialButtons from "./Layout/SocialButtons";
import ProtectedRoute from "./admin/ProtectedRoute.jsx";
import AdminLogin from "./admin/AdminLogin.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AdminGallery from "./admin/AdminGallery.jsx";
import AdminContact from "./admin/AdminContact.jsx";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && (
        <>
          <SocialButtons />
          <ScrollLine />
          <Navbar />
          <TopButton />
        </>
      )}

      <main className="flex-grow">
        <ScrollToTop />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client" element={<Client />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />

          {/* Admin Routes with Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="contact" element={<AdminContact />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin/AdminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
