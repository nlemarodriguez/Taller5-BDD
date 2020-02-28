Feature: Registro into losestudiantes

    As an user I want to register myself within losestudiantes website in order to rate teachers

    Scenario Outline: Register success

        Given I go to losestudiantes home screen
        When I open the login screen
        And Lo lleno con <nombre> and <apellido> and <email> and <password>
        And I try to register
        Then Espero encontrar registro <success>

        Examples:
            | nombre   | apellido | email                    | password  | success             |
            | elnombre | prueba   | pruebita002@prueba.com | 12345678* | "Registro exitoso!" |