Feature: NSW Motor Vehicle Stamp Duty Calculator
  As a user
  I want to calculate motor vehicle stamp duty
  So that I can determine the duty payable for my vehicle registration

  Background:
    Given I navigate to the Service NSW Motor Vehicle Stamp Duty page

  Scenario Outline: Calculate motor vehicle stamp duty for different vehicle prices
    When I click the "Check online" button
    Then I should see the Motor Vehicle Registration calculator page with proper structure
    When I select "<passenger_vehicle>" for passenger vehicle
    And I enter "<purchase_price>" as the purchase price
    And I click the Calculate button
    Then I should see the calculation result modal with:
      | Field | Expected Value |
      | Passenger Vehicle | <passenger_vehicle> |
      | Purchase Price | $<formatted_price> |
      | Duty Payable | $<expected_duty> |

    Examples:
      | passenger_vehicle | purchase_price | formatted_price | expected_duty |
      | Yes | 10000 | 10,000.00 | 300.00 |
      | Yes | 24999 | 24,999.00 | 750.00 |
      | Yes | 50000 | 50,000.00 | 1,600.00 |
      | Yes | 100000 | 100,000.00 | 4,100.00 |
      | No | 15000 | 15,000.00 | 450.00 |
      | No | 30000 | 30,000.00 | 900.00 |
