
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Banner from './components/layout/Banner';
import ComingSoon from './pages/ComingSoon';

function App() {

  return (
    <div className='relative'>
      <Banner />
     <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<ComingSoon />}></Route>
          <Route path='/testimonials' element={<ComingSoon />}></Route>
          <Route path='/contact' element={<ComingSoon />}></Route>
        </Routes>
      </div>

     <Footer />
    </div>
  )
}

export default App
