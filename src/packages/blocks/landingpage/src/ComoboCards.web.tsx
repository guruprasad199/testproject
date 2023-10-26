import React, { Component } from "react";
import { ComoboCardData } from "./ComoboCardData";
import { Card, Grid, createStyles, withStyles } from "@material-ui/core";

class ComoboCards extends Component<any> {
  render() {
    const { classes } = this.props
    return (
      <>
        <Grid container className={classes.comoboMainCardContainer}>
          {ComoboCardData.map((item: any, index: any) => {
            return (
              <Grid item xs={12} md={6} >
                <Card elevation={0} className={classes.comoboCardContainer}>
                  <img src={item.img} alt="cardImage" className={classes.cardImageStyle} />
                  <div className={classes.comoboCardDetails}>

                    <p className={classes.comoboCardHeading}>{item.name}</p>
                    <div className={classes.comoboCardInnerDetails}>
                      <p className={classes.weekOfferText}>{item.week}</p>
                      <p className={classes.weekOfferTiming}>10:00 AM - 8:00 AM</p>
                      <p className={classes.weekOfferValidateText}>{item.contain}</p>
                    </div>
                    <div>
                      <p className={classes.comoboPrice}>&#8377;{item.rate}</p>
                      <p className={classes.taxesText}>Taxes Included</p>
                    </div>
                    <button type="button" className={classes.buyTicketButtonStyle}>
                      Buy Ticket
                    </button>

                  </div>
                </Card>
              </Grid>

            );
          })}
        </Grid>
      </>
    );
  }
}
const styles = (theme: any) => createStyles({
  comoboCardContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    gap: 36,
    '@media (max-width: 1920px)': {
      gap: 36
    },
    '@media (max-width: 1440px)': {
      gap: 28
    },
    '@media (max-width: 1280px)': {
      gap: 20
    },
    '@media (max-width: 1024px)': {
      padding:"10px 0px 10px 10px",
    },
    '@media (max-width: 576px)': {
      flexDirection: "column",
      width: '100%',
      padding: 0,
      marginBottom:24
    },
  },
  comoboMainCardContainer: {
  },
  cardImageStyle: {
    width: '442px',
    height: '370px',
    borderRadius: '5px',
    '@media (max-width: 1920px)': {
      width: 442,
      height: 370,
    },
    '@media (max-width: 1440px)': {
      width: '345px',
      height: '290px',
    },
    '@media (max-width: 1280px)': {
      width: '320',
      height: '290',
    },
    '@media (max-width: 1024px)': {
      width: '260',
      height: '250',
    },

    '@media (max-width: 576px)': {
      width: '100%',
      height: '281px',
    },

  },
  comoboCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',
    '@media (max-width: 1920px)': {

    },
    '@media (max-width: 1280px)': {

    },
    '@media (max-width: 900px)': {
width:"100%"
    },
    '@media (max-width: 576px)': {
      width: '100%',

    },
  },
  comoboCardInnerDetails: {
    '@media (max-width: 576px)': {
      marginBottom: "20px"
    },
  },
  comoboCardHeading: {
    fontSize: '24px',
    fontWeight: 600,
    fontFamily: 'Liberteen Medium, sans-serif',
    color: '#2b65ec',
    marginBottom: 0,
    '@media (max-width: 1280px)': {
      fontSize: 20,
      fontWeight: 700,
    },
    '@media(max-width: 1024px)': {
      fontSize: 16,
      fontWeight: 700,
    },
    '@media (max-width: 576px)': {
      fontSize: '16px',
      marginBottom: 15
    },
  },
  weekOfferText: {
    color: '#828282',
    margin: '2px 0',
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'capitalize',
    '@media (max-width: 1000px)': {
      fontSize: '14px',
    },
    '@media (max-width: 576px)': {
      fontSize: '12px',
    },
  },
  weekOfferTiming: {
    color: '#334155',
    fontSize: '30px',
    fontWeight: 600,
    margin: '2px 0',
    fontFamily: 'Montserrat, sans-serif',
    '@media (max-width: 1920px)': {
      fontSize: '30px',
    },
    '@media (max-width: 1280px)': {
      fontSize: '20px',
    },
    '@media (max-width: 1024px)': {
      fontSize: '19px',
    },
    '@media (max-width: 1000px)': {
      fontSize: '17px',
    },
    '@media (max-width: 576px)': {
      fontSize: '16px',
    },
  },
  weekOfferValidateText: {
    color: '#828282',
    fontSize: '12px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 400,
    height: '20px',
    '@media (min-width: 1900px)': {
      fontSize: '16px',
      whiteSpace: "pre-line",
      wordWrap: "break-word",
      width: 320,
    },
    '@media (max-width: 576px)': {
      fontSize: '12px',
      width: "80%"
    },
  },
  comoboPrice: {
    color: '#334155',
    fontSize: '20px',
    fontWeight: 600,
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '0px',
    '@media (min-width: 1900px)': {
      fontSize: '24px',
    },
    '@media (max-width: 576px)': {
      fontSize: '16px',
    },
  },
  taxesText: {
    color: '#828282',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: 400,
    '@media (min-width: 1900px)': {
      fontSize: '14px',
    },
    '@media (max-width: 576px)': {
      fontSize: '12px',
    },
  },
  buyTicketButtonStyle: {
    border: 'none',
    boxShadow: 'none',
    borderRadius: '5px',
    width: '100%',
    height: '40px',
    color: '#fff',
    fontVariant: 'small-caps',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 600,
    backgroundColor: 'rgb(72, 126, 227)',
    lineHeight: '24px',
    '@media (min-width: 1920px)': {
      width: '100%',
    },
    '@media (max-width: 1440px)': {
      width: '225px',
      height: "48px"
    },
    '@media (max-width: 1024px)': {
      width: 185,
      height: 38
    },
    '@media (max-width: 1000px)': {
      width: 180,
      height: 38
    },
    '@media (max-width: 900px)': {
      width: "100%",
      height: 38
    },
    '@media (max-width: 576px)': {
      width: '100%',
      height: '48px',
    },
  },
  buyTicketButtonText: {
    fontSize: '16px',
    margin: '0',
    fontWeight: 600,
    color: 'white',
    fontVariant: 'small-caps',
  },
  upperLetter: {
    fontSize: '18px',
    margin: '0',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
})

export default withStyles(styles)(ComoboCards);
export { ComoboCards };
