"use strict"
// Philip Persson al4570
import {useEffect, useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const MovieApp = () => {
    
    const [movies, setMovies] = useState([]);
    
    const [searchQuery, setsearchQuery] = useState('');

    const getMoviesFromApi = async (searchMovie) => {
      var omdbAPIUrl = `https://www.omdbapi.com/?apikey=41059430&type=movie&s=${searchMovie}`
      var omdbAPIUrlResponse = await (await fetch(omdbAPIUrl)).json();
      
      setMovies(omdbAPIUrlResponse.Search);
      console.log(movies)
    }

    const handleSearchButtonClick = (event) => {
      event.preventDefault();


      if(searchQuery === '') {
        alert("Sökfältet kan inte vara tomt!");
      } else {
        setMovies(getMoviesFromApi(searchQuery));
      }
    }

    return (
      <><div></div><div>
        <SearchBar handleSearchButtonClick = {handleSearchButtonClick} setsearchQuery = {setsearchQuery}/>
        <ListOfMovies movies={movies} />
      </div></>
    )
}


const SearchBar = (probs) => {

  return (<div>

    <header>
      <form>
      <input
      className='searchBar'
      placeholder="Sök efter en film!"
      value={probs.value}
      onChange = {(event) => probs.setsearchQuery(event.target.value)} //Uppdatera MovieApp.setSearchQuery varje gång en bokstav ändras i sökfältet
      ></input>
      <button onClick={probs.handleSearchButtonClick}>Sök!</button>

      </form>
    </header>

    </div>

  );

}


const ListOfMovies = (probs) => {
    return (
        <>
        {probs.movies.map((movie, index) => (
            <div className='ImageCard'>
              <h4><b>{movie.Title}</b></h4>
              <img src={movie.Poster} alt={movie.Title}></img>
              <p>Release year: {movie.Year}</p>
              <button className='memeButton'>Generate a gif! </button>
            </div>
        
        ))
        }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieApp />
  </React.StrictMode>
);
