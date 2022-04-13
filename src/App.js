import './App.css'
import { useState } from 'react'

const App = () => {
  // useState HOOK
  const [counter, setCounter] = useState(0)

  return (
    <div className='App'>
      <button>-</button>
      <h1>{counter}</h1>
      <button>+</button>
    </div>
  )
}

export default App
