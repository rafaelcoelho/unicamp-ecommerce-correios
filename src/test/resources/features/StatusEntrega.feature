Feature: Check order status
  As a user of the e-commerce system
  I would like to see an order status from the tracking code
  To know where my product is
  
  Background:
  	Given I am logged on the System
  	And I already bought an item
          
  Scenario Outline: Search for valid order statuses
  	Given The tracking code is <tracking_code>
  	When I request for the delivery status
  	Then I should see the <status> and the <description> of my package 
  
  Examples:
    | tracking_code   | status | description 										   |
    | "SQ458226057BR" | "01"   | "Objeto entregue ao destinatario" |
    | "SQ458226058BR" | "09"   | "Objeto saiu para entrega"        |
    | "SQ458226059BR" | "03"   | "Objeto nao localizado"           |

  Scenario: Search order by an invalid tracking code
  	Given I would like to see where my product is located at
  		But my Tracking Code is not valid
      """
      AB99999999BR
      """  		
    When I request for the delivery status
    Then I can see the message
      """
      Codigo de rastreio invalido
      """
 
	Scenario: Search for status while Correios is not responding
  	Given I have any valid tracking code
  		But the endpoint is down
    When I request for the delivery status
    Then I can see an exception trhown
       