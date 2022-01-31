import React, { createContext, useState, useRef } from "react";

const UserContext = createContext();

const initialUser = { id: 1, name: "Miguel", favoriteMovies: [] };

const UserProvider = ({ children }) => {
  let ref = useRef(initialUser);
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(ref.current);
  };

  const logout = () => {
    ref.current = user;
    setUser(null);
  };

  const toggleFavoriteMovieToUser = (movieId) => {
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter((favMovId) => favMovId !== movieId) // Delete
      : [...user.favoriteMovies, movieId]; // Add

    setUser({
      ...user,
      favoriteMovies
    });
  };

  const data = { user, login, logout, toggleFavoriteMovieToUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
