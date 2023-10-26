import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import {TermsAndConditions} from "../../src/TermsAndConditions.web";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "TermsAndConditions",
  classes:{}
};

const feature = loadFeature(
  "./__tests__/features/TermsAndConditions-scenario.web.feature"
);

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-test-id") === testID).first();


defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  const mockLoginResponse = {
    "meta": {
        "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q"
    },
    
      "data": [
          {
              "id": 6,
              "title": "Terms and Conditions",
              "content": "<div class=\"trix-content\">\n  <ul>\n<li>Park timings are subject to change. Please confirm the current timings before booking your tickets or planning your trip.</li>\n<li>Entry into activities are restricted as per weight/age and height criterion. Guests are requested to confirm the same from the ticket counter and/or telephone helpline.</li>\n<li>Entry in to the park is subject to restrictions and reservations and in case of any doubt it shall be the sole decision of the management to allow or disallow any guests.</li>\n<li>Guests must purchase any 1 activity to enter the Park. This helps us in keeping a controlled number of guests in the Park.</li>\n<li>Photography/Videography is not allowed using DSLRs and other professional equipment. However, same can be used for a small charge payable at ticket counter.</li>\n<li>The Park is a family Park and discourages use of any mind altering substances such as alcohol, cigarettes or any other drugs. Any guests found under the influence shall on the decision of the management be removed from the park/cancel the tickets and/or deny entry into the park without refund.</li>\n<li>Tickets are non-refundable. In case of any issues or requests you are requested to contact us at <a href=\"mailto:info@eodindia.com\">info@eodindia.com</a>\n</li>\n<li>Parking at the park is at owner’s risk. Park management or staff or other guests are not responsible for any damage/dent/scratch or as such.</li>\n<li>Parking at the Park is Free of Charge for convenience of guests.</li>\n<li>Kindly note, the park shall make all arrangements to keep all activities operational at all times, still due to the nature of such activities the guests/visitors understand that any activity at any time may become non operational or maybe closed down due to maintenance/safety issues and in such instances the guests are not entitled to a refund or exchange.</li>\n<li>Everyone visiting the park agree that their picture maybe clicked and used by the management and its associates on marketing/promotional material or any other way as deemed by the Park and its executives. If you have an objection to your image being used on the park's official channels and other material you can inform us at <a href=\"mailto:promotions@eodindia.com\">promotions@eodindia.com</a> with the reference/link of the image to be removed and the same may be removed upon verification.</li>\n<li>The Park being a public park, accepts no responsibilities for the loss of personal belongings of visitors. The visitors are requested to keep their personal and valuable belongings with them at all times under their own watch and care.</li>\n<li>The above terms and conditions are subject to change and update as per latest laws and internal policies of the Park.</li>\n<li>Due to rain, all activities are affected. </li>\n</ul><p><br></p>\n</div>\n"
          }
      ]
  
}

const mockAPICall = (instance: any, apiCallID: string, apiData: object, showErrorResponse?: boolean) => {
  const msgSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
  msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), msgSucessRestAPI.messageId);
  msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), apiData);
  if (showErrorResponse)
      msgSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceErrorMessage), apiData);
  instance[apiCallID] = msgSucessRestAPI.messageId
  runEngine.sendMessage("Unit Test", msgSucessRestAPI)
}

const mockLoginFailedResponse = {
    "errors": [{ "key": "Login Failed." }]
}
  test("User navigates to TermsAndConditions", ({ given, when, then }) => {
    let TermsAndConditionsBlock: ShallowWrapper;
    let TermsAndConditionsInstance: TermsAndConditions
    let postSignUpApiCallId: string = "postSignUpApiCallId";

    given("I am a User loading TermsAndConditions", () => {
      TermsAndConditionsBlock = shallow(<TermsAndConditions heading={undefined} subHeading={undefined} bgImage={undefined}  {...screenProps} />);
    });

    when("I navigate to the TermsAndConditions", () => {
      TermsAndConditionsInstance = TermsAndConditionsBlock.instance() as TermsAndConditions
    });

    then("TermsAndConditions will load with out errors", () => {
      expect(TermsAndConditionsBlock.find(".TermsAndConditionsMainContainer"));
    });
    when("TermsAndConditions network request is called", () => {
      mockAPICall(TermsAndConditionsInstance, "termsAndConditonsAPICallId", mockLoginResponse);
      mockAPICall(TermsAndConditionsInstance, "termsAndConditonsAPICallId", mockLoginFailedResponse);

  });

  then('Device list data is loading', () => {
    const handleChange = jest.fn()
    TermsAndConditionsInstance.componentDidMount()
      expect(TermsAndConditionsInstance.getTermsAndConditonsApi).toBeDefined();
      expect(TermsAndConditionsInstance.state.termsandConditionsTitle)
      expect(TermsAndConditionsInstance.state.questionData);
      const accordionTitle = TermsAndConditionsBlock.find('[data-testid="accordion-title"]').at(0);
      accordionTitle.simulate('change');
      // TermsAndConditionsInstance.handleChange.toBeCalledWith(0)
    });
  });

  
 
});

