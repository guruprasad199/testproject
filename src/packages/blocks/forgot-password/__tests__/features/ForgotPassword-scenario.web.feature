Feature: ForgotPasswordWeb
    Scenario: User navigates to Email ForgotPasswordWeb
        Given I am a User attempting to ForgotPasswordWeb with a Email
        When I navigate to the ForgotPasswordWeb Screen
        Then I can select the ForgotPasswordWeb button with out errors
        And I can enter a email address with out errors
        And I can enter a password with out errors
        And I can enter a confirm Password with out errors
        And I can click resetPassword button with out errors 
        And I can leave the screen with out errors