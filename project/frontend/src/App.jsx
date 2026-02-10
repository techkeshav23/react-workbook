import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  async function getFetchData() {
    const serverData = await fetch('http://localhost:4002/data', {
      method: 'POST'
    });
    const jsonData = await serverData.json();
    console.log("Data received:", jsonData);
    setData(jsonData);
  } 
  return (
    <>
      <h1>Backend Data</h1>
      <button onClick={getFetchData}>Fetch Data</button>
      {data && (
        <div>
          <h2>Data from Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </>
  )
}

export default App
