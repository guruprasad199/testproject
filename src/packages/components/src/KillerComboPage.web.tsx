import React from "react";
import { Box, withStyles, Button } from "@material-ui/core";
import { PromoValue, LeftArrow } from "./assets";

interface Slide {
  imageUrl: string;
}

const styles: any = {
  arrow: {
    position: "absolute",
    top: "50%",
    width: "32px",
    height: "32px",
    cursor: "pointer",
    zIndex: 1
  },
  BgImage: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover"
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    left: "8%",
    transform: "translateY(-50%)",
    width: "80%",
    display: "flex",
    alignItems: "center"
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "20rem",
    height: "20rem"
  },
  textContainer: {
    flex: 1,
    marginLeft: "240px"
  },
  heading1: {
    color: "yellow",
    fontSize: "48px"
  },
  heading2: {
    color: "white",
    fontSize: "64px",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "white",
    color: "blue",
    marginTop: "32px",
    width: "75%"
  }
};

interface AppState {
  currentSlideIndex: number;
}

interface IProps {
  classes: any;
  currentSlideIndex: number;
  slides: Slide[];
  parentGoToPrevSlide: () => void;
  parentGoToNextSlide: () => void;
}

class KillerCombo extends React.Component<IProps, AppState> {
  constructor(props: IProps) {
    super(props);
    // this.state = {
    //   currentSlideIndex: 0
    // };
  }

  render() {
    const currentSlide = this.props.slides[this.props.currentSlideIndex];
    const { classes } = this.props;
    return (
      <Box
        className={classes.BgImage}
        style={{
          backgroundImage: `url(${currentSlide.imageUrl})`
        }}
      >
        <img
          src={LeftArrow}
          alt="Left Arrow"
          style={{
            ...styles.arrow,
            left: "10px"
          }}
          onClick={() => this.props.parentGoToPrevSlide()}
        />
        <img
          src={LeftArrow}
          alt="Right Arrow"
          style={{
            ...styles.arrow,
            right: "10px"
          }}
          onClick={() => this.props.parentGoToNextSlide()}
        />
        <Box className={classes.contentContainer}>
          <Box className={classes.imageContainer}>
            <img
              src={PromoValue}
              alt="Content Image"
              className={classes.image}
            />
          </Box>
          <Box className={classes.textContainer}>
            <div className={classes.heading1}>Killer</div>
            <div className={classes.heading2}>COMBO</div>
            <Button className={classes.button}>Buy Now</Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(KillerCombo);
