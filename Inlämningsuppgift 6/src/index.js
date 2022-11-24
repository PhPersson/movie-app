"use strict"
// Philip Persson al4570
import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const MovieApp = () => {
    const [gifPhotos, setGifPhotos] = useState([{}])
    
    const [movies, setMovies] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');

    const getMoviesFromApi = async (searchMovie) => {
      setMovies([]); // För att sökninen skall rensa listan med filmer

      var omdbAPIUrl = `https://www.omdbapi.com/?apikey=41059430&type=movie&s=${searchMovie}` // Hämtar data från omdb APi om filmen som användaren valt att söka på
      var omdbAPIUrlResponse = await (await fetch(omdbAPIUrl)).json();

      if (handleApiRes(omdbAPIUrlResponse.Search)) {
        setMovies(omdbAPIUrlResponse.Search);
        setGifPhotos([])
      } else {
        showErrorMessage("Kunde inte hitta några filmer baserat på den sökningen! \n Testa en annan film!")
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
      var giphyApi = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=cw40uymBW25iT9nKmJhp1M1TTaPI0EIx&limit=3`;
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
        <InfoText/>
        <ListOfMovies  gif={gifPhotos} movies={movies} GIFS = {searchForGiph}/>

      </div>
      </>
    )
}

const SearchBar = (probs) => {

  return (<div>
    <header>
      <form className='searchBar'>
      <input
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
        <iframe className='gitIframe' title='gif-frame' src={this.props.src}/>         
      </div>
    )
  }
}

const ListOfMovies = (probs) => {  

  const [isOpen, setIsOpen] = useState(false);
  const GifViewer = ({ setIsOpen }) => {

    return (
      <>
        <div  onClick={() => setIsOpen(false)} />
        <div className='divGif'>
          <div>
            <button className="closeGifBtn" onClick={() => {setIsOpen(false)} } >
              X
            </button>
              <div >
              {probs.gif.map((gif, index) => (
                
                <Iframe src={gif.embed_url} key={index}/>
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
            <><div className='imageDiv' key={index} >
            <h4><b>{movie.Title}</b></h4>
            <img className='moviePoster' src={movie.Poster} alt={movie.Title}></img>
            <p>Release year: {movie.Year}</p>
            <button className='gifButton' onClick={() => { setIsOpen(true); probs.GIFS(movie.Title); } }>Generate gifs! </button>
            {isOpen && <GifViewer setIsOpen={setIsOpen} />}
            <div>
            </div>
          </div>
          </>
        ))
        }
        </>
    )
}


class InfoText extends React.Component {
  render() {
    
    return(   
      <div>          
        <p className='h2Info'>Denna tjänst är till för dig som älskar Gif:s! 
          <br></br>
          Sök efter en film och tryck sedan på knappen för att visa lite roliga gifar!
          </p>
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'), document.title = "Inlämningsuppgift 6");
root.render(
    <MovieApp />
);



