import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10
} from "./assets";

const styles: any = {
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "16px"
  },
  header: {
    color: "blue",
    textAlign: "center",
    marginBottom: "16px"
  },
  imageContainer: {
    // display: "flex",
    // justifyContent: "center", // Horizontally center the rows
    // width: "100%", // Make rows take full width of the page
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px"
  },
  image: {
    width: "24%", // Adjust the width as needed
    height: "200px", // Adjust the height as needed
    marginBottom: "8px"
  },
  wideImage: {
    width: "48%",
    height: "200px",
    marginBottom: "8px"
  }
};

interface IProps {
  classes: any;
}

class ImageGrid extends Component<IProps> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography variant="h4" className={this.props.classes.header}>
          Our Activities
        </Typography>
        <div className={this.props.classes.imageContainer}>
          {/* First Row */}
          <div className={this.props.classes.row}>
            <img
              className={this.props.classes.image}
              src={Gallery1}
              alt="Activity 1"
            />
            <img
              className={this.props.classes.wideImage}
              src={Gallery2}
              alt="Activity 2"
            />
            <img
              className={this.props.classes.image}
              src={Gallery3}
              alt="Activity 3"
            />
          </div>
        </div>
        {/* Second Row */}
        <div className={this.props.classes.imageContainer}>
          <div className={this.props.classes.row}>
            <img
              className={this.props.classes.image}
              src={Gallery4}
              alt="Activity 4"
            />
            <img
              className={this.props.classes.image}
              src={Gallery5}
              alt="Activity 5"
            />
            <img
              className={this.props.classes.image}
              src={Gallery6}
              alt="Activity 6"
            />
            <img
              className={this.props.classes.image}
              src={Gallery7}
              alt="Activity 7"
            />
          </div>
        </div>
        {/* Third Row */}
        <div className={this.props.classes.imageContainer}>
          <div className={this.props.classes.row}>
            <img
              className={this.props.classes.image}
              src={Gallery8}
              alt="Activity 8"
            />
            <img
              className={this.props.classes.wideImage}
              src={Gallery9}
              alt="Activity 9"
            />
            <img
              className={this.props.classes.image}
              src={Gallery10}
              alt="Activity 10"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ImageGrid);
