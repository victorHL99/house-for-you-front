/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Login Suite Test', () => {
  it('should login a user', () => {
    const user = {
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      profile_image: faker.image.avatar(),
    };

    cy.visit('http://localhost:3000/signup');
    cy.get('[data-cy=name]').type(user.name);
    cy.get('[data-cy=last_name]').type(user.last_name);
    cy.get('[data-cy=email]').type(user.email);
    cy.get('[data-cy=password]').type(user.password);
    cy.get('[data-cy=profile_image]').type(user.profile_image);

    cy.intercept('POST', '/signup').as('signup');
    cy.get('[data-cy=signup_button]').contains('Sign up').click();
    cy.wait('@signup').then(interception => {
      expect(interception.response.statusCode).to.equal(201);
    });

    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=email]').type(user.email);
    cy.get('[data-cy=password]').type(user.password);

    cy.intercept('POST', '/login').as('login');
    cy.get('[data-cy=login_button]').contains('Login').click();
    cy.wait('@login').then(interception => {
      expect(interception.response.statusCode).to.equal(200);
    });

    cy.url().should('equal', 'http://localhost:3000/home');
    cy.contains(`${user.name}`);
  });
});
