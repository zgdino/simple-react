import React from 'react'
import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=6333b19f'

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }

  useEffect(() => {
   searchMovies('spiderman')
  }, [])

  return (
   <div className="app">
    <h1>Movie Land</h1>
   </div>
  )
}

export default App
