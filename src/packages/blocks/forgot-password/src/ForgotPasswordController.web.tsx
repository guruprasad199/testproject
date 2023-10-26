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
    classes:any;
    history:any
    // Customizable Area End
}

interface S {
    // Customizable Area Start
 
    status:any
    loading:boolean,
    forgotPassword:boolean
    confirmPassword:boolean
    showPassword:boolean
    ForgotToken:string,
    open:boolean,

    // Customizable Area End
}

interface SS {
    // Customizable Area Start
    id: any;
    // Customizable Area End
}

export default class ForgotPasswordController extends BlockComponent<
    Props,
    S,
    SS
> {
    // Customizable Area Start
    ForgotPasswordApiCallId: any = ""
    ResetPasswordApiCallId:any=""
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
          
            status:[],
            loading:false,
            forgotPassword:false,
            confirmPassword:false,
            showPassword:false,
            ForgotToken:"",
            open:false,
        

         
        };


        // Customizable Area End

        runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    }

    async componentDidMount() {

        this.send(new Message(getName(MessageEnum.RequestUserCredentials)));
        // Customizable Area Start
        this.handleForgot("")
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
            if (apiRequestCallId === this.ForgotPasswordApiCallId) {
                if (!responseJson.errors) {
                    this.setState({ status: responseJson })
                    this.setState({ForgotToken:responseJson.token})
                    this.setState({forgotPassword:true})
                    
                } else {
                   
                    console.log(responseJson.errors)
                }
            }
            if (apiRequestCallId === this.ResetPasswordApiCallId) {
                if (!responseJson.errors) {
                    this.setState({ status: responseJson })
                    this.setState({open:true})
                    
                    
                } else {
                   
                    console.log(responseJson.errors)
                }
            }
        }

        // Customizable Area End
    }
    
    
    handleClose = () => {
        this.setState({open:false});
        this.props.history?.push('/LogIn')
      };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };
    handleShowConfirmPassword = () => {
        this.setState({ confirmPassword: !this.state.confirmPassword });
    };
      
    handleForgot = (value: any) => {

        // Customizable Area Start
        const header = {
            "Content-Type": configJSON.validationApiContentType 
        };

        let raw = JSON.stringify({
            "data": {
              "attributes": {
                "email": value.email,
              }
            }
          });

        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );

        this.ForgotPasswordApiCallId = requestMessage.messageId;

        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.forgotEndpointapi,

        );

        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestHeaderMessage),
            JSON.stringify(header),

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBodyMessage),
            raw

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestMethodMessage),
            configJSON.httpPostMethod,

        );

        runEngine.sendMessage(requestMessage.id, requestMessage);

        // Customizable Area End
        return true;
    }

    handleResetPassword = (value: any) => {

        // Customizable Area Start
        const header = {
            "Content-Type": configJSON.validationApiContentType 
        };

        let raw = JSON.stringify({
            "data": {
              "token": this.state.ForgotToken,
              "new_password": value.password
            }
          });

        const requestMessage = new Message(
            getName(MessageEnum.RestAPIRequestMessage)
        );

        this.ResetPasswordApiCallId = requestMessage.messageId;

        requestMessage.addData(
            getName(MessageEnum.RestAPIResponceEndPointMessage),
            configJSON.resetEndpointapi,

        );

        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestHeaderMessage),
            JSON.stringify(header),

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestBodyMessage),
            raw

        );
        requestMessage.addData(
            getName(MessageEnum.RestAPIRequestMethodMessage),
            configJSON.httpPostMethod,

        );

        runEngine.sendMessage(requestMessage.id, requestMessage);

        // Customizable Area End
        return true;
    }

  
    // Customizable Area End
}
