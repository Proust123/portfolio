import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Contact from './Components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/skills' element={ <Skills /> }/>
        <Route path='/work' element={ <Work /> }/>
        <Route path='/contact' element={ <Contact /> }/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App