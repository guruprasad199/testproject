import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import BuyPass from "../../../../components/src/BuyPass.web";

const feature = loadFeature(
  "./__tests__/features/BuyPass-scenario.web.feature"
);
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "LandingPage",
  classes:undefined
};

defineFeature(feature, test => {
  let landingPageBlock: ShallowWrapper;

  test("User visits the BuyPassPage", ({ given, when, then }) => {
    given("I am a User loading BuyPassPage", () => {
      landingPageBlock = shallow(<BuyPass classes={{}} />);
    });

    when("I navigate to the BuyPassPage", () => {
      landingPageBlock = shallow(<BuyPass {...screenProps} />);
    });

    then("BuyPassPage should be rendered without errors", () => {
      expect(landingPageBlock.exists()).toBe(true);
    });
  });
});
