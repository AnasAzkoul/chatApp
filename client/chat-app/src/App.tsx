import { useEffect, useState } from 'react';
import { socket } from './socket';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register.js'


function App() {
  const [count, setCount] = useState(0);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on('connection', () => {
      setIsConnected(true);
    })

    socket.on('message', (message) => {
      console.log(message);
    })

    return () => {
      socket.off('connect', () => {
        setIsConnected(true);
      })
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
