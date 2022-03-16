const { Builder, By } = require("selenium-webdriver");

var should = require("chai").should();

// describe block
describe("Navigate the page by click-ing on the button menu.", function () {
  //it verifies 'Buildings' button functionality
  it("verifies the 'Buildings' button ", async function () {
    //launch the browaser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");

    //clicks the button
    await driver.findElement(By.id("buildings-button")).click();

    //finds the title
    let actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Buildings");
    //close the browser
    await driver.quit();
  });
});
