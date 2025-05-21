import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/movies';

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
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Movie Watchlist</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Movie Title"
      />
      <button onClick={addMovie}>Add</button>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.title}
            <button onClick={() => deleteMovie(movie._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
