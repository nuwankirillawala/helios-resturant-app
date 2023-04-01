import { data, images } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.scss';

const SpecialMenu = () => (
  <div className='app__specialMenu flex_center section__padding' id='specialmenu'>
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__speacialMenu-menu-heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={index + wine.title} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>

      <div className="app__specialMenu-menu-cocktails flex__center">
        <p className="app__speacialMenu-menu-heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">

            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={index + cocktail.title} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>

    </div>

    <div className='app__specialMenu-button'>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
