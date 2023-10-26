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
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import {
  parkInfoBanner,
  googleMap,
} from "./assets";
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

export type IProps = {
  title: string;
  image: string;
  redirect: (title: string) => void;
  classes?: any;
};

export type OpeningProps = {
  title: string;
  data: string;
  image: string;
  classes?: any;
};

//istanbul ignore next/
export const RenderCard: React.FunctionComponent<IProps> = (props) => {
  return (
    <Box onClick={() => props.redirect(props.title)}>
      <img
        src={props.image}
        alt="cardImg"
        className={props?.classes?.cardImage}
      />
      <Typography className={props?.classes?.imageText}>
        {props.title}
      </Typography>
    </Box>
  );
};

//istanbul ignore next/
 const OpeningHours: React.FunctionComponent<OpeningProps> = (props) => {
  const jsonObject = JSON.parse(props.data);
  return (
    <div className={props.classes.openingCard}> 
      <img src={props.image} alt="" className={props.classes.cardImgHolder} />
      <div className={props.classes?.textWrapper}>
        <span className={props.classes.titlesText}>{props.title}</span>
        <span className={props.classes.timeText}>{`${jsonObject.date}`}</span> 
        <span className={props.classes.parkTiming}>{jsonObject.time}</span>
      </div>
    </div>
  );
};

// Customizable Area End

import RolesandpermissionsController, {
  Props,
  configJSON,
} from "./RolesandpermissionsController";
import Footer from "../../../components/src/Footer/Footer.web";

export default class Rolesandpermissions extends RolesandpermissionsController {
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
        <Box className={this.props.classes?.bannerImg}>
          <Box className={this.props.classes?.wrapper}>
            <Typography className={this.props.classes?.titleText}>
              Park Information
            </Typography>
            <Typography className={this.props.classes?.description}>
              Plan your visit the best way possible and enjoy hassle free fun
              using our park information guide.
            </Typography>
          </Box>
        </Box>
        {this.state.displayTab === "" && (
          <>
            <Box className={this.props.classes?.firstCardWrapper}>
              <Box className={this.props.classes?.mainPageCardWrap}>
                {this.state.cardDataContainer?.map((item: any) => (
                  <RenderCard
                    data-test-id="cardRedirect"
                    title={item.attributes.category}
                    image={item.attributes.banner}
                    key={item.id}
                    classes={this.props.classes}
                    redirect={(event: any) => this.cardRedirection(event)}
                  />
                ))}
              </Box>
            </Box>
          </>
        )}
        {this.state.displayTab === "Opening Times" && (
          <Box className={this.props.classes?.openingDataWrap}>
            <Typography className={this.props.classes?.headingOpening}>
              Opening times
            </Typography>
            <Typography className={this.props.classes?.openingText}>
              e-o-d Adventure Park is open on all days throughout the year
              except Diwali and Holi.
            </Typography>
            <Box className={this.props.classes?.mainCardWrapper}>
              {this.getActivityCardsByCategory("Opening Times").map(
                (item: any) => (
                  <OpeningHours
                    title={item.title}
                    data={item.description}
                    image={item.image}
                    classes={this.props.classes}
                    key={item.id}
                  />
                )
              )}
            </Box>
          </Box>
        )}
        {this.state.displayTab === "Park Map" && (
          <Box className={this.props.classes?.parkMapContainer}>
            <Typography className={this.props.classes?.mapText}>
              Park Map
            </Typography>
            <Typography className={this.props.classes?.descriptionMap}>
              Get to know your way around our parks with our handy interactive
              map, or download your own!
            </Typography>
            <Box className={this.props.classes?.mapWrapper}>
              <img
                className={this.props.classes?.mapImg}
                src={googleMap}
                alt="map"
              />
              <Button className={this.props.classes?.buttonContainer}>
                View printable map
              </Button>
            </Box>
          </Box>
        )}

        <div>
          <Footer />
        </div>
      </div>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = (theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: "flex",
      fontFamily: "Roboto-Medium",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "30px",
      backGroundImage: `url${parkInfoBanner}`,
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
    mainPageCardWrap: {
      display: "grid",
      gridTemplateColumns: "repeat( auto-fit, minmax(405px, 0fr) )",
      gridColumnGap: "72px",
      gridRowGap: "32px",
      justifyContent: "center",
      placeItems: "center",
      width: "90%",
      margin: "0 auto",
    },
    openingDataWrap: {
      margin: "0 auto",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "64px",
    },
    parkMapContainer: {
      margin: "0 auto",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "64px",
    },
    mapImg: {
      width: "1130px",
      height: "438px",
    },
    textWrapper: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "20px",
      paddingTop: "15px",
    },
    bannerImg: {
      background: `url(${parkInfoBanner})`,
      backgroundPosition: "center",
      backgroundSize: "100% 100%",
      height: "436px",
      backgroundRepeat: "no-repeat",
    },
    firstCardWrapper: {
      margin: "40px auto 0 auto",
      paddingBottom: "64px",
    },
    descriptionMap: {
      color: "#334155",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "19.6px",
      paddingBottom: "20px",
      textAlign: "center",
    },
    titleText: {
      color: "#FFDE59",
      fontFamily: "Liberteen Bold",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    },
    mapWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cardImage: {
      width: "405px",
      height: "433px",
    },
    cardImgHolder: {
      width: "290px",
      height: "294px",
      borderRadius: "5px",
      display: "flex",
      margin: "0 auto",
      paddingTop: "16px",
    },
    mapText: {
      color: "#2B65EC",
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontStyle: "normal",
      lineHeight: "normal",
      fontVariant: "small-caps",
      fontWeight: 700,
      paddingBottom: "16px",
      marginTop: "50px",
      textAlign: "center",
    },
    openingCard: {
      width: "322px",
      height: "438px",
      borderRadius: "5px",
      boxShadow: "0px 8px 17px -9px",
    },
    mainCardWrapper: {
      width: "90%",
      margin: "0 auto 100px auto",
      display: "grid",
      gridTemplateColumns: "repeat( auto-fit, minmax(322px, 0fr) )",
      gap: "40px",
      justifyContent: "center",
    },
    buttonContainer: {
      width: "242px",
      height: "38px",
      flexShrink: 0,
      borderRadius: "5px",
      background: "#2B65EC",
      color: "#FFFFFF",
      position: "relative",
      bottom: "100px",
      fontSize: "12px",
      lineHeight: "14.6px",
      fontWeight: 600,
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "160px",
    },
    titlesText: {
      color: "#334155",
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "normal",
      paddingTop: "10px",
    },
    description: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "140%",
      width: "674px",
      marginTop: "10px",
    },
    imageText: {
      color: "#FFDE59",
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
      letterSpacing: "-1px",
      textTransform: "capitalize",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      bottom: "78px",
    },
    timeText: {
      color: "#334155",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      paddingTop: "12px",
    },
    parkTiming: {
      color: "#334155",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      paddingTop: "8px",
    },
    openingText: {
      color: "#334155",
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "140%",
      paddingBottom: "20px",
      fontWeight: 400,
      textAlign: "center",
      width: "90%",
    },
    headingOpening: {
      color: "#2B65EC",
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontStyle: "normal",
      lineHeight: "normal",
      fontVariant: "all-petite-caps",
      fontWeight: 700,
      paddingBottom: "16px",
      marginTop: "50px",
    },
    "@media (max-width: 1650px)": {
      mainPageCardWrap: {
        width: "95%",
      },
    },
    "@media (max-width: 1200px)": {
      mapImg: {
        width: "90%",
      },
    },
    "@media (max-width: 700px)": {
      description: {
        width: "90%",
      },
      descriptionMap: {
        width: "90%",
      },
    },
    "@media (max-width: 500px)": {
      titleText: {
        fontSize: "22px",
      },
      description: {
        fontSize: "14px",
      },
      cardImage: {
        width: "250px",
        height: "350px",
      },
      headingOpening: {
        fontSize: "22px",
      },
      openingCard: {
        width: "270px",
      },
      cardImgHolder: {
        width: "230px",
      },
      mainCardWrapper: {
        gridTemplateColumns: "auto",
      },
    },
  });
const RolesandpermissionsWithStyle = withStyles(styles)(Rolesandpermissions);
export { RolesandpermissionsWithStyle };
// Customizable Area End
