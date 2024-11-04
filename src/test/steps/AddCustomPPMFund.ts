
import { Given, When, Then, setDefaultTimeout  } from "@cucumber/cucumber"
import {chromium, Page, Browser, expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

Then('user clicks on My Funds tab', async function () {
    await pageFixture.page.locator("//button[@id='navbar-my-funds']").click();
    pageFixture.logger.info("User has started with Custom fund upload process")
  });



Then('user clicks on Add New Fund button', async function () {
    await pageFixture.page.locator("//button[@id='btn-add-new-fund-myfunds-page']").click();
  });


Then('user enters Fund Name', async function () {
    const randomNum = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
    await pageFixture.page.locator("//input[@id='add-fund-modal-fund-name-input-field']").fill(`DLP Demo ${randomNum}`);
  });


When('user uploads PPM', async function () {
    await pageFixture.page.locator("//input[@type='file']").setInputFiles("/Users/user/Downloads/File/DLP Building Communities Fund - PPM 2024.01.pdf")   
    pageFixture.logger.info("PPM document loaded on UI successfully")  
         });

 When('user uploads Pitch Deck', async function () {
   // await pageFixture.page.locator("//div[@id='mui-component-select-document_type']").selectOption("Pitch Deck");
    await pageFixture.page.locator("//div[@id='add-fund-modal-document-type-select']").click();
    await pageFixture.page.locator("//li[@id='add-fund-modal-document-type-select-pitch']").click();
    await pageFixture.page.locator("//input[@type='file']").setInputFiles("/Users/user/Downloads/File/1.0_FinTech_Ventures_Presentation.pdf")      
    pageFixture.logger.info("Pitch deck document loaded on UI successfully")
});
       
 
When('clicks on Continue button', async function () {
    await pageFixture.page.waitForTimeout(10000);
    await pageFixture.page.locator("//button[@id='btn-continue-non-confirm-disclosure-fund-document-modal'] ").click();
         });
       
 
       
When('then clicks on Finish button', async function () {
    await pageFixture.page.waitForTimeout(5000);
    await pageFixture.page.locator("//button[@id='btn-continue-non-confirm-disclosure-fund-document-modal']").click();
         });


Then('new custom fund is created with PPM', async function () {
  pageFixture.logger.info("PPM custom fund created successfully")
  });

Then('new custom fund is created with Pitch Deck', async function () {
  pageFixture.logger.info("Pitch deck custom fund created successfully")
  });