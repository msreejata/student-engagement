import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Authentication from './pages/auth'
import MainMenu from './pages/menu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/menu" element={<MainMenu />} />
      </Routes>
    </div>
  )
}

export default App
