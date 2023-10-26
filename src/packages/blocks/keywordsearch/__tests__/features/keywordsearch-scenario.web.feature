Feature: keywordsearch

    Scenario: User navigates to keywordsearch
        Given I am a User loading keywordsearch
        When I navigate to the keywordsearch
        Then keywordsearch will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors