import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Aboutus, { Zipline, Entertainment } from "../../src/AboutUs.web";
import { beforeEach, expect, jest } from "@jest/globals";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Aboutus",
  classes: {},
};

const feature = loadFeature(
  "./__tests__/features/AboutUs-secnario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to  AboutUs", ({ given, when, then }) => {
    let mobileAccountLogInWrapper: ShallowWrapper;
    let instance: Aboutus;

    given("I am a User attempting to AboutUs with out errors", () => {
      mobileAccountLogInWrapper = shallow(<Aboutus {...screenProps} />);
      expect(mobileAccountLogInWrapper).toBeTruthy();

      instance = mobileAccountLogInWrapper.instance() as Aboutus;
    });

    when("I navigate to the AboutUs Screen", () => {
      instance = mobileAccountLogInWrapper.instance() as Aboutus;
    });

    then("I can select the Toggle button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnToggle"
      );

      instance.setState({ ToggleButton: "zipline" });
      mobileAccountLogInWrapper = shallow(<Zipline />);

      const wrapper = shallow(<Entertainment value={"Zipline"} />);

      const wrapper4 = shallow(<Entertainment value={""} />);

      expect(wrapper.find(Zipline).length).toBe(1);

      expect(wrapper4.find(Zipline).length).toBe(1);
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    then("User will select the Toggle button with other button", () => {
      let bowlingComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnToggle"
      );

      instance.setState({ ToggleButton: "Bowling" });
      mobileAccountLogInWrapper = shallow(<Zipline />);

      const wrapper = shallow(<Entertainment value={"Bowling"} />);

      expect(wrapper.find(Zipline).length).toBe(0);
    });

    then("User will select rain dance tab for new page", () => {
      let bowlingComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnToggle"
      );

      instance.setState({ ToggleButton: "Bowling" });
      const wrapper = shallow(<Entertainment value={"Rain Dance"} />);

      expect(wrapper.find(Zipline).length).toBe(0);
    });

  });
});
