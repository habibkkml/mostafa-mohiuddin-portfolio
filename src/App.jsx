import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use `Routes` instead of `Switch`
import Header from '../public/components/Header';
import Home from '../public/components/Home';
import About from '../public/components/About';
import History from '../public/components/History';
import { Notfound } from '../public/components/Notfound';

import './App.scss'

function App() {

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Notfound />} />
          {/* Add more routes for other components */}
        </Routes>

      </>
    </Router>

  )
}

export default App
