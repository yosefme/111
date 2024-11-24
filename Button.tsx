import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({ variant = 'primary', to, onClick, children, icon = false }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50"
  };

  const buttonContent = (
    <>
      {children}
      {icon && <ChevronRight className="h-5 w-5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]}`}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {buttonContent}
    </button>
  );
}