const { isPermissionAllowed } = require("cypress-browser-permissions");

describe("accessing pontomais website and login", () => {
  const username = "thayane@jera.com.br";
  const password = "********";

  it("user can login succefully", () => {
    cy.visit("https://app2.pontomais.com.br/registrar-ponto");

    cy.get(
      ":nth-child(1) > pm-form > form.ng-untouched > :nth-child(1) > .row > :nth-child(1) > .ng-untouched > .form-group > .pm-input-content > .pm-input > .inside-icon > .form-control"
    ).type(username);

    cy.get(
      ":nth-child(1) > pm-form > form.ng-dirty > :nth-child(1) > .row > .password-field > .ng-untouched > .form-group > .pm-input-content > .pm-input > .inside-icon > .form-control"
    ).type(password);

    cy.get(
      ":nth-child(4) > :nth-child(1) > .pm-spining-btn > .pm-button"
    ).click();

    cy.log(isPermissionAllowed("geolocation"));
    expect(isPermissionAllowed("geolocation")).to.be.true;

    if (isPermissionAllowed("geolocation")) {
      cy.get(".mt-1 > .pm-button").click();
    }
  });
});
