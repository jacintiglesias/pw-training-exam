import { User } from "../model/user";
import { test } from "../fixtures/fixture";
import { expect } from "playwright/test";

let staticUser: User;

test.beforeAll(async ({ user }) => {
    staticUser = user;
});

test.beforeEach(async ({ pageManager }) => {
    await pageManager.onNavigation().goto();
    await pageManager.onNavigation().gotoRegister();

});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
});

test('Register form', async ({ pageManager, page }) => {
    await pageManager.onRegisterComponent().fillForm(staticUser);
    await pageManager.onLoggedInHomeComponent().logOut();
    await pageManager.onHomeComponent().logIn(staticUser);
    await expect(pageManager.onLoggedInHomeComponent().logOutLink).toBeVisible();
    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");

});

