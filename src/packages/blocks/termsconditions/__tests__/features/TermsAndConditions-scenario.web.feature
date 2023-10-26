Feature: TermsAndConditions

    Scenario: User navigates to TermsAndConditions
        Given I am a User loading TermsAndConditions
        When I navigate to the TermsAndConditions
        Then TermsAndConditions will load with out errors 
        When TermsAndConditions network request is called
        Then Device list data is loading