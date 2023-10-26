Feature: googlereview

    Scenario: User navigates to googlereview
        Given I am a User loading googlereview
        When I navigate to the googlereview
        Then googlereview will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors