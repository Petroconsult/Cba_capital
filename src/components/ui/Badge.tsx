import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export default function Badge({ children, color = 'gray' }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold bg-${color}-200 text-${color}-800 rounded`}> 
      {children}
    </span>
  );
}
