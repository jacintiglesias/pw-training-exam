import { Locator, Page } from "playwright";
import { User } from "../../model/user";

export class HomeComponent {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly logInLink: Locator;


    constructor(page: Page) {
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.logInLink = page.locator('input[value="Log In"]');
        
    }   

    async logIn(user: User){
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.logInLink.click();
    };

    
}