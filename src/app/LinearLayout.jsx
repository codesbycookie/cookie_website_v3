import React from "react";
import { Outlet } from "react-router-dom";
import LinearNavbar from "../components/linear/LinearNavbar";
import LinearFooter from "../components/linear/LinearFooter";

export default function LinearLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08090A] text-[#F4F4F6] selection:bg-[#5E6AD2]/30 selection:text-[#F4F4F6]">
      <LinearNavbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <LinearFooter />
    </div>
  );
}
