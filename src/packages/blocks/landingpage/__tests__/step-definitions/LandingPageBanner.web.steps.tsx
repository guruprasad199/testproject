import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import LandingPageBanner from "../../src/LandingPageBanner.web";

const feature = loadFeature(
  "./__tests__/features/LandingPageBanner-scenario.web.feature"
);
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "LandingPage",
  classes:{},
};

defineFeature(feature, test => {
  let landingPageBlock: ShallowWrapper;

  test("User visits the LandingPageBanner", ({ given, when, then }) => {
    given("I am a User loading LandingPageBanner", () => {
      landingPageBlock = shallow(<LandingPageBanner />);
    });

    when("I navigate to the LandingPageBanner", () => {
      landingPageBlock = shallow(<LandingPageBanner {...screenProps} />);
    });

    then("LandingPageBanner should be rendered without errors", () => {
      expect(landingPageBlock.exists()).toBe(true);
    });
  });
});
