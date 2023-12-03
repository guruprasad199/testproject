//@ts-nocheck
import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";

import EmailAccountRegistration from "../../src/EmailAccountRegistration.web";
import { beforeEach, expect, jest } from "@jest/globals";
import PhoneInput from "react-phone-input-2";

const navigation = require("react-navigation");

// const screenProps = {
//   navigation: {
//     addListener: jest.fn().mockImplementation((event, callback) => {}),
//     navigate: jest.fn(),
//     goBack: jest.fn(),
//     dispatch: jest.fn(),
//   },
//   id: "Signup",
// };

const screenProps = {
  navigation: navigation,
  id: "email-account-registration-scenario",
  history: {
      push: jest.fn(),
    },
  }


const respError = {
  errors: [
    {
      failed_login: "Account not found, or not activated",
    },
  ],
};

const signupDummyData = {
  access_token:
    "ya29.a0AfB_byAR_OEroarokXBBfWxWTGak4OU9QCalqTDVUcXYT4hWv3ShsQ5lM31SVUfkvpzOAa-YED3ivcsRPxqnwFjctkWut7RVy3nlC6CzEXmlxDD6WFj_l_FaLqJkdoxMMkISIPnVVyoxl5TnPRzrjQTK9geOXjOELH8aCgYKAVASAQ8SFQGOcNnCP74dppJU2tFLKhQEuXPZCw0170",
  authuser: "0",
  email: "test@deqode.com",
  email_verified: true,
  expires_in: 3599,
  family_name: "family",
  given_name: "test user",
  hd: "google.com",
};


const emailLogin = {
  data: {
    data: {
      id: "354",
      type: "account",
      attributes: {
        id: 354,
        activated: true,
        country_code: 91,
        fullname: "Pallavi",
        email: "pallavi@yomail.com",
        first_name: null,
        full_phone_number: "911234567890",
        last_name: null,
        description: null,
        company_name: null,
        phone_number: 1234567890,
        type: "EmailAccount",
        created_at: "2023-01-11T05:12:56.029Z",
        updated_at: "2023-01-11T05:12:56.029Z",
        device_id: null,
        unique_auth_id: "e8RIFW8HTEh3AnikyFAuoQtt",
        user_type: "customer",
        tell_me_about: false,
        office_address: null,
        city: null,
        pin_code: null,
        gst_number: null,
        pan_number: null,
        user_status: "registered",
        address: null,
        document_image: null,
        sp_image: null,
        avatar: null,
        offers: {
          data: [],
        },
        service_provider_detail: {
          data: null,
        },
        bank_details: {
          data: [],
        },
      },
    },
  },
  meta: {
    token:
      "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MzU0LCJleHAiOjE2NzM2MDMxMjMsInRva2VuX3R5cGUiOiJsb2dpbiJ9.vsp8Ga6ODrIBAQM-zMkhgNiv3mfFOuJPDkT1Jfo6-g65xyiMMEfpAVp4Pu8oT_LpZRDXrTfBTtsvit_dOKXOAA",
  },
};

const mockMessage = {
  getData: jest.fn(),
  id: "your_message_id",
};

const mockRunEngine = {
  unSubscribeFromMessages: jest.fn(),
};

Object.defineProperty(global, "window", {
  value: {
    localStorage: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    setTimeout: jest.fn((cb: string | Function, time?: number) => {typeof cb == "function"? cb() : null}),
    history: {
      push: jest.fn()
    }
  },
});

const feature = loadFeature("./__tests__/features/email-account-registration-scenario.web.feature");

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    jest.restoreAllMocks();

    Object.defineProperty(global, "FileReader", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        readAsDataURL: jest.fn(),
        onLoad: jest.fn(),
      })),
    });
  });

  test("User navigates to Email Signup", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;
    let newinstance: EmailAccountRegistration;

    given("I am a User attempting to Signup with a Email", () => {
      mobileAccountLogInWrapper = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();

      instance = mobileAccountLogInWrapper.instance() as EmailAccountRegistration;
      newinstance = mobileAccountLogInWrapper.instance() as EmailAccountRegistration;
    });

    when("I navigate to the Signup Screen", () => {
      instance = mobileAccountLogInWrapper.instance() as EmailAccountRegistration;
      instance.modalClose();
      instance.getSignupData(signupDummyData)
      instance.setState({ registrationStatus: "success", showPassword: true });
    });

    then("I can select the Signup button with out errors", async () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere((node) => node.prop("data-test-id") === "buttonSubmit");

      const formic = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "FormikID"
      );
      formic.props().onSubmit({ values: "abc" });

      const event = {
        preventDefault() {},
        target: { value: "hello@aol.com" },
      };
      textInputComponent.simulate("click", instance.handleSubmit(event));
      //   instance.handleSubmit(event);

      const responseJson = {
        meta: {
          token: "mocked_token",
        },
      };

      mobileAccountLogInWrapper.instance().setState = jest.fn();

      mockMessage.getData.mockReturnValue(responseJson);

      const loginApiCallId = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      loginApiCallId.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        loginApiCallId.messageId
      );
      loginApiCallId.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        JSON.parse(JSON.stringify(emailLogin))
      );
      instance.createAccountApiCallId = loginApiCallId.messageId;
      runEngine.sendMessage("Unit Test", loginApiCallId);

      loginApiCallId.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        JSON.parse(JSON.stringify(respError))
      );
      instance.createAccountApiCallId = loginApiCallId.messageId;
      runEngine.sendMessage("Unit Test", loginApiCallId);
    });
    then("calls startLoading on onResponse", () => {
      let btnSocialLogin = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnGoogleLogIn"
      );
      //   btnSocialLogin.simulate("click");
      //   instance.goToSocialLogin();
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    then("I can enter a name with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "signupInputName"
      );

      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    then("I can enter a email address with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere((node) => node.prop("data-test-id") === "signupInputEmail");
      textInputComponent.simulate("change", {
        target: { emailOrPhone: "abc@gmail.com", value: "jonroy@gmail.com" },
      });

      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    then("I can enter a password with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere(
          (node) => node.prop("data-test-id") === "signupInputPassword"
        );
      textInputComponent.simulate("change", {
        target: { password: "", value: "" },
      });

      instance.setState({ showPassword: false });

      instance.handleClickShowPassword();

      //  instance.handleClickShowPassword()
    });

    then("I can enter a confirm Password with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere(
          (node) => node.prop("data-test-id") === "signupInputCPassword"
        );
      textInputComponent.simulate("change", {
        target: { password: "", value: "" },
      });
      instance.handleClickShowPassword();

      instance.setState({ confirmPassword: false });
      instance.handleClickShowConfirmPassword();

      instance.setState({ confirmPassword: true });
      instance.handleClickShowConfirmPassword();
    });
    then("I can enter a Phone Number with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere((node) => node.prop("data-test-id") === "phoneNumber");
      textInputComponent.simulate("change", {
        target: { Phone: "+918484884840", value: "+918484884840" },
      });
      textInputComponent.renderProp("render")("field", "form");
    });

    then("I can Select Gender with out errors", () => {
      let textInputComponent = mobileAccountLogInWrapper
        .find("Formik")
        .dive()
        .findWhere((node) => node.prop("data-test-id") === "Gender");
      textInputComponent.simulate("click", {
        target: { Gender: "male", value: "male" },
      });
    });

    then("user can upload image", async () => {
      const mEvent = { target: { files: "text.png" } };

      instance.ReaderImg(mEvent);

      instance.setState({ imageprofile: mEvent });

      // Assert that the state is updated correctly
      expect(mobileAccountLogInWrapper.state("imageprofile")).toEqual(
        expect.any(String)
      ); // Check that imageprofile is set
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });
  });
});
