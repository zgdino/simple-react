import './App.css'

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: 30</h2>
    </>
  )
}

const App = () => {
  // jsx
  return (
    <div className='App'>
      <Person name={'John'} />
      <Person lastName={'Doe'} />
      <Person />
      <Person />
    </div>
  )
}

export default App
