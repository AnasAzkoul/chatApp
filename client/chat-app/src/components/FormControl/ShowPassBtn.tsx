import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ShowPasswordProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    show: boolean
}

const ShowPassBtn = ({ className, onClick, show }: ShowPasswordProps) => {
  return (
    <button
      onClick={() => onClick}
      className={`${className} absolute right-3 top-3`}
    >
      {show ? <AiFillEyeInvisible /> : <AiFillEye />}
    </button>
  );
};

export default ShowPassBtn;
