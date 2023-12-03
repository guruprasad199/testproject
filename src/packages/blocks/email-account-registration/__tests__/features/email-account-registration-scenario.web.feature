Feature: EmailAccountRegistration
    Scenario: User navigates to Email Signup
        Given I am a User attempting to Signup with a Email
        When I navigate to the Signup Screen
        Then calls startLoading on onResponse
        And I can enter a name with out errors
        And user can upload image
        And I can leave the screen with out errors