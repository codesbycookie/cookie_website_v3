import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import Work from "../pages/Portfolio";
import CaseStudy from "../pages/CaseStudy";
import About from "../pages/AboutUs";
import Contact from "../pages/ContactUs";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
        {/* Core application routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/work" element={<MainLayout><Work /></MainLayout>} />
        <Route path="/work/:slug" element={<MainLayout><CaseStudy /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><Legal type="privacy" /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><Legal type="terms" /></MainLayout>} />

        {/* Legacy path redirects */}
        <Route path="/portfolio" element={<Navigate to="/work" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/service" element={<Navigate to="/#services" replace />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />

        {/* 404 for all other paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}
