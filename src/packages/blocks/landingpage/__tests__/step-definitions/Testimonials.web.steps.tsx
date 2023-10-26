import { defineFeature, loadFeature } from "jest-cucumber";
import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Testimonials from "../../../../components/src/Testimonials.web";
import TestimonialCard from "../../src/TestimonialCard.web";

const feature = loadFeature(
  "./__tests__/features/Testimonials-scenario.web.feature"
);
const navigation = require("react-navigation");
const TestimonialDummy = [
  {
    dp: "",
    content:
      "Testimonial 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Jenny",
    organization: "Facebook"
  }
];
const screenProps = {
  navigation: navigation,
  id: "LandingPage",
  testimonialsData: TestimonialDummy,
  classes:{}
};

defineFeature(feature, test => {
  let landingPageBlock: ShallowWrapper;

  test("User visits the TestimonialsPage", ({ given, when, then }) => {
    given("I am a User loading TestimonialsPage", () => {
      landingPageBlock = shallow(<Testimonials {...screenProps} />);
    });

    when("I navigate to the TestimonialsPage", () => {
      landingPageBlock = shallow(<Testimonials {...screenProps} />);
      const testimonialCard = shallow(<TestimonialCard image={undefined} name={""} designation={""}/>)
    });

    then("TestimonialsPage should be rendered without errors", () => {
      expect(landingPageBlock.exists()).toBe(true);
    });
  });
});
