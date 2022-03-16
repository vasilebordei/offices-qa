const { Builder, By } = require("selenium-webdriver");

var should = require("chai").should();

//verifies the 'logout' button

describe("Navigate the site by click-ing the 'Logout' button", function () {
  it("verifies the 'Logout' button", async function () {
    //launch the browaser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");
    await driver.findElement(By.id("logout-button")).click();
    //finds the title
    let actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Login");
    //close the browser
    await driver.quit();
  });
});
