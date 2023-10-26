import React, { Component } from "react";
import { Typography, Button, withStyles, Box } from "@material-ui/core";
import Card from './Card.web';



const styles: any = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: "16px",
  },
  header: {
    color: "blue",
    flexGrow: 1,
    textAlign: "center",
  },
  subheader: {
    color: "black",
    flexGrow: 1,
    textAlign: "center",
  },
  viewAllButton: {
    marginLeft: "16px",
  },
};

interface IProps {
  classes: any,
  cardData: any
}
const CardsPage = (props: IProps) => {
  return (
    <div className={props.classes.root}>
      <div className={props.classes.headerContainer}>
        <Typography variant="h4" className={props.classes.header}>
          Adult Combos
        </Typography>
        <Button variant="text" color="primary" className={props.classes.viewAllButton}>
          View All
        </Button>
      </div>
      <Typography variant="h6" className={props.classes.subheader}>
        Anyone above 4 feets is eligible for these rides.
      </Typography>

      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {props.cardData && props.cardData.map((item: any) => {
          return <Card item={item} />
        })}
      </Box>
    </div>
  );
}

export default withStyles(styles)(CardsPage);