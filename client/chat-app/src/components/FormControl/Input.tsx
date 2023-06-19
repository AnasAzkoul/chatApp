import React, {forwardRef} from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  id,
  value,
  type,
  placeholder,
  onChange,
  name,
  ...props
}: InputProps, ref) => {
  return (
    <>
      <input
        type={`${type}`}
        id={id}
        value={value}
        className={`${className} rounded-md w-full outline-none focus:ring-0 focus:outline-none border border-gray-300 placeholder-transparent peer focus:border-gray-400 py-2`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        autoComplete='off'
        ref={ref}
        {...props}
      />
    </>
  );
})

export default Input;
