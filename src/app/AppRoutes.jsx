import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import CaseStudy from "../pages/CaseStudy";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Countdown from "../pages/Countdown";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Core studio routes */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      
      {/* Work / Portfolio (supports both /portfolio and /work) */}
      <Route path="/portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
      <Route path="/work" element={<MainLayout><Portfolio /></MainLayout>} />
      <Route path="/work/:slug" element={<MainLayout><CaseStudy /></MainLayout>} />
      
      {/* About (supports both /about-us and /about) */}
      <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
      <Route path="/about" element={<MainLayout><AboutUs /></MainLayout>} />
      
      {/* Services (supports both /service and /services) */}
      <Route path="/service" element={<MainLayout><Services /></MainLayout>} />
      <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
      
      {/* Contact (supports both /contact-us and /contact) */}
      <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
      
      {/* Studio countdown / launch preview */}
      <Route path="/countdown" element={<MainLayout><Countdown /></MainLayout>} />
      
      {/* Separate dedicated legal & privacy pages */}
      <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
      <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />

      {/* 404 for all other paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

