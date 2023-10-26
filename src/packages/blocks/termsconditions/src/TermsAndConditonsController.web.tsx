import { IBlock } from "../../../framework/src/IBlock";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { Message } from "../../../framework/src/Message";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import ApiCall from "../../../components/src/ApiCall.web";
import React from "react";
// Customizable Area End


export const configJSON = require("./config");


export interface Props {
  // Customizable Area Start
  heading: any;
  subHeading: any;
  bgImage: any;
  classes: any;
  // Customizable Area End
}


interface S {
  // Customizable Area Start
  questionData: any;
  termsandConditionsTitle: string;
  expanded:boolean[]
  // Customizable Area End
}


interface SS {
  // Customizable Area Start
  id: string;
  // Customizable Area End
}


export default class TermsAndConditonsController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  termsAndConditonsAPICallId: any;
  // Customizable Area End


  constructor(props: Props) {
    super(props);


    this.subScribedMessages = [
      getName(MessageEnum.ReciveUserCredentials),
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage)
    ];


    this.state = {
      // Customizable Area StartinvalidEmailAndPassword
      questionData: [],
      termsandConditionsTitle: "",
      expanded: [],
      // Customizable Area End
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }



  // Customizable Area End


  // Customizable Area Start
  async componentDidMount() {
    this.getTermsAndConditonsApi();
  }

  async receive(from: string, message: Message) {
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      if (responseJson && responseJson.data) {
        this.responseBannerSucessCall(apiRequestCallId, responseJson);
      } else if (responseJson && responseJson.errors) {
        this.responseBannerFailureCall(apiRequestCallId, responseJson);
      }
    }
  }

  responseBannerSucessCall = async (apiRequestCallId: any, responseJson: any) => {
    if (apiRequestCallId === this.termsAndConditonsAPICallId) {
      this.termsAndConditonsApiSucessCallBack(responseJson);
    }
  };

  responseBannerFailureCall = async (apiRequestCallId: any, responseJson: any) => {
    if (apiRequestCallId === this.termsAndConditonsAPICallId) {
      this.termsAndConditonsApiFailureCallBack(responseJson);
    }
  };

  getTermsAndConditonsApi = async () => {
    console.log("<><><><><><><><")
    this.termsAndConditonsAPICallId = ApiCall({
      contentType: configJSON.termsAndConditonsContentType,
      method: configJSON.termsAndConditonsApimethod,
      endPoint: configJSON.termsAndConditonsEndPoint,
    });
  };

  termsAndConditonsApiSucessCallBack = (res: any) => {
    const { data } = res;
    const { title } = data[0];
    this.setState({
      questionData: data,
      termsandConditionsTitle: title
    });
  };
  termsAndConditonsApiFailureCallBack = (res: any) => {
    console.log("FailureCallBack=========", res);
  };

  handleChange = (index:number) => (e:any, isExpanded:boolean) => {
    const expanded = [...this.state.expanded];
    expanded[index] = isExpanded;
    this.setState({ expanded });
  };
  // Customizable Area End
}
// Customizable Area End





