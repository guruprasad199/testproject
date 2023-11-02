import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../../../components/src/Navbar/Navbar.web";
import Footer from "../../../components/src/Footer/Footer.web";
import AboutUsController, { Props } from "./AboutUsController.web";
import { banner } from "./assets";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export type EntertainmentProps = {
  classes?: any;
  value: string;
};

export type IProps = {
  classes?: any;
  mappedData: any;
};

export const Zipline: React.FunctionComponent<IProps> = (props) => {
  const accordion =
    props.mappedData?.additional_data &&
    Object.keys(props.mappedData?.additional_data);

  return (
    <Box className={props.classes?.cards}>
      <Box className={props.classes?.mainWrapper}>
        <Typography className={props.classes?.cardheader}>
          {props?.mappedData?.name}
        </Typography>
        <Typography
          variant="body2"
          className={props.classes?.carddescription}
          dangerouslySetInnerHTML={{ __html: props.mappedData?.description }}
        ></Typography>
        <Box style={{ padding: "10px 0px 16px 0px" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={props.classes?.accordianWrapper}
            >
              <Typography className={props.classes?.accordianTitle}>
                {accordion && accordion[0]}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={props.classes?.accordianDescription}>
                {props.mappedData?.additional_data[accordion[0]]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={props.classes?.accordianWrapper}
          >
            <Typography className={props.classes?.accordianTitle}>
              {accordion && accordion[1]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={props.classes?.accordianDescription}>
              {props.mappedData?.additional_data[accordion[1]]}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={props.classes?.container}>
        <img
          className={props.classes?.sideImg}
          src={props.mappedData?.image}
          alt="rightimg"
        />
      </Box>
    </Box>
  );
};

export default class Aboutus extends AboutUsController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      // Customizable Area Start
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar onLogin={undefined} />
          <Box width={"100%"}>
            <img
              src={banner}
              alt=""
              className={this.props.classes?.imageContainer}
            />
          </Box>
          <Box>
            <Box className={this.props.classes?.aboutWrapper}>
              <Typography className={this.props.classes?.title}>
                ABOUT E-O-D
              </Typography>
              <Typography
                variant="body2"
                className={this.props.classes?.description}
              >
                Since Opening our doors in 2016, at e-o-d Adventure Park, we
                have tried to provide the best in entertainment and adventure to
                the people of Delhi-NCR. We hope that all our guests enjoy the
                facilities which we have painstakingly made.
              </Typography>
            </Box>
            <Box className={this.props.classes?.wrapBtnModel}>
              <Box className={this.props.classes?.buttonsToggle}>
                {this.state.parkActivities &&
                  this.state.parkActivities?.map((items: any, index: any) => (
                    <Button
                      key={index}
                      data-test-id="btnToggle"
                      onClick={() => this.handleTabClick(items.name)}
                      className={
                        this.state.ToggleButton === items.name
                          ? this.props.classes?.buttonContainerActive
                          : this.props.classes?.buttonContainer
                      }
                    >
                      {items.name}
                    </Button>
                  ))}
              </Box>
            </Box>
            <Box>
              <Zipline
                classes={this.props.classes}
                mappedData={this.state.contentMapper}
              />
            </Box>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
      //Merge Engine End DefaultContainer
      // Customizable Area End
    );
  }
}

// Customizable Area Start

const ButtonToggleClick = [
  {
    name: "Zipline",
  },
  {
    name: "Bowling",
  },

  {
    name: "Rain Dance",
  },

  {
    name: "Zipline",
  },
  {
    name: "Bowling",
  },

  {
    name: "Rain Dance",
  },
];

const styles = (theme: Theme) =>
  createStyles({
    title: {
      fontFamily: "Montserrat",
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "39px",
      letterSpacing: "0em",
      textAlign: "center",
      color: "#2B65EC",
    },
    description: {
      fontFamily: "Montserrat",
      marginTop: "20px",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0em",
      textAlign: "center",
      color: "#000",
    },
    carddescription: {
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0em",
      fontFamily: "Montserrat",
      marginTop: "20px",
      fontSize: "14px",
      color: "#000",
    },
    sideImg: {
      width: "608px",
      height: "456px",
    },
    buttonsToggle: {
      display: "flex",
      margin: "auto",
      flexDirection: "row",
      justifyContent: "center",
      background: "#F3F9FD",
      width: "max-content",
      borderRadius: "5px",
    },
    cards: {
      display: "flex",
      justifyContent: "center",
      gridGap: "120px",
      marginBottom: "64px",
    },
    emptyTabs: {
      width: "65%",
      margin: "auto",
      paddingBottom: "100px",
    },
    imageContainer: {
      width: "100%",
      height: "435px",
    },
    cardheader: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "24px",
      color: "#334155",
      textTransform: "capitalize",
    },
    accordianTitle: {
      color: "#334155",
      fontSize: "16px",
      fontFamily: "Montserrat",
      fontWeight: 600,
      textTransform: "capitalize",
      wordWrap: "break-word",
    },
    accordianDescription: {
      color: "#334155",
      fontSize: "14px",
      fontFamily: "Montserrat",
      fontWeight: 400,
      lineHeight: "19.10px",
      wordWrap: "break-word",
      marginLeft: "-12px",
    },
    wrapBtnModel: {
      marginTop: "40px",
      marginBottom: "64px",
    },
    aboutWrapper: {
      width: "782px",
      margin: "0 auto",
      paddingTop: "41px",
    },
    buttonContainerActive: {
      width: "226px",
      height: "44px",
      borderRadius: "5px",
      background: "#2B65EC",
      color: "#fff",
      fontSize: "16px",
      textTransform: "capitalize",
    },
    buttonContainer: {
      width: "226px",
      height: "44px",
      borderRadius: "5px",
      background: "",
      color: "#000",
      fontSize: "16px",
      textTransform: "capitalize",
    },
    mainWrapper: {
      width: "626px",
    },
    accordianWrapper: {
      padding: "0 4px !important",
    },
    "@media (max-width: 1400px)": {
      buttonsToggle: {
        width: "90%",
      },
      cards: {
        width: "90%",
        margin: "0 auto 64px auto",
      },
    },
    "@media (max-width: 1300px)": {
      sideImg: {
        width: "100%",
        height: "100%",
      },
    },
    "@media (max-width: 900px)": {
      aboutWrapper: {
        width: "90%",
      },
    },
    "@media (max-width: 700px)": {
      buttonsToggle: {
        width: "min-content",
        padding: "0px 10px 0px 10px",
        overflowX: "auto",
        maxWidth: "100%",
        justifyContent: "initial",
      },
      cards: {
        flexDirection: "column-reverse",
        gridGap: "40px",
      },
      sideImg: {
        width: "335px",
        height: "251px",
      },
      container: {
        margin: "0 auto",
      },
      buttonContainerActive: {
        width: "125px",
        height: "34px",
        fontSize: "14px",
        minWidth: "125px",
      },
      buttonContainer: {
        width: "125px",
        height: "34px",
        fontSize: "14px",
        minWidth: "125px",
      },
      mainWrapper: {
        width: "90%",
        margin: "0 auto",
        textAlign: "center",
      },
      accordianDescription: {
        textAlign: "initial",
      },
      aboutWrapper: {
        paddingTop: "26px",
      },
    },
    "@media (max-width: 500px)": {
      title: {
        fontSize: "16px",
      },
      description: {
        fontSize: "12px",
      },
      wrapBtnModel: {
        marginTop: "30px",
        marginBottom: "51px",
      },
      carddescription: {
        fontSize: "12px",
      },
      accordianTitle: {
        fontSize: "14px",
      },
      imageContainer: {
        height: "220px",
      },
    },
    "@media (max-width: 360px)": {
      sideImg: {
        width: "255px",
      },
    },
  });

const AboutUsWithStyle = withStyles(styles)(Aboutus);
export { AboutUsWithStyle };
// Customizable Area End
