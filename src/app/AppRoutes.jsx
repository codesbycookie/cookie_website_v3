import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Loader from "../components/shared/Loader";

const Home = lazy(() => import("../pages/Home"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Services = lazy(() => import("../pages/Services"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const NotFound = lazy(() => import("../pages/NotFound"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/portfolio" element={<MainLayout><Portfolio /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/service" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/contact-us" element={<MainLayout><ContactUs /></MainLayout>} />
        {/* NotFound is rendered without Navbar/Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
