import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ className, children, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      className={`${className} text-gray-500 font-semibold pl-3 absolute -top-7 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-300 transition-all ease-in capitalize text-sm`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
