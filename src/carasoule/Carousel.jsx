import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const Slider = () => {
  const imageStyle = {
    maxWidth: "100%", // Set maximum width to prevent overflow
    maxHeight: "100%", // Set a maximum height (adjust as needed)
    // width: "auto", // Allow the width to adjust based on the aspect ratio
    // height: "auto", // Allow the height to adjust based on the aspect ratio
  };

  return (
    <Carousel>
      <div className="">
        <img style={imageStyle} src="1.jpg" />

        <p className="legend w-3 ">Beautiful</p>
      </div>
      <div>
        <img style={imageStyle} src="2.jpg" />
        <p className="legend w-3 ">Kids</p>
      </div>
      <div>
        <img style={imageStyle} src="3.jpg" />
        <p className="legend w-3">Harmony</p>
      </div>
    </Carousel>
  );
};
