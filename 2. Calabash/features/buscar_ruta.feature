Feature: Buscando ruta

    Scenario: como usuario quiero buscar todas las rutas
        Given I press "Paraderos"
        #button to remove the splash screen
        Given I press "Rutas"
        Given I press "Rutas"
        Then I should see "Portal El Dorado"

    Scenario: como usuario quiero buscar un recorrido
        #button to remove the splash screen
        Given I press "Viajar en Transmi, SITP o Taxi"
        Given I press "Transmilenio"
        Given I press "Transmilenio"
        Given I press "Transmilenio"
        Given I press "Punto de destino"
        #Then I enter "museo" into the "Punto de destino" input field
        #Given I enter "museo" as "Busca paradero de destino"
        Given I enter "museo" into input field number 1
        Given I press "Museo del Oro"
        Then I should see "Museo del Oro"

    Scenario: como usuario quiero buscar un paradero
        #button to remove the splash screen
        Given I press "Paraderos"
        Given I press "AC 100"
        Given I press "107B"
        Then I should see "Central Bavar"



