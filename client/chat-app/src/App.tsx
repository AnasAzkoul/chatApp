import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path='/signin'
          element={<SignIn />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </>
  );
}

export default App;
