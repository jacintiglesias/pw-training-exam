import { Locator, Page } from "playwright";
import { Navigation } from "./navigation";

export class NavigationMobile extends Navigation {


    constructor(page: Page) {
        super(page);
    }
    
    override async goto() {
        await this.page.goto('https://parabank.parasoft.com/', { waitUntil: "networkidle" });
    }

}