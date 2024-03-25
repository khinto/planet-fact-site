import { useState } from 'react'

import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Planet from './components/planet/Planet'
import Header from './components/header/Header'
import Dashboard from './components/planet/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Mercury' element={<Planet />} />
          <Route path='/Venus' element={<Planet />} />
          <Route path='/Earth' element={<Planet />} />
          <Route path='/Mars' element={<Planet />} />
          <Route path='/Jupiter' element={<Planet />} />
          <Route path='/Saturn' element={<Planet />} />
          <Route path='/Uranus' element={<Planet />} />
          <Route path='/Neptune' element={<Planet />} />

        </Routes>
    
      </BrowserRouter>
      
    </>
  )
}

export default App
