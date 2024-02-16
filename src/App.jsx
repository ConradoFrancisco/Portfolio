
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import './App.css'
function App() {

  


  return (
    <div className='bg-fondo-end'>
      <main className="h-screen bg-fondo-end ml-40 mr-40">
        <Navbar/>
        <Banner/>
      </main>
    </div>
  )
}

export default App
