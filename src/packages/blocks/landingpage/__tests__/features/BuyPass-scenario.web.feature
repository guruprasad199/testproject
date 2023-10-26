Feature: BuyPass

  Scenario:User visits the BuyPassPage
    Given I am a User loading BuyPassPage
    When I navigate to the BuyPassPage
    Then BuyPassPage should be rendered without errors