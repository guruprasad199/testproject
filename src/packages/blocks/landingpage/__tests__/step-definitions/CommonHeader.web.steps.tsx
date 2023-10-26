import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import { runEngine } from '../../../../framework/src/RunEngine'
import { Message } from "../../../../framework/src/Message"
import MessageEnum, { getName } from "../../../../framework/src/Messages/MessageEnum";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import Header from "../../../../components/src/MainHeader/Header.web"
import HeaderController from "../../../landingpage/src/HeaderController.web"

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "CommonHeader",
  
};

const feature = loadFeature(
  "./__tests__/features/CommonHeader-scenario.web.feature"
);

const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-test-id") === testID).first();


defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });
  test("User navigates to Header", ({ given, when, then }) => {
    let HeaderBlock: ShallowWrapper;
    let HeaderInstance: HeaderController;

    given("I am a User loading Header", () => {
        HeaderBlock = shallow(<Header heading={undefined} subHeading={undefined} bgImage={undefined} otherHeading={undefined} {...screenProps} />);
    });

    when("I navigate to the Header", () => {
        HeaderInstance = HeaderBlock.instance() as Header
    });

    then("Header will load with out errors", () => {
      expect(HeaderBlock.find(".headerMainContainer")).toHaveLength(1);
    });
   
  });

  
 
});

