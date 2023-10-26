Feature: searchengineoptimisationseo

    Scenario: Display settings experience
        Given I am a User loading LikeAPost
        When I navigate to the LikeAPost
        Then LikeAPost will load with out errors

        When Fetch one page
        Then Navigate to Display Website page
        Then Delete one page
        Then Fetch all page but will receive empty response

    Scenario: Seo settings experience
        Given I am a User loading LikeAPost
        When I navigate to the LikeAPost
        Then LikeAPost will load with out errors

        Then Navigate to SEO Settings page
        Then Navigate to Create page
        Then Create page with empty data
        Then Create page with valid data
        When Fetch all pages
        Then Edit, delete, and back to homepage