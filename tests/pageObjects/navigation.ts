import { Locator, Page } from "playwright";

export class Navigation {

    readonly page: Page;
    readonly formsMenu: Locator;
    readonly formLayoutsMenu: Locator;
    readonly formDatepickerMenu: Locator;
    readonly formModalMenu: Locator;
    readonly formDialogMenu: Locator;
    readonly authMenu: Locator;
    readonly registerMenu: Locator;
    readonly formModalsOverlays: Locator;
    readonly window: Locator;
    readonly toastrMenu: Locator;

    

    constructor(page: Page) {
        this.page = page;
        this.formsMenu = page.locator('[title="Forms"]');
        this.formLayoutsMenu = page.locator('[title="Form Layouts"]');
        this.formDatepickerMenu = page.locator('[title="Datepicker"]');
        this.formModalMenu = page.locator('[title="Modal & Overlays"]');
        this.formDialogMenu = page.locator('[title="Dialog"]');
        this.authMenu = page.locator('[title="Auth"]');
        this.registerMenu = page.locator('[title="Register"]');
        this.formModalsOverlays = page.locator('[title="Modal & Overlays"]');
        this.window = page.locator('[title="Window"]');
        this.toastrMenu = page.locator('[title="Toastr"]');
    }
    
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/', { timeout: 60000 });
        await this.page.waitForLoadState('load');
        
    }

    async navigateToFormLayouts() {
        await this.page.waitForLoadState('load');
        await this.formsMenu.click();
        await this.formLayoutsMenu.click();    
    }

    async navigateToDatepicker() {
        await this.page.waitForLoadState('load');
        await this.formsMenu.click();
        await this.formDatepickerMenu.click();
    }

    async navigateToFormDialog() {
        await this.formModalMenu.click();
        await this.formDialogMenu.click();
    }       

    async navigateToRegister() {
        await this.page.waitForLoadState('load');
        await this.authMenu.click();
        await this.registerMenu.click();
    }
    
    async navigateToModalsOverlays() {
        await this.page.waitForLoadState('load');
        await this.formModalsOverlays.click();
        await this.window.click();
       
    }
    async navigateTotoastr() {
        await this.page.waitForLoadState('load');
        await this.formModalMenu.click();
        await this.toastrMenu.click();
    }
}

