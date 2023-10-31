import React from "react";
// @ts-ignore
import Slider from "react-slick";
import KidsComboCarouselCard from "./KidsComboCarouselCard.web";
import KidsComboController from "./KidsComboController.web";
import { kidsComobodata } from "./KidsComboData";
import { LeftArrow, CarouselBg } from "./assets";
import { createStyles, withStyles } from '@material-ui/core';
class KidsCombo extends KidsComboController {

  renderPrevBtn = () => {
    const { classes } = this.props
    return (
      <img
        src={LeftArrow}
        onClick={this.handlePrevAmenities}
        className={classes.arrowStylePre}
      />
    );
  };
  renderNextBtn = () => {
    const { classes } = this.props
    return (
      <img
        src={LeftArrow}
        onClick={this.handleNextAmenities}
        className={classes.arrowStyle}
      />
    );
  }
  settings: any;
  render() {
    const { classes } = this.props
    const settings = {
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: 10,
      dotsClass: `slick-dots ${classes.dots}`,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    };
    return (
      <div className={classes.carouselMain}>
        <div className={classes.carouselMainBackgroundColor}>
          <span className={classes.carouselCardHeading}>Kids Combo</span>
          <p className={classes.carouselCardSubHeading}>
            Children Below 4 feet height are eligible for these tickets
          </p>
          <div className={classes.slider}>
            <div className={classes.slider1}>
              <Slider
                ref={this.state.zRef}
                {...settings}
              >
                {kidsComobodata.map((item, index) => {
                  return <KidsComboCarouselCard key={index} data={item} classes={classes} />;
                })}
              </Slider>
            </div>

            <div className={classes.nextPrevBtnContainer}>
              {this.renderPrevBtn()}
              {this.renderNextBtn()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const muistyles = (theme: any) => createStyles({
  dots: {
    bottom: 0,
    "& li.slick-active button::before": {
      color: "#fff",
    },
    "& li": {
      "& button::before": {
        fontSize: theme.typography.pxToRem(10),
        color: "#DCDCDC",
        opacity: 1,
      },
    },
    "@media(max-width:1440px)": {
      bottom: "-12px",
    },

  },
  carouselMain: {
    padding: '30px',
    backgroundImage: `url(${CarouselBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 689,
    position: 'relative',
    width: '100%',
    margin: '0 auto',
    "@media(max-width:1279px)": {
      height: 523,
    },
  },
  carouselMainBackgroundColor: {
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#1337a19e',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    "@media(max-width:1279px)": {
      height: 523,
    },
  },
  carouselCardHeading: {
    color: '#fff',
    fontWeight: 700,
    fontFamily: '"Montserrat", sans-serif',
    textAlign: 'center',
    fontSize: '32px',
    fontVariant: 'small-caps',
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    }
  },
  carouselCardSubHeading: {
    fontFamily: '"Montserrat", sans-serif',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontWeight: 600,
    fontSize: '20px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
      fontWeight: 500,
      width:"70%",
      alignSelf:"center"
    }
  },
  slider: {
    position: 'relative',
  },
  carouselCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '387px',
    width: "95%",
    margin: "0px auto",
    backgroundColor: 'white',
    gap: 30,
    padding: 25,
    "@media(max-width:1920px)": {
      height: '446px',
      width: "780px",
    },
    "@media(max-width:1700px)": {
      width: "730px",
    },
    "@media(max-width:1650px)": {
      width: 618,
      height: 387,
      padding: 20,
      gap: 16,
      borderRadius:5
    },
    "@media(max-width:1400px)": {
      width: 556,
      height: 357,
      padding: 20,
      gap: 16,
      borderRadius:5
    },
    "@media(max-width:1250px)": {
      width: 546,
      height: 357,
      padding: 20,
      gap: 16,
      borderRadius:5
    },
    "@media(max-width:1200px)": {
      width: 480,
    },
    "@media(max-width:1080px)": {
      width: 441,
      height: 290,
    },

    "@media(max-width:600px)": {
      width: 304,
      height: 274,
      padding: 12,
      gap: 10,
      borderRadius:10
    },
  },
  CarouselImageImageContainer: {
    height: '335px',
    width: 'auto',
    borderRadius: '10px',
    "@media(max-width:1920px)": {
      height: '366px',
      width: "auto",
    },
    "@media(max-width:960px)": {
      height: '250px',
      width: "100px",
    },
  },
  CarouselImageImage: {
    height: '366px',
    width: '385px',
    borderRadius: '10px',
    "@media(max-width:1920px)": {
      height: '385px',
      width: "366px",
    },
    "@media(max-width:1700px)": {
      width: "330px",
    },
    "@media(max-width:1650px)": {
      height: '335px',
      width: "290px",
      objectFit:"cover"
    },
    "@media(max-width:1400px)": {
      height: '309px',
      width: "267px",
    },
    "@media(max-width:1250px)": {
      height: '309px',
      width: "257px",
    },
    "@media(max-width:1200px)": {
      width: "215px",
    },
    "@media(max-width:1080px)": {
      width: "200px",
      height: "250px"
    },
    "@media(max-width:960px)": {
      height: '250px',
      width: "100px",
      objectFit:"cover"
    },
  },
  carouselCardDetailContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: "100%",
    "@media(max-width:1440px)": {
      height: '95%',
    },
    "@media(max-width:1080px)": {
      height: '100%',
    },
  },
  carouselCardDetailInnerContainer:{
marginTop:"-15px"
  },
  carouselCardDetailHeading: {
    color: '#1e5ee9',
    fontFamily: '"Liberteen Medium", sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    "@media(max-width:1920px)": {
      fontSize: '24px',
    },
    "@media(max-width:1400px)": {
      fontSize: '16px',
    },
    "@media(max-width:960px)": {
      fontSize: '14px',
      marginBottom:0
    },
  },
  carouselCardDetailWeekdayHeading: {
    color: '#828282',
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 500,
    fontFamily: '"Montserrat", sans-serif',
    marginBottom: 0,
    "@media(max-width:1920px)": {
      fontSize: '16px',
    },
    "@media(max-width:1280px)": {
      fontSize: '16px',
    },
    "@media(max-width:1024px)": {
      fontSize: '16px',
    },
    "@media(max-width:960px)": {
      fontSize: '12px',
    },
  },
  carouselCardDetailWeekdayTime: {
    fontWeight: 600,
    color: '#334155',
    fontSize: '20px',
    fontFamily: '"Montserrat", sans-serif',
    marginBottom: 0,
    "@media(max-width:1920px)": {
      fontSize: '30px',
    },
    "@media(max-width:1440px)": {
      fontSize: '20px',
    },
    "@media(max-width:1024px)": {
      fontSize: '16px',
    },
    "@media(max-width:960px)": {
      fontSize: '16px',
    },
  },
  carouselCardDetailWeekdaySubheading: {
    textAlign: 'left',
    fontSize: '12px',
    color: '#828282',
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    marginBottom: 0,
  },
  carouselCardDetailWeekdayDetails: {
    color: 'var(--black, #334155)',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    textDecoration: 'underline',
    fontFamily: '"Montserrat", sans-serif',
    marginBottom: 0,
  },
  carouselCardDetailPrice: {
    textAlign: 'left',
    color: 'var(--black, #334155)',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    marginBottom: 0,
    "@media(max-width:1920px)": {
      fontSize: '24px',
    },
    "@media(max-width:1440px)": {
      fontSize: '20px',
    },
    "@media(max-width:1024px)": {
      fontSize: '16px',
    },
  },
  carouselCardDetailPriceSubheading: {
    textAlign: 'left',
    fontFamily: '"Montserrat", sans-serif',
    color: 'var(--Gray-3, #828282)',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    "@media(min-width:1920px)": {
      fontSize: '14px',
    },
    marginBottom: 0,
  },
  carouselCardDetailButton: {
    border: 'none',
    backgroundColor: '#2b65eb',
    borderRadius: '5px',
    height: '48px',
    color: 'white',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    fontVariant: 'small-caps',
    width: '80%',
    "@media(max-width:1920px)": {
      width:264,
      height: '60px',
    },
    "@media(max-width:1440px)": {
      height: '48px',
      width:"225px"
    },
    "@media(max-width:1280px)": {
      height: '44px',
      width:"207px"
    },
    "@media(max-width:1200px)": {
      height: '38px',
      width:"173px"
    },
    // [theme.breakpoints.down('md')]: {
    //   height: 38,
    //   width: "100%",
    //   fontSize: '14px',
    // }
  },
  carouselBtnContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#fbe05b',
    color: '#839ce8d6',
    fontSize: '17px',
    
  },
  nextPrevBtnContainer: {
    top: '55%',
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      top: '51%',
    },
  },
  prevBtn: {
    marginLeft: '30px',
  },
  nextBtn: {
    marginRight: '30px',
  },
  slider1: {
    padding: '0px 70px',
    marginTop: '35px',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      padding: '0px 35px',
      marginTop: '20px',
    },
  },
  arrowStyle: {
    height: '40px',
    width: '40px',
    marginRight: '40px',
    "@media(max-width:1750px)": {
      marginRight: '25px',
    },
    "@media(max-width:1279px)": {
      height: '30px',
      width: '30px',
      marginRight: '12px',
    },
    "@media(max-width:1000px)": {
      marginRight: '6px',
    },
    "@media(max-width:400px)": {
      marginRight: '2px',
    },
  },
  arrowStylePre: {
    height: '40px',
    width: '40px',
    transform: 'rotate(180deg)',
    marginLeft: '40px',
    "@media(max-width:1750px)": {
      marginLeft: '25px',
    },
    "@media(max-width:1279px)": {
      marginLeft: '12px',
      height: '30px',
      width: '30px',
    },
    "@media(max-width:1000px)": {
      marginLeft: '6px',
    },

    "@media(max-width:400px)": {
      marginLeft: '2px',
    },
  }
})

export default withStyles(muistyles)(KidsCombo);
export { KidsCombo };
