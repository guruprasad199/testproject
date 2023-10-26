import React, { Component } from "react";
import ComoboCards from "./ComoboCards.web";
import { Container, createStyles, withStyles } from "@material-ui/core";
export class AdultsCombo extends Component<any> {
  render() {
    const { classes } = this.props
    return (
      <Container maxWidth="xl" className={classes.adultComboContainer}>
        <div className={classes.adultComboHeadingContainer}>
        <h4 className={classes.adultComboHeading}>Adult Combos</h4>
        <p className={classes.adultComboInfo}>Anyone above 4 feets is eligible for these tickets</p>
        </div>
        <p className={classes.seeAll} id="sellAll-text">
          View All
        </p>
        <ComoboCards />
      </Container>
    );
  }
}
const useStyles = (theme: any) => createStyles({
  adultComboContainer: {
    position: 'relative',
    padding: '0px 60px',
    '@media (max-width: 1920px)': {
      padding:"40px 60px"
    },
    '@media (max-width: 1440px)': {
      padding:"40px 40px"
    },
    '@media (max-width: 1280px)': {
      padding: '40px 40px',
    },
    '@media (max-width: 1024px)': {
      padding: '24px 24px',
    },
    '@media (max-width: 576px)': {
      padding: '16px 20px',
    },
  },
  adultComboHeading: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 32,
    fontFamily: 'Montserrat, sans-serif',
    color: '#2d65ed',
    fontVariant: 'small-caps',
    '@media (max-width: 1024px)': {
      fontSize: 24,
    },
    '@media (max-width: 576px)': {
      fontSize: 16,
    },
  },
  seeAll: {
    position: 'absolute',
    right: 40,
   top:40,
    cursor: 'pointer',
    color: 'rgb(72, 126, 227)',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 20,
    fontWeight: 500,
    '@media (max-width: 1920px)': {
      right: 80,
      top: 40,
    },
    '@media (max-width: 1440px)': {
      right: 40,
      top: 40,
    },
    '@media (max-width: 1280px)': {
      right: 40,
      top: 24,
    },
    '@media (max-width: 1024px)': {
      right: 40,
      top: 24,
      fontSize: 16,
    },
    '@media (max-width: 550px)': {
      display: 'none',
    },
    
  },
  adultComboHeadingContainer:{
    display:"flex",
    flexDirection:"column"
  },
  adultComboInfo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    fontFamily: 'Montserrat, sans-serif',
    color: '#333',
    '@media (max-width: 1024px)': {
      fontSize: 16,
    },
    '@media (max-width: 576px)': {
      fontSize: 12,
      fontWeight: 500,
      width:"70%",
      alignSelf:"center"
    },
  },
  '@media (max-width: 475px)': {
    '#sellAll-text': {
      display: 'none',
    },
  },
})


export default withStyles(useStyles)(AdultsCombo);