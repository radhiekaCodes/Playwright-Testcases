// Red Bus and Flipkart in Edge and Firefox Browser Instances (Week2.Day2)

// Assignment Details:
// Task:
// Your task is to launch two separate browser instances using Playwright:
// 1. Load Red Bus in an Edge browser instance and verify the page title and URL.
// 2. Load Flipkart in a Firefox browser instance and verify the page title and URL.

import {test ,expect ,chromium,firefox } from "@playwright/test";


test("Launch RedBus in Edge and verify title and URL", async () => {

  const edgeBrowser = await chromium.launch({
    channel: "msedge",
    headless: false
  });

  const edgeContext = await edgeBrowser.newContext();
  const edgePage = await edgeContext.newPage();

  await edgePage.goto("https://www.redbus.in");

  const title = await edgePage.title();
  const url = edgePage.url();

  console.log("RedBus Title:", title);
  console.log("RedBus URL:", url);

  await edgeBrowser.close();
});


test("Launch Flipkart in Firefox and verify title and URL", async () => {

  const firefoxBrowser = await firefox.launch({
    headless: false
  });

  const firefoxContext = await firefoxBrowser.newContext();
  const firefoxPage = await firefoxContext.newPage();

  await firefoxPage.goto("https://www.flipkart.com");

  const title = await firefoxPage.title();
  const url = firefoxPage.url();

  console.log("Flipkart Title:", title);
  console.log("Flipkart URL:", url);

  await firefoxBrowser.close();
});