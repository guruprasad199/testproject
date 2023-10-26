import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Settings2 from "../../src/Settings2.web";
import { mockApiData } from "../../__mock__/mock";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Settings2",
  history: {},
};

const feature = loadFeature(
  "./__tests__/features/settings2-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to settings2", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Settings2;

    given("I am a User loading settings2", () => {
      exampleBlockA = shallow(<Settings2 {...screenProps} />);
    });

    when("I navigate to the settings2", () => {
      instance = exampleBlockA.instance() as Settings2;
    });

    then("settings2 will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    when("User click on tab second", () => {
      instance.handleTabClick(1);
      instance.setState({ activeTab: 2, adventureCardData: mockApiData.data });
      instance = exampleBlockA.instance() as Settings2;
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
    });

    when("User click on tab first for render data", () => {
      instance.setState({ activeTab: 1 });
    });

    then("User get all data from card", () => {
      expect(instance.state.activeTab).toBe(1);
    });

    when("Navigate to card page API data", () => {
      const userTransactionAPI = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      userTransactionAPI.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        userTransactionAPI.messageId
      );
      userTransactionAPI.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        mockApiData
      );
      instance.getListCardData = userTransactionAPI.messageId;
      runEngine.sendMessage("Unit Test", userTransactionAPI);
    });

    then("API card data check to cards details", () => {
      expect(instance.state.adventureCardData).toBe(mockApiData.data);
    });
  });
});
