import "./styles.css";
import { MoviesProvider } from "./Context/MoviesContenxt";
import { UserProvider } from "./Context/UserContext";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
export default function App() {
  return (
    <UserProvider>
      <MoviesProvider>
        <Navbar />
        <div className="App">
          <MovieList />
        </div>
      </MoviesProvider>
    </UserProvider>
  );
}
