import React, { useEffect, useState } from "react";

function CardBackground() {
  // TODO: make it responsive using useEffect hook
  useEffect(() => {}, []);
  return (
    <svg
      className="relative w-3/4 -z-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="transparent"
      viewBox="0 0 291 351"
    >
      <g filter="url(#filter0_b_1_1504)">
        <path
          fill="url(#paint0_linear_1_1504)"
          fillOpacity="0.1"
          d="M273.74.92h-39a36.714 36.714 0 00-33.87 22.84 59.997 59.997 0 01-88.907 27.041A59.996 59.996 0 0189.87 23.76 36.71 36.71 0 0056 .92H17a17 17 0 00-17 17V334a17 17 0 0017 17h256.74a17 17 0 0017-17V17.92a17 17 0 00-17-17z"
        ></path>
        <path
          stroke="url(#paint1_linear_1_1504)"
          d="M201.333 23.95v-.001A36.213 36.213 0 01234.741 1.42h38.999a16.499 16.499 0 0116.5 16.5V334c0 4.376-1.738 8.573-4.833 11.667a16.496 16.496 0 01-11.667 4.833H17A16.497 16.497 0 01.5 334V17.92A16.5 16.5 0 0117 1.42h39a36.21 36.21 0 0133.407 22.529v.001a60.503 60.503 0 0055.963 37.512 60.502 60.502 0 0055.963-37.512z"
        ></path>
      </g>

      <defs>
        <filter
          id="filter0_b_1_1504"
          width="490.74"
          height="550.08"
          x="-100"
          y="-99.08"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feGaussianBlur
            in="BackgroundImage"
            stdDeviation="50"
          ></feGaussianBlur>
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1_1504"
          ></feComposite>
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1_1504"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear_1_1504"
          x1="145.37"
          x2="145.37"
          y1="0.92"
          y2="377"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#626A88"></stop>
          <stop offset="1" stopColor="#2E3149"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_1504"
          x1="145.37"
          x2="145.37"
          y1="0.92"
          y2="377"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECF0FF" stopOpacity="0.1"></stop>
          <stop offset="1" stopColor="#2E3149" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CardBackground;
