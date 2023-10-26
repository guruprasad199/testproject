import React from 'react'
import KillerCardController from "./KillerCardController.web";

class KillerCard extends KillerCardController {

  //Customizable area start

  renderCards = () => {
    return (
      <div className="card-containers">
        <div className="left-cards">
          <img src={this.props.data?.images} className="cards-images" />
        </div>
        <div className="right-cards">
            <div style={{display:"flex",flexDirection:"column"}}>
              <span className="cards-heading">{this.props.data?.heading}</span>
              <span className="cards-text">{this.props.data?.text}</span>
            </div>
            <button className="cards-btn" style={{ fontWeight: 600 }}>
              Buy Now
            </button>
        </div>
      </div>
    );
  };
  //Customizable area end


  //Customizable area start

  render() {
    return (
      <div className='killerCardContainer'>
        {this.renderCards()}
      </div>
    );
  }
}
//Customizable area end


export default KillerCard;
export { KillerCard }
