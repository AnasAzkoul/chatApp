import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ShowPasswordProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isShown: boolean;
  setIsShown: (value: boolean) => void;
}

const ShowPassBtn = ({ className, isShown, setIsShown }: ShowPasswordProps) => {
  return (
    <button
      onClick={() => setIsShown(!isShown)}
      className={`${className} absolute right-3 top-3`}
    >
      {isShown ? <AiFillEyeInvisible /> : <AiFillEye />}
    </button>
  );
};

export default ShowPassBtn;
