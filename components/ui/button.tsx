import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'default', size = 'md', className, children, ...props }) => {
  const baseStyle = "rounded px-4 py-2 text-white focus:outline-none";
  const variantStyle = variant === 'ghost' ? "bg-transparent hover:bg-gray-200" : "bg-[#00B4A2] hover:bg-[#009688]";
  const sizeStyle = size === 'icon' ? "p-2" : size === 'sm' ? "text-sm" : size === 'lg' ? "text-lg" : "text-base";

  return (
    <button className={`${baseStyle} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
