Feature: Business rules
  retail portal to purchase the Items

  Background:
    Given launch the application
    
  @scenario  
  Scenario: purchase items
     Then I enter the "username" field name and "standard_user" value
     Then I enter the "password" field name and "secret_sauce" value
     Then I click the "login-button" button
     Then I click add items to cart
          | Items |
          | backpack |
          | bike-light |
          | bolt-t-shirt |
     Then I click on add to cart
     Then I click the "checkout" button
     Then I enter the "firstName" field name and "vinay" value
     Then I enter the "lastName" field name and "kumar" value
     Then I enter the "postalCode" field name and "500049" value
     Then I click the "continue" button
     Then I click the "finish" button
     Then I click the "back-to-products" button
     Then I logout from application

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

     
  