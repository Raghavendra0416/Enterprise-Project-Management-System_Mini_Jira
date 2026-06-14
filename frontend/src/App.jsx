import './App.module.css'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/auth/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      {/* <AuthLayout /> */}
    </>
  )
}

export default App
