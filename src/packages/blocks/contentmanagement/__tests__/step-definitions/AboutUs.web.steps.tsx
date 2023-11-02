import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Aboutus, { Zipline } from "../../src/AboutUs.web";
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

const mockData = {
  "data": [
      {
          "id": "13",
          "type": "about_us",
          "attributes": {
              "id": 13,
              "name": "ABOUT E-O-D",
              "description": "Since Opening our doors in 2016, at e-o-d Adventure Park, we have tried to provide the best in entertainment and adventure to the people of Delhi-NCR. We hope that all our guests enjoy the facilities which we have painstakingly made.",
              "created_at": "2023-10-30T19:23:11.711+05:30",
              "updated_at": "2023-10-30T19:23:11.749+05:30",
              "banner": "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/iqc92q75qutoqjc4u3jjtl77wt2a?response-content-disposition=inline%3B%20filename%3D%22skip_frame%20%25282%2529.png%22%3B%20filename%2A%3DUTF-8%27%27skip_frame%2520%25282%2529.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T135909Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=29c208b0b1b7c36c8782cac0bb99f587142535e9ea02c33e38654956390bba34",
              "park_activities": [
                  {
                      "name": "Bowling",
                      "description": "test thrid check",
                      "additional_data": {
                          "Error Sit Voluptatem Accusantium": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
                          "Error Sit Voluptatem Accusantium 1": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
                      },
                      "image": null
                  },
                  {
                      "name": "Rain Dance",
                      "description": "test two check",
                      "additional_data": {
                          "Error Sit Voluptatem Accusantium": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
                          "Error Sit Voluptatem Accusantium 1": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
                      },
                      "image": null
                  },
                  {
                      "name": "Zipline",
                      "description": "<p>EOD Park offers an exhilarating zipline experience that will leave you breathless. Nestled amidst the lush greenery, this outdoor adventure destination promises an unforgettable adrenaline rush.</p><p><br></p><p>The zipline course spans across the picturesque landscape, allowing participants to soar through the air like a bird, taking in stunning panoramic views below. With a perfect balance of thrill and safety, EOD Park's zipline boasts state-of-the-art equipment and professionally trained guides who ensure a secure and enjoyable journey.</p><p><br></p><p>Whether you're an adventure seeker or a nature lover, the zipline in EOD Park guarantees an unforgettable and awe-inspiring experience that will leave you craving for more.</p>",
                      "additional_data": {
                          "Error Sit Voluptatem Accusantium": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
                          "Error Sit Voluptatem Accusantium 1": "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae"
                      },
                      "image": "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/vr75ep6smg40kt8sgrlar91icn6r?response-content-disposition=inline%3B%20filename%3D%22skip_frame%20%25281%2529.png%22%3B%20filename%2A%3DUTF-8%27%27skip_frame%2520%25281%2529.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T135909Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0d121d58c25728e6a7534c64da6b79bc9683c7ed13a632ef94e17786600f2a53"
                  }
              ]
          }
      }
  ]
}

const MockActivity = [
  {
    name: "Bowling",
    description:
      "test one check",
    additional_data: {
      "Error Sit Voluptatem Accusantium":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
      "Error Sit Voluptatem Accusantium 1":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    },
    image:
      "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/hha7ligbbfzyvxx412nh2r9lf8n0?response-content-disposition=inline%3B%20filename%3D%22opening%20hours.png%22%3B%20filename%2A%3DUTF-8%27%27opening%2520hours.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T183544Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=1744a1e3964135ba743864879a3e4576466e606c573683590aac5af34cb6bdd0",
  },
  {
    name: "Zipline\t",
    description:
      "<p>EOD Park offers an exhilarating zipline experience that will leave you breathless. Nestled amidst the lush greenery, this outdoor adventure destination promises an unforgettable adrenaline rush.</p><p><br></p><p>The zipline course spans across the picturesque landscape, allowing participants to soar through the air like a bird, taking in stunning panoramic views below. With a perfect balance of thrill and safety, EOD Park's zipline boasts state-of-the-art equipment and professionally trained guides who ensure a secure and enjoyable journey.</p><p><br></p><p>Whether you're an adventure seeker or a nature lover, the zipline in EOD Park guarantees an unforgettable and awe-inspiring experience that will leave you craving for more</p>",
    additional_data: {
      "Error Sit Voluptatem Accusantium":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
      "Error Sit Voluptatem Accusantium 1":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    },
    image:
      "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/pbgvrzg3zd2btt266advs3weqibs?response-content-disposition=inline%3B%20filename%3D%22zipline.png%22%3B%20filename%2A%3DUTF-8%27%27zipline.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T183544Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=eedb03fe80b8f3512caf0a36d10ebb56c6a8d6913cbe240af96e3f0e34eb282c",
  },
  {
    name: "Rain Dance",
    description:
      "<p>EOD Park offers an exhilarating zipline experience that will leave you breathless. Nestled amidst the lush greenery, this outdoor adventure destination promises an unforgettable adrenaline rush.</p><p><br></p><p>The zipline course spans across the picturesque landscape, allowing participants to soar through the air like a bird, taking in stunning panoramic views below. With a perfect balance of thrill and safety, EOD Park's zipline boasts state-of-the-art equipment and professionally trained guides who ensure a secure and enjoyable journey.</p><p><br></p><p>Whether you're an adventure seeker or a nature lover, the zipline in EOD Park guarantees an unforgettable and awe-inspiring experience that will leave you craving for more</p>",
    additional_data: {
      "Error Sit Voluptatem Accusantium":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
      "Error Sit Voluptatem Accusantium 1":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    },
    image:
      "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/knzn1bqxcdiqf86r6b3jd2tgb1b0?response-content-disposition=inline%3B%20filename%3D%22Rain%20Dance.png%22%3B%20filename%2A%3DUTF-8%27%27Rain%2520Dance.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T183544Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d3e7f3681d3d57c6a3b8937f760c995adff301324b3cf80b56e16c5164309e51",
  },
  {
    name: "Zipline",
    description:
      "<p>EOD Park offers an exhilarating zipline experience that will leave you breathless. Nestled amidst the lush greenery, this outdoor adventure destination promises an unforgettable adrenaline rush.</p><p><br></p><p>The zipline course spans across the picturesque landscape, allowing participants to soar through the air like a bird, taking in stunning panoramic views below. With a perfect balance of thrill and safety, EOD Park's zipline boasts state-of-the-art equipment and professionally trained guides who ensure a secure and enjoyable journey.</p><p><br></p><p>Whether you're an adventure seeker or a nature lover, the zipline in EOD Park guarantees an unforgettable and awe-inspiring experience that will leave you craving for more.</p>",
    additional_data: {
      "Error Sit Voluptatem Accusantium":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
      "Error Sit Voluptatem Accusantium 1":
        "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    },
    image:
      "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/vr75ep6smg40kt8sgrlar91icn6r?response-content-disposition=inline%3B%20filename%3D%22skip_frame%20%25281%2529.png%22%3B%20filename%2A%3DUTF-8%27%27skip_frame%2520%25281%2529.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T183544Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=d39a2420b040cf3e5d7f1580824558749cda043119fb494c8d0f793f0b23c0b8",
  },
];

const mockCardData = {
  name: "Zipline\t",
  description:
    "<p>EOD Park offers an exhilarating zipline experience that will leave you breathless. Nestled amidst the lush greenery, this outdoor adventure destination promises an unforgettable adrenaline rush.</p><p><br></p><p>The zipline course spans across the picturesque landscape, allowing participants to soar through the air like a bird, taking in stunning panoramic views below. With a perfect balance of thrill and safety, EOD Park's zipline boasts state-of-the-art equipment and professionally trained guides who ensure a secure and enjoyable journey.</p><p><br></p><p>Whether you're an adventure seeker or a nature lover, the zipline in EOD Park guarantees an unforgettable and awe-inspiring experience that will leave you craving for more</p>",
  additional_data: {
    "Error Sit Voluptatem Accusantium":
      "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    "Error Sit Voluptatem Accusantium 1":
      "error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
  },
  image:
    "https://minio.b351975.dev.eastus.az.svc.builder.cafe/sbucket/pbgvrzg3zd2btt266advs3weqibs?response-content-disposition=inline%3B%20filename%3D%22zipline.png%22%3B%20filename%2A%3DUTF-8%27%27zipline.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=hello%2F20231101%2Fbuilder-1%2Fs3%2Faws4_request&X-Amz-Date=20231101T183544Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=eedb03fe80b8f3512caf0a36d10ebb56c6a8d6913cbe240af96e3f0e34eb282c",
};

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
      instance.setState({ parkActivities: MockActivity})
      instance.getFilterData("zipline")
      instance.handleTabClick("zipline")
    });

    then("I can select the Toggle button with out errors", () => {
      let buttonComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnToggle"
      );

      instance.setState({ ToggleButton: "zipline" });
      mobileAccountLogInWrapper = shallow(
        <Zipline mappedData={mockCardData} />
      );
    });

    then("I can leave the screen with out errors", () => {
      expect(mobileAccountLogInWrapper).toBeTruthy();
    });

    then("User will select the Toggle button with other button", () => {
      let bowlingComponent = mobileAccountLogInWrapper.findWhere(
        (node) => node.prop("data-test-id") === "btnToggle"
      );
      mobileAccountLogInWrapper = shallow(
        <Zipline mappedData={mockCardData} />
      );
      expect(instance.state.ToggleButton).toBe("zipline");
    });

    when("User will load the data from API", () => {
      const apiMsgUpdate = new Message(
        getName(MessageEnum.RestAPIResponceMessage)
      );
      apiMsgUpdate.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        apiMsgUpdate
      );
      apiMsgUpdate.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {...mockData.data}
      );
      instance.getCardsDataList = apiMsgUpdate;
      instance.receive("", apiMsgUpdate)
      runEngine.sendMessage("Unit Test", apiMsgUpdate);
    })

    then("User finally get the output on UI screen", () => {
      expect(instance.state.aboutDataContainer.length).toBe(0)
    })
  });
});
