import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/SignIn.test.ts"],
  timeout: 70 * 1000,
   expect: {
    timeout: 10 * 1000,
  },
  use: {
   // baseURL: "https://uat.helixbyhl.com/login/",
    // headless: false,
   // screenshot: "on",
   // video: "retain-on-failure",
   // actionTimeout: 0,
    //navigationTimeout: 50000
    
    
  },
  retries: 0,
  reporter: [["html"], 
  ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }]]
};

export default config;
