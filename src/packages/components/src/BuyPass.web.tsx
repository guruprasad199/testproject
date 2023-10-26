import React, { Component } from "react";
import { OrangeBG } from "./assets";
import { Typography, withStyles } from "@material-ui/core";
import BuyPassCardWeb from "./BuyPassCard.web";

const styles: any = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: `url(${OrangeBG})`,
    backgroundSize: "cover",
    color: "#fff"
  },
  sectionContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  section: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    padding: "16px",
    borderRight: "1px solid #ccc",
    "&:last-child": {
      borderRight: "none"
    },
    marginBottom: "20px"
  },
  heading: {
    fontSize: "30px",
    marginBottom: "16px",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 1.2
  },
  subheading: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "32px",
    textAlign: "center"
  }
};
const responsiveStyles = {
  "@media (max-width: 600px)": {
    sectionContainer: {
      display: "flex",
      flexDirection: "column"
    },
    section: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }
};

const combinedStyles = { ...styles, ...responsiveStyles };

interface IProps {
  classes: any;
}
class BuyPass extends Component<IProps> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h4" className={this.props.classes.heading}>
          Make Every day an
        </Typography>
        <Typography variant="h4" className={this.props.classes.subheading}>
          ADVENTURE
        </Typography>
        <div className={this.props.classes.sectionContainer}>
          <div className={this.props.classes.section}>
            <BuyPassCardWeb />
          </div>
          <div className={this.props.classes.section}>
            <BuyPassCardWeb />
          </div>
          <div className={this.props.classes.section}>
            <BuyPassCardWeb />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(combinedStyles)(BuyPass);
