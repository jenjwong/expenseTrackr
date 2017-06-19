import React from 'react';
import './Background.css';

const Background = props => (
  <div className="background--wrapper">
    <div className="background--img">
      <img src={props.img} />
    </div>
    <div className="background--main-wrapper">
      {props.children}
    </div>
  </div>
  );

export default Background;
