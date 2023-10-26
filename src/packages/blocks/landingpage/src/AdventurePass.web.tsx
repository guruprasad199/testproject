import React, { Component } from "react";
import { Grid, Hidden, createStyles, withStyles} from "@material-ui/core";


class AdventurePass extends Component<any> {

  adventurePassData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  render() {
    const { classes } = this.props
    return (
      <Grid container className={ classes.adventureContainer}>
        <Grid xs={12} className={classes.adventureContainerHeading}>
          <h2 className={classes.adventureSubHeading}>Make Every Day An</h2>
          <div>
            <h1 className={classes.adventureMainHeading}>Adventure</h1>
          </div>
        </Grid>
        {this.adventurePassData.map((item: any, index: any) => {
          let className;
          if (index === 1) {
            className = classes.passContainer2;
          } else if (index === 2) {
            className = classes.passContainer3;
          } else {
            className = classes.passContainer1;
          }
          return (
            <Grid item xs={12} md={4} key={index}>
              <div
                key={index}
                className={className}
              >
                <div className={classes.passContent}>
                  <p className={classes.passInfo}>
                    <span className={classes.passFees}> &#8377;1000.00</span> All Day
                    Pass
                  </p>
                  <p className={classes.passText}>
                    Enjoy our All Day Pass Including All Indoor and Outdoor
                    Attractions and Rides!
                  </p>
                  <p  className={classes.passText}>
                    Save &#8377;200When you buy online!
                  </p>
                  <button className={classes.BuyPassButton}>Buy Passes</button>
                  
                </div>
                <Hidden smUp>
                  {index!==2 && <div className={classes.dividerMobile}></div>}
                </Hidden>
              </div>
            </Grid>
          )
        })}
      </Grid>
    );
  }
}
const muiStyles = (theme:any)=>createStyles({
  adventureContainer: {
    background: "linear-gradient(99deg, #EB5757 0%, #D19945 72%, #FFDE59 100%)",
    [theme.breakpoints.down('lg')]: {
      height: 564,
    },
    [theme.breakpoints.up('lg')]: {
      height: 575,
    },
    [theme.breakpoints.down('md')]: {
      height: 447,
    },
    "@media(max-width:700px)": {
      height: '750px',
    },
  },
  adventureContainerHeading: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop:"14px"
  },
  adventureSubHeading:{
    fontSize:32,
    fontFamily:"Montserrat, sans-serif",
    fontWeight:400,
    color:"#fff",
    [theme.breakpoints.down('md')]: {
      fontSize:14,
    }
  },
  adventureMainHeading:{
    fontSize:48,
    fontFamily:"Liberteen Regular",
    fontWeight:500,
    color:"#fff",
    textTransform:"uppercase",
    marginBottom:0,
    [theme.breakpoints.down('md')]: {
      fontSize:24,
      marginBottom:20,
    }
  },
  passContainer1:{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    borderRight:"1px solid white",
    [theme.breakpoints.down('lg')]: {
      justifyContent:"flex-start",
      marginLeft:40
    },
    [theme.breakpoints.down('md')]: {
      justifyContent:"center",
      marginLeft:0,
      border:"none",
      flexDirection:"column"
    },
  },
  dividerMobile:{
    height:1,
    background:"#fff",
    width:"56%",
    alignSelf:"center",
    marginTop:"35px"
  },
  passContainer2:{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    borderRight:"1px solid white",
    [theme.breakpoints.down('lg')]: {
      width:"95%"
    },
    [theme.breakpoints.down('md')]: {
      width:"100%",
      border:"none",
      flexDirection:"column"
    },
  },
  passContainer3:{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    [theme.breakpoints.down('lg')]: {
      justifyContent:"flex-end",
      marginRight:40
    },
    [theme.breakpoints.down('md')]: {
      justifyContent:"center",
      marginRight:0,
      flexDirection:"column"
    },
  },
  passContent:{
    fontFamily: "Montserrat",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    justifyContent: "center",
    width:"60%",
    color:"#fff",
    [theme.breakpoints.down('lg')]: {
      width:"80%",
    },
    [theme.breakpoints.down('md')]: {
      textAlign: "center",
    },
  },
  passFees:{
    color:"#FFCD34",
    fontSize:24,
    fontWeight:600,
    [theme.breakpoints.down('md')]: {
      fontSize:16,
    }
  },
  passInfo:{
    fontSize:24,
    fontWeight:600,
    [theme.breakpoints.down('md')]: {
      fontSize:16,
    }
  },
  passText:{
    fontSize:16,
    fontWeight:400,
    marginBottom:30,
    [theme.breakpoints.down('md')]: {
      fontSize:12,
      marginBottom:20,
    }
  },
  BuyPassButton:{
    background:"transparent",
    border:"1px solid white",
    borderRadius:5,
    height:49,
    width:133,
    [theme.breakpoints.down('md')]: {
      alignSelf:"center",
      height:38,
      width:133,
      fontSize:16,
      fontWeight:600
    },
  }
})



export default withStyles(muiStyles)(AdventurePass);
export { AdventurePass };
