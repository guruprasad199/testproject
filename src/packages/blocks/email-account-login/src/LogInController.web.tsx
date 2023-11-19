import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  classes?: any;
  history: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  showPassword: boolean;
  status: any;
  loading: boolean;
  isRegistration: boolean;
  isModalOpen: boolean;
  profileData: any;
  open: boolean;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class SignInController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  loginAccountApiCallId: any = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.CountryCodeMessage),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    this.state = {
      showPassword: false,
      status: [],
      loading: false,
      isRegistration: false,
      isModalOpen: false,
      profileData: null,
      open: false,
    };

    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  async receive(_from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);
    // Customizable Area Start

    const apiRequestCallId = message.getData(
      getName(MessageEnum.RestAPIResponceDataMessage)
    );

    let responseJson = message.getData(
      getName(MessageEnum.RestAPIResponceSuccessMessage)
    );
    if (apiRequestCallId && responseJson) {
      if (apiRequestCallId === this.loginAccountApiCallId) {
        if (!responseJson.errors) {
          this.setState({ status: responseJson });
          localStorage.setItem("LoginToken", responseJson?.meta?.token);
          this.setState({ open: true });
          window.setTimeout(() => {
            this.props.history.push("/");
          }, 3000);
        } else {
          this.setState({ isModalOpen: true });
        }
      }
    }

    // Customizable Area End
  }

  startLoading = () => {
    this.setState({ loading: true });
  };

  stopLoading = () => {
    this.setState({ loading: false });
  };

  //istanbul ignore next/
  getStyles = (errors: any, fieldName: any, getIn: any) => {
    if (getIn(errors, fieldName)) {
      return {
        border: "1px solid red",
        width: "100%",
        height: "56px",
        borderRadius: "4px",
        padding: "10px",
      };
    } else {
      return {
        width: "100%",
        height: "56px",
        borderRadius: "4px",
        border: "1px solid #CBD5E1",
        padding: "10px",
      };
    }
  };

  handleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleLoginSubmit = (value: any) => {
    // Customizable Area Start
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };

    let raw = JSON.stringify({
      data: {
        type: "email_account",
        attributes: {
          email: value.email,
          password: value.password,
        },
      },
    });

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.loginAccountApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.LoginEndpointapi
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(getName(MessageEnum.RestAPIRequestBodyMessage), raw);
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.loginAPiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);

    // Customizable Area End
    return true;
  };

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  getProfileData = (data: any) => {
    this.setState({ profileData: data });
    if (data?.access_token.length !== 0) {
      this.setState({ open: true });
      window.setTimeout(() => {
        this.props.history.push("/");
      }, 3000);
    } else {
      this.setState({ isModalOpen: true });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Customizable Area End
}
