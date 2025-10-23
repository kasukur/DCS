Feature: OpenLibrary Author API Testing
  As a tester
  I want to validate the OpenLibrary Author API response
  So that I can ensure the API returns correct author information

  Background:
    Given I have initialized the API client

  Scenario: Validate author OL1A details from OpenLibrary API
    When I make a GET request to "https://openlibrary.org/authors/OL1A.json"
    Then the response status code should be 200
    And the response body should contain "personal_name" with value "Sachi Rautroy"
    And the response body should contain "alternate_names" array with value "Yugashrashta Sachi Routray"
