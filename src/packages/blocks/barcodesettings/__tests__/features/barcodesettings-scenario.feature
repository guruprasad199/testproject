Feature: barcodesettings

    Scenario: User navigates to barcodesettings
        Given I am a User loading barcodesettings
        When I navigate to the barcodesettings
        Then barcodesettings will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors