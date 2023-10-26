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
  heading: any,
  subHeading: any,
  bgImage: any,
  classes:any
  // Customizable Area End
}


interface S {
  // Customizable Area Start
  refundPolicyData: any,
  refundPolicyTitle: any
  // Customizable Area End
}


interface SS {
  // Customizable Area Start
  id: string;
  // Customizable Area End
}


export default class RefundPolicyController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  refundPolicyAPICallId: any;

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
      refundPolicyData: [],
      refundPolicyTitle: ""
      // Customizable Area End
    };
    this.receive = this.receive.bind(this);
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }



  // Customizable Area End


  // Customizable Area Start
  async componentDidMount() {
    this.getRefundPolicyApi();
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
        this.responserefundPolicySucessCall(apiRequestCallId, responseJson);
      } else if (responseJson && responseJson.errors) {
        this.responserefundPolicyFailureCall(apiRequestCallId, responseJson);
      }
    }
  }

  responserefundPolicySucessCall = async (apiRequestCallId: any, responseJson: any) => {
    if (apiRequestCallId === this.refundPolicyAPICallId) {
      this.refundPolicyApiSucessCallBack(responseJson);
    }
  };

  responserefundPolicyFailureCall = async (apiRequestCallId: any, responseJson: any) => {
    if (apiRequestCallId === this.refundPolicyAPICallId) {
      this.refundPolicyApiFailureCallBack(responseJson);
    }
  };

  getRefundPolicyApi = async () => {
    this.refundPolicyAPICallId = ApiCall({
      contentType: configJSON.refundPolicyContentType,
      method: configJSON.refundPolicyApimethod,
      endPoint: configJSON.refundPolicyEndPoint,
    });
  };

  refundPolicyApiSucessCallBack = (res: any) => {

    const { data } = res;
    const { title } = data[0];

    this.setState({
      refundPolicyData: data,
      refundPolicyTitle: title
    });
    

  };
  refundPolicyApiFailureCallBack = (res: any) => {
    console.log("FailureCallBack=========", res);
  };

  // Customizable Area End
}
// Customizable Area End





