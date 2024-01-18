import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use `Routes` instead of `Switch`
import Header from './components/Header';
import Home from './pages/Home';
import History from './pages/History';
import { Notfound } from './pages/Notfound';
import Footer from './components/Footer';

import './App.scss'
import Contact from './components/Contact';

function App() {

  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </main>
        {/* <Contact /> */}
        <Footer />
      </>
    </Router>

  )
}

export default App
