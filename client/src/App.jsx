import './styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Header } from './components'
import { Fetches, Form, Gallery, Home, Loader, Login, Repeater } from './pages'

function App() {

  return (
    <>
      <Router>
        <div className='flex m-4 text-white'>
          <Navbar />
          <div className='flex flex-col ml-4'>
            <Header />
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/fetches' Component={Fetches} />
              <Route path='/form' Component={Form} />
              <Route path='/gallery' Component={Gallery} />
              <Route path='/loader' Component={Loader} />
              <Route path='/login' Component={Login} />
              <Route path='/repeater' Component={Repeater} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
