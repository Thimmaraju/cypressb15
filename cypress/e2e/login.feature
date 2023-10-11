Feature: Verify Login functionality
 This feature is to verify Positive and Negative tests for Login


Background: Launch App
  Given User Launch the Application

Scenario: Verify Login with Valid creds
  When  User Enter username as "Admin"
  And   User Enter password as "admin123"
  And   User clicks on the login button
  Then  User should be navigated to Dashboard Page 
  
 
Scenario: Verify login with valid username and Invalid Password
  When  User Enter username as "Admin"
  And   User Enter password as "erkhiuhr"
  And   User clicks on the login button
  Then  User should get error Message 
  
Scenario: Verify login with invalid username and valid Password
  When  User Enter username as "Admrhuifhrin"
  And   User Enter password as "admin123"
  And   User clicks on the login button
  Then  User should get error Message 

Scenario: Verify login with invalid username and invalid password
  When  User Enter username as "rfke"
  And   User Enter password as "riehru"
  And   User clicks on the login button
  Then  User should get error Message 