import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const MovieApp = () => {
    const [gifPhotos, setGifPhotos] = useState([{}])
    const omdbapi = process.env.REACT_APP_omdb_API_KEY
    const [movies, setMovies] = useState([]);
    const [searchQuery, setsearchQuery] = useState('');

    const getMoviesFromApi = async (searchMovie) => {
      setMovies([]);

      var omdbAPIUrl = `https://www.omdbapi.com/?apikey=${omdbapi}&type=movie&s=${searchMovie}`
      var omdbAPIUrlResponse = await (await fetch(omdbAPIUrl)).json();

      if (handleApiRes(omdbAPIUrlResponse.Search)) {
        setMovies(omdbAPIUrlResponse.Search);
        setGifPhotos([])
      } else {
        showErrorMessage("Could not find any movies based on the search! \n Try another film!")
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
        alert("Search field cannot be empty!");
      } else {
        getMoviesFromApi(searchQuery);
      }
    }

    const showErrorMessage = (message) => {
      alert(message);
    }

    const searchForGiph = async (query) => {
      const giphyApiKey = process.env.REACT_APP_GIPHY_API_KEY
      var giphyApi = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=3`;
      var giphyApiResponse = await (await fetch(giphyApi)).json();


      if (handleApiRes(giphyApiResponse.data)) {
        setGifPhotos(giphyApiResponse.data)
      } else {
        showErrorMessage("Could not generate GIFs")
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

  return (<div className='searchDiv'>
    <header>
      <form className='searchBar'>
      <input
      placeholder="Search for a movie!"
      value={probs.value}
      onChange = {(event) => probs.setsearchQuery(event.target.value)}
      ></input>
      <button  className='searchBtn' onClick = {probs.handleSearchButtonClick}>Search!</button>
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
        <p className='h2Info'>"This service is for those who love GIFs <br/>
          Search for a movie and then press the button to view some funny GIFs!"
          </p>
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'), document.title = "Movie-giphy");
root.render(
    <MovieApp />
);



