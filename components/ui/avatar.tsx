import React from 'react';

export const Avatar: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative inline-block">
    {children}
  </div>
);

export const AvatarImage: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => (
  <img className="w-8 h-8 rounded-full" src={src} alt={alt} />
);

export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-sm text-gray-600">
    {children}
  </div>
);
