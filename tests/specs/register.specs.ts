import { User } from "../model/user";
import { test } from "../fixtures/fixture";
import { expect } from "playwright/test";

let staticUser: User;

test.beforeAll(async ({ user }) => {
    staticUser = user;
});

test.beforeEach(async ({ pageManager }) => {
    
    await pageManager.onNavigation().goto();
    await pageManager.onNavigation().navigateToRegister();

});

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
});

test.only('Register form', async ({ pageManager, user }) => {
    await pageManager.onRegisterComponent().fillForm(user);
    await expect(pageManager.onHomeComponent().lightOnDiv).toBeVisible()
});

