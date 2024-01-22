import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './pages/Home';
import History from './pages/History';
import { Notfound } from './pages/Notfound';
import Footer from './components/Footer';

import './App.scss'

function App() {

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  )
}

export default App
