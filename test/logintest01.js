const { assert } = require("chai");
const { stringify } = require("mocha/lib/utils");
const { Builder, By, Key } = require("selenium-webdriver");

var should = require("chai").should();

// describe block
describe("Check login results entering valid email address & password.", function () {
  //it block
  it("successfully adds an email and a password", async function () {
    //launc the browaser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/login");

    //adds an email adress
    await driver.findElement(By.id("email")).sendKeys("admin@1234.com");
    //adds a password
    await driver.findElement(By.id("password")).sendKeys("admin1234");
    //clicks the buttom
    await driver.findElement(By.className("sc-jrQzAO eHLVvH")).click();
    //finds the title
    const actualTitle = await driver.getTitle();

    actualTitle.should.equal("Offices | Users");

    //close the browser
    await driver.quit();
  });
});
