const Movie = ({ title, imageUrl, id, toggleFavoriteMovieToUser, user }) => {
  const favorite = user?.favoriteMovies?.includes(id);
  return (
    <article>
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      {user && (
        <button
          className={`btn ${favorite ? "favorite" : null}`}
          onClick={() => toggleFavoriteMovieToUser(id)}
        >
          {favorite ? "favorite" : "add favorite"}
        </button>
      )}
    </article>
  );
};
export default Movie;
