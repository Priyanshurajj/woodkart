import React from 'react';
import {images, data} from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import { BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { MdChargingStation } from 'react-icons/md';

const Gallery = () => {
const scrollRef=React.useRef(null);

return(
  <div className="app__gallery flex_center">
    <div className="app__gallery-content">
      <Subheading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color:'#AAA', marginTop: '2rem'}}>Lorem10
      </p>
      <button type="button" className="custom__button">View More</button>

    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>

      </div>
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className=""/>
      </div>
    </div>
  </div>
);
}
export default Gallery;
