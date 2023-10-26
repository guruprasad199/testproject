Feature: Testimonials

  Scenario:User visits the TestimonialsPage
    Given I am a User loading TestimonialsPage
    When I navigate to the TestimonialsPage
    Then TestimonialsPage should be rendered without errors