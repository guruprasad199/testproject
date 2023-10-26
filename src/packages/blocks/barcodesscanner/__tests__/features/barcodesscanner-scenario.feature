Feature: barcodesscanner

    Scenario: User navigates to barcodesscanner
        Given I am a User loading barcodesscanner
        When I navigate to the barcodesscanner
        Then barcodesscanner will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors