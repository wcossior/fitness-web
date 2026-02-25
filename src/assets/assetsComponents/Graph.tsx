import React from "react";

export const Graph = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    {...props} 
 
    className={`w-full h-full ${props.className}`}
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1" 
  >
    <defs>
      <pattern 
        id="grid-stable" 
        width="60" 
        height="60" 
        patternUnits="userSpaceOnUse"
      >
        <path d="M 60 0 L 0 0 0 60" fill="none" opacity="0.1" />
      </pattern>
    </defs>
 
    <rect width="100%" height="100%" fill="url(#grid-stable)" stroke="none" />
  </svg>
);