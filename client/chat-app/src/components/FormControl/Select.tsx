import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select = ({
  className,
  value,
  name,
  id,
  options,
  onChange,
  ...props
}: SelectProps) => {
  return (
    <select
      id={id}
      value={value}
      className={`${className}`}
      name={name}
      onChange={onChange}
      {...props}
    >
      <option
        className='text-gray-400 capitalize'
        aria-readonly
        value='select'
      >
        Select {name}
      </option>
      {options.map((item, index) => {
        return (
          <option
            value={item}
            key={index}
          >
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
