import React, { Component } from "react";
import { Card } from "@material-ui/core";
type Props = {
  data: any;
  classes: any
};
interface State { }
export class KidsComboCarouselCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.carouselCard}>
        
            <img
              src={this.props.data.images}
              alt="carousel-img"
              className={classes.CarouselImageImage}
            />
          <div className={classes.carouselCardDetailContainer}>
            <h2 className={classes.carouselCardDetailHeading}>
              {this.props.data.heading}
            </h2>
            <div className={classes.carouselCardDetailInnerContainer}>
              <p className={classes.carouselCardDetailWeekdayHeading}>weekday Combo</p>
              <p className={classes.carouselCardDetailWeekdayTime}>10:00 AM - 8:00 PM</p>
              <p className={classes.carouselCardDetailWeekdaySubheading}>
                *not valid on weekends and or gazetted holidays*
              </p>
              <p className={classes.carouselCardDetailWeekdayDetails}>Read More</p>
            </div>
            <div>
              <p className={classes.carouselCardDetailPrice}>
                &#8377;{this.props.data.rate}
              </p>
              <p className={classes.carouselCardDetailPriceSubheading}>Taxes Included</p>
            </div>
            <button className={classes.carouselCardDetailButton}>Buy Ticket</button>
          </div>
      </Card>
    );
  }
}

export default KidsComboCarouselCard;
