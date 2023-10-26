import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { toast } from "react-toastify";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  // Customizable Area Start
  navigation: string;
  id: string;
  // Customizable Area End
}

// Customizable Area Start
export interface Touched {
  firstName: boolean;
  lastName: boolean;
  phoneNumber: boolean;
  email: boolean;
  organization: boolean;
  teamName: boolean;
  userType: boolean;
  rating: boolean;
  gender: boolean;
  address: boolean;
  country: boolean;
  state: boolean;
  city: boolean;
}

export interface Error {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organization: string;
  teamName: string;
  userType: string;
  rating: string;
  gender: string;
  address: string;
  country: string;
  state: string;
  city: string;
}

export interface ResponseJson {
  id: string;
  attributes: {
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    organization: string;
    team_name: string;
    i_am: string;
    stars_rating: string;
    gender: string;
    address: string;
    country: string;
    state: string;
    city: string;
    file: {
      file_name: string;
    }
  }
}

export interface Dropdown {
  label: string;
  value: string;
}

export interface Data {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organization: string;
  teamName: string;
  userType: string;
  rating: string;
  gender: string;
  address: string;
  country: string;
  state: string;
  city: string;
  file: string;
}
// Customizable Area End

interface S {
  // Customizable Area Start
  loading: boolean;
  userId: string;
  data: Data[];
  filterData: Data[];
  page: number;
  dataLength: number;
  rowsPerPage: number;
  openDialogName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  organization: string;
  teamName: string;
  userType: string;
  rating: string;
  gender: string;
  address: string;
  country: string;
  state: string;
  city: string;
  file: File | null | string;
  isChange: boolean;
  // Customizable Area End
}

interface SS {
  // Customizable Area Start
  id: number;
  // Customizable Area End
}

export default class CustomFormController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  getUserListApiCallId: string = "";
  addUserApiCallId: string = "";
  editUserApiCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      loading: false,
      userId: "",
      data: [],
      page: 0,
      dataLength: 0,
      rowsPerPage: 1,
      filterData: [],
      openDialogName: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      organization: "",
      teamName: "",
      userType: "",
      rating: "",
      gender: "",
      address: "",
      country: "",
      state: "",
      city: "",
      file: null,
      isChange: false
      // Customizable Area End
    };

    // Customizable Area Start
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      if (apiRequestCallId && responseJson) {
        if (responseJson.status === 500) {
          toast.error("Something went wrong!");
          this.setState({ loading: false });
        } else if (responseJson.errors) {
          toast.error(responseJson.errors);
          this.setState({ loading: false });
        } else if (apiRequestCallId == this.getUserListApiCallId) {
          let filterData = responseJson.data.map((item: ResponseJson) => {
            return {
              userId: item.id,
              firstName: item.attributes.first_name,
              lastName: item.attributes.last_name,
              phoneNumber: item.attributes.phone_number,
              email: item.attributes.email,
              organization: item.attributes.organization,
              teamName: item.attributes.team_name,
              userType: item.attributes.i_am,
              rating: item.attributes.stars_rating.toString(),
              gender: item.attributes.gender,
              address: item.attributes.address,
              country: item.attributes.country,
              state: item.attributes.state,
              city: item.attributes.city,
              file: item.attributes.file.file_name
            }
          });
          this.setState({ filterData }, () => {
            this.onChangeHandler(0);
          });
        } else if (apiRequestCallId == this.addUserApiCallId) {
          toast.success("User added successfully!");
          this.setState({ openDialogName: "" });
          this.onCancel();
          this.getUserList();
        } else if (apiRequestCallId == this.editUserApiCallId) {
          toast.success("User edited successfully!");
          this.setState({ openDialogName: "", isChange: false });
          this.onCancel();
          this.getUserList();
        }
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.getUserList();
  }

  onValueChange = (name: string, value: string) => {
    this.setState({ ...this.state, [name]: value });
  };

  onAddBtnClicked = () => {
    this.setState({ openDialogName: "Add" });
  }

  onFileChange = (file: File | null) => {
    this.setState({ file });
    if (this.state.openDialogName === "Edit") {
      this.setState({ isChange: true });
    }
  }

  onChangeHandler = (page: number) => {
    let { rowsPerPage, filterData } = this.state;
    let data = filterData;
    const dataLength = data.length;
    let totalPage = Math.ceil(dataLength / this.state.rowsPerPage);
    page = totalPage === page ? page - 1 : page;
    data = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    this.setState({ data, dataLength, page, loading: false });
  };

  onEditBtnClicked = (item: Data) => {
    this.setState({
      userId: item.userId,
      firstName: item.firstName,
      lastName: item.lastName,
      phoneNumber: item.phoneNumber,
      email: item.email,
      organization: item.organization,
      teamName: item.teamName,
      userType: item.userType,
      rating: item.rating,
      gender: item.gender,
      address: item.address,
      country: item.country,
      state: item.state,
      city: item.city,
      file: item.file,
      openDialogName: "Edit"
    });
  }

  onCancel = () => {
    this.setState({
      openDialogName: "",
      userId: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      organization: "",
      teamName: "",
      userType: "",
      rating: "",
      gender: "",
      address: "",
      country: "",
      state: "",
      city: "",
      file: ""
    });
  }

  getUserList = () => {
    this.setState({ loading: true });

    const header = {
      "Content-Type": configJSON.getUserListApiContentType,
      token: localStorage.getItem("accessToken"),
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.getUserListApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.getUserListApiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.getUserListApiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  };

  onAddTask = () => {
    this.setState({ loading: true });

    const header = {
      "token": localStorage.getItem("accessToken")
    };

    const formData = new FormData();
    formData.append("form[first_name]", this.state.firstName);
    formData.append("form[last_name]", this.state.lastName);
    formData.append("form[phone_number]", this.state.phoneNumber);
    formData.append("form[organization]", this.state.organization);
    formData.append("form[team_name]", this.state.teamName);
    formData.append("form[i_am]", this.state.userType);
    formData.append("form[gender]", this.state.gender);
    formData.append("form[stars_rating]", this.state.rating);
    formData.append("form[email]", this.state.email);
    formData.append("form[address]", this.state.address);
    formData.append("form[country]", this.state.country);
    formData.append("form[state]", this.state.state);
    formData.append("form[city]", this.state.city);
    formData.append("form[file]", this.state.file as Blob);

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.addUserApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      formData
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.addUserApiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.addUserApiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  };

  onEditTask = () => {
    this.setState({ loading: true });

    const header = {
      "token": localStorage.getItem("accessToken")
    };

    const formData = new FormData();
    formData.append("form[first_name]", this.state.firstName);
    formData.append("form[last_name]", this.state.lastName);
    formData.append("form[phone_number]", this.state.phoneNumber);
    formData.append("form[organization]", this.state.organization);
    formData.append("form[team_name]", this.state.teamName);
    formData.append("form[i_am]", this.state.userType);
    formData.append("form[gender]", this.state.gender);
    formData.append("form[stars_rating]", this.state.rating);
    formData.append("form[email]", this.state.email);
    formData.append("form[address]", this.state.address);
    formData.append("form[country]", this.state.country);
    formData.append("form[state]", this.state.state);
    formData.append("form[city]", this.state.city);
    if (this.state.isChange) {
      formData.append("form[file]", this.state.file as Blob);
    }

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.editUserApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      formData
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `${configJSON.editUserApiEndPoint}/${this.state.userId}`
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.editUserApiMethod
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  }
  // Customizable Area End
}