import useSocket from '../../hooks/useSocket';

const ChatMain = () => {
  const {msg} = useSocket();


  return (
    <div className='grid grid-cols-12 bg-indigo-100'>
      <div className='col-span-3 bg-indigo-200'></div>
      <div className='col-span-9 px-4 overflow-scroll'>
        <p className='p-4 my-3 bg-white w-fit rounded-3xl'>{msg}</p>
      </div>
    </div>
  );
};

export default ChatMain;
