import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpotifyAuth from './components/SpotifyAuth';
import SpotifyCallback from './components/SpotifyCallback';
import './App.css';

const App = () => {

  return (
      <Router>

          <Routes>
              <Route path="/" element={<SpotifyAuth />} />
              <Route path="/callback" element={<SpotifyCallback />} /> 
          </Routes>

      </Router>
  );
};

export default App;
