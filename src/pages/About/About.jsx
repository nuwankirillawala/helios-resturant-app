import React from 'react'
import { Navbar } from '../../components'
import { AboutHeader, AboutHistory } from '../../container'

const About = () => {
  return (
    <div>
        <Navbar />
        <AboutHeader />
        <AboutHistory />
    </div>
  )
}

export default About