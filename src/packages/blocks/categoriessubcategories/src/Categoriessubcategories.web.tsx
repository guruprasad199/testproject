import React from "react";
// Customizable Area Start
import { Box, Theme, Typography, withStyles } from "@material-ui/core";
import {
  createStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Navbar from "../../../components/src/Navbar/Navbar.web";
import { annulPassBanner } from "./assets";
import Footer from "../../../components/src/Footer/Footer.web";

const dummyData = [
  {
    id: 1,
    title: "E-O-D Annual Pass",
    description: "THE BEST PASS FOR REGULAR VISITORS",
    price: "₹1500",
    point1: "Enjoy unlimited visits throughout the year",
    point2: "All Activities Included IN EVERY VISIT!",
    point3: "15% discount on Select Food Outlets",
  },
  {
    id: 2,
    title: "Kids Annual Pass",
    description: "Kids Annual PassBest Plan for kids below 4ft height.",
    price: "₹750",
    point1: "Unlimited Kids Activities throughout the year.",
  },
  {
    id: 3,
    title: "E-O-D Annual Pass",
    description: "THE BEST PASS FOR REGULAR VISITORS",
    price: "₹1500",
    point1: "Enjoy unlimited visits throughout the year",
    point2: "All Activities Included IN EVERY VISIT!",
    point3: "15% discount on Select Food Outlets",
  },
  {
    id: 4,
    title: "Kids Annual Pass",
    description: "Kids Annual PassBest Plan for kids below 4ft height.",
    price: "₹750",
    point1: "Unlimited Kids Activities throughout the year.",
  },
  {
    id: 5,
    title: "E-O-D Annual Pass",
    description: "THE BEST PASS FOR REGULAR VISITORS",
    price: "₹1500",
    point1: "Enjoy unlimited visits throughout the year",
    point2: "All Activities Included IN EVERY VISIT!",
    point3: "15% discount on Select Food Outlets",
  },
];

// Customizable Area End

import CategoriessubcategoriesController, {
  Props,
} from "./CategoriessubcategoriesController";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export default class Categoriessubcategories extends CategoriessubcategoriesController {
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
      <div>
        <Navbar onLogin={undefined} />
        <Box>
          <div style={{ position: "relative" }}>
            <img
              src={annulPassBanner}
              className={this.props.classes?.backGroundContent}
            />
            <div className={this.props.classes?.textBackground}>
              <span className={this.props.classes?.headingTitle}>
                Annual Pass
              </span>
              <span className={this.props.classes?.bannerContentTitle}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore.
              </span>
            </div>
          </div>
          <Typography className={this.props.classes?.headingContent}>
            CHOOSE YOUR PRICING PLAN
          </Typography>
          <Typography className={this.props.classes?.subtitleText}>
            We offer great price plans for the adventure
          </Typography>
          <div className={this.props.classes?.mapedCard}>
            {dummyData.map((item: any) => (
              <Box key={item.id} className={this.props.classes?.cardContainer}>
                <Typography className={this.props.classes?.cardTitle}>
                  {item.title}
                </Typography>
                <Typography className={this.props.classes?.textDescription}>
                  {item.description}
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <Typography className={this.props.classes?.priceTag}>
                    {item.price}
                  </Typography>
                  <Typography className={this.props.classes?.perYear}>
                    /year
                  </Typography>
                </Box>
                <Box className={this.props.classes?.borderArea}></Box>
                {item.point1 && (
                  <Box style={{ display: "flex" }}>
                    <span className={this.props.classes?.checkmark}>
                      <div className={this.props.classes?.checkmarkStem} />
                      <div className={this.props.classes?.checkmarkKick} />
                    </span>
                    <Typography className={this.props.classes?.pointNote}>
                      {item.point1}
                    </Typography>
                  </Box>
                )}
                {item.point2 && (
                  <Box style={{ display: "flex" }}>
                    <span className={this.props.classes?.checkmark}>
                      <div className={this.props.classes?.checkmarkStem} />
                      <div className={this.props.classes?.checkmarkKick} />
                    </span>
                    <Typography className={this.props.classes?.pointNote}>
                      {item.point2}
                    </Typography>
                  </Box>
                )}
                {item.point3 && (
                  <Box style={{ display: "flex" }}>
                    <span className={this.props.classes?.checkmark}>
                      <div className={this.props.classes?.checkmarkStem} />
                      <div className={this.props.classes?.checkmarkKick} />
                    </span>
                    <Typography className={this.props.classes?.pointNote}>
                      {item.point3}
                    </Typography>
                  </Box>
                )}
                <Box className={this.props.classes?.btnBackground}>Buy Now</Box>
              </Box>
            ))}
          </div>
        </Box>
        <Footer />
      </div>

      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = (theme: Theme) =>
  createStyles({
    mainWrapper: {
      position: "absolute",
      zIndex: -99,
    },
    inputStyle: {
      borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
      width: "100%",
      height: "100px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    buttonStyle: {
      width: "100%",
      height: "45px",
      marginTop: "40px",
      border: "none",
      backgroundColor: "rgb(98, 0, 238)",
    },
    backGroundContent: {
      zIndex: -99,
      width: "100%",
      height: "436px",
    },
    headingContent: {
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "39px",
      letterSpacing: "-1px",
      color: "#2B65EC",
      margin: "40px 0px 16px 0px",
      textAlign: "center",
    },
    subtitleText: {
      color: "#334155",
      fontSize: "20",
      fontFamily: "Montserrat",
      fontWeight: 500,
      textTransform: "capitalize",
      wordWrap: "break-word",
      letterSpacing: "-1px",
      width: "420px",
      height: "24px",
      margin: "0 auto 40px auto",
    },
    btnBackground: {
      width: "203px",
      height: "38px",
      background: "#2B65EC",
      color: "#FFFFFF",
      borderRadius: "5px",
      padding: "8px",
      cursor: "pointer",
      textAlign: "center",
      position: "absolute",
      right: 0,
      left: 0,
      margin: "auto",
      bottom: 40,
      fontSize: "12px",
      fontWeight: 600,
    },
    textBackground: {
      position: "absolute",
      top: " 50%",
      right: "50%",
      transform: "translate(50%, -50%)",
    },
    bannerContentTitle: {
      color: "#ffffff",
      fontSize: "18px",
      fontFamily: "Montserrat",
      textAlign: "center",
      width: "674px",
      lineHeight: "25px",
      display: "flex",
      margin: "0 auto",
    },
    headingTitle: {
      display: "block",
      color: "#ffde59",
      fontSize: "32px",
      fontFamily: "Liberteen Bold",
      lineHeight: "45.95px",
      fontWeight: 700,
      width: "max-content",
      margin: "0 auto 15px auto",
    },
    productDescription: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      fontWeight: 400,
      color: "#334155",
    },
    borderArea: {
      borderBottom: "1px solid #F1F1F5",
      margin: "40px 27px",
    },
    cardTitle: {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "17px",
      letterSpacing: "0px",
      color: "#171725",
      textAlign: "center",
    },
    titlesText: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      color: "#334155",
      textTransform: "capitalize",
      marginBottom: "6px",
    },
    textDescription: {
      fontFamily: "Montserrat",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0px",
      textAlign: "center",
      margin: "19px auto 40px auto",
      height: "25px",
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      margin: "20px 11px 0px 15px",
    },
    cardImgHolder: {
      width: "290px",
      height: "294px",
      borderRadius: "5px",
      display: "flex",
      margin: "0 auto",
      paddingTop: "16px",
    },
    cardContainer: {
      width: "257px",
      height: "473px",
      borderRadius: "5px",
      boxShadow: "0px 8px 17px -9px",
      padding: "40px 12px 40px 12px",
      position: "relative",
      "&:hover": {
        background: "var(--primary, #2B65EC)",
        color:"#fff"
      },
    },
    pointNote: {
      fontFamily: "Montserrat",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
      letterSpacing: "0.10000000149011612px",
      margin: "0px 0px 23px 8px",
    },
    mapedCard: {
      width: "95%",
      margin: "0 auto 100px auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(257px, 0fr))",
      gap: "20px",
      justifyContent: "center",
    },
    tabButton: {
      width: "680px",
      borderRadius: "0px 5px 5px 0px",
      height: "44px",
      backgroundColor: "#f3f9fd",
      color: "#828282",
      border: "none",
      fontFamily: "Montserrat",
      fontWeight: 500,
    },
    priceTag: {
      fontFamily: "Montserrat",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "44px",
      letterSpacing: "0.1999998837709427px",
    },
    perYear: {
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontWeight: 400,
      // lineHeight: "22px",
      letterSpacing: "0px",
    },
    checkmark: {
      display: "inline-block",
      width: "10px",
      height: "10px",
      "-msTransform": "rotate(45deg)",
      "-webkitTransform": "rotate(45deg)",
      transform: "rotate(45deg)",
      backgroundColor: "#2B65EC",
      borderRadius: "50%",
    },


    //   checkmark:hover .checkmarkStem, .checkmark:hover .checkmark_kick {
    //     background-color: pink;
    //   }

    checkmarkStem: {
      position: "absolute",
      width: "1px",
      height: "6px",
      backgroundColor: "#FFFFFF",
      left: "6px",
      top: "2px",
    },
    checkmarkKick: {
      top: "7px",
      left: "3px",
      width: 3,
      height: 1,
      position: "absolute",
      backgroundColor: "#FFFFFF",
    },
    activeTabButton: {
      width: "680px",
      borderRadius: "5px 0px 0px 5px",
      height: "44px",
      backgroundColor: "#2b65ec",
      color: "#ffffff",
      border: "none",
      fontFamily: "Montserrat",
      fontWeight: 500,
    },

    btnContainer: {
      display: "flex",
      justifyContent: "center",
      margin: "35px 0 20px 0",
    },
    "@media (max-width: 1300px)": {
      btnContainer: {
        margin: "35px auto 20px auto",
        width: "90%",
      },
      mapedCard: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
    "@media (max-width: 1024px)": {
      mapedCard: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
      },
    },
    "@media (max-width: 900px)": {
      textBackground: {
        top: "55%",
        right: "50%",
        width: "90%",
      },
      headingTitle: {
        fontSize: "25px",
        margin: "0 auto 10 auto",
        lineHeight: "normal",
      },
      bannerContentTitle: {
        fontSize: "16px",
      },
      activeTabButton: {
        width: "100%",
        height: "50px",
      },
      tabButton: {
        width: "100%",
        height: "50px",
      },
    },
    "@media (max-width: 700px)": {
      backGroundContent: {
        height: "50%",
      },
      headingTitle: {
        fontSize: "25px",
        width: "90%",
        textAlign: "center",
      },
      bannerContentTitle: {
        fontSize: "14px",
        width: "100%",
      },
      cardImgHolder: {
        width: "230px",
      },
    },
    "@media (max-width: 550px)": {
      mapedCard: {
        gridTemplateColumns: "auto",
      },
      cardImgHolder: {
        width: "290px",
        height: "294px",
        borderRadius: "5px",
        display: "flex",
        margin: "0 auto",
        paddingTop: "16px",
      },
    },
    "@media (max-width: 500px)": {
      btnContainer: {
        flexDirection: "column",
        gap: "10px",
      },
      activeTabButton: {
        borderRadius: "10px",
      },
      tabButton: {
        borderRadius: "10px",
      },
      headingContent: {
        fontSize: "20px",
      },
      subtitleText: {
        fontSize: "16px",
        textAlign: "center",
        width: "90%",
      },
    },
    "@media (max-width: 400px)": {
      backGroundContent: {
        height: "45%",
      },
    },
    "@media (max-width: 350px)": {
      cardImgHolder: {
        width: "230px",
      },
    },
  });
const CategoriessubcategoriesWithStyle = withStyles(styles)(
  Categoriessubcategories
);
export { CategoriessubcategoriesWithStyle };
// Customizable Area End
