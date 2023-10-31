import React, { Component } from 'react'
import { withStyles, createStyles, Grid, Hidden } from '@material-ui/core'
import { facebook, Insta, LinkedIn, Twitter, DelhiLogo, logoFooter, contact, location, DelhiToursim } from "./assets";
import { Link } from "react-router-dom";
const muistyles = (theme: any) =>
  createStyles({
    footerContainer: {
      backgroundColor: "#2B65EC",
      width: "100%",
      [theme.breakpoints.up('lg')]: {
        padding: 40
      },
      [theme.breakpoints.up('xl')]: {
        padding: 50
      },
      [theme.breakpoints.down('md')]: {
        padding: "30px 20px"
      },
    },
    footerLogo: {
      [theme.breakpoints.up('lg')]: {
        width: "110px",
        height: "85px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "146px",
        height: "114px",
      },
      [theme.breakpoints.down("md")]: {
        width: "78px",
        height: "60",
        marginBottom: 24,
      },
      "@media(max-width:959px)": {
        width: "59px",
        height: "46px",
      },
      marginBottom: "53px",
    },
    tagLineText: {
      [theme.breakpoints.up("lg")]: {
        fontSize: 20,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: 16,
      },
      "@media(max-width:959px)": {
        fontSize: 14,
        marginBottom: "30px",
      },
      fontWeight: 600,
      marginBottom: "80px",
      fontStyle: "Montserrat",
      width: "80%",
      color: "white",
    },
    footerDelhiImgContainer: {
      display: "flex",
      width: "60%",
      gap: "30px",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        paddingBottom: "30px",
        width: "100%",
        justifyContent: "flex-start",
        gap: "24px",
      },
      "@media(max-width:959px)": {
        borderBottom: "1px solid white"
      },

    },
    footerDelhiLogo: {
      [theme.breakpoints.up("lg")]: {
        width: "133px",
        height: "85px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "179px",
        height: "112px",
      },
      [theme.breakpoints.down("md")]: {
        width: "95px",
        height: "auto",
      },
      "@media(max-width:959px)": {
        width: "75px",
        height: "47px",
      },
    },
    footerDelhiLogo2: {
      [theme.breakpoints.up("lg")]: {
        width: "95px",
        height: "84px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "128px",
        height: "112px",
      },
      [theme.breakpoints.down("md")]: {
        width: "68px",
        height: "59px",
      },
      "@media(max-width:959px)": {
        width: "50px",
        height: "43px",
      },
    },
    socialContainer: {
      backgroundColor: "#5382EF",
      [theme.breakpoints.up("lg")]: {
        height: "76px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "101px",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
    },
    copyrightText: {
      textAlign: "center",
      color: "white",
      fontSize: "12px",
      fontWeight: 500,
      fontFamily: "Montserrat, sans-serif",
      [theme.breakpoints.down("md")]: {
        height: "54px",
        lineHeight: "54px",
      },
    },
    socialLinksContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",

      [theme.breakpoints.up("lg")]: {
        paddingRight: 50,
        gap: 30,
      },
      [theme.breakpoints.up("xl")]: {
        paddingRight: 30,
        gap: 40,
      },
      [theme.breakpoints.down("md")]: {
        height: "64px",
        justifyContent: "center",
        backgroundColor: "#5382EF",
        gap: 21,
      },
      "@media(max-width:959px)": {
        backgroundColor: "#2B65EC",
      },
    },
    socialLogoStyleFb: {
      [theme.breakpoints.up("lg")]: {
        height: "25px",
        width: "25px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "33px",
        width: "33px",
      },
      [theme.breakpoints.down("md")]: {
        height: "18px",
        width: "18px",
      },
    },
    socialLogoStyleInsta: {
      [theme.breakpoints.up("lg")]: {
        width: "28px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "37px",
      },
      [theme.breakpoints.down("md")]: {
        width: "20px",
      },
    },
    socialLogoStyleLn: {
      [theme.breakpoints.up("lg")]: {
        width: "22px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "30px",
      },
      [theme.breakpoints.down("md")]: {
        width: "16px",
      },
    },
    socialLogoStyleX: {
      [theme.breakpoints.up("lg")]: {
        width: "24px",
      },
      [theme.breakpoints.up("xl")]: {
        width: "32px",
      },
      [theme.breakpoints.down("md")]: {
        width: "17px",
      },
    },
    footerQuickLinkText: {
      color: "white",
      fontFamily: "Liberteen Medium",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "30px",
      "@media(max-width:1279px)": {
        fontSize: "14px",
      },
    },
    mobileNavgiationList: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      "@media(max-width:959px)": {
        gap: 0,
      },

    },
    footerSecondContent: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: 30,
      [theme.breakpoints.up("lg")]: {
        gap: 31,
      },
      [theme.breakpoints.up("xl")]: {
        gap: 41,
      },
      "@media(max-width:959px)": {
        padding: "24px 0px",
        borderBottom: "1px solid white",
        gap: 0,
      },

    },
    navgiationList: {
      display: "flex",
      flexDirection: "column",
     
      [theme.breakpoints.up("lg")]: {
        gap: 31,
      },
      [theme.breakpoints.up("xl")]: {
        gap: 41,
      },
      [theme.breakpoints.down("md")]: {
        gap: 15,
      },
    },
    footerSubscribeHeading: {
      fontFamily: "Montserrat, sans-serif",
      color: "var(--Yellow, #FFDE59)",
      [theme.breakpoints.up("lg")]: {
        fontSize: "20px",
        width: "100%",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "24px",
        width: "95%",
      },
      marginBottom: 0,
      fontWeight: 600,
      textTransform: "capitalize",
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        width: "85%",
      },
      "@media(max-width:959px)": {
        fontSize: "12px",
      },

    },
    subscribeEmailInput: {
      outline: "none",
      border: "none",
      borderRadius: "5px",
      [theme.breakpoints.up("lg")]: {
        height: "48px",
        width: "306px",
        fontSize: "14px",
        padding: "10px",
        marginTop: "16px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "64px",
        width: "408px",
        fontSize: "16px",
        padding: "10px",
        marginTop: "21px",
      },
      [theme.breakpoints.down("md")]: {
        height: "38px",
        width: "262px",
        fontSize: "14px",
        padding: "10px",
        marginTop: "18px",
      },
      color: "#71717A",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
    footerContent: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        padding: "24px 0px 0px 0px",
      },
    },
    subscribeButtonStyle: {
      width: "136px",
      boxShadow: "none",
      borderRadius: "5px",
      color: "white",
      border: "none",
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      height: "48px",
      backgroundColor: "#173B8D",
      marginTop: "26px",
      [theme.breakpoints.up("lg")]: {
        marginBottom: 32,
      },
      [theme.breakpoints.up("xl")]: {
        marginBottom: 61,
      },
      [theme.breakpoints.down("md")]: {
        height: "34px",
        marginTop: "14px",
        fontSize: "14px",
        marginBottom: "25px",
      },
    },
    contactHeading: {
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      marginBottom: "20px",
      color: "#fff",
    },
    footerSubscribeContent: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "17px",
      alignItems: "center",
    },
    footerSubscribeContent2: {
      display: "flex",
      justifyContent: "flex-start",
      gap: "17px",
      marginTop: "36px",
      [theme.breakpoints.down("md")]: {
        marginTop: "22px",
      },
    },
    footerContactText: {
      margin: "0px",
      color: "white",
      fontSize: "16px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 500,
      lineHeight: "24px",
    },
    footerIconStyle: {
      [theme.breakpoints.up("lg")]: {
        height: "24px",
        width: "24px",
      },
      [theme.breakpoints.up("xl")]: {
        height: "32px",
        width: "32px",
      },
      [theme.breakpoints.down("md")]: {
        height: "22px",
        width: "22px",
      },
    },
    footerHeading: {
      color: "white",
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      marginBottom: 0,
      [theme.breakpoints.down("md")]: {
        marginBottom: "20px",
      },
    },
  });
export class Footer extends Component<any> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid container className={classes.footerContainer}>
          <Grid item xs={12} md={4}>
            <div>
              <img src={logoFooter} alt="Logo" className={classes.footerLogo} />
              <p className={classes.tagLineText}>
                A Unit of Vision Amusement Park Private Limited
              </p>
              <div className={classes.footerDelhiImgContainer}>
                <img
                  src={DelhiToursim}
                  alt="Logo"
                  className={classes.footerDelhiLogo}
                />
                <img
                  src={DelhiLogo}
                  alt="Logo"
                  className={classes.footerDelhiLogo2}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.footerSecondContent}>
              <p className={classes.footerHeading}>Quick Links</p>
              <Hidden smDown>
                <div className={classes.navgiationList}>
                  <Link to="/faq" className={classes.footerQuickLinkText}>
                    Frequently Asked Questions
                  </Link>
                  <Link to="/Aboutus" className={classes.footerQuickLinkText}>
                    About Us
                  </Link>
                  <Link to="" className={classes.footerQuickLinkText}>
                    Contact Us
                  </Link>
                  <Link
                    to="TermsAndConditions"
                    className={classes.footerQuickLinkText}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="RefundPolicy"
                    className={classes.footerQuickLinkText}
                  >
                    Refund Policy
                  </Link>
                </div>
              </Hidden>
              <Hidden mdUp>
                <Grid container>
                  <Grid item xs={6} className={classes.mobileNavgiationList}>
                    <Link to="/faq" className={classes.footerQuickLinkText}>
                      Frequently Asked Questions
                    </Link>
                    <Link to="" className={classes.footerQuickLinkText}>
                      Contact Us
                    </Link>
                    <Link
                      to="RefundPolicy"
                      className={classes.footerQuickLinkText}
                    >
                      Refund Policy
                    </Link>
                  </Grid>
                  <Grid item xs={6} className={classes.mobileNavgiationList}>
                    <Link to="" className={classes.footerQuickLinkText}>
                      About Us
                    </Link>
                    <Link
                      to="TermsAndConditions"
                      className={classes.footerQuickLinkText}
                    >
                      Terms & Conditions
                    </Link>
                  </Grid>
                </Grid>
              </Hidden>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.footerContent}>
              <p className={classes.footerSubscribeHeading}>
                Subscribe For Special Offers & Adventure Park Updates
              </p>
              <input
                type="text"
                placeholder="Enter your Email"
                className={classes.subscribeEmailInput}
              />
              <button type="button" className={classes.subscribeButtonStyle}>
                Subscribe
              </button>
              <Hidden mdUp>
                <div
                  style={{
                    height: 1,
                    background: "#fff",
                    width: "100%",
                    marginBottom: 24,
                  }}
                />
              </Hidden>
              <Hidden mdUp>
                <p className={classes.contactHeading}>Contact Info</p>
              </Hidden>
              <div className={classes.footerSubscribeContent}>
                <img
                  src={contact}
                  alt="contact"
                  className={classes.footerIconStyle}
                />
                <p className={classes.footerContactText}>+91 991 017 5472</p>
              </div>
              <div className={classes.footerSubscribeContent2}>
                <img
                  src={location}
                  alt="contact"
                  className={classes.footerIconStyle}
                />
                <p
                  className={classes.footerContactText}
                  style={{ width: "80%" }}
                >
                  Gate no.-2, Sanjay Lake, Pocket D, Mayur Vihar, New Delhi,
                  Delhi 110091, India
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.socialContainer}>
          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4} className={classes.copyrightText}>
            &#169; 2023 e-o-d. All Rights Reserved.
          </Grid>
          <Grid item xs={12} md={4} className={classes.socialLinksContainer}>
            <a
              href="https://www.facebook.com/eodadventure/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt=""
                className={classes.socialLogoStyleFb}
              />
            </a>
            <a
              href="https://www.instagram.com/eod_adventurepark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Insta}
                alt=""
                className={classes.socialLogoStyleInsta}
              />
            </a>
            <a>
              <img
                src={LinkedIn}
                alt=""
                className={classes.socialLogoStyleLn}
              />
            </a>
            <a
              href="https://twitter.com/eodadventurepa1?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="" className={classes.socialLogoStyleX} />
            </a>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(muistyles)(Footer);
