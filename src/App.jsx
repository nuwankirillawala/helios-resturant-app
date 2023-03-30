import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
