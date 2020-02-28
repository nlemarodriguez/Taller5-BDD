var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
var { expect } = require('chai');

Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if ($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

When('I open the login screen', () => {
    $('button=Ingresar').waitForExist(5000);
    $('button=Ingresar').waitForDisplayed(5000);
    $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('wrongemail@example.com');

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('123467891');
});

When('I try to login', () => {
    var cajaLogIn = $('.cajaLogIn');
    cajaLogIn.$('button=Ingresar').click();
});

When('I try to register', () => {
    var cajaSignUp = $('.cajaSignUp');
    cajaSignUp.$('button=Registrarse').click();
});

When(/^I fill with (.*) and (.*)$/, (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    cajaLogIn.$('input[name="correo"]').waitForExist(5000);
    cajaLogIn.$('input[name="correo"]').waitForDisplayed(5000);
    var mailInput = cajaLogIn.$('input[name="correo"]');
    browser.waitUntil(() => mailInput.isClickable());
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

When(/^Lo lleno con (.*) and (.*) and (.*) and (.*)$/, (nombre_persona, apellido_persona, email_persona, password_persona) => {
    var cajaSignUp = $('.cajaSignUp');

    cajaSignUp.$('input[name="nombre"]').waitForExist(5000);
    cajaSignUp.$('input[name="nombre"]').waitForDisplayed(5000);

    var nombre = cajaSignUp.$('input[name="nombre"]');
   
    nombre.click();
    nombre.setValue(nombre_persona);

    var apellido = cajaSignUp.$('input[name="apellido"]');
    apellido.click();
    apellido.setValue(apellido_persona);

    var email = cajaSignUp.$('input[name="correo"]');
    email.click();
    email.setValue(email_persona);

    var select_programa = cajaSignUp.$('select[name="idPrograma"]');
    var option = select_programa.$('option[value="89"]')
    option.click();

    var passwordInput = cajaSignUp.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue(password_persona);

    var aceptar_terminos = cajaSignUp.$('input[name="acepta"]');
    aceptar_terminos.click();
});

Then('I expect to see {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});


Then('Espero encontrar {string}', h1 => {
    $('h1').waitForExist(5000);
    var h1_content = browser.$('h1').getText();
    expect(h1_content).to.include(h1);
});

Then('Espero encontrar registro {string}', h2 => {
    $('h2').waitForExist(5000);
    var h2_content = browser.$('h2').getText();
    expect(h2_content).to.include(h2);
});

Then('I expect to not be able to login', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

