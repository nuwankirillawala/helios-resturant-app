import React from 'react'
import { Navbar } from '../../components'
import { AboutHeader, AboutHistory, HappyHours } from '../../container'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHeader />
        <AboutHistory />
        <HappyHours />
    </div>
  )
}

export default About