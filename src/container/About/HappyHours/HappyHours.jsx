import { SubHeading } from '../../../components'
import {Intro } from '../../../container';
import './HappyHours.scss'

export const HappyHours = () => {
  return (
    <div className="app__happyHours flex__center section__padding">
      <div className="app__happyHours-title">
        <SubHeading title='About Us' />
        <h1 className="headtext__cormorant">Happy Hours With Us</h1>
        <p className="p__opensans" style={{color: '#AAA'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eligendi officiis eum aut error! Soluta officia sed laudantium non velit dolore optio sequi, labore quibusdam beatae. Fuga eaque numquam harum!</p>
      </div>

      <div className="app__happyHours-video">
        <Intro />
      </div>
    </div>
  )
}
