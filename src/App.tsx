
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import WorkProcess from './pages/WorkProcess'
import Reviews from './pages/Reviews'
import Appointment from './pages/Appointment'
import Footerr from './components/Footer'

const App = () => {
  return (
    <>
      <div  className=''> 
        <Navbar />
        <Home />
        <About />
        <Services />
        <WorkProcess />
        <Reviews />
        <Appointment />
        <Footerr />
      </div>
    </>
  )
}

export default App