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
import Navbar from "../../../components/src/Navbar/Navbar.web";
import { activityBanner } from "./assets";
import Footer from "../../../components/src/Footer/Footer.web";

interface IProps {
  title: string;
  content: string;
  image: string;
  classes?: any;
}

//istanbul ignore next/
const RenderCard: React.FunctionComponent<IProps> = (props) => {
  const { title, content, image, classes } = props;
  return (
    <div className={classes.cardContainer}>
      <img src={image} alt="cardImg" className={classes.cardImgHolder} />
      <div className={classes.textWrapper}>
        <span className={classes.titlesText}>{title}</span>
        <span className={classes.productDescription}>{content}</span>
      </div> 
    </div>
  );
};

// Customizable Area End

import Settings2Controller, { Props } from "./Settings2Controller";

export default class Settings2 extends Settings2Controller {
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
        <div style={{ position: "relative" }}>
          <img
            src={activityBanner}
            className={this.props.classes?.backGroundContent}
          />
          <div className={this.props.classes?.textBackground}>
            <span className={this.props.classes?.headingTitle}>
              Thrilling Adventures for Teenagers and Adults
            </span>
            <span className={this.props.classes?.textDiscription}>
              e-o-d Adventure Park brings adventure activities for everyone,
              whether you are a thrill seeker, want to relax or want a fun time
              for your kids. You can visit us Every - Other - Day for a great
              adventure time
            </span>
          </div>
        </div>
        <div className={this.props.classes?.btnContainer}>
          <button
            onClick={() => this.handleTabClick(1)}
            className={
              this.state.activeTab === 1
                ? this.props.classes?.activeTabButton
                : this.props.classes?.tabButton
            }
          >
            Thrilling Adventures for Teenagers and Adults
          </button>
          <button
            data-test-id="kidsButtonTab"
            onClick={() => this.handleTabClick(2)}
            className={
              this.state.activeTab === 2
                ? this.props.classes?.activeTabButton
                : this.props.classes?.tabButton
            }
          >
            Thrilling Adventures for Kids
          </button>
        </div>
        <div
          className={
            this.state.activeTab === 1
              ? this.props.classes?.mapedCard
              : this.props.classes?.mapedCardChild
          }
        >
          {this.state.activeTab === 1 &&
            this.filterDataByCategory("adults_and_teenagers").map(
              (item: any) => (
                <RenderCard
                  key={item.id}
                  title={item.attributes.title}
                  content={item.attributes.description}
                  image={item.attributes.banner}
                  classes={this.props.classes}
                />
              )
            )}
          {this.state.activeTab === 2 &&
            this.filterDataByCategory("kids").map((item: any) => (
              <RenderCard
                key={item.id}
                title={item.attributes.title}
                content={item.attributes.description}
                image={item.attributes.banner}
                classes={this.props.classes}
              />
            ))}
        </div>
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
    },
    textBackground: {
      position: "absolute",
      top: " 50%",
      right: "50%",
      transform: "translate(50%, -50%)",
    },
    textDiscription: {
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
      marginBottom: "15px",
    },
    productDescription: {
      fontSize: "14px",
      fontFamily: "Montserrat",
      fontWeight: 400,
      color: "#334155",
    },
    titlesText: {
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontWeight: 600,
      color: "#334155",
      textTransform: "capitalize",
      marginBottom: "6px",
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
      width: "322px",
      height: "438px",
      borderRadius: "5px",
      boxShadow: "0px 8px 17px -9px",
    },
    mapedCardChild: {
      margin: "0 auto 100px auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(322px, 0fr))",
      gap: "20px",
      justifyContent: "center",
    },
    mapedCard: {
      width: "50%",
      margin: "0 auto 100px auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
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
      mapedCardChild: {
        width: "50%",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
    "@media (max-width: 1024px)": {
      mapedCard: {
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px",
      },

      mapedCardChild: {
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
      textDiscription: {
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
      textDiscription: {
        fontSize: "14px",
        width: "100%",
      },
      cardContainer: {
        width: "250px",
      },
      cardImgHolder: {
        width: "230px",
      },
    },
    "@media (max-width: 550px)": {
      mapedCard: {
        gridTemplateColumns: "repeat(1, 1fr)",
      },
      mapedCardChild: {
        gridTemplateColumns: "repeat(1, 1fr)",
      },
      cardContainer: {
        width: "322px",
        height: "438px",
        borderRadius: "5px",
        boxShadow: "0px 8px 17px -9px",
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
    },
    "@media (max-width: 400px)": {
      backGroundContent: {
        height: "60%",
      },
    },
    "@media (max-width: 350px)": {
      cardContainer: {
        width: "250px",
      },
      cardImgHolder: {
        width: "230px",
      },
    },
  });
const AdventureActivityWithStyle = withStyles(styles)(Settings2);
export { AdventureActivityWithStyle };

// Customizable Area End
