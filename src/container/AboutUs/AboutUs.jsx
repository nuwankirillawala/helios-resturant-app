import { useNavigate } from 'react-router-dom';
import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate('/about');
  }
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.H} alt="H Letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon-img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate corrupti ratione suscipit. Debitis ullam adipisci dignissimos sit eum esse corrupti!
        </p>
        <button type='button' className='custom__button' onClick={handleClick}>See more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon-img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate corrupti ratione suscipit. Debitis ullam adipisci dignissimos sit eum esse corrupti!
        </p>
        <button type='button' className='custom__button'>See more</button>
      </div>
    </div>
  </div>
  );
}

export default AboutUs;
