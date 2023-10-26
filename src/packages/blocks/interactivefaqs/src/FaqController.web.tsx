import { IBlock } from "../../../framework/src/IBlock";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import { Message } from "../../../framework/src/Message";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import ApiCall from "../../../components/src/ApiCall.web";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  heading: any;
  subHeading: any;
  bgImage: any;
  otherHeading: any;
  classes:any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  openPanel: boolean;
  questionData: any;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: string;
  // Customizable Area End
}

export default class FaqController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  faqAPICallId: any;
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
      openPanel: false,
      questionData: []
      // Customizable Area End
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  // Customizable Area End

  // Customizable Area Start
  async componentDidMount() {
    this.getBannerApi();
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

  responseBannerSucessCall = async (
    apiRequestCallId: any,
    responseJson: any
  ) => {
    if (apiRequestCallId === this.faqAPICallId) {
      this.bannerApiSucessCallBack(responseJson);
    }
  };

  responseBannerFailureCall = async (
    apiRequestCallId: any,
    responseJson: any
  ) => {
    if (apiRequestCallId === this.faqAPICallId) {
      this.bannerApiFailureCallBack(responseJson);
    }
  };

  getBannerApi = async () => {
    this.faqAPICallId = ApiCall({
      contentType: configJSON.faqContentType,
      method: configJSON.faqApimethod,
      endPoint: configJSON.faqEndPoint
    });
  };

  bannerApiSucessCallBack = (res: any) => {
    this.setState({ questionData: res.data.faqs }, () => {
      console.log(this.state.questionData);
    });
  };
  bannerApiFailureCallBack = (res: any) => {
    console.log("FailureCallBack=========", res);
  };

  // Customizable Area End
}
// Customizable Area End
