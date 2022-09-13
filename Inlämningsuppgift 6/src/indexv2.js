"use strict"
// Philip Persson al4570
import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';


 



function MovieView(props) {
    //const titleRef = useRef();
    
    
    
    return(
      <div>
      <h1>Does it stream?</h1>
      <div>
          <div>
            <h4><b>Film</b></h4>
            <p>År</p>
            <img src="${movie.Poster}"></img>
          </div>
        </div>;
      {/* <table className="MovieView">
        <thead>
            <tr>
                {this.props.headers.map((header, index) => {
                  return (<th key={index}>{header}</th>)
                })}
            </tr>
        </thead>
        <tbody>
          {this.props.apiData.map((item, index) => {
            return(<tr key={index}>
              <td>{item.name === "" ? item.Title : item.name ? item.name : item.Title}</td>
              <td>{item.artist}</td>
              <td>{item.Type === "" ? "Music" : item.Type ? item.Type : "Music"}</td>
            </tr>)
          })}          
        </tbody>
        </table> */}
    </div>  
    )
}


// var Main = React.createClass({
//   getInitialState: function() {
//     return {
//       apiData: [],
//       headers: ["Titel", "Namn", "Kategori"],
//       mergedAPI: [],
//       query: '',
//     };
//   },
//   onChange: function (e){
//     let query = e.target.value
//     this.setState({query: query})
//   },
//   handleAPI: function (e){
//     this.setState({apiData: []})
//     if(this.state.query !== ""){
//       this.fetchAPI(this.state.query)
//     }
//     else{
//       alert("Sökfältet får inte vara tomt");
//     }
//     e.preventDefault()

//   },
//   fetchAPI: async function(query) {
//     var omdbURL = "http://www.omdbapi.com/?apikey=41059430&s="+ query ;
//     var musicURL =`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=cdc80ff38eebdbcf8468e2d938ffc8dd&format=json`
//     var responses = await Promise.all([
//       fetch(omdbURL),
//       fetch(musicURL)
//     ])
//     var body = await Promise.all(responses.map((response) => {
//       return response.json();
//     }))
//     var data = await body
//     var apiData = [...this.state.apiData]

//     apiData.push(...data[0].Search)
//     apiData.push(...data[1].results.trackmatches.track);
    
//     this.setState({apiData: apiData})
//     console.log(this.state.apiData)
//   },
//   render: function (){
//     return (
//        <div>
//         <searchField/>
//         </div>
//        )
//    }
//  })


const MainA = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovies] = useState('');


  async function handleSubmit(event){
    event.preventDefault();
    if (!query) {
      alert("Searchfield can't be empty!");
    } else {

      const movieRes = await searchForMovie(query);
      movieRes.Search.map(function(movie) {
        setMovies(movie);
      })
    }
  }




  async function searchForGiph (query) {
    var giphyApi = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=cw40uymBW25iT9nKmJhp1M1TTaPI0EIx&limit=3`;
    return await fetch (giphyApi).then(response => {return response.json()});
  }

  async function searchForMovie (query) {
    var omdbApi = "http://www.omdbapi.com/?apikey=41059430&s="+ query ;
    return await fetch (omdbApi).then(response => {return response.json()});
  }




  return (
    <div className="search-container">                  
    <fieldset className="dialogBox">
    <legend>Search for a movie u would like to make a Gif for!</legend>      
      <form id="search-form" onSubmit={(e) => handleSubmit(e)} >      
        <input type="text" name="query" id="query" placeholder="Search for a movie" onChange={event => setQuery(event.target.value)} value={query}/>    
        <input type="submit" value="Submit"/>
      </form>   
    </fieldset>

    <div>
      <MovieView/>
    </div>                   
   </div>
   
      ) 

}






// return(
//   <div>
//   <h1>Does it stream?</h1>
//   <table className="MovieView">
//     <thead>
//         <tr>
//             {this.props.headers.map((header, index) => {
//               return (<th key={index}>{header}</th>)
//             })}
//         </tr>
//     </thead>
//     <tbody>
//       {this.props.apiData.map((item, index) => {
//         return(<tr key={index}>
//           <td>{item.name === "" ? item.Title : item.name ? item.name : item.Title}</td>
//           <td>{item.artist}</td>
//           <td>{item.Type === "" ? "Music" : item.Type ? item.Type : "Music"}</td>
//         </tr>)
//       })}          
//     </tbody>
//     </table>
// </div>  
// )





 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainA />
  </React.StrictMode>
);

