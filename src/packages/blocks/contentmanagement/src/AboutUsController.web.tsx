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
    classes: any
    // Customizable Area End
}

interface S {
    // Customizable Area Start
    ToggleButton: string,

    // Customizable Area End
}

interface SS {
    // Customizable Area Start
    id: any;
    // Customizable Area End
}

export default class AboutUsController extends BlockComponent<
    Props,
    S,
    SS
> {
    // Customizable Area Start
    loginAccountApiCallId: any = ""
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




    // Customizable Area End
}
