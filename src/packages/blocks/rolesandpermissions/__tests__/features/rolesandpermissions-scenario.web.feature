Feature: rolesandpermissions

    Scenario: User navigates to rolesandpermissions
        Given I am a User loading rolesandpermissions
        When I navigate to the rolesandpermissions
        Then rolesandpermissions will load with out errors
        And I can enter text with out errors
        And I can leave the screen with out errors
        When user click on display tab for park
        Then User will redirect to another screen
        When User will navigate and API call will be done
        Then User get the expected output