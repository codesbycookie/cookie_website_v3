import React from "react";
import AppRoutes from "./AppRoutes";
import { ThemeProvider } from "../utils/theme";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
