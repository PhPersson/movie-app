"use strict"
// Philip Persson al4570
import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const MovieApp = () => {
    
    const [movies, setMovies] = useState([
    {
    "Title":"Batman Begins",
    "Year":"2005",
    "Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title":"The Batman",
    "Year":"2022",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
    }
  ]);
    
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
        alert("Sökfältet kan inte vara tomt!")
      }
      getMoviesFromApi(searchQuery)
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
      <input
      className='searchBar'
      placeholder="Sök efter en film!"
      value={probs.value}
      onChange = {(event) => probs.setsearchQuery(event.target.value)} //Uppdatera MovieApp.setSearchQuery varje gång en bokstav ändras i sökfältet
      ></input>
      <button onClick={probs.handleSearchButtonClick}>Sök!</button>

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
