import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import SignIn from './components/signin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        {/* Add more routes here for other pages */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/courses" element={<Courses />} /> */}
        {/* <Route path="/tools" element={<Tools />} /> */}
      </Routes>
    </div>
  )
}

export default App
