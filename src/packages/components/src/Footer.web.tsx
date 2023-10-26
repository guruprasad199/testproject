import React, { Component } from "react";

import {
  Box,
  Button,
  Typography,
  Link,
  withStyles,
  TextField,
} from "@material-ui/core";

import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import PlaceIcon from '@material-ui/icons/Place';
import { Facebook, LinkedIn, Instagram, Twitter, EodLogo , DelhiTourism, Delhi} from "./assets";
interface IProps{
    classes:any,
    
}
const styles :any= {
  container: {
    backgroundColor: "#2b65eb",
  },
  footer: {
    display: "flex",
    padding: "30px"
  },
  firstSection: {
    flex: "1"
  },
  secondSection: {
    flex: "1",
    textAlign: "start",
    color: "#fff"
  },
  thirdSection: {
    flex: "1"
  },
  link: {
    color: "white",
    marginTop: "20px",

  },
  location: {
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  emailInput: {
    backgroundColor: "white",
    marginBottom: "8px",
    width:"240px",
    height: "32px"
  },
  subscribe: {
    color: "#cdc89c",
  },
  amusement:{
    color: "white"

  },
  subscribeBtn: {
    backgroundColor: "blue",
    color: "white"
  },
  form: {

  },
  copyright: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 30px",
    backgroundColor: "#5382ee",
    color: "white"
  },
  socialIcons: {
    display: 'flex',
    alignItems: "center",
    gap: "10px"
  },
  eodlogo:{
    width: "75px", 
    height: "60px",
    marginBottom: "16px"
  },
  delhilogos:{
    width: "90px", 
    height: "60px",
    marginTop: "16px",
    marginRight: "40px"
  }
}
const responsiveStyles = {
  "@media (max-width: 600px)": {
    footer: {
      padding: "10px",
      flexDirection:'column',
      display:'flex',

       // Adjust padding for small screens
    },
    firstSection: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom:'10px'
     // Adjust margin for small screens
    },
    secondSection: {
      display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom:'10px' // Adjust margin for small screens
    },
    thirdSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom:'10px' // Adjust margin for small screens
    },
  },
};

const combinedStyles = { ...styles, ...responsiveStyles };

class Footer extends Component <IProps>{
  constructor(props: any) {
    super(props);

  }

  handleSubscribe = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log("submitted")
  }


  render() {
    const { classes } = this.props
    return (
      <footer className={classes.container}>
        <div className={classes.footer}>
          <div className={classes.firstSection}>
          <img src={EodLogo} alt="eodLogo" className={classes.eodlogo} />
          <Typography className={classes.amusement}>A Unit of Vision Amusement <br /> Park Private Limited</Typography>
          <div>
          <img src={DelhiTourism} alt="delhitourism" className={classes.delhilogos} />
          <img src={Delhi} alt="delhi" className={classes.delhilogos} />
          </div>
          </div>
          <div className={classes.secondSection}>
            <Typography variant="h6" >Quick Links</Typography>
            <Typography variant="body1">
              <Link href="/faq" className={classes.link}>
                Frequently Asked Questions
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/Aboutus" className={classes.link}>
                About Us
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/contact-us" className={classes.link}>
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/terms-and-conditions" className={classes.link}>
                Terms and Conditions
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="/refund-policy" className={classes.link}>
                Refund Policy
              </Link>
            </Typography>
          </div>
          {/* Last section */}
          <div className={classes.thirdSection}>
            <Typography className={classes.subscribe}>Subscribe For Special Offers & Adventure <br /> Park Updates</Typography>
            <input type="text" id="outlined-basic" placeholder="Enter your Email" className={classes.emailInput}/>    
            <form onSubmit={this.handleSubscribe}>    
            <Button type="submit" variant="contained" className={classes.subscribeBtn}>Subscribe</Button>
            </form>

            <Link className={classes.location} href="tel:+91 991 017 5472"><WhatsAppIcon />  +91 991 017 5472</Link>
            <address className={classes.location}><PlaceIcon />Gate no-2, Sanjay Lake, Pocket D, Mayur Vihar, <br />New Delhi, Delhi 110091, India</address>

          </div>
        </div>
        <Box className={classes.copyright}>
          <div></div>
          <Typography>&#169;2023 e-o-d. All Rights Reserved</Typography>
          <div className={classes.socialIcons}>
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Twitter} alt="Twitter" />
          </div>

        </Box>
      </footer>

    );
  }
}

export default withStyles(combinedStyles)(Footer)