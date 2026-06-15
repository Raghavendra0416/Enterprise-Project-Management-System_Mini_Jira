import './App.module.css'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboards/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
