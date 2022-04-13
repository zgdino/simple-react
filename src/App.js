import './App.css'
import { useState } from 'react'

const App = () => {
  // useState HOOK
  const [counter, setCounter] = useState(0)

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>

      <button onMouseOver={() => setCounter((prevCount) => prevCount + 5)}>go over me</button>
    </div>
  )
}

export default App
