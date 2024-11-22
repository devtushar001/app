import React from "react";
import './ImageCarousel.css'
const ImageCarousel = (props) => {
   const {fphoto, sphoto} = props;
  return (
    <div className="slider">
      <div className="slides">
        <div className="slide">
          <img src={fphoto} alt="" />
          <img src={sphoto} alt="" />
        </div>
      </div>
      <div className="navigation">
      </div>
    </div>
  );
};

export default ImageCarousel;
