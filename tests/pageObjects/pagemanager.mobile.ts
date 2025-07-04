import { Page } from "playwright";
import { PageManager } from "./pagemanager";
import { NavigationMobile } from "./navigation.mobile";
import { BlockFormComponentMobile } from "./components/blockForm.component.mobile";

export class PageManagerMobile extends PageManager {

    protected override readonly navigation: NavigationMobile;
    protected override readonly blockFormComponent: BlockFormComponentMobile;

    constructor(page: Page) {
        super(page);
        this.navigation = new NavigationMobile(page);
        this.blockFormComponent = new BlockFormComponentMobile(page);
    }

}