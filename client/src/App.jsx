import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Fetches, Form, Gallery, Home, Loader, Login, Repeater } from './pages'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/fetches' Component={Fetches} />
          <Route path='/form' Component={Form} />
          <Route path='/gallery' Component={Gallery} />
          <Route path='/loader' Component={Loader} />
          <Route path='/login' Component={Login} />
          <Route path='/repeater' Component={Repeater} />
        </Routes>
      </Router>
    </>
  )
}

export default App
