Feature: Check order status
  As a user of the e-commerce system
  I would like to see an order status from the tracking code
  To know where my products are

  Scenario: Query for a valid tracking code
    Given a valid tracking code
      | track_code | SQ458226057BRRA132678652BR |
    When I set a tracking code in the status query
    Then the status result is:
      | Tracking Status | Location              |
      | forwarded       | Customer Service Jobs |

  Scenario: Query an non-existent tracking code
    Given a tracking code:
      | track_code | 99999999 |
    When I enter the code in the status query
    Then there may be an error value of "true"

  Scenario: Query for a invalid tracking code
    Given an invalid tracking code:
      | cep | 1234567890 |
    When eu informo o CEP na busca de endereço
    Then uma exceção deve ser lançada com a mensagem de erro:
      """
      O CEP informado é invalido
      """
