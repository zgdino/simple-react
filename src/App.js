import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  // useState HOOK
  const [counter, setCounter] = useState(0)
  // useEffect HOOK → never modify the state manually; 
  // if dependency array is empty → change only on the initial load
  useEffect(() => {
    alert('you have changed the counter to' + counter)
  }, [counter])

  return (
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  )
}

export default App
