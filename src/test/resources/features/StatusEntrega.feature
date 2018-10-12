Feature: Check order status
  As a user of the e-commerce system
  I would like to see an order status from the tracking code
  To know where my products are
  
  Background:
  	Given I am logged on System
  	And I did one shop

  Scenario Outline: Query for a valid tracking code
    And a valid tracking code
    When I set a tracking code <tracking_code> in the status query
    Then the status result is:
   
		Examples:
   		|	tracking_code		|	status	|	message	|
      | 'SQ458226057BR' |		|		|
      |	'RA132678652BR'	|		|		|

  Scenario Outline: Query an non-existent tracking code
    And a tracking code:
    When I enter the code <track_code> in the status query
    Then there may be an error value of "true" with the <message>
    
    Examples:
    | track_code 			|	status	|	message	| 
    |	'AB99999999BR' 	| 9				|		|

  Scenario: Query for a invalid tracking code
    And an invalid tracking code:
      | cep | 1234567890000 |
    When eu informo o CEP na busca de endereço
    Then uma exceção deve ser lançada com a mensagem de erro:
      """
      O CEP informado é invalido
      """
   
