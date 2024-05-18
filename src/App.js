
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './components/VideoPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
