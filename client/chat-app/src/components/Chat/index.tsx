import React from 'react';
import ChatHeader from './ChatHeader';
import ChatForm from './ChatForm';
import ChatMain from './ChatMain';

const Chat = () => {
  return (
    <main className='grid w-3/4 grid-rows-chatLayout'>
      <ChatHeader />
      <ChatMain />
      <ChatForm />
    </main>
  );
};

export default Chat;
