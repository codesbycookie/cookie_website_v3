import React from "react";
import { useTheme } from "../context/theme.context.jsx";

/**
 * CookieLogo: Vector brand mark for Cookie Inc.
 * Uses the authentic cookie-bite silhouette and crumb particles
 * Dynamically adapts color based on active theme
 */
export default function CookieLogo({
  className = "w-6 h-6",
  color,
  dotColor = "#D9A55B",
}) {
  const { theme } = useTheme();
  const fillColor = color || (theme === "light" ? "#121316" : "#F4F4F6");
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 115 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Main cookie body with bite */}
        <path
          d="M0 0 C0.4 1.5 0.4 1.5 0.8 2.9 C1.2 4.3 1.6 5.6 2 7 C2.2 7.8 2.4 8.6 2.7 9.4 C3 10.6 3 10.6 3.4 11.8 C3.6 12.6 3.8 13.3 4 14.1 C4.9 16.1 4.9 16.1 6.7 17.3 C9.8 18.3 12.5 18.2 15.8 18.1 C16.9 18.1 18.1 18.1 19.3 18.1 C20.6 18 20.6 18 22 18 C22.4 18.8 22.8 19.5 23.2 20.3 C23.7 21.3 24.2 22.3 24.8 23.3 C25.3 24.3 25.8 25.3 26.3 26.3 C27.8 29.1 27.8 29.1 30.1 30.5 C32.8 32.6 32.8 34.6 33.4 37.9 C34.5 42.7 34.5 42.7 37.4 46.6 C40 48 40 48 42.7 49.1 C45 50 45 50 47 53 C48.4 66.6 43.2 81.1 34.9 91.7 C23.5 104.9 10.2 111.8 -7.3 113.3 C-22.2 113.7 -36.1 109.5 -47.4 99.6 C-48.9 98.1 -50.5 96.5 -52 95 C-52.6 94.4 -53.1 93.9 -53.7 93.3 C-63.7 82.7 -67.5 68.1 -67.3 53.9 C-66.8 39.2 -60.9 26 -50.6 15.4 C-36.2 2.4 -19.2 -2.3 0 0 Z M-45.2 23.8 C-53.6 34.1 -58.9 45.5 -58.3 59 C-56.9 72 -51.6 83.1 -42 92 C-30.8 100.4 -19 105.1 -5 104 C7.9 102 19.9 96 27.9 85.5 C33.1 77.8 38.1 68.6 37.7 59 C36.4 55.5 33.3 54.2 30.2 52.4 C27 50.4 26.1 48.6 25 45 C24.5 41.9 24.1 38.8 23.7 35.7 C23.2 32.9 23.2 32.9 21.3 31.2 C18.5 29.7 15.9 29.2 12.8 28.6 C5.4 27 0.4 24.9 -4.4 19.1 C-6.1 15.7 -7.1 12.7 -8 9 C-22 8.2 -35.6 13.4 -45.2 23.8 Z"
          fill={fillColor}
          transform="translate(67,4)"
        />
        {/* Chocolate chips / dots */}
        <circle cx="33" cy="54" r="8" fill={fillColor} />
        <circle cx="71" cy="80" r="7.5" fill={fillColor} />
        <circle cx="73" cy="46" r="6" fill={fillColor} />
        <circle cx="44" cy="83" r="6.5" fill={fillColor} />
        <circle cx="53" cy="47" r="5.5" fill={fillColor} />

        {/* Floating crumb particles near the bite - highlighted with dotColor */}
        <circle cx="95" cy="5" r="4.5" fill={dotColor} />
        <circle cx="106" cy="19" r="4" fill={dotColor} />
        <circle cx="111" cy="44" r="3" fill={dotColor} />
      </svg>
    </div>
  );
}
