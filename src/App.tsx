import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import ADAUniversityPage from './components/ADAUniversityPage'
import ItalyAzerbaijanUniversity from './components/ItalyAzerbaijanUniversity'
function App() {
  

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <BackgroundandCard />
            <StudyingADA />
            <DiscoverADA />
            <DifferentCampus />
            <Numbers />
            <MeetAlumni />
            <NewEvents />
            <Experience />
          </>
        } />
        <Route path="/ada-university" element={<ADAUniversityPage />} />
        <Route path="/italy-azerbaijan-university" element={<ItalyAzerbaijanUniversity />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
