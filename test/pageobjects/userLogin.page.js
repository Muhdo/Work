const { $ } = require("@wdio/globals");
const Page = require("./page");

class UserLoginPage extends Page {
  get cookiesBtn() {
    return $("#cookiesConsentAll");
  }
  get cancelSign() {
    // return $("//div[@class='banner-close1 btn-ib-close']");
    return $("//div[@class ='banner-close1 btn-ib-close']");
    // return $("//img[@alt='interstitial-close-image']");
    // return $("/themes/custom/selfservice/images/feedback-cancel.svg");
    // return $("#interstitial-desktop-modal > div.banner-close1.btn-ib-close > img");
    // return $("//button[normalize-space()='Subscribe now']");
  }
  get signinBtn() {
    return $("//p[normalize-space()='Sign in']");
  }
  get mobileNumber() {
    return $("#txtEmailMobile3");
  }
  get otpIcon() {
    return $("#enterOtpIcon");
  }
  get otpNumber() {
    return $("#OTPInput");
  }
  get loginMessage() {
    return $('(//a[@href="https://play.mtn.ng/"])[1]');
  }

  async clickCookiesBtn() {
    await this.cookiesBtn.click();
  }
  async clickCancelSign() {
    // await this.cancelSign.waitForDisplayed({
    //   timeout: 10000,
    //   timeoutMsg: "element is not clickable",
    // });
    await this.cancelSign.click();
  }
  async clickSigninBtn() {
    await this.signinBtn.click();
  }
  async enterMobileNumber(mobilenumber) {
    await this.mobileNumber.setValue(mobilenumber);
  }
  async clickOtpIcon() {
    await this.otpIcon.click();
  }
  async enterOtpNumber(otp) {
    await browser.pause(60000);
    // await this.otpNumber.setValue(otp);
  }
  async checkLoginMessage() {
    await this.loginMessage.isDisplayed();
  }
}

module.exports = new UserLoginPage();
