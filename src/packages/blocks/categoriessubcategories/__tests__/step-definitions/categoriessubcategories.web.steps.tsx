import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";
export const configJSON = require("../../config.json");
import MessageEnum, {
  getName
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Categoriessubcategories from "../../src/Categoriessubcategories.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Categoriessubcategories"
};

const feature = loadFeature(
  "./__tests__/features/categoriessubcategories-scenario.web.feature"
);

const unitTest = {
  data: [
    {
      id: "4",
      type: "category",
      attributes: {
        id: 4,
        name: "category_3",
        created_at: "2020-10-07T06:56:28.270Z",
        updated_at: "2020-10-07T06:56:28.270Z",
        sub_categories: [
          {
            id: 4,
            name: "sub_category_1",
            created_at: "2020-10-07T06:57:11.436Z",
            updated_at: "2020-10-07T06:57:11.436Z"
          }
        ]
      }
    }
  ]
}

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to categoriessubcategories for web", ({ given, when, then }) => {
    let categoryWrapper: ShallowWrapper;
    let instance: Categoriessubcategories;

    given("User loading categoriessubcategories for passes", () => {
      categoryWrapper = shallow(<Categoriessubcategories {...screenProps} />);
    });

    when("User navigate to the categoriessubcategories", () => {
      instance = categoryWrapper.instance() as Categoriessubcategories;
    });

    then("annual passes component will load with out errors", () => {
      expect(categoryWrapper).toBeTruthy();
    });

    then("User can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(categoryWrapper).toBeTruthy();
    });
  });
});
