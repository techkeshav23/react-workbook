import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Dashboard from './component/dashboard'
import Main from './component/Main'
import Registration from './component/registration'
import Login from './component/login'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/register" element={<Registration/>} />
          </Routes>
        </BrowserRouter>
      </>

  )
}

export default App
