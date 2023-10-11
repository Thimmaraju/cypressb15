Feature: Verify add employee functionality

  This feature will verify add employee tests

  Scenario Outline: Verify add employee with valid details

    Given User Launch the Application
    When  User Enter username as "Admin"
    And   User Enter password as "admin123"
    And   User clicks on the login button
    Then  User should be navigated to Dashboard Page
    And   User clicks on PIM Module
    And   User clicks on Add employee sub menu item
    And   User Enter firstname as "<firstname>"
    And   User Enter lastname as "<lastname>"
    And   User clicks on the save button
    Then  User should get message successfully Saved

    Examples:
      | firstname  | lastname |
      | Basavaraju | A        |
      | Praveen    | Kumar    |
      | MA         | Saleem   |
      | Ranjitha   | M        |


# Scenario Outline: Scenario Outline name

# Examples:
#     | Header 1 | Header 2 | Header 3 |
#     | Value 1  | Value 2  | Value 3  |