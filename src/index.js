import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



// Main App Component
const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [gifPhotos, setGifPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isGifViewerOpen, setGifViewerOpen] = useState(false);

  // Fetch movies from OMDb API
  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&type=movie&s=${searchQuery}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setGifPhotos([]);
      } else {
        alert("No movies found! Try another title.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("An error occurred while fetching movies.");
    }
  }, [searchQuery]);

  // Fetch GIFs from Giphy API
  const fetchGifs = useCallback(async (query) => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=3`);
      const data = await response.json();

      if (data.data.length) {
        setGifPhotos(data.data);
        setGifViewerOpen(true);
      } else {
        alert("No GIFs found for this movie.");
      }
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      alert("An error occurred while fetching GIFs.");
    }
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchMovies();
    } else {
      alert("Search field cannot be empty!");
    }
  };

  return (
    <div className="movieApp">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <InfoText />
      <MovieList movies={movies} onGifRequest={fetchGifs} />
      {isGifViewerOpen && <GifViewer gifs={gifPhotos} closeViewer={() => setGifViewerOpen(false)} />}
    </div>
  );
};

// SearchBar Component
const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
  <header className="searchHeader">
    <form onSubmit={handleSearch} className="searchForm">
      <input
        type="text"
        placeholder="Search for a movie!"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="searchInput"
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
  </header>
);

// InfoText Component
const InfoText = () => (
  <div className="infoText">
    <p>
      This service is for those who love GIFs. <br />
      Search for a movie and then press the button to view some funny GIFs!
    </p>
  </div>
);

// MovieList Component
const MovieList = ({ movies, onGifRequest }) => (
  <div className="movieList">
    {movies.map((movie, index) => (
      <MovieCard
        key={index}
        title={movie.Title}
        poster={movie.Poster}
        year={movie.Year}
        onGifRequest={() => onGifRequest(movie.Title)}
      />
    ))}
  </div>
);

// MovieCard Component
const MovieCard = ({ title, poster, year, onGifRequest }) => (
  <div className="movieCard">
    <h4>{title}</h4>
    <img src={poster} alt={title} className="moviePoster" />
    <p>Release Year: {year}</p>
    <button className="gifButton" onClick={onGifRequest}>
      Generate GIFs!
    </button>
  </div>
);

// GifViewer Component as a Modal
const GifViewer = ({ gifs, closeViewer }) => (
  <div className="modalBackdrop" onClick={closeViewer}>
    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
      <button className="closeButton" onClick={closeViewer}>X</button>
      <div className="gifContent">
        {gifs.map((gif, index) => (
          <iframe
            key={index}
            src={gif.embed_url}
            title={`gif-${index}`}
            className="gifFrame"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  </div>
);

// Render the app to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieApp />);
