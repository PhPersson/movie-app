
# MovieApp
## Description
This MovieApp is a simple React application that allows users to search for movies and view associated GIFs related to the searched movie. Users can enter the title of a movie in the search bar, and the app will fetch movie data from the OMDB API and GIF data from the GIPHY API. The application showcases the searched movies along with their release years and movie posters. Users can generate and view GIFs related to each movie by clicking the "Generate GIFs!" button associated with each movie.

## Technologies Used
* React: The application is built using React, a popular JavaScript library for building user interfaces.
* GIPHY API: The GIPHY API is used to fetch GIFs based on the movie titles.
* OMDB API: The OMDB API is used to fetch movie data based on user search queries.

## How to Use
Clone the repository or download the project files.

### Install dependencies:

Make sure you have Node.js and npm installed. Navigate to the project's root directory and run the following command to install the necessary dependencies:

```javascript
npm install
```
### Run the application: 
After installing the dependencies, start the development server by running the following command:

```javascript
npm start
```
### Open the application: 
The application should now be running on your local server. Open your web browser and navigate to http://localhost:3000 to access the MovieApp.

### Searching for Movies: 
Type the title of a movie you want to search for in the search bar and click the "Sök!" button. The application will fetch the movie data from the OMDB API and display a list of matching movies along with their release years and movie posters.

### Generating GIFs: 
For each movie listed, there is a "Generate GIFs!" button. Clicking this button will fetch GIFs related to the selected movie from the GIPHY API and display them in an iframe below the movie details.

## Components
The MovieApp consists of several React components:

* #### MovieApp: 
The main component responsible for managing state and rendering other components.
* #### SearchBar: 
A component for the search bar, allowing users to input movie titles.
* #### ListOfMovies: 
A component that renders the list of movies and handles GIF generation.
* #### Iframe: 
A component to display GIFs in an iframe.
* #### InfoText: 
A simple component displaying introductory information about the app.

## Functionality
Users can search for movies by entering the title in the search bar and clicking the "Sök!" button.
The application fetches movie data from the OMDB API based on the user's search query.
If movies are found, they are displayed along with their release years and movie posters.
Users can click the "Generate GIFs!" button for each movie to fetch GIFs related to that movie from the GIPHY API.
Up to three GIFs are displayed for each movie in an iframe.
### Notes
The GIFs are fetched from GIPHY using their API. Make sure you have a stable internet connection to view GIFs properly.
The application has basic error handling for cases where no movies are found based on the search query or when GIFs cannot be generated.
