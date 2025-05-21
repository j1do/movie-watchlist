import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API = import.meta.env.VITE_API + '/movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');

  const fetchMovies = async () => {
    const res = await axios.get(API);
    setMovies(res.data);
  };

  const addMovie = async () => {
    if (!title.trim()) return;
    await axios.post(API, {
      title,
      year: '2024',
      poster: '',
      watched: false
    });
    setTitle('');
    fetchMovies();
  };

  const deleteMovie = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1>🎬 My Movie Watchlist</h1>
      <div className="input-group">
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button onClick={addMovie}>Add</button>
      </div>
      <ul className="movie-list">
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.title}
            <button onClick={() => deleteMovie(movie._id)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
