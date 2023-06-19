import React from 'react';
import Input from './Input';
import Fieldset from './Fieldset';
import Label from './Label';
import Select from './Select';
import ShowPassBtn from './ShowPassBtn';
import ErrorMessage from './ErrorMessage';

type FormControlProps = {
  children: React.ReactNode;
};

// eslint-disable-next-line no-empty-pattern
const FormControl = ({ children }: FormControlProps) => {
  return <Fieldset>{children}</Fieldset>;
};

FormControl.fieldSet = Fieldset;
FormControl.Input = Input;
FormControl.label = Label;
FormControl.select = Select;
FormControl.ShowPass = ShowPassBtn
FormControl.errorMessage = ErrorMessage; 

export default FormControl;
