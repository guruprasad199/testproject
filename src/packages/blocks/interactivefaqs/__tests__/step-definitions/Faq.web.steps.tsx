import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import {Faq} from "../../../interactivefaqs/src/Faq.web";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Faq",
  classes:{}
};

const feature = loadFeature(
  "./__tests__/features/Faq-scenario.web.feature"
);


const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-test-id") === testID).first();

    const mockAPICall = (instance: any, apiCallID: string, apiData: object, showErrorResponse?: boolean) => {
      const msgSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
      msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgSucessRestAPI.messageId);
      msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), apiData);
      if (showErrorResponse)
          msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceErrorMessage), apiData);
      instance[apiCallID] = msgSucessRestAPI.messageId
      runEngine.sendMessage("Unit Test", msgSucessRestAPI)
    }
    
    const mockLoginResponse = {
      "meta": {
          "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q"
      },
      "data": {
          "attributes": {
              "activated": true
          }
      }
    }
    const mockFaqFailedResponse = {
        "errors": [{ "key": "Login Failed." }]
    }

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  const mockFaqResponse = {
    data: {
      faqs: [
          {
              id: 1,
              title: "What's working day of the park?",
              content: "Everyday",
              created_at: "2023-08-23T09:02:29.594Z",
              updated_at: "2023-08-23T09:02:29.594Z"
          },
          {
              id: 2,
              title: "Does this park gives free passes?",
              content: "No, you have to buy them.",
              created_at: "2023-08-23T09:03:10.547Z",
              updated_at: "2023-08-23T09:03:10.547Z"
          },
          {
              id: 3,
              title: "Demo QA?",
              content: "This is internal demo",
              created_at: "2023-08-25T11:40:50.634Z",
              updated_at: "2023-08-25T11:40:50.634Z"
          }
      ]
  },
}


  test("User navigates to Faq", ({ given, when, then }) => {
    let FaqBlock: ShallowWrapper;
    let FaqInstance: Faq;
    let getFaqApiCallId: string = "getFaqApiCallId";

    given("I am a User loading Faq", () => {
      FaqBlock = shallow(<Faq heading={undefined} subHeading={undefined} bgImage={undefined} otherHeading={undefined} {...screenProps} />);
    });

    when("I navigate to the Faq", () => {
      FaqInstance = FaqBlock.instance() as Faq
    });

    then("Faq will load with out errors", () => {
      expect(FaqBlock.find(".faqMainContainer")).toHaveLength(1);
    });
    when("Faq network request is called", () => {
      mockAPICall(FaqInstance, "faqAPICallId", mockLoginResponse);
      mockAPICall(FaqInstance, "faqAPICallId", mockFaqFailedResponse);

  });

  then('Device list data is loading', () => {
      FaqInstance.componentDidMount()
      // FaqInstance.renderpetrecommendedList
      expect(FaqInstance.getBannerApi).toBeDefined();
  });
  });

  
 
});

