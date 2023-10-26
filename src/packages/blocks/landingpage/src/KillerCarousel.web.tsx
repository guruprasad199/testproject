import React, { Component } from "react";
//Customizable area start
import { Carousel } from "react-responsive-carousel";
import { data } from "./KillercarouselData";
import KillerCard from "./KillerCard.web";
import { promo } from "./assets";
//Customizable area end

class KillerCarouselComponent extends Component {
  //Customizable area start
  
  renderCarousel = () => {
    return (
      <div className="carousel-container">
        <img src={promo} alt="" className="carousel-container-bgImg" />
        <Carousel
          className="slider"
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
        >
          {data.map((item: any, index: any) => {
            return <KillerCard data={item} key={index} />;
          })}
        </Carousel>
      </div>
    );
  }; //Customizable area end
  //Customizable area start

  render() {
    return <div>{this.renderCarousel()}</div>;
  }
}
//Customizable area end

export default KillerCarouselComponent;
export { KillerCarouselComponent };
