import React from 'react';

import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Chef.css';


const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.i11} />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Founder's Word" />
      <h1 className="headtext__cormorant">What we belive in</h1>


    <div classname="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} />
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquam?</p>

      </div>
      <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita animi fugiat in!</p>
    </div>

  <div className="app__chef-sign">
    <p>Priyanshu</p>
    <p className="p__opensans">CEO & Founder</p>
    <img src={images.sign}/>
  </div>
    </div>
  </div>
);

export default Chef;
