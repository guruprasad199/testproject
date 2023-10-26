import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";
import { runEngine } from "../../../../framework/src/RunEngine";
import { Message } from "../../../../framework/src/Message";

import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import React from "react";
import Searchengineoptimisationseo from "../../src/Searchengineoptimisationseo.web";
const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "Searchengineoptimisationseo",
};

const feature = loadFeature(
  "./__tests__/features/searchengineoptimisationseo-scenario.web.feature"
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
    window.open = jest.fn();
    (global as any).URL = jest.fn().mockImplementation((urlString: string) => ({
      searchParams: {
        get: jest.fn().mockReturnValue('1'), // Return '1' for pageId
      },
    }));
  });

  test("Display settings experience", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Searchengineoptimisationseo;

    given("I am a User loading LikeAPost", () => {
      exampleBlockA = shallow(<Searchengineoptimisationseo {...screenProps} />);
    });

    when("I navigate to the LikeAPost", () => {
      instance = exampleBlockA.instance() as Searchengineoptimisationseo;
    });

    then("LikeAPost will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    when("Fetch one page", () => {
      instance.apiSeoSettingsCallId = 'apiSeoSettingsCallId'
      const msgOne: Message = new Message(getName(MessageEnum.RestAPIResponceMessage));
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        'apiSeoSettingsCallId'
      );
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { data: {
            id: 27,
            type: "seo_setting",
            attributes: {
                id: 27,
                page_name: "test",
                meta_title: "test",
                meta_description: "test",
                created_at: "2023-06-21T00:44:36.061Z",
                updated_at: "2023-06-21T00:44:36.061Z"
          }},
          meta: {
            message: "Successfully Loaded"
          }}
        );
      runEngine.sendMessage("Unit Test", msgOne);
    })

    then("Navigate to Display Website page", () => {
      let backToDisplayWebsitePage = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToDisplayWebsitePage"
      );
      backToDisplayWebsitePage.simulate("click"); 

      let backToLandingButton2 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton2"
      );
      backToLandingButton2.simulate("click");

      instance.apiSeoSettingsCallId = 'apiSeoSettingsCallId'
        const msgOne: Message = new Message(getName(MessageEnum.RestAPIResponceMessage));
        msgOne.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          'apiSeoSettingsCallId'
        );
        msgOne.addData(
          getName(MessageEnum.RestAPIResponceSuccessMessage),
          { data: [{
              id: 27,
              type: "seo_setting",
              attributes: {
                  id: 27,
                  page_name: "test",
                  meta_title: "test",
                  meta_description: "test",
                  created_at: "2023-06-21T00:44:36.061Z",
                  updated_at: "2023-06-21T00:44:36.061Z"
            }}],
            meta: {
              message: "Successfully Loaded"
          }}
        );
      runEngine.sendMessage("Unit Test", msgOne);

      let displayWebsiteButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "displayWebsiteButton"
      );
      displayWebsiteButton.simulate("click");

      let openWebsiteButton0 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "openWebsiteButton0"
      );
      openWebsiteButton0.simulate("click");

      let backToLandingButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton2"
      );
      backToLandingButton.simulate("click");
      expect(exampleBlockA).toBeTruthy();
    })

    then("Delete one page", () => {
      instance.apiSeoSettingsCallId = 'apiSeoSettingsCallId'
      const msgOne: Message = new Message(getName(MessageEnum.RestAPIResponceMessage));
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        'apiSeoSettingsCallId'
      );
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {meta: {message: 'seo setting Removed'}}
      )
      runEngine.sendMessage("Unit Test", msgOne);
      expect(exampleBlockA).toBeTruthy();
    })

    then("Fetch all page but will receive empty response", () => {
      instance.apiSeoSettingsCallId = 'apiSeoSettingsCallId'
      const msgOne: Message = new Message(getName(MessageEnum.RestAPIResponceMessage));
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        'apiSeoSettingsCallId'
      );
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        {message: 'No SEO settings found'}
      )
      runEngine.sendMessage("Unit Test", msgOne);
      expect(exampleBlockA).toBeTruthy();
    })
  });

  test("Seo settings experience", ({ given, when, then }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: Searchengineoptimisationseo;

    given("I am a User loading LikeAPost", () => {
      exampleBlockA = shallow(<Searchengineoptimisationseo {...screenProps} />);
    });

    when("I navigate to the LikeAPost", () => {
      instance = exampleBlockA.instance() as Searchengineoptimisationseo;
    });

    then("LikeAPost will load with out errors", () => {
      expect(exampleBlockA).toBeTruthy();
    });

    then("Navigate to SEO Settings page" , () => {
      let backToDisplayWebsitePage = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToDisplayWebsitePage"
      );
      backToDisplayWebsitePage.simulate("click"); 

      let backToLandingButton2 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton2"
      );
      backToLandingButton2.simulate("click");

      let buttonComponent = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "seoSettingButton"
      );
      buttonComponent.simulate("click");
      expect(exampleBlockA).toBeTruthy();
    })

    then("Navigate to Create page" , () => {
      let backToLandingButton1 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton1"
      );
      backToLandingButton1.simulate("click");

      let seoSettingButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "seoSettingButton"
      );
      seoSettingButton.simulate("click");

      let createPageButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "createPageButton" 
      );
      createPageButton.simulate("click");

      let backToLandingButton3 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton3"
      );
      backToLandingButton3.simulate("click");
      expect(exampleBlockA).toBeTruthy();
    })

    then("Create page with empty data" , () => {
      let createPageButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "createPageButton"
      );
      createPageButton.simulate("click");

      let pageNameInput = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "pageNameInput"
      );
      pageNameInput.simulate("change", {
        target: { value: "" },
      });

      let metaTitleInput = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "metaTitleInput"
      );
      metaTitleInput.simulate("change", {
        target: { value: "" },
      });

      let metaDescriptionButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "metaDescriptionButton"
      );
      metaDescriptionButton.simulate("change", {
        target: { value: "" },
      });

      let saveButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "saveButton"
      );
      saveButton.simulate("click");
      expect(exampleBlockA).toBeTruthy();
    })

    then("Create page with valid data" , () => {
      let pageNameInput = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "pageNameInput"
      );
      pageNameInput.simulate("change", {
        target: { value: "test" },
      });

      let metaTitleInput = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "metaTitleInput"
      );
      metaTitleInput.simulate("change", {
        target: { value: "test" },
      });

      let metaDescriptionButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "metaDescriptionButton"
      );
      metaDescriptionButton.simulate("change", {
        target: { value: "test" },
      });

      let saveButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "saveButton"
      );
      saveButton.simulate("click");
      expect(exampleBlockA).toBeTruthy(); 
    })

    when("Fetch all pages", () => {
      instance.apiSeoSettingsCallId = 'apiSeoSettingsCallId'
      const msgOne: Message = new Message(getName(MessageEnum.RestAPIResponceMessage));
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        'apiSeoSettingsCallId'
      );
      msgOne.addData(
        getName(MessageEnum.RestAPIResponceSuccessMessage),
        { data: [{
          id: 27,
          type: "seo_setting",
          attributes: {
              id: 27,
              page_name: "test",
              meta_title: "test",
              meta_description: "test",
              created_at: "2023-06-21T00:44:36.061Z",
              updated_at: "2023-06-21T00:44:36.061Z"
          }}],
          meta: {
            message: "Successfully Loaded"
          }}
        );
      runEngine.sendMessage("Unit Test", msgOne);
    })

    then("Edit, delete, and back to homepage", () => {
      let backToLandingButton1 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton1"
      );
      backToLandingButton1.simulate("click");

      let seoSettingButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "seoSettingButton"
      );
      seoSettingButton.simulate("click");

      let editButton0 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "editButton0"
      );
      editButton0.simulate("click");

      let saveButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "saveButton"
      );
      saveButton.simulate("click");

      let deleteButton0 = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "deleteButton0"
      );
      deleteButton0.simulate("click");

      let backToLandingButton = exampleBlockA.findWhere(
        (node) => node.prop("data-test-id") === "backToLandingButton1"
      );
      backToLandingButton.simulate("click");
      expect(exampleBlockA).toBeTruthy();
    })
  });
});
