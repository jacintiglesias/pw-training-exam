import { test as base, expect } from '@playwright/test'
import { PageManager } from "../pageObjects/pagemanager"
import { PageManagerMobile } from '../pageObjects/pagemanager.mobile'
import { createUser, User } from '../model/user'


export type TestOptions = {
    pageManager: PageManager|PageManagerMobile;
    user: User;
}

export const test = base.extend<TestOptions>({
    pageManager: async ({ page, isMobile }, use) => {
        let pm = new PageManager(page)
         if(isMobile) {
            pm = new PageManagerMobile(page);
        } 
        await use(pm)
    }, 
     user: async ({}, use) => {
    const user = createUser();
        await use(user)
    }
})