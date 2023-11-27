import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { userProfile } from "./assets";
import { Linking } from "react-native";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  drawerContent?: boolean;
  classes?: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  webDrawer: boolean;
  token: any;
  drawerItems: any;
  emailValue: string;
  isSuccessMessage: boolean;
  isValidEmail: boolean;
  errorMessage: string;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class NavigationMenuController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiGetDataCallId: string = "";
  apiPostEmailSub: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      getName(MessageEnum.SessionResponseMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      webDrawer: false,
      token: "",
      drawerItems: [],
      emailValue: "",
      isSuccessMessage: false,
      isValidEmail: false,
      errorMessage: "",
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if (apiRequestCallId === this.apiPostEmailSub) {
        if (responseJson) {
          this.setState({ isSuccessMessage: true });
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  userProfileProps = {
    source: userProfile,
  };

  subscribeEmail = () => {
    const today = new Date().toISOString().split('T')[0];
    let data = {
      data: {
        email: this.state.emailValue,
        subscribed_date: today,
      },
    };

    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiPostEmailSub = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.postEmailSubscription
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(data)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  };

  onValueChange = (value: string) => {
    const inputEmail = value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(inputEmail) && inputEmail !== "";
    this.setState({
      isValidEmail: isValid,
      emailValue: value,
      errorMessage: isValid
        ? ""
        : inputEmail === ""
        ? "Please enter an email"
        : "Enter a valid email",
    });
  };

  modalClose = () => {
    this.setState({ isSuccessMessage: false });
  };

  handleEmailSubmit = (event: any) => {
    if (this.state.isValidEmail) {
      this.subscribeEmail();
      this.setState({ emailValue: "" });
    }
  };

  // Customizable Area End
}
