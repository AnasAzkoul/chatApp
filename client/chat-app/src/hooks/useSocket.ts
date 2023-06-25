import { useEffect, useState } from 'react';
import { socket } from '../socket';

export default function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);

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

    socket.on('message', (message) => {
      console.log(message);
    });

    return () => {
      socket.off('connect', () => {
        setIsConnected(true);
      });
    };
  }, []);

  return {
    isConnected
  }
}
