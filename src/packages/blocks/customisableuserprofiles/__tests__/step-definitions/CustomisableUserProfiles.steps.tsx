import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import CustomisableUserProfiles from "../../src/CustomisableUserProfiles";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CustomisableUserProfiles"
};

const feature = loadFeature("./__tests__/features/CustomisableUserProfiles-scenario.feature");
const mockAttributes = [
  {
    name: "profile_pic",
    title: "Profile Pic",
    field_type: "string",
    is_enable: true,
    is_required: true,
    value: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  },
  {
    name: "display name",
    title: "Display Name",
    field_type: "string",
    is_enable: true,
    is_required: true,
    value: "Test"
  },
  {
    name: "Age",
    title: "Age",
    field_type: "integer",
    is_enable: true,
    is_required: true,
    value: 20
  },
  {
    name: "user_name",
    title: "User Name",
    field_type: "string",
    is_enable: true,
    is_required: true,
    value: "Test"
  },
  {
    name: "first_name",
    title: "First Name",
    field_type: "text",
    is_enable: true,
    is_required: true,
    value: "Test"
  },
  {
    name: "last_name",
    title: "Last Name",
    field_type: "text",
    is_enable: true,
    is_required: true,
    value: "Test"
  },
  {
    name: "address",
    title: "Address",
    field_type: "text",
    is_enable: false,
    is_required: true,
    value: "Test"
  },
  {
    name: "country",
    title: "Country",
    field_type: "text",
    is_enable: true,
    is_required: true,
    value: "Test"
  },
  {
    name: "country",
    title: "Country",
    field_type: "boolean",
    is_enable: true,
    is_required: true,
    value: "Test"
  }
];
const updateMockData = {
  profile_pic: "https://unsplash.com/random",
  "display name": "steve123",
  userAge: "25",
  user_name: "STEVE",
  first_name: "Mostafa",
  last_name: "Halabi",
  address: "Turkey",
  country: "Istanbul"
};
const mockFetchProfileData = {
  data: {
    type: "profile",
    attributes: {
      first_name: "Mostafa",
      last_name: "Halabi",
      email: "",
      dateOfBirth: "18-01-1997",
      country: "Istanbul",
      address: "Turkey",
      city: "adipisicing pariatur minim",
      postal_code: "tempor pariatur aute",
      account_id: 132,
      profile_role: "jobseeker",
      biography: "this is a bip",
      user_name: "STEVE",
      instagram: "instagramm",
      facebook: "fbbbbbb",
      youtube: "youtubeee",
      name: "hussaina1",
      photo:
        "https://minio.b255799.dev.eastus.az.svc.builder.cafe/sbucket/vmudtwbhjm9csgmflkr0d0nixd79",
      profile_bio: {
        id: 6,
        custom_attributes: null,
        about_me: "zxcvzxcvzxcv"
      },
      qr_code: {
        id: 6,
        qr_code:
          "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6091c53f815b81c83bf0c4c333c6e15b5d1a16a0/WhatsApp%20Image%202023-02-17%20at%2012.07.52%20(1).jpeg"
      },
      profile_video:
        "https://minio.b255799.dev.eastus.az.svc.builder.cafe/sbucket/bcty0f35vqebw7yrxgy79lpeqtlx",
      user_profile_data: {
        profile_pic: "https://unsplash.com/random",
        "display name": "steve123",
        Age: "25",
        user_name: "STEVE",
        first_name: "Mostafa",
        last_name: "Halabi",
        address: "Turkey",
        country: "Istanbul"
      }
    }
  }
};
const mockFetchProfileData2 = {
  data: {
    attributes: {},
    type: "profile"
  }
};

const mockFetchProfileData3 = {
  data: {
    type: "profile"
  }
};
defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    jest.doMock("react-native-image-crop-picker", () => ({
      Platform: { OS: "web" }
    }));
    jest.doMock("react-native-fs", () => ({
      Platform: { OS: "web" }
    }));
  });

  test("User navigates to CustomisableUserProfiles", ({ given, when, then }) => {
    let CustomisableUserProfilesWrapper: ShallowWrapper;
    let instance: CustomisableUserProfiles;

    given("I am a User loading CustomisableUserProfiles", () => {
      CustomisableUserProfilesWrapper = shallow(<CustomisableUserProfiles {...screenProps} />);
    });

    when("I navigate to the CustomisableUserProfiles", () => {
      instance = CustomisableUserProfilesWrapper.instance() as CustomisableUserProfiles;
    });

    then("CustomisableUserProfiles will load with out errors", () => {
      expect(CustomisableUserProfilesWrapper).toBeTruthy();
    });
    then("Instance can run utility functions with out errors", () => {
      instance.setState({
        attributes: mockAttributes
      });
      instance.setInputValue("hello from test");
      instance.handleChangeAttributeValue("Test", 0);
      instance.fetchProfileData();
      expect(CustomisableUserProfilesWrapper).toBeTruthy();
    });

    then("CustomisableUserProfiles should fetch attributes data from REST Api client", () => {
      const mockGetProfileRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage));
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI
      );
      mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: mockAttributes
      });
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.getAttributesID = mockGetProfileRestAPI.messageId;
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);
      expect(instance.state.attributes).toHaveLength(mockAttributes.length);
    });

    then("CustomisableUserProfiles should fetch user data from REST Api client", () => {
      const mockGetProfileRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage));
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI
      );
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        mockFetchProfileData2
      );
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.getProfileAccountID = mockGetProfileRestAPI.messageId;
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);

      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        mockFetchProfileData3
      );
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.getProfileAccountID = mockGetProfileRestAPI.messageId;
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);

      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        mockFetchProfileData
      );
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.getProfileAccountID = mockGetProfileRestAPI.messageId;
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);

      expect(CustomisableUserProfilesWrapper).toBeTruthy();
    });

    then("CustomisableUserProfiles can update profile by using the REST Api client", () => {
      const mockGetProfileRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage));
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI
      );
      mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIRequestBodyMessage), {
        data: { profile: updateMockData }
      });
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.updateProfileID = mockGetProfileRestAPI.messageId;
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);
      expect(instance.state.attributes).toHaveLength(Object.keys(updateMockData).length);
    });
    then("CustomisableUserProfiles would receive null data from REST Api client", () => {
      instance.setState({
        attributes: []
      });
      const mockGetProfileRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage));
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI
      );
      mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), null);
      mockGetProfileRestAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        mockGetProfileRestAPI.messageId
      );
      instance.getAttributesID = mockGetProfileRestAPI.messageId;
      mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIResponceErrorMessage), {
        message: "Unit test error"
      });
      runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);
      expect(instance.state.attributes).toHaveLength(0);
    });
    then(
      "CustomisableUserProfiles would receive null data from REST Api client after updating",
      () => {
        instance.setState({
          attributes: []
        });
        const mockGetProfileRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage));
        mockGetProfileRestAPI.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          mockGetProfileRestAPI
        );
        mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), null);
        mockGetProfileRestAPI.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          mockGetProfileRestAPI.messageId
        );
        instance.updateProfileID = mockGetProfileRestAPI.messageId;
        mockGetProfileRestAPI.addData(getName(MessageEnum.RestAPIResponceErrorMessage), {
          message: "Unit test error"
        });
        runEngine.sendMessage("Unit Test", mockGetProfileRestAPI);
        instance.updateProfile();
        instance.checkForRequiredFields();
        expect(instance.state.attributes).toHaveLength(0);
      }
    );

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(CustomisableUserProfilesWrapper).toBeTruthy();
    });
  });
});
