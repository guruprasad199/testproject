import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area StartW
interface Attributes {
  id?: number | null;
  page_name: string;
  meta_title: string;
  meta_description: string;
  created_at?: string;
  updated_at?: string;
  page_id?: number | null;
}
interface ResponseData {
  id: string;
  type: string;
  attributes: {
    id: number;
    page_name: string;
    meta_title: string;
    meta_description: string;
    created_at: string;
    updated_at: string;
  }
}
interface SingleData {
  data: ResponseData;
}
interface MultipleData {
  data: ResponseData[];
}
interface MetaMessageData {
  meta: {
    message: string;
  }
}
interface MessageData {
  message: string;
}
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  activePage: string;
  page_name: string;
  meta_title: string;
  meta_description: string;
  page_id: number | null | undefined;
  errors: {
    page_name: boolean;
    meta_title: boolean;
    meta_description: boolean;
  }
  pages: ResponseData[];
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class SearchengineoptimisationseoController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  apiSeoSettingsCallId: string = "";
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIRequestMessage),
      getName(MessageEnum.RestAPIResponceMessage)
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      activePage: "landingPage",
      page_name: "",
      meta_title: "",
      meta_description: "",
      page_id: null,
      errors: {
        page_name: false,
        meta_title: false,
        meta_description: false,
      },
      pages: [],
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
      const apiRequestCallId = message.getData(getName(MessageEnum.RestAPIResponceDataMessage));
      const responseJson = message.getData(getName(MessageEnum.RestAPIResponceSuccessMessage));
      if (apiRequestCallId === this.apiSeoSettingsCallId) {
        this.handleApiResponseAction(responseJson)
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  handleApiResponseAction = (responseJson: unknown) => {
    const singleData = responseJson as SingleData;
    const multipleData = responseJson as MultipleData;
    const metaMessageData = responseJson as MetaMessageData;
    const messageData = responseJson as MessageData;


    if(singleData?.data?.attributes?.id) {
      this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, null)
      this.setState({
        page_id: singleData.data.attributes.id,
        page_name: singleData.data.attributes.page_name,
        meta_title: singleData.data.attributes.meta_title,
        meta_description: singleData.data.attributes.meta_description,
      })
    }
    if(multipleData?.data?.length > 0) {
      this.setState({ pages: multipleData.data })
    }
    if(metaMessageData?.meta?.message === 'seo setting Removed') {
      this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, null)
    }
    if(messageData?.message === 'No SEO settings found') {
      this.setState({pages: []})
    }
  }

  handleSetActivePage = (page: string) => this.setState({ activePage: page});

  handleSaveAction = () => {
    const method = this.state.page_id ? configJSON.patchAPIMethod : configJSON.postAPIMethod;
    const page_id = this.state.page_id ? this.state.page_id : null;
    if (this.handleValidateFormAction()) {
      this.handleFetchSeoSettingsApiAction(method, page_id, {page_name: this.state.page_name, meta_title: this.state.meta_title, meta_description: this.state.meta_description })
      this.setState({ activePage: "seoSettingsPage"})
    }
  }

  handlePageNameOnChangeAction = (value: string) => this.setState({ page_name: value});

  handleMetaTitleOnChangeAction = (value: string) => this.setState({ meta_title: value});

  handleMetaDescriptionOnChangeAction = (value: string) => this.setState({ meta_description: value});

  handleValidateFormAction = () => {
    let isValid = true;
    const newErrors = { page_name: false, meta_title: false, meta_description: false };
    if (this.state.page_name.trim() === '') {
      newErrors.page_name = true;
      isValid = false;
    }
    if (this.state.meta_title.trim() === '') {
      newErrors.meta_title = true;
      isValid = false;
    }
    if (this.state.meta_description.trim() === '') {
      newErrors.meta_description = true;
      isValid = false;
    }
    this.setState({ errors: newErrors});
    return isValid;
  }

  handleCreatePageAction = (attributes: Attributes) => {
    this.setState({
      page_name: attributes.page_name,
      meta_title: attributes.meta_title,
      meta_description: attributes.meta_description,
      page_id: attributes.page_id,
      errors: {
        page_name: false,
        meta_title: false,
        meta_description: false,
      },
    })
    this.setState({ activePage: 'createPage' })
  }

  handleDeletePageAction = (page_id: number) => {
    this.handleFetchSeoSettingsApiAction(configJSON.deleteAPIMethod, page_id);
  }

  handleOpenWebsiteAction = (page_id: number) => {
    const pageUrl = new URL(window.location.href);
    window.open(`${pageUrl.href}?pageId=${page_id}`)
  }

  handleBacktoDisplayPageAction = () => {
    this.handleSetActivePage("displayWebsitePage")
    this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, null)
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.delete('pageId');
    let newUrl = window.location.pathname;
    window.history.replaceState(null, '', newUrl);
  }

  handleFetchSeoSettingsApiAction = (method: string, page_id: number | null, data?: {page_name: string, meta_title: string, meta_description: string}) => {
    const headers = {
      "Content-Type": configJSON.validationApiContentType,
    }
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage),
    )
    this.apiSeoSettingsCallId = requestMessage.messageId
    const endpoint = page_id ? `${configJSON.apiPathname}/${page_id}` : configJSON.apiPathname; 
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endpoint
    )
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers),
    )
    if (data) {
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify({ data: { attributes: data }}),
      )
    }
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method,
    )
    runEngine.sendMessage(requestMessage.id, requestMessage)
  }

  async componentDidMount(): Promise<void> {
    const pageUrl = new URL(window.location.href);
    const pageId = pageUrl.searchParams.get('pageId');
    if(pageId) {
      this.handleFetchSeoSettingsApiAction(configJSON.getAPIMethod, Number(pageId));
      this.setState({activePage: 'redirectedPage'});
    }
  }
  // Customizable Area End
}
