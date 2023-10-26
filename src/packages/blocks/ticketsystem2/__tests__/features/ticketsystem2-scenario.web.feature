Feature: ticketsystem2

    Scenario: User navigates to ticketsystem2
        Given I am a User loading ticketsystem2
        When I navigate to the ticketsystem2
        Then ticketsystem2 will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors