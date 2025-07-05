import { faker } from "@faker-js/faker";

export type User = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
};

export function createUser() : User {
    const user = { 
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.helpers.replaceSymbols('###-##-####'),
        username: faker.person.firstName()
                    .slice(0, 1)
                    .toLowerCase() + 
                    faker.person.lastName() + 
                    faker.number.int({ min: 1000, max: 9999 }),
        password: faker.internet.password()
    }
    return user;
}

