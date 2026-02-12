import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'



const App = () => {
  
  
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/video/:id' element={<PlayingVideo />} />
    </Routes>
    
    </>
  )
}

export default App