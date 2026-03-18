// Learning Objective:
// Learn the use of assertions in Playwright to verify the functionality and selections within select dropdown components on web applications.

// Develop a Playwright script that interacts with 
// and verifies the behavior of dropdowns. The script should handle tasks like validating the options available, 
// checking correct selections,
//  and asserting dynamic content loading based on selections.


import { test } from "@playwright/test";

test("To check selection of Dropdowns",async ({page})=>{

//1. Navigate to https://leafground.com/select.xhtml

await page.goto("https://leafground.com/select.xhtml")

// 2. Select your favorite UI automation tool using the different select options  

await page.selectOption(`//select[@class='ui-selectonemenu']`, {value:"Playwright"})

// 3. Get the count and print of all the values

const UIAutomationDDValues = page.locator(`(//select[@class='ui-selectonemenu']/option)`)

const UIAutomationDD_count = await  UIAutomationDDValues.count();
   
 console.log(`Count of items in favorite UI Automation tool dropdown is ${UIAutomationDD_count}`)

    for (let index = 0; index < UIAutomationDD_count; index++) {
        console.log(await UIAutomationDDValues.nth(index).innerText());
    }

// 4. Choose your preferred Country
await page.locator(`//h5[contains(text(),"country")]/following::div[contains(@class,"ui-selectonemenu")][1]`).click();
await page.locator('li[data-label="India"]').click();

// 5. Confirm Cities belongs to Country is loaded 
//h5[contains(text(),"Cities")]/following::div[contains(@class,"ui-selectonemenu")][1]
await page.locator(`//h5[contains(text(),"Cities")]/following::div[contains(@class,"ui-selectonemenu")][1]`).click();
await page.locator('li[data-label="Bengaluru"]').click();
// 6. Choose any three courses from the dropdown 
await page.locator(`//h5[contains(text(),"Course")]/following::div[contains(@class,"ui-selectonemenu")][1]`).click();
await page.locator('li[data-label="Playwright"]').click();
// 7. Choose a language and print all the values from the dropdown. 
await page.locator(`//h5[contains(text(),"language")]/following::div[contains(@class,"ui-selectonemenu")][1]`).click();
await page.locator('li[data-label="English"]').click();
// 8. Select 'Two' irrespective of the language chosen
await page.locator(`//h5[contains(text(),"irrespective")]/following::div[contains(@class,"ui-selectonemenu")][1]`).click();
await page.locator('li[data-label="Two"]').click();

})