import { useEffect, useState } from 'react';
import { socket } from '../socket';

interface MessageType {
  name: string;
  date: Date;
  message: string;
}

export default function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [msg, setMsg] = useState<MessageType>({
    name: '',
    date: new Date(0),
    message: '',
  });

  useEffect(() => {
    socket.on('connect_error', (error) => {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(error.stack);
      }
    });

    socket.on('connection', () => {
      setIsConnected(true);
    });

    // This method would broadcast a message tot he user thats connecting only;
    socket.on('message', (msg) => {
      console.log(msg, 'from main');
      setMsg(msg);
    });

    return () => {
      socket.off('connect', () => {
        setIsConnected(false);
      });
    };
  }, []);

  return {
    isConnected,
    msg,
  };
}
