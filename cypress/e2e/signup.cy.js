/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Signup Suite Test', () => {
  it('should signup a new user', () => {
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
    cy.contains('Sign Up').click();
    cy.wait('@signup').then(interception => {
      expect(interception.response.statusCode).to.equal(201);
    });

    cy.url().should('equal', 'http://localhost:3000/');
  });
});
