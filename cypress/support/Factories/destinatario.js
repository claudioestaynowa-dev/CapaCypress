// ESM
import { faker } from '@faker-js/faker';

//userID, username y email son los 3 datos necesarios para registrar un usuario y realizar la compra
export function createDestinatario() {
  return {
    firstName: faker.person.firstName(), // nombre del usuario que se registrado para realizar la compra
    lastName: faker.person.lastName(), // apellido del usuario que se registrado para realizar la compra
    zipCode: faker.location.zipCode() // email del usuario que se registrado para realizar la compra
  };
}