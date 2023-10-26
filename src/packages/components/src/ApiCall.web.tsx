import { Message } from "./../../framework/src/Message";
import MessageEnum, {
  getName,
} from "./../../framework/src/Messages/MessageEnum";
import { runEngine } from "./../../framework/src/RunEngine";

export default function ApiCall(data:any) {
    let { contentType, method, endPoint, body, baseURL, type = ""   } = data;
    const token = localStorage.getItem("token");
    const header = {
      "Content-Type": contentType,
      token
    };
    const publicHeader = {
      "Content-Type": contentType,
    };
    let requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(token ? header : publicHeader)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMessage),
      baseURL
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        type === "" ? JSON.stringify(body) : body
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
}