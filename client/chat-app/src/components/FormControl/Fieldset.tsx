import React from 'react';

type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

const Fieldset = ({ children, className, ...props }: FieldsetProps) => {
  return (
    <fieldset className={`${className} flex flex-col gap-2 relative`} {...props}>
      {children}
    </fieldset>
  );
};

export default Fieldset;
