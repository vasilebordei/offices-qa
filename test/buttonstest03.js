const { Builder, By } = require("selenium-webdriver");

var should = require("chai").should();

describe("Navigate the site by click-ing the 'Requests'button", function () {
  //it verifies verifies the 'Requests' building
  it("verifies the 'Requests' button", async function () {
    //launch the browaser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");
    await driver.findElement(By.id("requests-button")).click();
    //finds the title
    let actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Requests");
    //close the browser
    await driver.quit();
  });
});
