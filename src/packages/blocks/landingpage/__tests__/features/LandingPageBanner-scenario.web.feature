Feature: LandingPageBanner

  Scenario:User visits the LandingPageBanner
    Given I am a User loading LandingPageBanner
    When I navigate to the LandingPageBanner
    Then LandingPageBanner should be rendered without errors