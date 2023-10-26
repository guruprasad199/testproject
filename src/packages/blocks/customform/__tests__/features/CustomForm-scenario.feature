Feature: CustomForm

    Scenario: User navigates to CustomForm
        Given I am a User loading CustomForm
        When I click on add user button
        Then check add user dialog open properly

        When add user modal open
        Then check all textfield working properly
        And check all dropdown working properly
        And check file uploaded properly
        And check add api called
        And check close button working properly

        When user list api failed
        Then check table data not rendered

        When add user api failed
        Then check error notification display

        When user list api called properly
        Then check table render correctly
        And check pagination working properly
        And check edit button working properly
        And check edit api called

        When add user api called properly
        Then check user added correctly

        When edit user api called properly
        Then check user edited correctly