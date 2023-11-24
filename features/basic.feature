Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Background:
    Given launch the application
    
  @scenario  
  Scenario: purchase items
     Then I enter the "username" field name and "standard_user" value
     Then I enter the "password" field name and "secret_sauce" value
     Then I click the login "login-button" button
     Then add items to cart
          | name |
          | backpack |
          | bike-light |
          | bolt-t-shirt |
     Then click on add to cart
     Then click on checkout
     Then enter checkout information "vinay" firstname and "kumar" lastname and "500049" postalCode
     Then finish the order
     Then goto home page
     Then logout from application

   @tablescenario
   Scenario Outline: verify error message when login with invalid credentials 
      Then I enter the "username" field name and "<username>" value
      Then I enter the "password" field name and "<password>" value
      Then I click the login "login-button" button
      Then Verify the expected "<result>" result and "error" element name
    Examples:
      | username | password     | result |
      | locked_out_user  | secret_sauce | Epic sadface: Sorry, this user has been locked out.|
      | test_out_user  | secret_sauce | Epic sadface: Username and password do not match any user in this service|

     
  