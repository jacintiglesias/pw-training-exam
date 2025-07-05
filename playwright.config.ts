import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  workers: 1,
  reporter: [['html', { open: 'always' }]],
 
  use: {
    ...devices['Desktop Chrome'],
    headless: false,
    //viewport: { width: 1280, height: 720 },
  },
 
  projects: [
    {
      name: 'web',
      timeout: 10000,
      use: { 
        ...devices['Desktop Chrome'],
        isMobile: false,
      },
    },
    {
      name: 'mobile',
      //testMatch: './tests/example.spec.ts',
      use: {
        ...devices['iPhone 15 Pro'],
        headless: false,
        isMobile: true,
        //viewport: { width: 720, height: 1000 }
      },
    }
  ],
 
});