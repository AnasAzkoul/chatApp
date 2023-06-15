import React, { useState } from 'react';
import ShowPassBtn from './ShowPassBtn';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({
  className,
  id,
  value,
  type,
  placeholder,
  onChange,
  name,
  ...props
}: InputProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <input
        type={isShown ? 'text' : type}
        id={id}
        value={value}
        className={`${className} rounded-md w-full outline-none focus:ring-0 focus:outline-none border border-gray-500 placeholder-transparent peer`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        autoComplete='off'
        {...props}
      />
      {name?.toLowerCase().includes('password') && (
        <ShowPassBtn
          isShown={isShown}
          setIsShown={setIsShown}
        />
      )}
    </>
  );
}

export default Input;
