import React, { Component } from "react";
import Slider from "react-slick";
import ".//../styles/Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {BiRightArrowCircle} from "react-icons/bi"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay :true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} className="Slider">
          <div className="image-container">
            <h1 className="text" >World's #1 Luxury Car Rental</h1>
            <h2 className="textR">Rent your dream car on daily or hourly basis.</h2>
            <Link to="/CarList">
            <button className="button">Rent Now<BiRightArrowCircle className="arrow"/></button>
            </Link>
            <img  className="SliderImg"  src='https://superiorrental.ae/wp-content/uploads/elementor/thumbs/Rolls-Royce-Ghost-pwh95oxr5s8vt5ucj8god2ypa3y953lnofcjwb5bpw.jpg' alt="Rolls-Roys"/>
          </div>
          <div className="image-container">
            <h1 className="text">World's #1 Luxury Car Rental</h1>
            <h2 className="textR">Rent your dream car on daily or hourly basis.</h2>
            <Link to="/CarList">
            <button className="button">Rent Now<BiRightArrowCircle className="arrow"/></button>
            </Link>
            <img className="Slider" src='https://img.jamesedition.com/listing_images/2023/09/08/12/27/48/0fed7d98-993c-46f2-bc07-8ca699c5eff7/je/1112x684xcxm.jpg' alt="Aston-Martin"/>
          </div>
          <div className="image-container">
            <h1 className="text">World's #1 Luxury Car Rental</h1>
            <h2 className="textR">Rent your dream car on daily or hourly basis.</h2>
            <Link to="/CarList">
            <button className="button">Rent Now<BiRightArrowCircle className="arrow"/></button>
            </Link>
            <img className="Slider" src='https://img.jamesedition.com/listing_images/2023/09/15/16/09/16/202a11b4-4f47-44bb-995c-975fa5b70607/je/1112x684xcxm.jpg' alt="Bently"/>
          </div>
          <div className="image-container">
            <h1 className="text">World's #1 Luxury Car Rental</h1>
            <h2 className="textR">Rent your dream car on daily or hourly basis.</h2>
            <Link to="/CarList">
            <button className="button">Rent Now<BiRightArrowCircle className="arrow"/></button>
            </Link>
            <img className="Slider" src='https://img.jamesedition.com/listing_images/2023/09/11/11/43/34/5cad8eb2-0de7-44aa-9f13-92e0efa4a471/je/1112x684xcxm.jpg' alt="Audi"/>
          </div>
          <div className="image-container">
            <h1 className="text">World's #1 Luxury Car Rental</h1>
            <h2 className="textR">Rent your dream car on daily or hourly basis.</h2>
            <Link to="/CarList">
            <button className="button">Rent Now<BiRightArrowCircle className="arrow"/></button>
            </Link>
            <img className="Slider" src='https://img.jamesedition.com/listing_images/2022/11/03/14/30/11/8001e2c9-a44e-45ab-a1cc-eb200bf89d64/je/1112x684xcxm.jpg' alt="Mercedes"/>
          </div>
        </Slider>
      </div>
    );
  }
}