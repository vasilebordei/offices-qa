const { Builder, By } = require("selenium-webdriver");

var should = require("chai").should();

//it verifies verifies the 'Offices' button
describe("Navigate the site by click-ing the 'Offices'button", function () {
  it("verifies the 'Offices' button", async function () {
    //launch the browaser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");

    await driver.findElement(By.id("offices-button")).click();
    //finds the title
    let actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Offices");
    //close the browser
    await driver.quit();
  });
});
