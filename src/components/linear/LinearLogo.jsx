import React from "react";

export default function LinearLogo({ className = "w-5 h-5", showWordmark = true }) {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Official Linear Icon Geometry */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-transform duration-150 group-hover:scale-105`}
        aria-hidden="true"
      >
        <path
          d="M1.21407 63.5937C-0.37059 67.2343 3.86435 70.767 7.21852 68.5529L70.4394 26.818C73.7936 24.6039 72.8466 19.4674 68.8687 18.5779L18.8828 7.39999C15.7196 6.69255 12.6393 8.72627 12.0016 11.942L1.21407 63.5937Z"
          fill="url(#linear-gradient-primary)"
        />
        <path
          d="M98.7859 36.4063C100.371 32.7657 96.1357 29.233 92.7815 31.4471L29.5606 73.182C26.2064 75.3961 27.1534 80.5326 31.1313 81.4221L81.1172 92.6C84.2804 93.3074 87.3607 91.2737 87.9984 88.058L98.7859 36.4063Z"
          fill="url(#linear-gradient-secondary)"
        />
        <defs>
          <linearGradient
            id="linear-gradient-primary"
            x1="12"
            y1="10"
            x2="70"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4F4F6" />
            <stop offset="1" stopColor="#5E6AD2" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-secondary"
            x1="88"
            y1="90"
            x2="30"
            y2="70"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5E6AD2" />
            <stop offset="1" stopColor="#8A8F98" />
          </linearGradient>
        </defs>
      </svg>

      {showWordmark && (
        <span className="text-[17px] font-medium tracking-tight text-[#F4F4F6] font-sans">
          Linear
        </span>
      )}
    </div>
  );
}
