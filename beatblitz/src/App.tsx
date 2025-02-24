import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpotifyAuth from './components/SpotifyAuth';
import SpotifyCallback from './components/SpotifyCallback';
import Dashboard from './pages/Dashboard';
import './App.css';

const App = () => {

  return (
      <Router>

          <Routes>
              <Route path='/' element={<SpotifyAuth />} />
              <Route path='/callback' element={<SpotifyCallback />} /> 
              <Route path='/dashboard' element={<Dashboard />} />
          </Routes>

      </Router>
  );
};

export default App;
