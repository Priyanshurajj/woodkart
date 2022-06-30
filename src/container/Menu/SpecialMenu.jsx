import React from 'react';
import {images, data} from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => {
  console.log(data.wines);
  const listItems= data.wines.map((item) =>
    <div className="app__specialMenu-card flex__center" key={item.id}>
      <div className="app__specialMenu-card_img">
        <img src={item.thumb}/>
      </div>

      <div className="app__specialMenu-card_header flex__center">
        <h2>{item.product_name}</h2>
        <p className="p__opensans">{item.description}</p>
        <p className="price">{item.price}<span>{item.currency}</span></p>
        <button  className="btn">Add to Cart</button>
      </div>
    </div>
  );


  return(
  <div className="app__bg app__specialMenu flex__center secion__padding" id="menu">

    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    
    <div className="app__specialMenu-mainContent flex__center">
      {/* <h3>WoodKart</h3> */}
     {listItems}
    </div>

  </div>
  )
}

export default SpecialMenu;

{/* <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index)=>(
              <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
        </div>
      </div>
    
       <div className="app__specialMenu-menu_img">
        <img src={images.menu}/>
       </div>

    <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
            {data.wines.map((cocktail, index)=>(
              <MenuItem key={cocktail.title+index}  title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
        </div>
      </div>
    </div> */}