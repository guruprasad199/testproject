import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  classes?: any;
  history: any;
}

export interface S {
  // Customizable Area Start
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otpAuthToken: string;
  reTypePassword: string;
  data: any[];
  passwordHelperText: string;
  enablePasswordField: boolean;
  enableReTypePasswordField: boolean;
  countryCodeSelected: string;
  phone: string;
  showPassword: boolean;
  confirmPassword: boolean;
  imageprofile: any;
  imageupload: any;
  status: any;
  loading: boolean;
  isSignupModal: boolean;
  registrationStatus: string;
  signupData: any;
  isAlertOpen: boolean;
  signUpOpen: boolean;
  formData: any;
  formErrors: any;
  passwordErrors: any;
  newPaasword: any;
  passwordMatchError: string;
  guruConfirm: string;
  isPhoneNumberValid: string;
  guruFirstName: string;
  guruFirstNameError: string;
  guruLastName: string;
  guruLastNameError: string;
  guruEmail: string;
  guruEmailError: string;
  guruMobileNumber: string;
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountRegistrationController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  arrayholder: any[];
  passwordReg: RegExp;
  emailReg: RegExp;
  createAccountApiCallId: any;
  validationApiCallId: string = "";

  imgPasswordVisible: any;
  imgPasswordInVisible: any;

  labelHeader: any;
  labelFirstName: string;
  lastName: string;
  labelEmail: string;
  labelPassword: string;
  labelRePassword: string;
  labelLegalText: string;
  labelLegalTermCondition: string;
  labelLegalPrivacyPolicy: string;
  btnTextSignUp: string;

  currentCountryCode: any;

  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.subScribedMessages = [
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
      getName(MessageEnum.CountryCodeMessage),
    ];
    this.receive = this.receive.bind(this);
    this.isStringNullOrBlank = this.isStringNullOrBlank.bind(this);

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {
      // Customizable Area Start
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      reTypePassword: "",
      otpAuthToken: "",
      data: [],
      passwordHelperText: "",
      enablePasswordField: true,
      enableReTypePasswordField: true,
      countryCodeSelected: "",
      phone: "",
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
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
      },
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
      },
      passwordErrors: {
        capitalLetter: null,
        oneNumber: null,
        eightCharacter: null,
        lowerCaseLetter: null,
        specialCharacter: null,
        length: "",
      },
      newPaasword: "",
      passwordMatchError: "",
      guruConfirm: "",
      isPhoneNumberValid: "",
      guruFirstName: "",
      guruFirstNameError: "",
      guruLastName: "",
      guruLastNameError: "",
      guruEmail: "",
      guruEmailError: "",
      guruMobileNumber: "",
      // Customizable Area End
    };

    // Customizable Area Start
    this.arrayholder = [];
    this.passwordReg = new RegExp("\\w+");
    this.emailReg = new RegExp("\\w+");

    this.imgPasswordVisible = imgPasswordVisible;
    this.imgPasswordInVisible = imgPasswordInVisible;

    this.labelHeader = configJSON.labelHeader;
    this.labelFirstName = configJSON.labelFirstName;
    this.lastName = configJSON.lastName;
    this.labelEmail = configJSON.labelEmail;
    this.labelPassword = configJSON.labelPassword;
    this.labelRePassword = configJSON.labelRePassword;
    this.labelLegalText = configJSON.labelLegalText;
    this.labelLegalTermCondition = configJSON.labelLegalTermCondition;
    this.labelLegalPrivacyPolicy = configJSON.labelLegalPrivacyPolicy;
    this.btnTextSignUp = configJSON.btnTextSignUp;
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      let responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      let errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (apiRequestCallId && responseJson) {
        if (apiRequestCallId === this.validationApiCallId) {
          this.arrayholder = responseJson.data;

          if (this.arrayholder && this.arrayholder.length !== 0) {
            let regexData = this.arrayholder[0];

            if (regexData.password_validation_regexp) {
              this.passwordReg = new RegExp(
                regexData.password_validation_regexp
              );
            }

            if (regexData.password_validation_rules) {
              this.setState({
                passwordHelperText: regexData.password_validation_rules,
              });
            }

            if (regexData.email_validation_regexp) {
              this.emailReg = new RegExp(regexData.email_validation_regexp);
            }
          }
        } else if (apiRequestCallId === this.createAccountApiCallId) {
          if (!responseJson.errors) {
            this.setState({
              status: responseJson,
              registrationStatus: "success",
              isSignupModal: true,
            });
            localStorage.setItem("Token", responseJson.meta.token);
          } else {
            this.setState({ isSignupModal: true, registrationStatus: "fail" });
          }
        }
      }
    }

    if (getName(MessageEnum.NavigationPayLoadMessage) === message.id) {
      const otpAuthTkn = message.getData(
        getName(MessageEnum.AuthTokenDataMessage)
      );
      if (otpAuthTkn && otpAuthTkn.length > 0) {
        this.setState({ otpAuthToken: otpAuthTkn });
        runEngine.debugLog("otpAuthTkn", this.state.otpAuthToken);
        runEngine.unSubscribeFromMessages(this as IBlock, [message.id]);
      }
    }

    if (getName(MessageEnum.CountryCodeMessage) === message.id) {
      var selectedCode = message.getData(
        getName(MessageEnum.CountyCodeDataMessage)
      );

      if (selectedCode !== undefined) {
        this.setState({
          countryCodeSelected:
            selectedCode.indexOf("+") > 0
              ? selectedCode.split("+")[1]
              : selectedCode,
        });
      }
    }
    // Customizable Area End
  }

  // Customizable Area Start
  goToPrivacyPolicy() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationPrivacyPolicyMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  goToTermsAndCondition() {
    const msg: Message = new Message(
      getName(MessageEnum.NavigationTermAndConditionMessage)
    );
    msg.addData(getName(MessageEnum.NavigationPropsMessage), this.props);
    this.send(msg);
  }

  isStringNullOrBlank(str: string) {
    return str === null || str.length === 0;
  }

  isValidEmail(email: string) {
    return this.emailReg.test(email);
  }

  createAccount(): boolean {
    if (
      this.isStringNullOrBlank(this.state.firstName) ||
      this.isStringNullOrBlank(this.state.lastName) ||
      this.isStringNullOrBlank(this.state.email) ||
      this.isStringNullOrBlank(this.state.password) ||
      this.isStringNullOrBlank(this.state.reTypePassword)
    ) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorAllFieldsAreMandatory
      );
      return false;
    }

    var phoneNumberError = this.validateCountryCodeAndPhoneNumber(
      this.state.countryCodeSelected,
      this.state.phone
    );

    if (phoneNumberError) {
      this.showAlert(configJSON.errorTitle, phoneNumberError);
      return false;
    }

    if (!this.isValidEmail(this.state.email)) {
      this.showAlert(configJSON.errorTitle, configJSON.errorEmailNotValid);
      return false;
    }

    if (!this.passwordReg.test(this.state.password)) {
      this.showAlert(configJSON.errorTitle, configJSON.errorPasswordNotValid);
      return false;
    }

    if (this.state.password !== this.state.reTypePassword) {
      this.showAlert(
        configJSON.errorTitle,
        configJSON.errorBothPasswordsNotSame
      );
      return false;
    }

    const header = {
      "Content-Type": configJSON.contentTypeApiAddDetail,
    };

    const attrs = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      full_phone_number:
        "+" + this.state.countryCodeSelected + this.state.phone,
    };

    const data = {
      type: "email_account",
      attributes: attrs,
    };

    const httpBody = {
      data: data,
      token: this.state.otpAuthToken,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.createAccountApiCallId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.accountsAPiEndPoint
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.apiMethodTypeAddDetail
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  }

  getValidations() {
    const headers = {
      "Content-Type": configJSON.validationApiContentType,
    };

    const getValidationsMsg = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.validationApiCallId = getValidationsMsg.messageId;

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.urlGetValidations
    );

    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(headers)
    );
    getValidationsMsg.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(getValidationsMsg.id, getValidationsMsg);
  }

  isNonNullAndEmpty(value: String) {
    return (
      value !== undefined &&
      value !== null &&
      value !== "null" &&
      value.trim().length > 0
    );
  }

  validateCountryCodeAndPhoneNumber(countryCode: string, phoneNumber: string) {
    let error = null;

    if (this.isNonNullAndEmpty(phoneNumber)) {
      if (!this.isNonNullAndEmpty(String(countryCode))) {
        error = configJSON.errorCountryCodeNotSelected;
      }
    } else if (this.isNonNullAndEmpty(countryCode)) {
      if (!this.isNonNullAndEmpty(phoneNumber)) {
        error = "Phone " + configJSON.errorBlankField;
      }
    }

    return error;
  }

  imgEnableRePasswordFieldProps = {
    source: imgPasswordVisible,
  };

  btnConfirmPasswordShowHideProps = {
    onPress: () => {
      this.setState({
        enableReTypePasswordField: !this.state.enableReTypePasswordField,
      });
      this.txtInputConfirmPasswordProps.secureTextEntry = !this.state
        .enableReTypePasswordField;
      this.imgEnableRePasswordFieldProps.source = this
        .txtInputConfirmPasswordProps.secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  imgEnablePasswordFieldProps = {
    source: imgPasswordVisible,
  };

  btnPasswordShowHideProps = {
    onPress: () => {
      this.setState({ enablePasswordField: !this.state.enablePasswordField });
      this.txtInputPasswordProps.secureTextEntry = !this.state
        .enablePasswordField;
      this.imgEnablePasswordFieldProps.source = this.txtInputPasswordProps
        .secureTextEntry
        ? imgPasswordVisible
        : imgPasswordInVisible;
    },
  };

  btnSignUpProps = {
    onPress: () => this.createAccount(),
  };

  btnLegalPrivacyPolicyProps = {
    onPress: () => this.goToPrivacyPolicy(),
  };

  btnLegalTermsAndConditionProps = {
    onPress: () => this.goToTermsAndCondition(),
  };

  txtInputEmailWebPrpos = {
    onChangeText: (text: string) => {
      this.setState({ email: text });
      //@ts-ignore
      this.txtInputEmailPrpos.value = text;
    },
  };

  txtInputEmailMobilePrpos = {
    ...this.txtInputEmailWebPrpos,
    keyboardType: "email-address",
  };

  txtInputEmailPrpos = this.isPlatformWeb()
    ? this.txtInputEmailWebPrpos
    : this.txtInputEmailMobilePrpos;

  txtPhoneNumberWebProps = {
    onChangeText: (text: string) => {
      this.setState({ phone: text });

      //@ts-ignore
      this.txtPhoneNumberProps.value = text;
    },
  };

  txtPhoneNumberMobileProps = {
    ...this.txtPhoneNumberWebProps,
    autoCompleteType: "tel",
    keyboardType: "phone-pad",
  };

  txtPhoneNumberProps = this.isPlatformWeb()
    ? this.txtPhoneNumberWebProps
    : this.txtPhoneNumberMobileProps;

  txtInputLastNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ lastName: text });

      //@ts-ignore
      this.txtInputLastNamePrpos.value = text;
    },
  };

  txtInputFirstNamePrpos = {
    onChangeText: (text: string) => {
      this.setState({ firstName: text });

      //@ts-ignore
      this.txtInputFirstNamePrpos.value = text;
    },
  };

  txtInputConfirmPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ reTypePassword: text });

      //@ts-ignore
      this.txtInputConfirmPasswordProps.value = text;
    },
    secureTextEntry: true,
  };

  txtInputPasswordProps = {
    onChangeText: (text: string) => {
      this.setState({ password: text });

      //@ts-ignore
      this.txtInputPasswordProps.value = text;
    },
    secureTextEntry: true,
  };

  modalClose = () => {
    this.setState({ isSignupModal: false, registrationStatus: "" });
  };

  getSignupData = (data: any) => {
    this.setState({ signupData: data });
    if (data?.access_token.length !== 0) {
      this.setState({ signUpOpen: true });
      window.setTimeout(() => {
        this.props.history?.push("/Dashboard");
      }, 3000);
    }
  };

  handleSubmit = (value: any) => {
    // Customizable Area Start
    const Token = localStorage.getItem("LoginSuccessToken");
    const header = {
      token: Token,
      // "Content-Type": configJSON.contentTypeApiAddDetail
    };
    let formdata = new FormData();

    formdata.append(
      "data[attributes][password_confirmation]",
      this.state.guruConfirm
    );
    formdata.append("data[attributes][password]", this.state.newPaasword);
    formdata.append("data[attributes][email]", this.state.guruEmail);
    formdata.append("data[attributes][first_name]", this.state.guruFirstName);
    formdata.append("data[attributes][last_name]", this.state.guruLastName);
    formdata.append(
      "data[attributes][full_phone_number]",
      this.state.guruMobileNumber
    );
    formdata.append("data[type]", "email_account");

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.createAccountApiCallId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.Endpointapi
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      formdata
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.apiMethodTypeAddDetail
    );

    runEngine.sendMessage(requestMessage.id, requestMessage);

    // Customizable Area End
    return true;
  };

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

    this.setState({ imageupload: e.target.files[0] });
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      // this.validateEmail(value);
    } else {
      this.setState({
        formData: { ...this.state.formData, [name]: value },
        formErrors: { ...this.state.formErrors, [name]: "" },
      });
    }
  };

  handleEmail = (e: any) => {
    this.setState({ guruEmail: e.target.value });
    this.validateEmail();
  };

  handleSubmitNew = (e: any) => {
    const {
      guruEmail,
      guruConfirm,
      guruFirstName,
      guruLastName,
      isPhoneNumberValid,
      guruEmailError,
    } = this.state;
    const {
      capitalLetter,
      oneNumber,
      eightCharacter,
      lowerCaseLetter,
      specialCharacter,
    } = this.state.passwordErrors;
    this.validateFirstName();
    this.validateLastName();
    this.validateEmail();
    this.handleBlurNew(this.state.newPaasword);
    this.handleConfirmPasswordBlur();
    this.validateNumber();
    if (
      guruFirstName !== "" &&
      guruLastName !== "" &&
      guruEmail !== "" &&
      guruEmailError === "" &&
      guruConfirm !== "" &&
      isPhoneNumberValid === "" &&
      this.state.guruMobileNumber !== "" &&
      capitalLetter === false &&
      oneNumber === false &&
      eightCharacter === "" &&
      lowerCaseLetter === false &&
      specialCharacter === false
    ) {
      this.handleSubmit(e);
    }
  };

  handleBlur = (name: any, title: string) => {
    if (name === "email") {
      // this.validateEmail(this.state.formData.email);
    } else {
      if (!this.state.formData[name]?.trim()) {
        this.setState({
          formErrors: {
            ...this.state.formErrors,
            [name]: title,
          },
        });
      }
    }
  };

  handleBlurLastName = (name: any, title: string) => {
    if (!this.state.formData[name]?.trim()) {
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          [name]: title,
        },
      });
    }
  };

  confirmHandleBlur = () => {
    if (this.state.newPaasword !== this.state.formData.confirmPassword) {
      // Set error if passwords don't match
      this.setState({
        formErrors: {
          ...this.state.formErrors,
          confirmPassword: "jjddkkdkdk",
        },
      });
    }
  };

  guruFirst = (e: any) => {
    this.setState({ guruFirstName: e.target.value });
    this.validateFirstName();
  };

  guruLast = (e: any) => {
    this.setState({ guruLastName: e.target.value });
    this.validateLastName();
  };

  validateEmail = () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // this.setState({
    //   formData: { ...this.state.formData, email: value },
    //   formErrors: {
    //     ...this.state.formErrors,
    //     email: emailRegex.test(value)
    //       ? ""
    //       : "Please enter a valid email address",
    //   },
    // });
    this.setState({
      guruEmailError: emailRegex.test(this.state.guruEmail)
        ? ""
        : "Please enter a valid email address",
    });
  };

  validateFirstName = () => {
    this.setState({
      guruFirstNameError:
        this.state.guruFirstName.length !== 0 ? "" : "Enter your First Name",
    });
  };

  validateLastName = () => {
    this.setState({
      guruLastNameError:
        this.state.guruFirstName.length !== 0 ? "" : "Enter your Last Name",
    });
  };

  passwordHandleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      newPaasword: value,
      passwordErrors: { ...this.state.passwordErrors, [name]: "" },
    });
    this.validatePassword(value);
    if (this.state.passwordMatchError) {
      // Reset error when the user starts typing in the password field
      this.setState({ passwordMatchError: "" });
    }
  };

  handleBlurNew = (name: any) => {
    this.validatePassword(this.state.newPaasword);
  };

  validatePassword = (password: string) => {
    // Password validation criteria
    const capitalRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    let errors = {
      capitalLetter: !capitalRegex.test(password),
      lowerCaseLetter: !lowercaseRegex.test(password),
      oneNumber: !numberRegex.test(password),
      specialCharacter: !specialCharRegex.test(password),
      eightCharacter:
        password.length >= 8
          ? ""
          : "Password must be at least 8 characters long",
    };

    this.setState({ passwordErrors: errors });
  };

  handleConfirmPasswordChange = (event: any) => {
    this.setState({ guruConfirm: event.target.value }, () => {
      if (this.state.newPaasword !== this.state.guruConfirm) {
        this.setState({ passwordMatchError: "Password must match" });
      }
    });
    if (this.state.passwordMatchError) {
      // Reset error when the user starts typing in the confirm password field
      // setPasswordMatchError(false);
      this.setState({ passwordMatchError: "" });
    }
  };

  handleConfirmPasswordBlur = () => {
    if (this.state.guruConfirm.length === 0) {
      this.setState({ passwordMatchError: "Confirm password is required" });
    }
  };

  handlePhoneNumberChange = (value: any, country: any) => {
    this.setState({ guruMobileNumber: value }, () => {
      this.validateNumber();
    });
  };

  validateNumber = () => {
    this.setState({
      isPhoneNumberValid:
        this.state.guruMobileNumber.replace(/\D/g, "").length === 12
          ? ""
          : "Enter 10 digit number",
    });
  };

  // Customizable Area End
}
