import React, { forwardRef } from 'react';

type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ children, className, ...props }: FieldsetProps, ref) => {
    return (
      <fieldset
        className={`${className} flex flex-col gap-2 relative`}
        ref={ref}
        {...props}
      >
        {children}
      </fieldset>
    );
  }
);

export default Fieldset;
