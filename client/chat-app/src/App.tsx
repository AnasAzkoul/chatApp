import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register.js';
import { useQueryClient } from '@tanstack/react-query';


function App() {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(['user']);

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
