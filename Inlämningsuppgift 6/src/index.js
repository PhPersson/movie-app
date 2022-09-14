"use strict"
// Philip Persson al4570
import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';




const MovieApp = () => {
    
    const [gifPhotos, setGifPhotos] = useState([{}])
    
    const [movies, setMovies] = useState([]);
    // const [gifs, setGifs] = useState({});
    const [searchQuery, setsearchQuery] = useState('');

    const getMoviesFromApi = async (searchMovie) => {
      setMovies([]); // För att sökninen skall rensa listan med filmer

      var omdbAPIUrl = `https://www.omdbapi.com/?apikey=41059430&type=movie&s=${searchMovie}` // Hämtar data från omdb APi om filmen som användaren valt att söka på
      var omdbAPIUrlResponse = await (await fetch(omdbAPIUrl)).json();

      if (handleApiRes(omdbAPIUrlResponse.Search)) {
        setMovies(omdbAPIUrlResponse.Search);
        setGifPhotos([])
      } else {
        showErrorMessage("Could not find any movies on that search!")
      }
    }

    function handleApiRes(apiRes) {
      if(apiRes !== undefined || null) {
        return true;
      } else
        return false;
    }

    const handleSearchButtonClick = (event) => {
      event.preventDefault();
      if(searchQuery === '') {
        alert("Sökfältet kan inte vara tomt!");
      } else {
        getMoviesFromApi(searchQuery);
      }
    }

    // Funktion för att visa alert meddelanden.
    const showErrorMessage = (message) => {
      alert(message);
    }

    const searchForGiph = async (query) => {
      var giphyApi = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=cw40uymBW25iT9nKmJhp1M1TTaPI0EIx&limit=3`;
      var giphyApiResponse = await (await fetch(giphyApi)).json();



      if (handleApiRes(giphyApiResponse.data)) {
        setGifPhotos(giphyApiResponse.data)
      } else {
        showErrorMessage("Kunde inte generera GIF")
      }

    }



    return (
      <>
      <div>
        <SearchBar  handleSearchButtonClick = {handleSearchButtonClick} setsearchQuery = {setsearchQuery}/>
        <ListOfMovies  gif={gifPhotos} movies={movies} GIFS = {searchForGiph} />
      </div>
      </>
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
      <button  className='searchBtn' onClick = {probs.handleSearchButtonClick}>Sök!</button>
      </form>
    </header>
    </div>
  );
}


class Iframe extends React.Component {
  render() {
    
    return(   
      <div>          
        <iframe src={this.props.src}/>         
      </div>
    )
  }
}

const ListOfMovies = (probs) => {  

  const [isOpen, setIsOpen] = useState(false);
  const Modal = ({ setIsOpen }) => {

    return (
      <>
        <div onClick={() => setIsOpen(false)} />
        <div >
          <div>
            <button onClick={() => {setIsOpen(false)} } >
              X
            </button>
              <div>
              {probs.gif.map((gif, index) => (
                <Iframe src={gif.embed_url} />
              ))}
              </div>
            <div >

            </div>
          </div>
        </div>
      </>
    );
  };


    return (
        <>
        {probs.movies.map((movie, index) => (
            <><div className='ImageCard'>
            <h4><b>{movie.Title}</b></h4>
            <img src={movie.Poster} alt={movie.Title}></img>
            <p>Release year: {movie.Year}</p>
            <button className='gifButton' onClick={() => { setIsOpen(true); probs.GIFS(movie.Title); } }>Generate a gif! </button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            <div>
            </div>
          </div>
          </>
        ))
        }
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MovieApp />
);



