const { Builder, By, Key } = require("selenium-webdriver");

var should = require("chai").should();

// describe block
describe("Check the add user page functionality.", function () {
  //it block
  it("successfully adds a new user", async function () {
    //launc the browaser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("http://offices-frontend.herokuapp.com/users");

    await driver.findElement(By.id("add-button")).click();
    //finds the title
    let actualTitle = await driver.getTitle();
    //assertion
    actualTitle.should.equal("Offices | Add New User");
    //adds the first name of the new user we want to create
    await driver.findElement(By.id("first-name")).sendKeys("Ion");
    //adds the last name of the new user we want to create
    await driver.findElement(By.id("last-name")).sendKeys("Creanga");
    // adds the emali address
    await driver.findElement(By.id("email")).sendKeys("email@offices.com");
    // adds the password
    await driver.findElement(By.id("password")).sendKeys("password");
    // adds the gender
    await driver.findElement(By.id("gender")).sendKeys("Male");
    // adds the nationality
    await driver.findElement(By.id("nationality")).sendKeys("Romanian");
    // adds the Building name
    // await driver.findElement(By.id("building")).sendKeys("B1");
    // adds the Office name
    await driver.findElement(By.id("office")).sendKeys("JSD");
    // adds the Role
    await driver.findElement(By.id("role")).sendKeys("Sefu' la bani");
    // adds the birth date
    await driver
      .findElement(
        By.xpath("/html/body/div/div/div[2]/div[2]/div/div[5]/div[1]/input")
      )
      .sendKeys("02152002");
    // picks up the work model
    await driver.findElement(By.id("physical-button")).click();
    // creates the user by hitting save
    await driver.findElement(By.id("save-button")).click();
    //obtains the title of the page the admin is landing to after he adds a user
    let newTitle = await driver.getTitle();
    //condition to be met
    newTitle.should.equal("Offices | Users");
    //close the browser
    await driver.quit();
  });
});
