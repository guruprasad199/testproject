import React from "react";
// Customizable Area star
import LandingPageController from "./LandingPageController";
import Navbar from "../../../components/src/Navbar/Navbar.web";
import Banner from "./LandingPageBanner.web";
import KillerCarouselComponent from "./KillerCarousel.web";
import KidsCombo from "./KIdscombo.web";
import AdultsCombo from "./AdultsCombo.web";
import  ImageGrid from "./ImageGrid.web";
import  AdventurePass from "./AdventurePass.web";
import Footer from "../../../components/src/Footer/Footer.web";
import  Testimonial  from "./Testimonial.web";
// Customizable Area End

export default class LandingPage extends LandingPageController {
  constructor(props: any) {
    super(props);
  }
  // Customizable Area start

  render() {
    return (
      <div style={styles.landingPageContainer}>
        <Navbar onLogin={this.onLogin}/>
        <Banner />
        <KillerCarouselComponent />
        <AdultsCombo />
        <KidsCombo zRef={undefined} data={undefined} />
        <ImageGrid/>
        <AdventurePass />
        <Testimonial/> 
        <Footer /> 
      </div>
    );
  }
}

const styles = {
  landingPageContainer:{
    width: "100%",
    overflowX: "hidden",
} as React.CSSProperties
}
// Customizable Area End
