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
  classes: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  ToggleButton: string;
  aboutDataContainer: any;
  parkActivities: any;
  contentMapper: any;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class AboutUsController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  loginAccountApiCallId: any = "";
  getCardsDataList: any = "";
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
      ToggleButton: "Zipline",
      aboutDataContainer: [],
      parkActivities: [],
      contentMapper: null,
    };

    // Customizable Area End

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
    // Customizable Area Start
    this.getCardData();
    
    // Customizable Area End
  }

  // Customizable Area Start

//istanbul ignore next/
  async receive(from: string, message: Message) {
    runEngine.debugLog("Message Recived", message);

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if (apiRequestCallId === this.getCardsDataList) {
        if (responseJson) {
          this.setState({ aboutDataContainer: responseJson.data, parkActivities: responseJson.data[0]?.attributes.park_activities}, () => {
            this.getFilterData("Zipline")
          });
        }
      }
    }
  }

  getCardData = () => {
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.getCardsDataList = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.apiEndPointAboutus
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.getMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  getFilterData = (value: string) => {
    const filterData = this.state.parkActivities.filter((item: { name: string; }) => item.name === value)
    this.setState({ contentMapper: filterData[0]})
  }

  handleTabClick = (value: string) => {
    this.setState({ ToggleButton: value })
    this.getFilterData(value)

  }

  // Customizable Area End
}
