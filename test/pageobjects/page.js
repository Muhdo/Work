const { browser } = require("@wdio/globals");

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    // https://play.mtn.ng/
    // https://playpreprod.mtn.ng/
    // return browser.url(`https://play.mtn.ng/`);
    return browser.url(`https://playpreprod.mtn.ng/`);
  }
  async scrollToElement(element, offset = 100) {
    await browser.execute(
      (el, offset) => {
        const rect = el.getBoundingClientRect();
        const scrollTop = rect.top + window.scrollY - offset;
        window.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      },
      element,
      offset
    );
  }
};
