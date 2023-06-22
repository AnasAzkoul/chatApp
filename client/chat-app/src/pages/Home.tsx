import { useEffect, useState } from 'react';
import { socket } from '../socket';
import Button from '../components/Button';
import { BASE_URL } from '../utils/config';

const Home = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);

  const handleLogoutUser = async () => {
    const response = await fetch(`${BASE_URL}/users/logout`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    socket.on('connect_error', (error) => {
      if(error instanceof Error) {
        console.log(error); 
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

  return (
    <div>
      <h1 className='text-xl text-blue-700'>Home page</h1>
      <div>
        <Button onClick={handleLogoutUser}>Logout</Button>
      </div>
    </div>
  );
};

export default Home;
