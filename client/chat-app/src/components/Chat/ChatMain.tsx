import React, { useEffect, useState } from 'react';
import { socket } from '../../socket';

const ChatMain = () => {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log(msg, 'from main');
      setMsg(msg);
    });
  }, [msg]);

  return (
    <div className='grid grid-cols-12 bg-indigo-100'>
      <div className='col-span-3 bg-indigo-200'></div>
      <div className='col-span-9 px-4'>
        <p className='p-4 my-3 bg-white w-fit rounded-3xl'>{msg}</p>
      </div>
    </div>
  );
};

export default ChatMain;
