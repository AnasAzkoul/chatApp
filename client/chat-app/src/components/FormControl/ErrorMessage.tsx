import React, { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ErrorMessageProps extends React.HTMLAttributes<HTMLSpanElement> {}

const ErrorMessage = ({ className, children, ...props }: ErrorMessageProps) => {
  return (
    <span
      className={`${className} text-xs text-rose-500`}
      {...props}
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
