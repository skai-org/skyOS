import React from "react";

function TerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48" height="42px" width="42px"
    >
      <defs>
        <linearGradient
          id="a"
          x1="43"
          x2="49"
          y1="44"
          y2="50"
          gradientTransform="scale(.26458)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
      <circle
        cx="8.466"
        cy="8.466"
        r="7.144"
        fill="#72787e"
        paintOrder="stroke fill markers"
      ></circle>
      <rect
        width="4.233"
        height="0.529"
        x="5.821"
        y="9.525"
        fill="#fff"
        paintOrder="stroke markers fill"
        ry="0.265"
      ></rect>
      <path
        fill="#fff"
        d="M4.502 4.725a.264.264 0 00-.262.13.264.264 0 00.097.362l2.842 1.64-2.842 1.641a.264.264 0 00-.097.362c.074.127.235.17.362.097l3.207-1.852a.26.26 0 00.127-.225c.002-.008.001-.015.002-.022 0-.008 0-.015-.002-.023a.26.26 0 00-.127-.224L4.602 4.758a.266.266 0 00-.1-.033z"
        paintOrder="stroke markers fill"
      ></path>
      <path
        fill="url(#a)"
        d="M15.582 9.024l-6.563 6.562a7.144 7.144 0 006.563-6.562z"
        opacity="0.25"
        paintOrder="stroke fill markers"
      ></path>
    </svg>
  );
}

export default TerminalIcon;