import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Suggestions" />
      <h1 className="headtext__cormorant">Subscribe To Our Website</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button> 
    </div>
    <div className="app__newsletter-input flex__center">
    <input type="input" placeholder="Would you like to give any suggestions?" />
      <button type="button" className="custom__button">Submit</button>
    </div>
  </div>
);

export default Newsletter;