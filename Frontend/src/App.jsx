import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import Authentication from './pages/auth'
import MainMenu from './pages/menu'
import TestPage from './pages/testpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Authentication/>} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App
