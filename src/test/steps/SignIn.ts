import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";


// setDefaultTimeout(60 * 1000 * 2);

Given('user navigates to Helix UAT application', async function () {
  
   await pageFixture.page.goto(process.env.BASEURL!);
   pageFixture.logger.info("Navigated to the application")
  });


       
Given('User enters username as {string}', async function (username) {
   await pageFixture.page.locator("//input[@id='okta-signin-username']").fill(username);
});
       
       
Given('User enters password as {string}', async function (password) {
   await pageFixture.page.waitForTimeout(3000);
   await pageFixture.page.locator("//input[@id='okta-signin-password']").fill(password);
});
       

       
When('user clicks on Sign In button', async function () {
   await pageFixture.page.locator("//input[@id='okta-signin-submit']").click();  
   
});
       
 
       
Then('Sign in should be successful', async function () {
   const text = await pageFixture.page.locator("//*[contains(text(), 'shital.bhandirge@tifinsage.ai')]").textContent();
   console.log("Username: "+ text);  
   pageFixture.logger.info("Sign in is successful for valid username and password")
   
}); 

 When('Sign in should be failed', async function () {
    const failureMessage = pageFixture.page.locator("//div[@role='alert']")
    await expect(failureMessage).toBeVisible();
    pageFixture.logger.info("Sign in is failed for invalid username and password")
    
 });


