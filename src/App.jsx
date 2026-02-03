import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const {loading, data} = useAuth()
  console.log(loading);
  console.log(data);
  
  
  return (
    <>
    <Navbar />
    <Sidebar />
    </>
  )
}

export default App