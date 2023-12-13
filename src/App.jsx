import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';


function App() {


  return (
    <>
      <div>

        <Routes>
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/innerpage' element={<Inner />} />
        <Route path='*' element={<NotFound />} />*/}
        </Routes>

      </div>

    </>
  )
}

export default App
