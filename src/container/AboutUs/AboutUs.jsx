import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about-sponn" className="spoon__img"/>
          <p className="p__opensans">What started small, with a single small discount store and simple idea of sell more for less has grown over the last 50 years as one of the biggest E-commerce plateform of world.Each week nearly 12 million customers and members visit approximately 11,500 stores under 56 banners in 27 countries.</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.about} alt="about img"/>

      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about-sponn" className="spoon__img"/>
        <p className="p__opensans">WoodKart employs over 2.2 million associates worldwide. WoodKart continues to be a leader in sustainability, corporate philanthropy and employment opportunity.It's all part of our unwavering commitment to creating opportunities and bringing value to customers and communities around the world.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
