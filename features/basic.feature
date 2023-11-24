Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Background:
    Given launch the application
    
  Scenario: purchase items
     When enter username "standard_user" and password "secret_sauce" and click login button
     Then add items to cart
     Then click on add to cart
     Then click on checkout
     Then enter checkout information "vinay" firstname and "kumar" lastname and "500049" postalCode
     Then finish the order
     Then goto home page
     Then logout from application


   Scenario Outline: verify error message when login credentials are invalid
      When I enter the "<username>" username
      Then I enter the "<password>" password
      Then I click the login button
      Then Verify the expected "<result>" result
    Examples:
      | username | password     | result |
      | locked_out_user  | secret_sauce | Epic sadface: Sorry, this user has been locked out.|
      | test_out_user  | secret_sauce | Epic sadface: Username and password do not match any user in this service|

     
  