import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/profile'
import Gallery from './component/gallery'
import Icard from './component/icard'

function App() {
  return (
    <>
      <h1>ABES Engineering College</h1>
      <Gallery />
      <div className="image">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
      <Icard name="Keshav Upadhyay" age="21" college="ABES Engineering College" branch="CSE" year="3" rollno="12345"/>
    </>
  )
}

export default App
