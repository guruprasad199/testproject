import React from "react";

import {
  Container,
  Box,
  Input,
  Button,
  InputLabel,
  Typography,
  InputAdornment,
  IconButton,
  // Customizable Area Start
  createStyles,
  Theme,
  withStyles,
  // Customizable Area End
} from "@material-ui/core";

// Customizable Area Start
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "../../../components/src/Footer/Footer.web";
import Navbar from "../../../components/src/Navbar/Navbar.web";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
  typography: {
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      margin: "20px 0px",
    },
  },
});
// Customizable Area End

import Ticketsystem2Controller, {
  Props,
  configJSON,
} from "./Ticketsystem2Controller";

export default class Ticketsystem2 extends Ticketsystem2Controller {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <Box>
        <Navbar onLogin={undefined} />
        <Box className={this.props.classes.cardsMapped}>
          {this.state.EntryTicketData.map((item: any) => (
            <Box key={item.id} className={this.props.classes.mainContainerCard}>
              <img
                src={item.attributes.image}
                alt="cardImg"
                className={this.props.classes.imgWithCardWrap}
              />
              <Box className={this.props.classes.textWrapper}>
                <Typography className={this.props.classes.titlesText}>{item.attributes.title}</Typography>
                <Typography className={this.props.classes.productDescription}>
                ₹{item.attributes.price}
                </Typography>
                <Typography className={this.props.classes.taxTitle}>Tax Included</Typography>
              </Box>
              <Box className={this.props.classes?.btnWrapper}>
              <Box className={this.props.classes?.counterWrap}>
                <Box className={this.props.classes?.subtractButton}>-</Box>
                <Typography className={this.props.classes?.counterValue}>1</Typography>
                <Box className={this.props.classes?.subtractButton}>+</Box>
              </Box>
              <Button className={this.props.classes?.addCart}>Add to Cart</Button>
            </Box>
            <Button className={this.props.classes?.buyBtn}>Buy Now</Button>
          </Box>
          ))}
        </Box>
        <Footer />
        </Box>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = (theme: Theme) =>
  createStyles({
    addCart: {
      borderRadius:"5px", 
      background:"#2B65EC", 
      color:"#FFFFFF", 
      width: "158px", 
      height: "44px", 
      fontSize:"16px",
      "&:hover": {
        background: "#835eeaf7",
      },  
    },
    buyBtn: {
      textTransform:"capitalize", 
      bottom: "16px", 
      left: "16px", 
      right: "16px", 
      position:"absolute", 
      padding: "16px", 
      borderRadius:"5px", 
      background:"#2B65EC", 
      color:"#FFFFFF", 
      width: "290px", 
      height: "48px",
      fontSize: "16px",
      "&:hover": {
        background: "#835eeaf7",
      },  
    },
    subtractButton: {
      fontSize:"26px", 
      color:"#2B65EC", 
      cursor: "pointer",
    },
    counterValue: {
      fontSize:"20px", 
      paddingTop:"6px", 
      color:"#2B65EC", 
      fontWeight: 600,
    },
    btnWrapper: {
      display:"flex",
      justifyContent:"space-between", 
      padding: "0px 16px 0px 16px", 
      marginTop: "15px",
    },
    counterWrap: {
      borderRadius:"5px", 
      display: "flex", 
      border: "1px solid #2B65EC", 
      width: "116px", 
      height: "44px", 
      justifyContent: "space-evenly", 
      alignItems: "stretch",
    },
    productDescription: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      fontWeight: 500,
      color: "#2B65EC",
      marginBottom: "8px",
    },
    titlesText: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      color: "#334155",
      textTransform: "capitalize",
      marginBottom: "16px",
      letterSpacing: "-1px",
    },
    taxTitle: {
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontWeight: 400,
      color: "#828282",
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "16px",
    },
    imgWithCardWrap: {
      width: "290px",
      height: "294px",
      borderRadius: "5px",
      display: "flex",
      margin: "0 auto",
      paddingTop: "16px",
    },
    mainContainerCard: {
      width: "322px",
      height: "563px",
      borderRadius: "5px",
      boxShadow: "0px 8px 17px -9px",
      position: "relative",
    },
    cardsMapped: {
      width: "50%",
      margin: "24px auto 100px auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      justifyContent: "center",
    },
    "@media (max-width: 1300px)": {
      cardsMapped: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
    "@media (max-width: 1024px)": {
      cardsMapped: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
      },

    },
    "@media (max-width: 700px)": {
      buyBtn: {
        width: "90%", 
        fontSize:"14px",
      },  
      counterWrap: {
        width: "90px", 
      },  
      addCart: {
        width: "110px",
        fontSize:"14px",
      },  
      taxTitle: {
        fontSize: "14px",
      },  
      productDescription: {
        fontSize: "15px",
        marginBottom: "6px",
      },  
      titlesText: {
        fontSize: "16px",
        marginBottom: "8px",
      },  
      backGroundContent: {
        height: "50%",
      },
      mainContainerCard: {
        width: "250px",
      },
      imgWithCardWrap: {
        width: "230px",
      },
    },
    "@media (max-width: 550px)": {
      cardsMapped: {
        gridTemplateColumns: "repeat(1, 1fr)",
      },
      mainContainerCard: {
        width: "322px",
        height: "563px",
        borderRadius: "5px",
        boxShadow: "0px 8px 17px -9px",
      },
      imgWithCardWrap: {
        width: "290px",
        height: "294px",
        borderRadius: "5px",
        display: "flex",
        margin: "0 auto",
        paddingTop: "16px",
      },
    },
    "@media (max-width: 400px)": {
      subtractButton: {
        fontSize: "24px"
      },
      counterValue: {
        fontSize:"18px", 
      },  
    },
    "@media (max-width: 350px)": {
      mainContainerCard: {
        width: "250px",
      },
      imgWithCardWrap: {
        width: "230px",
      },
    },
  });
const TicketsystemWithStyle = withStyles(styles)(Ticketsystem2);
export { TicketsystemWithStyle };

// Customizable Area End
