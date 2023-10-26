import { Video } from "./assets";
import React, { Component } from "react";
import { Box, Hidden, createStyles, withStyles } from "@material-ui/core";

const muistyles = (theme: any) =>
  createStyles({
    bannerContainer: {
      width: '100%',
      height: '602px',
      "@media(max-width:1920px)": {
        height: '602px',
      },
      "@media(max-width:1440px)": {
        height: '602px',
      },
      "@media(max-width:1280px)": {
        height: '500px',
      },
      "@media(max-width:960px)": {
        height: '358px',
      },
      "@media(max-width:600px)": {
        height:237
      },
      position: 'relative',
      margin: 0
    },
    bannerVideo: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: -1
    },
    textBox: {
      zIndex: 1,
      backgroundColor: "#2b65ec80",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 20
    },
    bannerPara: {
      fontSize: '18px',
      fontWeight: 500,
      textAlign: 'center',
      fontFamily: 'Montserrat, sans-serif',
      lineHeight: '25px',
      color: "#fff",
      marginBottom: 0,
      [theme.breakpoints.up('xl')]: {
        width: '60.5%',
        fontSize: '18px',
      },
      "@media(max-width:1280px)": {
        fontSize: '18px',
        fontWeight: 500,
        width: '85%',
      },
      "@media(max-width:1440px)": {
        fontSize: '18px',
        fontWeight: 500,
        width: '75%',
      },
      "@media(max-width:1024px)": {
        fontSize: '14px',
        fontWeight: 500,
        width: '73%',
      },
      "@media(max-width:991px)": {
        fontSize: '14px',
        fontWeight: 500,
        width: '75%',
      },
      "@media(max-width:600px)": {
        fontSize: '12px',
        width: "75%",
        lineHeight: "17px"
      },
    },
    textColor: {
      color: '#ffde59',
      fontFamily: 'Liberteen Medium, sans-serif',
      fontWeight: 700,
    },
    paraTextColor: {
      color: '#ffde59',
    },
    bannerHeading: {
      fontFamily: 'Liberteen Medium, sans-serif',
      fontSize: '32px',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '32px',
      },
      color: 'white',
      fontWeight: 700,
      lineHeight: 'normal',
      marginBottom: 0
    },
    hideMediaControls: {
      '& audio::-webkit-media-controls-timeline': {
        display: 'none',
      },
      '& video::-webkit-media-controls-timeline': {
        display: 'none',
      },
      '& audio::-webkit-media-controls': {
        display: 'none',
      },
      '& video::-webkit-media-controls': {
        display: 'none',
      },
    }

  })


export class Banner extends Component<any> {

  render() {
    const { classes } = this.props
    return (
      <Box className={classes.bannerContainer}>
        <video className={classes.bannerVideo} controls autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <div className={classes.textBox}>
          <h3 className={classes.bannerHeading}>
            Welcome to <span className={classes.textColor}>EOD Adventure Park!</span>
          </h3>
          <Hidden smDown>
            <p className={classes.bannerPara}>
              EOD Largest Family{" "}
              <span className={classes.paraTextColor}>Entertainment Center</span>, where
              excitement and fun await at every turn! Immerse yourself in a world
              of <span className={classes.paraTextColor}>thrilling rides</span>, interactive
              games, and unforgettable experiences for all ages. Adventure Park
              INDIA, offers <span className={classes.paraTextColor}>parents relax</span> in
              our tranquil <span className={classes.paraTextColor}>picnic areas</span>. With
              delicious food options and{" "}
              <span className={classes.paraTextColor}>friendly staff</span>, our family
              adventure part is the perfect destination for creating lifelong{" "}
              <span className={classes.paraTextColor}>memories</span> together. Join us today
              and let the adventure begin!
            </p>
          </Hidden>
          <Hidden mdUp>
            <p className={classes.bannerPara}>
              EOD Largest Family{" "}
              <span className={classes.paraTextColor}>Entertainment Center</span>,<br />where
              excitement and fun await at every turn! Immerse yourself in a world
              of <span className={classes.paraTextColor}>thrilling rides</span>, interactive
              games, and unforgettable experiences for all ages.
            </p>
          </Hidden>
        </div>
      </Box>
    );
  }
}


export default withStyles(muistyles)(Banner);
