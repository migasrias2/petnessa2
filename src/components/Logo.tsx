import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <img
      src="./src/Petnessa.png"
      alt="Petnessa"
      className={className}
    />
  );
}