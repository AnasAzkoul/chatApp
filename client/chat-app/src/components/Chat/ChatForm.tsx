import React, { ChangeEvent, useEffect, useState } from 'react';
import FormControl from '../FormControl';
import { AiOutlineSend } from 'react-icons/ai';
import { socket } from '../../socket';
import {set} from 'zod';

const ChatForm = () => {
  const [chatMessage, setChatMessage] = useState('');
  const handleSubmitChatMessage = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // emit a message to the server
    socket.emit('chatMessage', chatMessage);
    setChatMessage(''); 
  };



  return (
    <form
      onSubmit={handleSubmitChatMessage}
      className='relative px-4 py-2 bg-indigo-500'
    >
      <FormControl.fieldSet>
        <FormControl.Input
          type='text'
          id='chatMsg'
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          className='w-full'
        />
      </FormControl.fieldSet>
      <button
        type='submit'
        className='absolute flex items-center justify-center p-1 text-white bg-indigo-500 rounded-full top-4 right-6'
      >
        <AiOutlineSend className='' />
      </button>
    </form>
  );
};

export default ChatForm;
