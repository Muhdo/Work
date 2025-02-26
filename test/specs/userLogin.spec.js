const { expect, browser } = require("@wdio/globals");
const userloginPage = require("../pageobjects/userLogin.page");
require('dotenv').config();

describe("User Login Validation", () => {
  const stagingPhoneNumber = process.env.stagingNumber;
  const productionNumber = process.env.prodNumber;
  console.log(stagingPhoneNumber);
  it("User Login Test", async () => {
  
    await userloginPage.clickCookiesBtn();
    await userloginPage.clickCancelSign();
    await browser.pause(5000);
    await userloginPage.clickSigninBtn();
    await userloginPage.enterMobileNumber(stagingPhoneNumber);
    await userloginPage.clickOtpIcon();
    await browser.pause(2000);
    await userloginPage.enterOtpNumber();
    await browser.pause(3000);
    await userloginPage.checkLoginMessage();
  });
});
