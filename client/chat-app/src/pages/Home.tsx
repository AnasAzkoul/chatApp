import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket';
import Button from '../components/Button';
import { BASE_URL } from '../utils/config';

const Home = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const navigate = useNavigate();

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

    if (response.ok) {
      navigate('/signin');
    }

    console.log(data);
  };

  useEffect(() => {
    socket.on('connect_error', (error) => {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(error.stack)
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

  // useEffect(() => {
  //   fetch(`${BASE_URL}/session`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       if (error instanceof Error) {
  //         console.log(error.message);
  //       }
  //     });
  // }, []);

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
