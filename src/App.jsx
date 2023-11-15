import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import './App.css'
import GameWindow from './components/GameWindow'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/game' element={<GameWindow />} />
          {/* 
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
