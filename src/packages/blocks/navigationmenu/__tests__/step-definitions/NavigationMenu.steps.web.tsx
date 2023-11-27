import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import NavigationMenu from "../../src/NavigationMenu.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "NavigationMenu",
};

const feature = loadFeature(
  "./__tests__/features/NavigationMenu-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to NavigationMenu", ({ given, when, then }) => {
    let navigationMenuBlock: ShallowWrapper;
    let instance: NavigationMenu;

    given("I am a User loading NavigationMenu", () => {
      navigationMenuBlock = shallow(<NavigationMenu {...screenProps} />);
    });

    when("I navigate to the NavigationMenu", () => {
      instance = navigationMenuBlock.instance() as NavigationMenu;
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(navigationMenuBlock).toBeTruthy();
    });

    when("User can enter the email for subscribe", () => {
      let textInputComponent = navigationMenuBlock.findWhere(
        (node) => node.prop("data-test-id") === "inputEmailText"
      );
      const event = {
        preventDefault() {},
        target: { value: "hello@aol.com" },
      };
      textInputComponent.simulate("change", event);
    });

    then("Get the value of email", () => {
      expect(instance.state.emailValue).toBe("hello@aol.com");
    });

    when("User will click on the subscribe button", () => {
      const getUploadedFiles = navigationMenuBlock.findWhere(
        (node) => node.prop("data-test-id") === "handleButtonSubmit"
      );
      getUploadedFiles.simulate("click");
    });
    then("API response get into state", () => {
      expect(instance.state.isSuccessMessage).toBe(false);
    });
  });
});
