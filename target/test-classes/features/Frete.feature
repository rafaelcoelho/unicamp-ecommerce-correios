#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Shipping
  As a user
  I want to calculate the value and the max time to deliver
  So that I get the order value and estimated date to deliver.

  @tag1
  Scenario Outline: Get shipping value for valid address
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then I get price for shipping <price>

    Examples: 
      | cep        | price |
      | "12216510" | "11"  |

  @tag2
  Scenario Outline: Get shipping value for invalid address
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then an exception shall be throw with following error message:
      """
      Invalid address
      """

    Examples: 
      | cep        |
      | "99999000" |

  @tag3
  Scenario Outline: Get due date to deliver at valid address
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then I get the maximum date to deliver <date>

    Examples: 
      | cep        | date         |
      | "12216510" | 20 |

  @tag4
  Scenario Outline: Get due date to deliver at invalid address
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then an exception shall be throw with following error message:
      """
      Invalid address
      """

    Examples: 
      | cep        |
      | "99999000" |

  @tag5
  Scenario Outline: Service to get price and date unavailable (timeout)
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then an exception shall be throw with following error message:
      """
      Remote service unavailable
      """

    Examples: 
      | cep        |
      | "99999000" |

  @tag6
  Scenario Outline: Get response from server unformatted
    Given an order
    When I set the CEP <cep>
    And I select calculate shipping
    Then an exception shall be throw with following error message:
      """
      Could not get answer from remote server
      """

    Examples: 
      | cep        |
      | "99999000" |
