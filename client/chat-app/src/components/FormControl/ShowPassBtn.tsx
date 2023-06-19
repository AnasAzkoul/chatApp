import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ShowPasswordProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ShowPassBtn = ({ className, onClick }: ShowPasswordProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} absolute right-3 top-3`}
    >
      {/* {show ? <AiFillEyeInvisible /> : <AiFillEye />} */}
      <AiFillEyeInvisible />
    </button>
  );
};

export default ShowPassBtn;
