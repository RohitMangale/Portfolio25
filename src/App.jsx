
import './App.css'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import CreativeFooter from './components/CreativeFooter'
import Home from './Home'
import Projects from './Projects'

function App() {


  return (
    <>
    <div className=" h-fit bg-bg min-h-screen ">
      <Navbar/>
      <Home/>
      {/* <LandingPage/> */}
      <Projects/>
      <CreativeFooter/>
      {/* <h1 className='text-white' >Welcome to React</h1> */}
    </div>
    </>
  )
}

export default App
