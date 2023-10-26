import React from "react";
// Customizable Area Start
import HeaderController from "../../../blocks/landingpage/src/HeaderController.web";
// Customizable Area End
class Header extends HeaderController {
  render() {
    // Customizable Area Start
    return (
      <div className="headerMainContainer">
        <img src={this.props.bgImage} alt="bgImage" className="headerImage" />
        <div className="headerTextContainer">
          <h2 className="headerText">
            {this.props.otherHeading}
            <span className="orangeText">{this.props.heading}</span>
          </h2>
          <p className="headerInfo" style={{fontFamily:"Montserrat", width:"50%"}}>
            {this.props.subHeading}
          </p>
        </div>
      </div>
    );
  }
  // Customizable Area End
}
export default Header;
export { Header };