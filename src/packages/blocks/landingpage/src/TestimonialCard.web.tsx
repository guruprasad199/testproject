import React from "react";

import TestimonialController from "./TestimonialController.web";
import { Card, createStyles, withStyles } from "@material-ui/core";

export class TestimonialCard extends TestimonialController {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.testmonialCardContainer}>
        <Card className={classes.testmonialCard}>
          <div className="testmonialCardImageContainer">
            <img src={this.props.image} alt="" className={classes.testmonialCardImage} />
          </div>

          <p className={classes.testmonialCardDescription}>
            "Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem
            accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi"
          </p>
         
          <p className={classes.testmonialCardSmallDescription}>
            "Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem
            accusantium doloremque laudantium,
            totam rem aperiam.
          </p>
 
          <div>
            <p className={classes.testmonialCardUserName} >{this.props.name}</p>
            <p className={classes.testmonialCardDesignation}>{this.props.designation}</p>
          </div>
        </Card>
        <div style={{ height: "2px", width: "100%" }}></div>
      </div>
    );
  }
}
const muiSTyles = (theme: any) => createStyles({
  testmonialCard: {
    width: 426,
    height: 443,
    boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 30,
    textAlign: "center",
    gap:30,
    "&:hover": {
      background: "var(--primary, #2B65EC)",
      color:"#fff"
    },
    "@media(max-width:1920px)":{
      width: 460,
      height: 478,
      padding:41
    },
    "@media(max-width:1440px)":{
      width: 426,
      height: 443,
      padding:32
    },
    "@media(max-width:1280px)":{
      width: 348,
      height: 415,
      padding:28
    },
    "@media(max-width:1024px)":{
      width: 282,
      height: 320,
      padding:20
    },
    "@media(max-width:768px)":{
      width: 282,
      height: 320,
      gap:20,
      padding: 20,
    }
  },
  testmonialCardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  testmonialCardDescription:{
    fontSize:18,
    fontWeight:400,
    lineHeight:"28px",
    "@media(max-width:1920px)":{
      fontSize:18,
    },
    "@media(max-width:1280px)":{
      fontSize:14,
    },
    "@media(max-width:1026px)":{
      display:"none"
    },
  },
  testmonialCardSmallDescription:{
    fontSize:14,
    fontWeight:400,
    lineHeight:"28px",
    "@media(min-width:1026px)":{
      display:"none",
      width:"94%"
    },
  },
  testmonialCardUserName:{
    fontSize:16,
    fontWeight:600,
    marginBottom:0,
    "@media(max-width:1920px)":{
      fontSize:16,
    },
    "@media(max-width:1280px)":{
      fontSize:16,
    },
    "@media(max-width:1024px)":{
      fontSize:14,
    },
    "@media(max-width:768px)":{
      fontSize:14,
      lineHeight:"28px"
    }
  },
  testmonialCardDesignation:{
    fontSize:16,
    fontWeight:400,
    marginBottom:0,
    "@media(max-width:1024px)":{
      fontSize:12,
    },
    "@media(max-width:768px)":{
      fontSize:12,
      lineHeight:"28px"
    }
  },
  testmonialCardImage:{
    height:110,
    width:"auto",
    "@media(max-width:1920px)":{
      width: 110,
      height: 110,
    },
    "@media(max-width:1280px)":{
      width: 80,
      height: 80,
    },
    "@media(max-width:1024px)":{
      width: 50,
      height: 50,
    },
    "@media(max-width:768px)":{
      height: 50,
    }
  }
})


export default withStyles(muiSTyles)(TestimonialCard);
