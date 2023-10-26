import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Rolesandpermissions from "../../src/Rolesandpermissions.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Rolesandpermissions",
};

const feature = loadFeature(
  "./__tests__/features/rolesandpermissions-scenario.web.feature"
);

const mockDataCards = [
  {
    id: "3",
    type: "park_information",
    attributes: {
      id: 3,
      title: "Food Outlets",
      category: "Food Outlets",
      description: '" "',
      created_at: "2023-10-11T10:13:39.146Z",
      updated_at: "2023-10-12T11:02:30.064Z",
      banner: "",
      activity_categories: [
        {
          title: "Food Point",
          description:
            "There's a food kiosk at the park that offers a variety of delicious treats, including hot dogs, ice cream, popcorn, and refreshing beverages. Grab a bite and enjoy your time outdoors!",
          image:
            "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/zact1mqn7rpwunzc6xxy7ydh5dck?response-content-disposition=inline%3B%20filename%3D%22food_activity.png%22%3B%20filename%2A%3DUTF-8%27%27food_activity.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231012%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231012T135039Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=9ca7f88b9e10163ed09a3448eb37fda6090d0598d0cf90b5e36f45cb7e88fed1",
        },
      ],
    },
  },
  {
    id: "2",
    type: "park_information",
    attributes: {
      id: 2,
      title: "Opening Times",
      category: "Opening Times",
      description: '" "',
      created_at: "2023-10-11T05:47:54.283Z",
      updated_at: "2023-10-12T11:06:10.423Z",
      banner: "",
      activity_categories: [
        {
          title: "Winter Timing",
          description:
            '{ "date": "(1st November - 28th February)" , "time": "10am to 7pm" }',
          image: "",
        },
        {
          title: "Summer Timing",
          description:
            '{ "date": "(1st March - 31st October)" , "time": "11am to 8pm" }',
          image: "",
        },
      ],
    },
  },
  {
    id: "4",
    type: "park_information",
    attributes: {
      id: 4,
      title: "Park Map",
      category: "Park Map",
      description: '""',
      created_at: "2023-10-12T11:10:14.635Z",
      updated_at: "2023-10-12T11:10:14.668Z",
      banner: "",
      activity_categories: [
        {
          title: "map",
          description: '""',
          image: "",
        },
      ],
    },
  },
];

const mockCardMap = {
  data: {
    id: "2",
    type: "park_information",
    attributes: {
      id: 2,
      title: "Opening Times",
      category: "Opening Times",
      description: '" "',
      created_at: "2023-10-11T05:47:54.283Z",
      updated_at: "2023-10-12T11:06:10.423Z",
      activity_categories: [
        {
          title: "Winter Timing",
          description:
            '{ "date": "(1st November - 28th February)" , "time": "10am to 7pm" }',
        },
        {
          title: "Summer Timing",
          description:
            '{ "date": "(1st March - 31st October)" , "time": "11am to 8pm" }',
        },
      ],
    },
  },
};

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to rolesandpermissions", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Rolesandpermissions;

    given("I am a User loading rolesandpermissions", () => {
      exampleBlockA = shallow(<Rolesandpermissions {...screenProps} />);
    });

    when("I navigate to the rolesandpermissions", () => {
      instance = exampleBlockA.instance() as Rolesandpermissions;
      instance.cardRedirection("");
      instance.setState({
        displayTab: "Opening Times",
        cardDataContainer: mockDataCards,
      });
    });

    then("rolesandpermissions will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    then("I can enter text with out errors", () => {
      let textInputComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "txtInput"
      );
      const event = {
        preventDefault() {},
        target: { value: "hello@aol.com" },
      };
    });

    then("I can leave the screen with out errors", () => {
      instance.componentWillUnmount();
      expect(exampleBlockA).toBeTruthy();
    });

    when("user click on display tab for park", () => {
      instance.setState({ displayTab: "Park Map" });
    });

    then("User will redirect to another screen", () => {
      expect(instance.state.displayTab).toBe("Park Map");
    });

    when("User will navigate and API call will be done", () => {
      const apiMsgUpdate = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );

      apiMsgUpdate.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        apiMsgUpdate.messageId
      );

      apiMsgUpdate.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        ...mockCardMap,
      });

      instance.getParkInformation = apiMsgUpdate.messageId;
      instance.receive("", apiMsgUpdate);
      runEngine.sendMessage("Unit Test", apiMsgUpdate);
    });

    then("User get the expected output", () => {
      expect(instance.state.cardDataContainer).toBe(mockCardMap.data);
    });
  });
});
