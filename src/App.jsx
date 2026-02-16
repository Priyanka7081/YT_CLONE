import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
import PlayingVideo from './Components/PlayingVideo'
import { useAuth } from './context/AuthProvider'
import Loading from './loader/Loading'



const App = () => {
  
  const {loading}=useAuth()
  
  return (
    
    <div>
      {loading && <Loading />}
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/search/:searchQuery' element={<Search />} />
      <Route path='/video/:id' element={<PlayingVideo />} />
    </Routes>
    
    </div>
  )
}

export default App