import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const photos = [
  {
    name: "Chitral",
    alt: "Chitral",
    source:
      "https://images.unsplash.com/photo-1506755594592-349d12a7c52a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },

  {
    name: "Gilgit",
    alt: "Gilgit",
    source: "https://blog.flock.com/hubfs/blog-workplacetension.png",
  },

  {
    name: "Swat",
    alt: "Swat",
    source: "https://blog.flock.com/hubfs/blog-workplacetension.png",
  },
  {
    name: "Skardu",
    alt: "Skardu",
    source: "https://blog.flock.com/hubfs/blog-workplacetension.png",
  },
];

class Xlider extends Component {
  constructor() {
    super();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 800,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      className: "slides",
    };
    return (
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img
                style={{ height: "500px" }}
                src={photo.source}
                alt={photo.alt}
              />
              <div className='slider_text text-center' id='slider_details'>
                <h3>{photo.name}</h3>
                <p>PLAN YOUR NEXT TRIP WITH US</p>
                <div className='plan_btn'>
                  <Link to='/maketrip' className='boxed-btn3' id='btn_plan'>
                    Make my trip
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Xlider;
