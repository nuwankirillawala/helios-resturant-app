import { images } from "../../../constants"
import './AboutHeader.scss'

const AboutHeader = () => {
  return (
    <div className='app__aboutHeader'>
      {/* <div className="app__aboutHeader-img"> */}
        <img src={images.aboutheader} alt="about_header" />
      {/* </div> */}

      <div className="app__aboutHeader-overlay flex__center section__padding">
        <div className="app__aboutHeader-overlay_content">
          <h1 className="headtext__cormorant">Welcome to Helios</h1>
          <p className="p__opensans">Home {'>'} About Us</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHeader