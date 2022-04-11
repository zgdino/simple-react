import './App.css'

const Person = () => {
  return (
    <>
      <h1>Name: John</h1>
      <h2>Last Name: Doe</h2>
      <h2>Age: 30</h2>
    </>
  )
}

const App = () => {
  // jsx
  return (
    <div className='App'>
      <h1>Hello {2 + 2}</h1>
    </div>
  )
}

export default App
