// Learning Objective:
// Understand how to efficiently select and interact with elements on a web page using different locator
// strategies ( CSS)
// Assignment Details:
// Create a test script that navigates to a CRM application, logs in, finds a specific lead by name or
// ID, edits details of the lead (such as name, email, or status), and verifies that the changes have
// been successfully saved.

import { test } from "@playwright/test";

test("Login to the portal", async({page})=>{

    //01.Navigate to the url http://leaftaps.com/opentaps/control/main

    await page.goto("http://leaftaps.com/opentaps/control/main")

    // 2. Enter the username as ‘Demosalesmanager’

    await page.locator("input[id='username']").fill('Demosalesmanager')


    // 3. Enter the password as ‘crmsfa’

    await page.locator("input[id='password']").fill('crmsfa')


    // 4. Click the Login button

    await page.locator("input[type='submit']").click()

    //   5. Click CRM/SFA

    
    const crmLink = page.locator('//a[contains(text(),"CRM")]');

    await crmLink.waitFor();
    await crmLink.click();


    // 6. Click Leads
    
    // await page.waitForLoadState("domcontentloaded");
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
//    
    // 7. Click Create Lead
    // await page.waitForLoadState("domcontentloaded");
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    // 8. Fill the Company Name
    await page.locator("input[id='createLeadForm_companyName']").fill('NeoTech')

    // 9. Fill the First Name
     await page.locator("input[id='createLeadForm_firstName']").fill('Jane')

    // 10. Fill the Last Name
     await page.locator("input[id='createLeadForm_lastName']").fill('Doe')

    // 11. Fill the Salutation
     await page.locator("input[id='createLeadForm_personalTitle']").fill('Ms')

    // 12. Fill the Title
     await page.locator("input[id='createLeadForm_generalProfTitle']").fill('Engineer')

    // 13. Fill the Annual Revenue
     await page.locator("input[id='createLeadForm_annualRevenue']").fill('5000000')

    // 14. Fill the Department
     await page.locator("input[id='createLeadForm_departmentName']").fill('IT')

    // 15. Fill the Phone number
     await page.locator("input[id='createLeadForm_primaryPhoneNumber']").fill('081234')

    // 16. Click Create Lead button
    await page.locator("input[class='smallSubmit']").first().click()

    // 17. Get the page title
    await page.waitForTimeout(3000)
    
    const title = await page.title();
    console.log("Page Title:", title);

})

