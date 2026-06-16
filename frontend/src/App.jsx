import './App.module.css'
import Register from './pages/auth/Register'
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboards/Dashboard';
import Rough from './components/Rough'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rough" element={<Rough />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
