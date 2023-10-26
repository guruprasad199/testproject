Feature: barcodesscanner2

    Scenario: User navigates to barcodesscanner2
        Given I am a User loading barcodesscanner2
        When I navigate to the barcodesscanner2
        Then barcodesscanner2 will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors