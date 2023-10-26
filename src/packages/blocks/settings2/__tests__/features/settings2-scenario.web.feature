Feature: settings2

    Scenario: User navigates to settings2
        Given I am a User loading settings2
        When I navigate to the settings2
        Then settings2 will load with out errors
        When User click on tab second
        And I can leave the screen with out errors
        When User click on tab first for render data
        Then User get all data from card
        When Navigate to card page API data
        Then API card data check to cards details