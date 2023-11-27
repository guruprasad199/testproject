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
    classes?:any
    history:any
    // Customizable Area End
}

interface S {
    // Customizable Area Start
    showPassword: boolean,
    confirmPassword: boolean,
    imageprofile: any,
    imageupload: any,
    status: any,
    loading: boolean
    isSignupModal: boolean,
    registrationStatus: string,
    signupData: any;
    isAlertOpen: boolean;
    signUpOpen: boolean;
    // Customizable Area End
}

interface SS {
    // Customizable Area Start
    id: any;
    // Customizable Area End
}

export default class SignupController extends BlockComponent<
    Props,
    S,
    SS
> {
    // Customizable Area Start
    createAccountApiCallId: any = ""
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
            confirmPassword: false,
            imageprofile: "",
            imageupload: null,
            status: [],
            loading: false,
            isSignupModal: false,
            registrationStatus: "",
            signupData: null,
            isAlertOpen: false,
            signUpOpen: false,
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
            if (apiRequestCallId === this.createAccountApiCallId) {
                if (!responseJson.errors) {
                    this.setState({ status: responseJson, registrationStatus: "success", isSignupModal: true })
                    localStorage.setItem("Token", responseJson.meta.token);
                } else {
                    this.setState({isSignupModal: true, registrationStatus: "fail"})
                }
            }
        }
        // Customizable Area End
    }
    handleSubmit = (value: any) => {

        // Customizable Area Start
        const Token = localStorage.getItem("LoginSuccessToken")
        const header = {
            token: Token,
            // "Content-Type": configJSON.contentTypeApiAddDetail
        };
        let formdata = new FormData();

        formdata.append("data[attributes][password_confirmation]", value.Cpassword);
        formdata.append("data[attributes][password]", value.password);
        formdata.append("data[attributes][email]", value.email);
        formdata.append("data[attributes][first_name]", value.firstName);
        formdata.append("data[attributes][last_name]", value.lastName);
        formdata.append("data[attributes][full_phone_number]", value.Phone);
        formdata.append("data[type]", "email_account");

     

        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );

        this.createAccountApiCallId = requestMessage.messageId;

        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.Endpointapi,

        );

        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestHeaderMessage),
            JSON.stringify(header),

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBodyMessage),
            formdata

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestMethodMessage),
            configJSON.apiMethodTypeAddDetail,

        );

        runEngine.sendMessage(requestMessage.id, requestMessage);

        // Customizable Area End
        return true;
    }
    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleClickShowConfirmPassword = () => {
        this.setState({ confirmPassword: !this.state.confirmPassword });
    };

    ReaderImg = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ imageprofile: reader.result });
            }
        };
        reader.readAsDataURL(e.target.files[0]);

        this.setState({ imageupload: e.target.files[0] })
    };

    modalClose = () => {
        this.setState({isSignupModal: false, registrationStatus: ""})
    }

    getSignupData = (data: any) => {
        this.setState({ signupData: data });
        if (data?.access_token.length !== 0) {
          this.setState({ signUpOpen: true });
          window.setTimeout(() => {
            this.props.history?.push("/");
          }, 3000);
        }
      };

    // Customizable Area End


}
