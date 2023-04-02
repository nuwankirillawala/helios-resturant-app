import { SubHeading } from '../../../components'
import { images } from '../../../constants'
import './AboutHistory.scss'

export const HistoryItem = ({count, item}) => (
  <div className="history-item">
    <p className="p__cormorant" style={{color: '#DCCA87', fontSize: '45px'}}>{count}</p>
    <img src={images.spoon} alt="" />
    <p className="p__cormorant" style={{fontSize: '32px'}}>{item}</p>
  </div>
);

const AboutHistory = () => {
  return (
    <div className="app__aboutHistory app__bg flex__center section__padding">
      <div className="app__aboutHistory-title">
        <SubHeading title='Our History' />
        <h1 className="headtext__cormorant">Serving Customers For Over a Decade</h1>
      </div>

      <div className="app__aboutHistory-content">
        <div className="app__aboutHistory-content_left flex__center">
          <p className="p__opensans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid temporibus expedita ratione laboriosam veritatis, sunt ea ducimus. Voluptatibus, exercitationem excepturi.</p>
          <img src={images.historyleft} alt="history-image-left" />
        </div>

        <div className="app__aboutHistory-content_right flex__center">
          <img src={images.historyright} alt="history-image-right" />
          <div className="app__aboutHistory-content_right-content">
            <div className="app__aboutHistory-content_right-content_title">
              <p 
              className="p__cormorant" 
              style={{color: '#DCCA87', fontSize: '45px'}}
              >Over The Years</p>
            </div>

            <div className="app__aboutHistory-content_right-content_body">
              <HistoryItem count='50+' item='Breakfast Options'/>
              <div className='app__aboutHistory-dash' />
              <HistoryItem count='60+' item='Dinner Options'/>
              <div className='app__aboutHistory-dash' />
              <HistoryItem count='9' item='New Locations'/>
            </div>

          </div>



        </div>
      </div>
    </div>
  )
}

export default AboutHistory