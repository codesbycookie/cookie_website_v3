import React from "react";
import AppRoutes from "./routes";
import { ThemeProvider } from "../context/theme.context";
import "./app.css";

/**
 * Root Application Wrapper
 * Providers, Layout Shell, Router
 */
export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
