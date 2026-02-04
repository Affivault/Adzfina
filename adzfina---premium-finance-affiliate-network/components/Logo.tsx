import React from 'react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", dark = false }) => {
  const textColor = dark ? "text-white" : "text-zinc-900";
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract F shape */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M6 6C6 3.79086 7.79086 2 10 2H22C24.2091 2 26 3.79086 26 6V8C26 10.2091 24.2091 12 22 12H10C7.79086 12 6 10.2091 6 8V6Z"
          className="fill-zinc-900"
        />
        <path
          d="M6 16C6 13.7909 7.79086 12 10 12H18C20.2091 12 22 13.7909 22 16V18C22 20.2091 20.2091 22 18 22H10C7.79086 22 6 20.2091 6 18V16Z"
          className="fill-lime-300"
        />
        <path
           d="M6 22H12V26H10C7.79086 26 6 24.2091 6 22Z"
           className="fill-zinc-900"
        />
      </svg>
      <span className={`font-bold text-xl tracking-tight ${textColor}`}>
        AdzFina
      </span>
    </div>
  );
};