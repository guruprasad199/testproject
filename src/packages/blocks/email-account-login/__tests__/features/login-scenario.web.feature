Feature:SignIn

    Scenario: User navigates to Email SignIn
        Given I am a User attempting to SignIn with a Email
        When I navigate to the SignIn Screen
        Then I can toggle the Remember Me with out errors
        And I can select the SignIn button with out errors
        And I can select the Forgot Password button with out errors
        And I can enter a email address with out errors
        And I can enter a password with out errors
        And I can leave the screen with out errors

  