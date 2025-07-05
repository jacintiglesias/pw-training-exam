import { Locator, Page } from "playwright";
import { expect } from "@playwright/test";
import { User } from "../../model/user";

export class RegisterFormComponent {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly ssnInput: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registerButton: Locator;



    constructor(page: Page) {
        this.firstNameInput = page.locator('[id="customer.firstName"]');
        this.lastNameInput = page.locator('[id="customer.lastName"]');
        this.addressInput = page.locator('[id="customer.address.street"]');
        this.cityInput = page.locator('[id="customer.address.city"]');
        this.stateInput = page.locator('[id="customer.address.state"]');
        this.zipCodeInput = page.locator('[id="customer.address.zipCode"]');
        this.phoneNumberInput = page.locator('[id="customer.phoneNumber"]');
        this.ssnInput = page.locator('[id="customer.ssn"]');
        this.usernameInput = page.locator('[id="customer.username"]');
        this.passwordInput = page.locator('[id="customer.password"]');
        this.confirmPasswordInput = page.locator('[id="repeatedPassword"]');
        this.registerButton = page.locator('[value="Register"]');
    }   

    async register(user: User, page: Page) {
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateInput.fill(user.state);
        await this.zipCodeInput.fill(user.zipCode);
        await this.phoneNumberInput.fill(user.phone);
        await this.ssnInput.fill(user.ssn);
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.confirmPasswordInput.fill(user.password);
        let response;
        await Promise.all([
            response = page.waitForResponse("https://parabank.parasoft.com/parabank/register.htm"),
            this.registerButton.click(),
        ]);
        expect(response.status()).toBe(200);
    };

    
}