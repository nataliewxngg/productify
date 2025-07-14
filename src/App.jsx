import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Layout } from './Layout'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-in" element={<Signin />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
