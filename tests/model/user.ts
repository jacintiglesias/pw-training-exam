import { faker } from "@faker-js/faker";

export type User = {

    firstname: string;
    lastname: string;
    email: string;
    password: string;
    website: string;
    checkOption: boolean;

};

export function createUser() : User {
    const user = { 
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        email: '',
        password: faker.internet.password(),
        checkOption: faker.datatype.boolean(),
        website: faker.internet.url()
    }
    user.email = user.firstname + '.' + user.lastname + '@yopmail.com';
    return user;
}
