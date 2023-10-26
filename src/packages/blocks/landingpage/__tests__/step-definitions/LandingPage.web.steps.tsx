import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";

import * as helpers from "../../../../framework/src/Helpers";

import React from "react";
import LandingPage from "../../src/LandingPage.web";
import {AdventurePass} from "../../src/AdventurePass.web";
import {ComoboCards} from "../../src/ComoboCards.web"
import {KidsCombo} from "../../src/KIdscombo.web"
import {KillerCarouselComponent} from '../../src/KillerCarousel.web'
import {KillerCard} from "../../src/KillerCard.web"
import {Testimonial} from "../../src/Testimonial.web"

const navigation = require("react-navigation");

const screenProps = {
  navigation: navigation,
  id: "LandingPage",
  classes:{}
};

const feature = loadFeature(
  "./__tests__/features/LandingPage-scenario.web.feature"
);
const findByTestID = (wrapper: ShallowWrapper<any>, testID: string) =>
    wrapper.findWhere((node) => node.prop("data-test-id") === testID).first();


defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock("react-native", () => ({ Platform: { OS: "web" } }));
    jest.spyOn(helpers, "getOS").mockImplementation(() => "web");
  });

  test("User navigates to LandingPage", ({ given, when, then }) => {
    let landingPageBlock: ShallowWrapper;
    let landingpageInstance: LandingPage;

    given("I am a User loading LandingPage", () => {
      landingPageBlock = shallow(<LandingPage history={undefined} {...screenProps} />);
    });

    when("I navigate to the LandingPage", () => {
      landingpageInstance = landingPageBlock.instance() as LandingPage
    });

    then("LandingPage will load with out errors", () => {
      expect(landingPageBlock.find(".landingPageContainer")).toHaveLength(1);
    });
  });

  test("User navigates to Adventure Pass screen", ({ given, when, then }) => {
    let AdventurePassBlock: ShallowWrapper;
    let AdventurePassInstance: AdventurePass;

    given("I am a User loading Adventure Pass screen", () => {
        AdventurePassBlock = shallow(<AdventurePass {...screenProps} />);
    });

    when("I navigate to the Adventure Pass screen", () => {
      AdventurePassInstance = AdventurePassBlock.instance() as AdventurePass;
    });

    then("Adventure Pass screen will load with out errors", () => {
      expect(AdventurePassBlock.find(".adventureContainer")).toHaveLength(1);
    });
  });

  test("User navigates to ComboCard screen", ({ given, when, then }) => {
    let ComboCardBlock: ShallowWrapper;
    let ComboCardInstance: ComoboCards;

    given("I am a User loading ComboCard screen", () => {
      ComboCardBlock = shallow(<ComoboCards {...screenProps} />);
    });

    when("I navigate to the ComboCard screen", () => {
      ComboCardInstance = ComboCardBlock.instance() as ComoboCards;
    });

    then("ComboCard screen will load with out errors", () => {
      expect(ComboCardBlock.find(".comoboMainCardContainer")).toHaveLength(1);
    });
  });

  test("User navigates to Kidscombo screen", ({ given, when, then }) => {
    let KidscomboBlock: ShallowWrapper;
    let KidscomboInstance: KidsCombo;

    given("I am a User loading  Kidscombo screen", () => {
      KidscomboBlock = shallow(<KidsCombo zRef={undefined} data={undefined} {...screenProps} />);
    });

    when("I navigate to the  Kidscombo screen", () => {
      KidscomboInstance = KidscomboBlock.instance() as KidsCombo;
    });

    then("Kidscombo screen will load with out errors", () => {
      expect(KidscomboBlock.find(".carouselMain")).toHaveLength(1);
    });
  });

  test("User navigates to KillerCarousel screen", ({ given, when, then }) => {
    let KillerCarouselBlock: ShallowWrapper;
    let KillerCarouselInstance: KillerCarouselComponent;

    given("I am a User loading KillerCarousel screen", () => {
      KillerCarouselBlock = shallow(<KillerCard data={undefined} {...screenProps} />);
    });

    when("I navigate to the KillerCarousel screen", () => {
      KillerCarouselInstance = KillerCarouselBlock.instance() as KillerCarouselComponent;
    });

    then("KillerCarousel screen will load with out errors", () => {
      expect(KillerCarouselBlock).toBeTruthy();
    });
  });
  test("User navigates to KilerCard screen", ({ given, when, then }) => {
    let KilerCardBlock: ShallowWrapper;
    let KilerCardInstance: KillerCard;

    given("I am a User loading KilerCard screen", () => {
      KilerCardBlock = shallow(<KillerCard data={undefined} {...screenProps} />);
    });

    when("I navigate to the KilerCard screen", () => {
      KilerCardInstance = KilerCardBlock.instance() as KillerCard;

    });

    then("KilerCard screen will load with out errors", () => {
      expect(KilerCardBlock.find(".killerCardContainer")).toHaveLength(1);
    });
    
    
  });

  test("User navigates to Testimonial screen", ({ given, when, then }) => {
    let TestimonialBlock: ShallowWrapper;
    let TestimonialInstance: Testimonial;

    given("I am a User loading Testimonial screen", () => {
      TestimonialBlock = shallow(<Testimonial {...screenProps} />);
    });

    when("I navigate to the Testimonial screen", () => {
      TestimonialInstance = TestimonialBlock.instance() as Testimonial;

    });

    then("Testimonial screen will load with out errors", () => {
      expect(TestimonialBlock.find(".testimonial")).toHaveLength(1);
    });
  });
 
});
