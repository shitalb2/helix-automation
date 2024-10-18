import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";


setDefaultTimeout(60 * 1000 * 2);

Given('user navigates to Helix UAT application', async function () {
  
   await pageFixture.page.goto(process.env.BASEURL!);
  });


       
Given('User enter username as {string}', async function (username) {
   await pageFixture.page.locator("//input[@id='okta-signin-username']").fill(username);
});
       
       
Given('User enter password as {string}', async function (password) {
   await pageFixture.page.locator("//input[@id='okta-signin-password']").fill(password);
});
       

       
When('user clicks on Sign In button', async function () {
   await pageFixture.page.locator("//input[@id='okta-signin-submit']").click();  
});
       
 
       
Then('Sign in should be successful', async function () {
   const text = await pageFixture.page.locator("//*[contains(text(), 'shital.bhandirge@tifinsage.ai')]").textContent();
   console.log("Username: "+ text);  
   
}); 

When('Sign in should failed', async function () {
    const failureMessage = pageFixture.page.locator("//div[@role='alert']")
    await expect(failureMessage).toBeVisible();
    
});


