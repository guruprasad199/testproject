import React, { Component } from "react";
import { Typography, Button, withStyles } from "@material-ui/core";

const styles: any = {
  body: {
    marginBottom: "8px"
  },
  button: {
    marginTop: "16px",
    color: "#fff",
    borderColor: "#fff",
    width: "35%"
  },
  yellowText: {
    color: "yellow"
  }
};

interface IProps {
  classes: any;
}
class BuyPassCard extends Component<IProps> {
  render() {
    return (
      <div>
        <Typography className={this.props.classes.body} variant="h6">
          <span className={this.props.classes.yellowText}>₹1000.00 </span> All
          day passes
        </Typography>
        <Typography className={this.props.classes.body} variant="body1">
          Enjoy our all day pass including outdoor and indoor activities and
          rides!
        </Typography>
        <Typography variant="body1" className={this.props.classes.body}>
          Save ₹200 when you buy online.
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          className={this.props.classes.button}
        >
          Buy Passes
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(BuyPassCard);
