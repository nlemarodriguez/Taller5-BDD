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

When(/^I fill with (.*) and (.*)$/, (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
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

Then('I expect to not be able to login', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});