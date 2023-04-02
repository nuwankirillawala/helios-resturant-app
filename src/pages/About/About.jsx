import React from 'react'
import { Navbar } from '../../components'
import { AboutHeader, AboutHistory, Chef, Footer, Gallery, HappyHours } from '../../container'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHeader />
        <AboutHistory />
        <HappyHours />
        <Chef />
        <Gallery />
        <Footer />
    </div>
  )
}

export default About