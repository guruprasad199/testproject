Feature:AboutUs 

    Scenario: User navigates to  AboutUs
        Given I am a User attempting to AboutUs with out errors 
        When I navigate to the AboutUs Screen
        And I can select the Toggle button with out errors
        And I can leave the screen with out errors
        And User will select the Toggle button with other button
        When User will load the data from API
        Then User finally get the output on UI screen