import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

//  41a7d216
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

const movie1 = {
        "Title": "Hellboy: The Crooked Man",
        "Year": "2024",
        "imdbID": "tt26757462",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWNmZTQ0Y2UtNDJhZC00Y2MwLWFjOWQtM2ZmNjFmMTU5Mjg5XkEyXkFqcGc@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies("Hellboy");
    }, [])

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
            <input
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src={searchIcon}
                alt = "search"
                onClick={() => searchMovies(searchTerm)}
            />
            </div>

            {movies?.length > 0
                ? (
                   <div className="container">
                     {movies.map((movie) => (
                        <MovieCard movie={movie} />
                     ))}
                   </div>        
                ) :  (
                    <div className="empty">
                        <h2>NO MOVIES FOUND</h2>
                    </div>
                )}
        </div>
    
    );
};

export default App;