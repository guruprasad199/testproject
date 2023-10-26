
import React, { Component } from "react";
//Customizable area start
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 } from "./assets";
import { createStyles } from "@material-ui/styles";
import { Hidden, withStyles } from "@material-ui/core";
import { Col, Row } from "antd";
//Customizable area end
//Customizable area start

const muiStyles = (theme: any) => createStyles({
  ourActivitiesContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width:1920px)": {
      paddingBottom: 30
    },
    "@media (max-width:1440px)": {
      paddingBottom: 30
    },
    "@media (max-width:1280px)": {
      paddingBottom: 30
    },
    "@media (max-width:1024px)": {
      paddingBottom: 30
    },
    "@media (max-width:960px)": {
      gap: 24,
      height: 365,
    },
    alignItems: "center",
    paddingTop: 30
  },
  ourActivitiesInnerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  ourActivitiesHeading: {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "32px",
    fontWeight: 700,
    textTransform: "capitalize",
    color: "#2b65eb",
    "@media (max-width:960px)": {
      fontSize: "16px",
    },
  },
  gridImage: {
    objectFit: "cover",
    height: 428,
    width: "100%",
    "@media (max-width:1920px)": {
      height: 428,
    },
    "@media (max-width:1440px)": {
      height: 331,
    },
    "@media (max-width:1280px)": {
      height: 292,
    },
    "@media (max-width:1024px)": {
      height: 237,
    },
    "@media (max-width:960px)": {
      height: "82px"
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
    width: "100%"
  },
  imageLeftContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width:960px)": {
      gap: 5,
      width: 70,
    },

  },
  imageMiddleContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width:960px)": {
      gap: 5,
      width: 184,
    },

  },
  imageRightContainer: {
    display: "flex",
    flexDirection: "column",
    "@media (max-width:960px)": {
      gap: 5,
      width: 70,
    },
  },
  imageInnerContainer: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width:960px)": {
      gap: 4,
      width: 184,
    },
  }

})
export class ImageGrid extends Component<any> {
  render() {
    const { classes } = this.props
    return (

      <div className={classes.ourActivitiesContainer}>
        <div>
          <h1 className={classes.ourActivitiesHeading}>OUR ACTIVITIES</h1>
        </div>
        <Hidden mdUp>
          <div className={classes.ourActivitiesInnerContainer}>
            <div className={classes.imageContainer}>
              <div className={classes.imageLeftContainer}>
                <img src={img1} alt="Image" className={classes.gridImage} />
                <img src={img4} alt="Image" className={classes.gridImage} />
                <img src={img8} alt="Image" className={classes.gridImage} />
              </div>
              <div className={classes.imageMiddleContainer}>
                <img src={img2} alt="Image" className={classes.gridImage} />
                <div className={classes.imageInnerContainer}>
                  <img src={img5} alt="Image" className={classes.gridImage} />
                  <img src={img6} alt="Image" className={classes.gridImage} />
                </div>
                <img src={img9} alt="Image" className={classes.gridImage} />
              </div>
              <div className={classes.imageRightContainer}>
                <img src={img3} alt="Image" className={classes.gridImage} />
                <img src={img7} alt="Image" className={classes.gridImage} />
                <img src={img10} alt="Image" className={classes.gridImage} />
              </div>
            </div>
          </div>
        </Hidden>

        <Hidden smDown>
          <Row gutter={[28, 21]} style={{ margin: "auto 2%" }}>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img1} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div >
                <img src={img2} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img3} alt="Image" className={classes.gridImage} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img4} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img5} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img6} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img7} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img8} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div >
                <img src={img9} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <div >
                <img src={img10} alt="Image" className={classes.gridImage} />
              </div>
            </Col>
          </Row>
        </Hidden>

      </div>

    );
  }
}

export default withStyles(muiStyles)(ImageGrid);
//Customizable area end