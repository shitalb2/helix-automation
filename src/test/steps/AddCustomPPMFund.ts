
import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

Then('user clicks on My Funds tab', async function () {
    await pageFixture.page.locator("//*[contains(text(), 'My Funds')]").click();
  });



Then('user clicks on Add New Fund button', async function () {
    await pageFixture.page.locator("//*[contains(text(), 'Add New Fund')]").click();
  });


Then('user enters Fund Name as {string}', async function (fundname) {
   await pageFixture.page.locator("//input[@placeholder='Fund Name']").fill(fundname);
  });


When('user upload PPM', async function () {
    await pageFixture.page.locator("//input[@type='file']").setInputFiles("/Users/user/Downloads/File/DLP Building Communities Fund - PPM 2024.01.pdf")      
         });
       
 
When('clicks on Continue button', async function () {
    await pageFixture.page.waitForTimeout(10000);
    await pageFixture.page.locator("//*[contains(text(), 'Continue')]").click();
         });
       
 
       
When('then clicks on Finish button', async function () {
    await pageFixture.page.waitForTimeout(5000);
    await pageFixture.page.locator("//*[contains(text(), 'Finish')]").click();
         });


Then('new custom fund is created with PPM', async function () {
   
  });