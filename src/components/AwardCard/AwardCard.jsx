import './AwardCard.scss'

const AwardCard = ({award}) => {
  return (
    <div className="app__awardCard">
        <div className="app__awardCard-img">
            <img src={award.imgUrl} alt="award_image" />
        </div>
        <div className="app__awardCard-content">
            <p className="p__cormorant" style={{color:'#DCCA87'}}>{award.title}</p>
            <p className="p__opensans" style={{color:'#AAA'}}>{award.subtitle}</p>
        </div>
    </div>
  )
}

export default AwardCard;