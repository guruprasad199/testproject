// Customizable Area Start
import { IBlock } from "../../../framework/src/IBlock";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";


// Customizable Area End

// Customizable Area Start

export const configJSON = require("./config");

// Customizable Area End

export interface Props {

  // Customizable Area Start
  data: any;

  // Customizable Area End
}

interface S {
  // Customizable Area Start

  upCommingEvent: any;

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class KillerCardController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    
    // Customizable Area End
    this.state = {
      // Customizable Area Start
      upCommingEvent: [],

      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

 

  // Customizable Area End
}


