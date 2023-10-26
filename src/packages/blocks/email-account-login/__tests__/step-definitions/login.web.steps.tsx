import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import SignIn from "../../src/LogIn.web";
import { beforeEach, expect, jest } from "@jest/globals";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "SignIn",
  history: {
    push: jest.fn(),
  },
};

const feature = loadFeature("./__tests__/features/login-scenario.web.feature");

const errorResponse = {
  errors: [
    {
      failed_login: "Account not found, or not activated",
    },
  ],
};

const dummyLoginData = {
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

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to Email SignIn", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: SignIn;

    given("I am a User attempting to SignIn with a Email", () => {
      mobileAccountLogInWrapper = shallow(
        <SignIn classes={undefined} {...screenProps} />
      );
      expect(mobileAccountLogInWrapper).toBeTruthy();

      instance = mobileAccountLogInWrapper.instance() as SignIn;

      const msgValidationAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      msgValidationAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msgValidationAPI.messageId
      );
      msgValidationAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {
          data: [
            {
              email_validation_regexp:
                "^[a-zA-Z0-9.!\\#$%&‘*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
              password_validation_regexp:
                "^(?=.*[A-Z])(?=.*[#!@$&*?<>',\\[\\]}{=\\-)(^%`~+.:;_])(?=.*[0-9])(?=.*[a-z]).{8,}$",
              password_validation_rules:
                "Password should be a minimum of 8 characters long, contain both uppercase and lowercase characters, at least one digit, and one special character (!@#$&*?<>',[]}{=-)(^%`~+.:;_).",
            },
          ],
        }
      );
      instance.loginAccountApiCallId = msgValidationAPI.messageId;
      runEngine.sendMessage("Unit Test", msgValidationAPI);
    });

    when("I navigate to the SignIn Screen", () => {
      instance = mobileAccountLogInWrapper.instance() as SignIn;
      instance.handleModalClose();
      instance.getProfileData(dummyLoginData);
    });

    then("I can toggle the Remember Me with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnRememberMe"
      );
      buttonComponent.simulate("click");
    });

    then("I can select the SignIn button with out errors", () => {
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
      instance.handleLoginSubmit(event);
      instance.startLoading();
      instance.stopLoading();

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
      instance.loginAccountApiCallId = loginApiCallId.messageId;
      runEngine.sendMessage("Unit Test", loginApiCallId);

      loginApiCallId.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        JSON.parse(JSON.stringify(errorResponse))
      );
      instance.loginAccountApiCallId = loginApiCallId.messageId;
      runEngine.sendMessage("Unit Test", loginApiCallId);
    });

    then("I can select the Forgot Password button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnForgotPassword"
      );
      buttonComponent.simulate("click");
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
      instance.handleShowPassword();
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });
  });
});
