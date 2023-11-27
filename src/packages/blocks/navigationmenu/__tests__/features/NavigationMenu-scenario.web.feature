Feature: NavigationMenu

    Scenario: User navigates to NavigationMenu
        Given I am a User loading NavigationMenu
        When I navigate to the NavigationMenu
        Then I can leave the screen with out errors
        When User can enter the email for subscribe
        Then Get the value of email
        When User will click on the subscribe button
        Then API response get into state
