Feature: Opening the help screen

  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    Then I wait for 1 second
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"