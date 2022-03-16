const { Builder, By } = require("selenium-webdriver");

var should = require("chai").should();

describe("Navigate the site by click-ing the 'Users'button", function () {
  //it verifies verifies the 'Users' building
  it("verifies the 'Users' button", async function () {
    //launch the browaser
    let driver = await new Builder().forBrowser("firefox").build();
    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");
    await driver.findElement(By.id("users-button")).click();
    //finds the title
    let actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Users");
    //close the browser
    await driver.quit();
  });
});
