import React, { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, htmlFor, ...props }: LabelProps, ref) => {
    return (
      <label
        className={`${className} text-gray-500 absolute -top-3 px-3 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-300 transition-all ease-in capitalize ml-3 peer-placeholder-shown:bg-transparent border rounded-md peer-placeholder-shown:border-none bg-gray-50 border-gray-300 peer-placeholder-shown:ml-0 peer-placeholder-shown:text-sm text-xs`}
        htmlFor={htmlFor}
        {...props}
        ref={ref}
      >
        {children}
      </label>
    );
  }
);

export default Label;
