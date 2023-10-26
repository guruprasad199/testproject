import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import { RefundPolicy } from "../../../termsconditions/src/RefundPolicy.web";

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "RefundPolicy",
  classes: {}
};

const feature = loadFeature(
  "./__tests__/features/RefundPolicy-scenario.web.feature"
);

const mockRefundPolicyFailedResponse = {
  "errors": [{ "key": "Login Failed." }]
}

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  const mockRefundPolicyResponse = {
    "data": [
      {
        "id": 12,
        "title": "Refund Policy",
        "content": "<ul><li>e-o-d Adventure Park does not offer any refunds for purchased tickets.</li><li>Tickets/bands are valid for the date of purchase only, any guests found tampering with the bands may be escorted out of the premises immediately.</li><li>At any given time, if the guest is not able to finish all the activities due to any reason, personal or otherwise, tickets can be extended on the discretion of the management of e-o-d Adventure Park.</li><li>If a customer has bought Membership/Annual Pass from the website or physically, the membership is not transferable and non cancellable. No redundancy/adjustments will be made in lieu of the same. For more details check the terms and conditions of the park as well as of each membership carefully before buying.</li><li>In case of any natural calamities/thunderstorm or any other safety reason the Park and/or its management reserves the right to close any activity in the larger interest of public safety without giving prior reason or compensation in lieu of.</li></ul>"
      }
    ]
  }



  test("User navigates to RefundPolicy", ({ given, when, then }) => {
    let RefundPolicyBlock: ShallowWrapper;
    let RefundPolicyInstance: RefundPolicy;
    let getRefundPolicyApiCallId: string = "getRefundPolicyApiCallId";

    given("I am a User loading RefundPolicy", () => {
      RefundPolicyBlock = shallow(<RefundPolicy heading={undefined} subHeading={undefined} bgImage={undefined}  {...screenProps} />);
    });

    when("I navigate to the RefundPolicy", () => {
      RefundPolicyInstance = RefundPolicyBlock.instance() as RefundPolicy
      const refundPolicyApi = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      refundPolicyApi.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        refundPolicyApi.messageId
      );
      refundPolicyApi.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        mockRefundPolicyResponse
      );
      RefundPolicyInstance.refundPolicyAPICallId = refundPolicyApi.messageId;
      runEngine.sendMessage("Test", refundPolicyApi);
    });

    then("RefundPolicy will load with out errors", () => {
      const refundPolicyContiainer = RefundPolicyBlock.findWhere((node) => node.prop("data-testId") === "refundPolicyContiainer").first();
      expect(refundPolicyContiainer).toHaveLength(1);
    });
  });



});

