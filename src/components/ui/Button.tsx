import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-xl font-poppins font-normal transition-colors duration-200 cursor-pointer';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-primary-light text-primary-dark hover:bg-primary-mid',
    outline: 'border border-dark-lighter text-dark-lighter hover:bg-gray-50',
    dark: 'bg-dark text-white hover:bg-black',
    ghost: 'bg-transparent text-dark-light hover:bg-gray-100',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
