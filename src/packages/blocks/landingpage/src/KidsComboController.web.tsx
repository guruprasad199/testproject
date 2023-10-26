// Customizable Area Start
import { IBlock } from "../../../framework/src/IBlock";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
//@ts-ignore
import Slider from "react-slick";

import React from "react";
// Customizable Area End

// Customizable Area Start

export const configJSON = require("./config");
/*  */
// Customizable Area End

export interface Props {
  zRef: any;
  data: any;
classes:any
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  zRef: any;

  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  // Customizable Area End
}

export default class KidsComboController extends BlockComponent<Props, S, SS> {
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.state = {
      // Customizable Area Start
      zRef: React.createRef<Slider>(),

      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }
  //Customizable area start

  handleNextAmenities = () => {
    this.state.zRef.current.slickNext();
  };
  //Customizable area end
  //Customizable area start

  handlePrevAmenities = () => {
    this.state.zRef.current.slickPrev();
  };
  //Customizable area end
}
