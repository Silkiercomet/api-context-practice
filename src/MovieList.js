import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import MoviesContenxt from "./Context/MoviesContenxt";
import Movie from "./Movie";
const MovieList = () => {
  const { toggleFavoriteMovieToUser, user } = useContext(UserContext);
  const data = useContext(MoviesContenxt);

  return (
    <main>
      {data.movies.map((movie) => (
        <Movie
          key={movie.id}
          {...movie}
          toggleFavoriteMovieToUser={toggleFavoriteMovieToUser}
          user={user}
        />
      ))}
    </main>
  );
};
export default MovieList;
