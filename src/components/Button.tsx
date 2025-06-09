import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
    secondary: 'bg-secondary-400 text-primary-800 hover:bg-secondary-500 active:bg-secondary-600',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white active:bg-primary-600',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  // Internal link
  if (to) {
    return (
      <Link to={to} className={buttonClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        onClick={onClick} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  
  // Regular button
  return (
    <button 
      type={type} 
      className={buttonClasses} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;