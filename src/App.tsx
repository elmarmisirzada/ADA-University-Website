import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import BackgroundandCard from './components/BackgroundandCard'
import StudyingADA from './components/StudyingADA'
import DiscoverADA from './components/DiscoverADA'
import DifferentCampus from './components/DifferentCampus'
import Numbers from './components/Numbers'
import MeetAlumni from './components/MeetAlumni'
import NewEvents from './components/NewEvents'
import Experience from './components/Experience'

function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <BackgroundandCard />
      <StudyingADA />
      <DiscoverADA />
      <DifferentCampus />
      <Numbers />
      <MeetAlumni />
      <NewEvents />
      <Experience />
      <Footer/>
    </>
  )
}

export default App
