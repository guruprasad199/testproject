import React, { Component } from "react";
import { Typography, Button, withStyles, Avatar  } from "@material-ui/core";
// import LandingPageController from "./LandingPageController";
//@ts-ignore
import { Testimonial } from "../../blocks/landingpage/src/LandingPageController";

const styles :any= {

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
    viewAllButton: {
      marginLeft: "16px",
    },
    testimonialContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap:'wrap',
      marginTop: "16px",
    },
    testimonialCard: {
      padding: "24px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      width: "25%", 
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "16px",
      height: "300px" 
    },
    blueTestimonial: {
      backgroundColor: "blue",
      color: "white",
    },
    testimonialContent: {
      marginBottom: "24px", 
    },
    testimonialName: {
      fontWeight: "bold",
      marginBottom: "4px", 
    },
    testimonialOrg: {},
    avatar: {
      width: "100px",
      height: "100px",
      margin: "0 auto",
      marginBottom: "16px",
    },
  };


  const responsiveStyles = {
    "@media (max-width: 600px)": {
      testimonialContainer: {
        display: "flex",
        justifyContent: "center",
        maxWidth: 1000,
        marginTop: "16px",
        flexDirection:'column'
      },
      testimonialCard: {
        width:'auto'
      },

    },
  };
  
  const combinedStyles = { ...styles, ...responsiveStyles };
  

interface IProps{
  classes:any,
  testimonialsData: Testimonial[]

}


const Testimonials = (props : IProps) => {

  // const { classes , testimonialsData } = props;

    return (
      <div className={props.classes.root}>
      <div className={props.classes.headerContainer}>
        <Typography variant="h4" className={props.classes.header}>
          Our blessed clients said about us
        </Typography>
        <Button variant="text" color="primary" className={props.classes.viewAllButton}>
          View All
        </Button>
      </div>
        <div className={props.classes.testimonialContainer}>
          {props.testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`${props.classes.testimonialCard} ${
                index === 1 ? props.classes.blueTestimonial : ""
              }`}
            >
              <Avatar alt={`Avatar ${index + 1}`} src={testimonial.dp} className={props.classes.avatar} />
              <Typography variant="body1" className={props.classes.testimonialContent}>
                {testimonial.content}
              </Typography>
              <Typography variant="body1" className={props.classes.testimonialName}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" className={props.classes.testimonialOrg}>
                {testimonial.organization}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  }


export default withStyles(combinedStyles)(Testimonials);