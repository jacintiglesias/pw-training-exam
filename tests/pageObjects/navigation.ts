import { Locator, Page } from "playwright";

export class Navigation {

    readonly page: Page;

    

    constructor(page: Page) {
        this.page = page;
    }
    
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/', { timeout: 60000 });
        await this.page.waitForLoadState('load');
        
    }

    async gotoRegister() {
        const registerLink: Locator = this.page.getByRole('link', { name: 'Register' });
        await registerLink.click();
        await this.page.waitForLoadState('load');
    }
    
}

