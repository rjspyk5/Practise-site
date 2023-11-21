import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mainheader } from './Components/Header/Mainheader';
import { Mainfooter } from './Components/Footer/Mainfooter';
import { Nopage } from './Components/Nopage/Nopage';
import { Home } from './Components/Body/Home';








function App() {
  return (
    <BrowserRouter>
   < Mainheader/>
    <Routes>
   
        <Route path="*" element={<Nopage />} />
        <Route path="/" element={<Home/>} />
      
    </Routes>
    < Mainfooter/>
    
  </BrowserRouter>
  )
}

export default App
