import React, { Component } from "react";

import {
  Button,
  Typography,
  AppBar,
  Toolbar,
  withStyles

} from "@material-ui/core";
import { CartIcon, EodLogo } from "./assets";

interface IProps {
  classes: any,
  showHamburgerMenu: boolean,
  showDrawer: boolean,
  parentGoToShowHamBurger: () => void

}
interface S {
  showHamburgerMenu: boolean,
  showDrawer: boolean
}
class Header extends Component<IProps, S> {
  constructor(props: any) {
    super(props);

  }

  render() {
    return (
      <AppBar className={this.props.classes.header}>
        <Toolbar className={this.props.classes.toolbarContainer}>
          <div className={this.props.classes.firstSection}>
            <img src={EodLogo} alt="eodLogo" className={this.props.classes.eodlogo} />
            {this.props.showDrawer && <Button onClick={this.props.parentGoToShowHamBurger.bind(this)} variant="contained" href="#contained-buttons">
              Menu
            </Button>}
          </div>

          <div className={this.props.showHamburgerMenu ? this.props.classes.secondSection : this.props.classes.hideClass}>
            <Typography variant="h6" className={this.props.classes.navOptions}>
              Home
            </Typography>
            <Typography variant="h6" className={this.props.classes.navOptions}>
              Adventure Activities
            </Typography>
            <Typography variant="h6" className={this.props.classes.navOptions}>
              Park Information
            </Typography>
            <Typography variant="h6" className={this.props.classes.navOptions}>
              Events & Groups
            </Typography>
            <Typography variant="h6" className={this.props.classes.navOptions}>
              Annual Pass
            </Typography>
          </div>

          <div className={this.props.showHamburgerMenu ? this.props.classes.thirdSection : this.props.classes.hideClass}>

            <img src={CartIcon} alt="Cart Logo" className={this.props.classes.cartIcons} />
            <Button variant="outlined" className={this.props.classes.navOptions}>Buy Entry Tickets</Button>
            <Button variant="contained" color="primary">
              Log In
            </Button>
          </div>


        </Toolbar>
      </AppBar>
    );
  }
}




const styles: any = {
  header: {
    position: "static",
    backgroundColor: "white",
    color: "black",
  },
  firstSection: {
    width: '16%'
  },
  secondSection: {
    display: "flex",
    marginLeft: "60px",
  },
  thirdSection: {
    display: "flex",
    alignItems: "center",
    flex: "1"
  },
  navOptions: {
    margin: "0 15px",
    fontSize: "15px",
  },
  cartIcons: {
    width: "36px",
    height: "36px",
    marginRight: "15px",
  },
  eodlogo: {
    width: "80px",
    height: "60px",
    margin: "0 15px",
    marginTop: "24px",
    marginBottom: "16px",
  },
  menuIcon: {
    display: 'none'
  },
  toolbarContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  hideClass: {
    display: 'none'
  }
};

const responsiveStyles = {
  "@media (max-width: 600px)": {
    header: {
      padding: "10px",
      flexDirection: 'column',
      display: 'flex',

      // Adjust padding for small screens
    },
    firstSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: '100%',
      marginBottom: '10px'
      // Adjust margin for small screens
    },
    secondSection: {
      display: "flex",
      flexDirection: 'column'
    },
    thirdSection: {
      display: "flex",
      flexDirection: 'column'
    },
    menuIcon: {
      display: 'block'
    },
    toolbarContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
  },
};

const combinedStyles = { ...styles, ...responsiveStyles };



export default withStyles(combinedStyles)(Header)