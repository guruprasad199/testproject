Feature: audittrail2

    Scenario: User navigates to audittrail2
        Given I am a User loading audittrail2
        When I navigate to the audittrail2
        Then audittrail2 will load with out errors
        And I can enter text with out errors
        And I can select the button with with out errors
        And I can leave the screen with out errors