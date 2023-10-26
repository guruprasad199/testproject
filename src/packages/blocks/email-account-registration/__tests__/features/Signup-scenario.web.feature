Feature: Signup
    Scenario: User navigates to Email Signup
        Given I am a User attempting to Signup with a Email
        When I navigate to the Signup Screen
        Then I can select the Signup button with out errors
        And calls startLoading on onResponse
        And I can enter a name with out errors
        And I can enter a email address with out errors
        And I can enter a password with out errors
        And I can enter a confirm Password with out errors
        And I can enter a Phone Number with out errors
        And I can Select Gender with out errors
        And user can upload image
        And I can leave the screen with out errors