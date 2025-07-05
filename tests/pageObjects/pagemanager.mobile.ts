import { Page } from "playwright";
import { PageManager } from "./pagemanager";
import { NavigationMobile } from "./navigation.mobile";

export class PageManagerMobile extends PageManager {

    protected override readonly navigation: NavigationMobile;

    constructor(page: Page) {
        super(page);
        this.navigation = new NavigationMobile(page);
    }

}