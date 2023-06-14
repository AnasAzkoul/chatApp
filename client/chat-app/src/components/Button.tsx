import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ type, className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-blue-300 text-gray-600 px-4 py-1 rounded-md w-full cursor-pointer hover:bg-blue-400`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
