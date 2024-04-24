
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/layout/Footer'
import Nav from './components/layout/Nav'
import Home from './pages/Home'

function App() {

  return (
    <div className='relative'>
     <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>

     <Footer />
    </div>
  )
}

export default App
