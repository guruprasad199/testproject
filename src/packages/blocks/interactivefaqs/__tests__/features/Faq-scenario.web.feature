Feature: Faq

    Scenario: User navigates to Faq
        Given I am a User loading Faq
        When I navigate to the Faq
        Then Faq will load with out errors 
        When Faq network request is called
        Then Device list data is loading