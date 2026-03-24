import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './component/Main'
import Login from './component/Login'
import Registration from './component/Registration'
import Dashboard from './component/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(false);
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
