import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);

  const addNewMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie]; // add the new movie to the old array of movies
    setMovies(updatedMovies);
  };

  return (
    <div>
      <AddMovie addMovie={addNewMovie} />
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
