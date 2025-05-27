
import './App.css'
import Navbar from './components/Navbar'
import Projects from './Projects'
import AboutMeContainer from './components/AboutMeContainer'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Skills from './components/Skills'

function App() {
  


  return (
    <>
    <div className=" h-fit bg-black min-h-screen  p-0 ">
      <div className='relative z-10 mt-0'>
      <Navbar/>
      <LandingPage/>
      <AboutMeContainer/>
      <Skills/>
      <Projects/>
      <Footer/>

      </div>

      <div className="fixed inset-0 z-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-800/20" />
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-3/4 left-1/2 w-1/4 h-1/4 bg-blue-400/10 rounded-full blur-[100px]" />
      </div>
    </div>
    </>
  )
}

export default App
