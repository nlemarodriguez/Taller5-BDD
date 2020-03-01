Feature: Probar taximetro

    Scenario: como usuario quiero convertir unidades de taximetro sin recargos a pesos
        Given I press "Paraderos"
        #button to remove the splash screen
        When I swipe left
        #to open te menu
        Then I wait for 1 second
        And I press "Taximetro"
        Then I wait for 1 second
        And I press "Puerta-Puerta"
        Then I wait for 1 second
        Given I enter "1000" into input field number 1
        Then I should see "$82.000"

    Scenario: como usuario quiero convertir unidades de taximetro con recargo nocturno y puerta a puerta a pesos
        When I swipe left
        When I swipe left
        #to open te menu
        Then I wait for 1 second
        And I press "Taximetro"
        Then I wait for 1 second
        And I press "Noct./Fest."
        Then I wait for 1 second
        Given I enter "1000" into input field number 1
        Then I should see "$84.700"


    Scenario: como usuario quiero convertir unidades de taximetro sin recargos a pesos
        When I swipe left
        When I swipe left
        #to open te menu
        Then I wait for 1 second
        And I press "Taximetro"
        Then I wait for 1 second
        And I press "Noct./Fest."
        And I press "Terminal"
        Then I wait for 1 second
        Given I enter "1000" into input field number 1
        Then I should see "$85.200"




