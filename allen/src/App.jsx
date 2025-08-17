import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav/Nav.jsx'
import Banner from './components/Banner/Banner.jsx'
import CourseSection from './components/CourseSection/CourseSection.jsx'
import CourseSection2 from './components/CourseSection2/CourseSection2.jsx'
import Banner2 from './components/Banner2/Banner2.jsx'
import Banner3 from './components/Banner3/Banner3.jsx'
import Advantage from './components/Advantage/Advantage.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import './App.css'

function App() {
  const [isVisible, setisVisible] = useState(true)
  const [isBannerVisible,setisBannerVisible] = useState(true);

  return (
    <>
      <Nav isVisible={isVisible} isBannerVisible={isBannerVisible}></Nav>
      <Banner></Banner>
      <CourseSection></CourseSection>
      <CourseSection2></CourseSection2>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Advantage></Advantage>
      <Testimonials></Testimonials>
    </>
  )
}

export default App
