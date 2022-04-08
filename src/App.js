import './App.css'

const App =() => {
  const name = 'Lulu'
  const isNameShowing = false
  // jsx
  return <div className='App'>
    <h1>Hello {isNameShowing ? name : 'someone'}</h1>
  </div>
}

export default App
