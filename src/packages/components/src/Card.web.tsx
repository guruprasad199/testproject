import React, { Component } from "react";
import { Typography, withStyles, Button } from "@material-ui/core";
import { CardData } from "../../blocks/landingpage/src/types";

interface IProps {
  classes: any;
  item: CardData;
}

const styles: any = {
  container: {
    display: "flex",
    gap: "16px",
    width: "45%",
    margin: "10px 0",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    marginTop: "8px",
    color: "#2a65eb"
  },
  combo: {
    color: "#a2a2a2"
  },
  timing: {},
  caption: {
    color: "#d0d0d0"
  },
  price: {},
  tax: {
    color: "#d0d0d0"
  },
  button: {
    backgroundColor: "#2a65eb",
    color: "white",
    width: "50%"
  }
};

class Card extends Component<IProps> {
  render() {
    return (
      <div className={this.props.classes.container}>
        <img src={this.props.item.img} alt="cardimg" />
        <div>
          <Typography variant="h5" className={this.props.classes.heading}>
            {this.props.item.heading}
          </Typography>
          <Typography
            variant="subtitle1"
            className={this.props.classes.combo}
            dangerouslySetInnerHTML={{ __html: this.props.item.subtitleCombo }}
          />
          <Typography variant="h6" className={this.props.classes.timing}>
            {this.props.item.timings}
          </Typography>
          <Typography variant="body1" className={this.props.classes.caption}>
            {this.props.item.caption}
          </Typography>
          <Typography variant="h6" className={this.props.classes.price}>
            &#8377;{this.props.item.price}
          </Typography>
          <Typography variant="subtitle1" className={this.props.classes.tax}>
            Taxes included
          </Typography>
          <Button
            fullWidth
            variant="contained"
            className={this.props.classes.button}
          >
            BUY TICKET
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
