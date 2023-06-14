import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, id, value, type, placeholder,onChange,name,...props }: InputProps) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      className={`${className} rounded-md w-full outline-none focus:ring-0 focus:outline-none border border-gray-500 placeholder-transparent peer`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      autoComplete='off'
      {...props}
    />
  );
}

export default Input;
