import { useState } from 'react'
import './App.css'
import { AppEx } from './AppEx'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {setCount(count + 1)};

  return (
    <>
     
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>

      <AppEx></AppEx>
    </>
  )
}

export default App
