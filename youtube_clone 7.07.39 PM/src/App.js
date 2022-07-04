
import './App.css';
import Searchpage from './Searchpage';
import Homepage from './Homepage';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { StrictMode } from 'react';
import Header from './Header';
import ThemeContext, { themes } from './Theme_context';
import SearchContext from './SearchContext';
import VideoContext from './VideoContex';
import { useState } from 'react';
import Videopage from './Videopage';



function App() {
  const [theme, setTheme] = useState(themes.light);
  const [keyword, setKeyword] = useState("");
  const [selectedvideo, setSlecetedvideo] = useState("");
  return (
    <StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <SearchContext.Provider value={{ keyword, setKeyword }}>
          <VideoContext.Provider value={{ selectedvideo, setSlecetedvideo }}>
            <Router>
              <Header />
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/search/:keyword" element={<Searchpage />} />
                <Route path="/video/:id" element={<Videopage />} />
              </Routes>
            </Router>
          </VideoContext.Provider>
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </StrictMode>
  );
}

export default App;
