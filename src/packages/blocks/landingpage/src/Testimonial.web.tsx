import React, { Component } from "react";

// @ts-ignore
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard.web";
import { TestimonialCardData } from './TestimonialCardData'
import { Hidden, createStyles, withStyles } from "@material-ui/core";

class Testimonial extends Component<any> {

  render() {
    const {classes}= this.props
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
      speed: 500,
      arrows: false,
      adaptiveHeight: true,
      centerPadding:10,
      dotsClass: `slick-dots ${classes.dots}`,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
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
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className={classes.testimonial}>
        <div className={classes.testiimonialHeader}>
          <h1 className={classes.testimonialHeading}>Our blessed client said about us</h1>
          <Hidden mdDown>
          <p className={classes.testimonialView}>View All</p>
          </Hidden>  
        </div>
        <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", alignSelf:"center"}}>
          <div className={classes.sliderContainer} style={{height:"85%",  display:"flex", alignItems:"center", justifyContent:"center", alignSelf:"center"}}>
          <Slider {...settings} className={classes.testimonialSlider} style={{ width: "95%" }}>
            {
              TestimonialCardData.map((item: any, index: number) => {
                return <TestimonialCard
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  key={index}
                />
              })
            }
          </Slider>
        </div>
        </div>
        

      </div>
    );
  }
}
const muiSTyles = (theme:any)=>createStyles({
  dots: {
    "& li.slick-active button::before": {
          width: "30px",
          backgroundColor: 'var(--primary, #2B65EC)',
          marginLeft:"1px"
    },
    "& li": {
      "& button::before": {
          content: "' '",
          width: "10px",
          height: "10px",
          backgroundColor: '#686666',
          borderRadius: "5px",
          transition: "0.3s",
          margin:"10px"
      },
    },
  },
  sliderContainer:{
    width:"100%",
    "@media(min-width:1920px)":{
      width:"90%"
    }
  },
testimonial:{
  height:750,
  backgroundColor: "#eff3ff",
  fontFamily: "Montserrat, sans-serif",
  "@media(max-width:1440px)":{
    height: 667,
  },
  "@media(max-width:1280px)":{
    height: 706,
  },
  "@media(max-width:1024px)":{
    height: 562,
  },
  "@media(max-width:768px)":{
    height: 464,
  }
},
testiimonialHeader:{
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  position:"relative",
  justifyContent:"center",
  height:"120px",
  "@media(max-width:768px)":{
    height: 70,
  }
},
testimonialHeading:{
  color: "var(--primary, #2B65EC)",
  fontSize: 32,
  fontWeight: 700,
  "@media(max-width:768px)":{
    fontSize: 16,
  }
},
testimonialView:{
  position:"absolute",
  color: "var(--primary, #2B65EC)",
  right:60,
  fontSize: 20,
  fontWeight: 500,
},
testimonialSlider:{
  height:"100%"
}
})



export default withStyles(muiSTyles)(Testimonial);
export { Testimonial };
