import { Locator, Page } from "playwright";

export class LoggedInHomeComponent {
    readonly logOutLink: Locator;


    constructor(page: Page) {
        this.logOutLink = page.locator('a[href="logout.htm"]');
        
    }   

    async logOut(){
        await this.logOutLink.click();
    };

    
}