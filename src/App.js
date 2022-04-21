import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

// have to register witht he site to have an access to this API
const API_URL = 'http://www.omdbapi.com?apikey=6333b19f'

const App = () => {
  // state hooks
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  // useEffect HOOK, empty dependency with superman as default on re-render
  useEffect(() => {
    searchMovies('spiderman')
  }, [])

  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          // automatic search without the need to press search icon
          onKeyUp={() => searchMovies(searchTerm)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* if there are no movies display an empty div */}
      {movies?.length > 0 ? (
        <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
