import React, { Component } from 'react'
import { AppBar, Box, Drawer, Hidden, createStyles, withStyles, Toolbar, IconButton, Grid, List, ListItem, ListItemText } from "@material-ui/core"
import { Logo, Cart, Menu } from "./assets";
import { Link } from "react-router-dom";

const muistyles = (theme: any) =>
  createStyles({
    navbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      height: "126px",
      background: 'white',
      width: "100%",
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 24,
        paddingRight: 24
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: 40,
        paddingRight: 40
      },
      [theme.breakpoints.up('xl')]: {
        paddingLeft: 80,
        paddingRight: 80
      },
    },

    logoContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      padding: "13px 0px"
    },
    logo: {
      width: 70,
      height: "auto"
    },
    cartContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center"
    },
    menuButtonContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center"
    },
    menu:
    {
      height: 32,
      width: 32
    }
    ,
    logoStyle: {
      width: "100px",
      height: "auto",
      [theme.breakpoints.down('lg')]: {
        width: 80,
      },
      [theme.breakpoints.up('lg')]: {
        width: 100,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      margin: "auto 0px",
      padding: "auto 80px",
      width: "100%",
    },
    mobileNavLinkText: {
      color: "#fff",
      fontFamily: "Liberteen Medium",
      fontWeight: 400,
      fontSize: "12px",
    },
    mobileNavLinkActiveText: {
      color: "#fff",
      fontFamily: "Liberteen Medium",
      fontWeight: 500,
      fontSize: "16px",
    },
    sliderIconHeader: {
      height: 82,
      width: "100%",
      backgroundColor: "#fff",
      padding: "14px",
    },
    listItemButton: {
      height: 45,
      paddingLeft: 24
    },
    navLinkText: {
      color: "#828282",
      fontFamily: "Liberteen Medium",
      fontWeight: 400,
      fontSize: "14px",
      [theme.breakpoints.down('lg')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '16px',
      },
    },
    activeNavLinkText: {
      fontFamily: "Liberteen Medium",
      fontWeight: 400,
      fontSize: "16px",
      [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16px',
      },
    },
    navLink: {
      marginRight: 20,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
      // width:"100%"
    },
    navLinkContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      alignContent: "left",
    },
    loginButton: {
      background: "var(--primary, #2B65EC)",
      color: "white",
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      borderRadius: "5px",
      border: "none",
      height: 44,
      width: 98,
      [theme.breakpoints.down('lg')]: {
        fontSize: '14px',
        height: 38,
        width: 85,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
        height: 44,
        width: 98,
      },
    },
    buyTicketsButton: {
      background: "white",
      color: "var(--primary, #2B65EC)",
      fontSize: "16px",
      fontWeight: 600,
      fontFamily: "Montserrat, sans-serif",
      borderRadius: "5px",
      border: "1px solid var(--primary, #2B65EC)",
      height: 44,
      width: 185,
      marginRight: "24px",
      [theme.breakpoints.down('lg')]: {
        fontSize: '12px',
        height: 38,
        width: 149,
        marginRight: 10,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16px',
        height: 44,
        width: 185,
      },
    },
    activeNavLink: {
      width: "100%",
      height: "3px",
      borderTopRightRadius: "4px",
      borderTopLeftRadius: "4px"
    },
    '@media(max-width: 1030px)': {
      navbar: {
        height: 100
      },
      navLink: {
        marginRight: 12
      }
    },
    cartIconContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      width: "36px",
      height: "36px",
      marginRight: "20px",
      paddingTop: "10px"
    },
    cartStyle: { width: "24px", height: "auto" },
    cartCount: {
      position: "absolute",
      right: "0",
      height: "16px",
      width: "16px",
      borderRadius: "50%",
      backgroundColor: "var(--primary, #2B65EC)",
      color: "white",
      fontSize: "11px",
      fontFamily: "'Montserrat'",
      fontWeight: 700,
      textAlign: "center",
      lineHeight: "16px"
    },
    '@media(max-width: 991px)': {
      cartIconContainer: {
        paddingTop: "3px",
        marginRight: "0px"
      }
    },
  });


const styles = {
  activeTabFont: {
    color: "var(--primary, #2B65EC"
  } as React.CSSProperties,
  activeTab: {
    backgroundColor: "var(--primary, #2B65EC",
  } as React.CSSProperties,
  nonActiveTab: {
    backgroundColor: "transparent"
  } as React.CSSProperties,
}

export class Navbar extends Component<any> {
  state = {
    drawerOpen: false
  }
  handleToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {

    const { classes } = this.props
    return (
      <>
        <Hidden mdUp >
          <Drawer PaperProps={{
            style: {
              width: "248px",
              backgroundColor: "#2B65EC"
            }
          }} open={this.state.drawerOpen} onClose={this.handleToggle}>
            <div className={classes.sliderIconHeader}>
              <img src={Logo} alt="" style={{ width: 70, height: "auto", marginLeft: "10px" }} />
            </div>
            <List>
              <ListItem button className={classes.listItemButton}>
                <Link className={window.location.pathname === "/" ? classes.mobileNavLinkActiveText : classes.mobileNavLinkText} to={'/'}>Home</Link>
              </ListItem>
              <ListItem button className={classes.listItemButton}>
                <Link to={'/AdventureActivity'} className={window.location.pathname === "/AdventureActivity" ? classes.mobileNavLinkActiveText : classes.mobileNavLinkText}>Adventure Activities</Link>
              </ListItem>
              <ListItem button className={classes.listItemButton}>
                <Link to={'/parkInformation'} className={window.location.pathname === "/parkInformation" ? classes.mobileNavLinkActiveText : classes.mobileNavLinkText}>Park Information</Link>
              </ListItem>
              <ListItem button className={classes.listItemButton}>
                <Link to={'/'} className={window.location.pathname === "/EventsGroups" ? classes.mobileNavLinkActiveText : classes.mobileNavLinkText}>Events & Groups</Link>
              </ListItem>
              <ListItem button className={classes.listItemButton}>
                <Link to={'/'} className={window.location.pathname === "/AnnualPass" ? classes.mobileNavLinkActiveText : classes.mobileNavLinkText}>Annual Pass</Link>
              </ListItem>
            </List>
          </Drawer>
          <AppBar elevation={0} position='static' style={{ backgroundColor: "#fff" }}>
            <Toolbar>
              <Grid container alignItems='center' style={{ marginBottom: 22 }}>
                <Grid item xs={2} className={classes.menuButtonContainer}>
                  <IconButton
                    edge="start"
                    aria-label='menu'
                    onClick={this.handleToggle}
                  >
                    <img src={Menu} className={classes.menu} />
                  </IconButton>
                </Grid>
                <Grid item xs={8} className={classes.logoContainer}>
                  <img src={Logo} alt="" className={classes.logo} />
                </Grid>
                <Grid item xs={2} className={classes.cartContainer}>
                  <div className={classes.cartIconContainer}>
                    <div className={classes.cartCount}>0</div>
                    <img src={Cart} alt="" className={classes.cartStyle} id="cart" />
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden smDown>
          <AppBar className={classes.navbar} position='static' elevation={0}>
            <img src={Logo} alt="" className={classes.logoStyle} />
            <Box className={classes.navLinkContainer}>
              <Box className={classes.navLink} >
                <Box className={classes.activeNavLink} style={styles.nonActiveTab}></Box>
                <Link className={window.location.pathname === "/" ? classes.activeNavLinkText : classes.navLinkText} style={window.location.pathname === "/" ? styles.activeTabFont : {}} to={'/'}>Home</Link>
                <Box className={classes.activeNavLink} style={window.location.pathname === "/" ? styles.activeTab : styles.nonActiveTab}></Box>
              </Box>
              <Box className={classes.navLink} >
                <Box className={classes.activeNavLink} style={styles.nonActiveTab}></Box>
                <Link className={classes.navLinkText} to={'/AdventureActivity'} style={window.location.pathname === "/AdventureActivity" ? styles.activeTabFont : {}}>Adventure Activities</Link>
                <Box className={classes.activeNavLink} style={window.location.pathname === "/AdventureActivity" ? styles.activeTab : styles.nonActiveTab}></Box>
              </Box>
              <Box className={classes.navLink} >
                <Box className={classes.activeNavLink} style={styles.nonActiveTab}></Box>
                <Link className={classes.navLinkText} to={'/parkInformation'} style={window.location.pathname === "/parkInformation" ? styles.activeTabFont : {}}>Park Information</Link>
                <Box className={classes.activeNavLink} style={window.location.pathname === "/parkInformation" ? styles.activeTab : styles.nonActiveTab}></Box>
              </Box>
              <Box className={classes.navLink} >
                <Box className={classes.activeNavLink} style={styles.nonActiveTab}></Box>
                <Link className={classes.navLinkText} to={'/'} style={window.location.pathname === "/EventsGroups" ? styles.activeTabFont : {}}>Events & Groups</Link>
                <Box className={classes.activeNavLink} style={window.location.pathname === "/EventsGroups" ? styles.activeTab : styles.nonActiveTab}></Box>
              </Box>
              <Box className={classes.navLink} >
                <Box className={classes.activeNavLink} style={styles.nonActiveTab}></Box>
                <Link className={classes.navLinkText} to={'/'} style={window.location.pathname === "/AnnualPass" ? styles.activeTabFont : {}}>Annual Pass</Link>
                <Box className={classes.activeNavLink} style={window.location.pathname === "/AnnualPass" ? styles.activeTab : styles.nonActiveTab}></Box>
              </Box>
              <div className={classes.cartIconContainer}>
                <div className={classes.cartCount}>0</div>
                <img src={Cart} alt="" className={classes.cartStyle} id="cart" />
              </div>
              <button className={classes.buyTicketsButton}>
                Buy Entry Tickets
              </button>
              <button
                onClick={this.props.onLogin}
                className={classes.loginButton}
              >
                Log in
              </button>
            </Box>

          </AppBar>
        </Hidden>
      </>

    )
  }
}
export default withStyles(muistyles)(Navbar)