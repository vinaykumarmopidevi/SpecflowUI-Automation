const { I } = inject();
const { productsPage } = inject();
const { DataTableArgument } = require('codeceptjs');

Given(/^launch the application$/, () => {
  I.amOnPage("/")
});

Then(/^I enter the "([^"]*)" field name and "([^"]*)" value$/, (elementName,data) => {
  productsPage.inputFiled(elementName,data)
  
});

Then(/^I click the login "([^"]*)" button$/, (buttonName) => {
  productsPage.buttonFiled(buttonName)
});

Then(/^Verify the expected "([^"]*)" result and "([^"]*)" element name$/, (result,elementName) => {
  productsPage.verifyText(result,elementName);
});

Then(/^enter username "([^"]*)" and password "([^"]*)" and click login button$/, (username,password) => {
  I.seeElement('[data-test="login-button"]')
  I.fillField('[data-test="username"]', username);
  I.fillField('[data-test="password"]', password);
  I.click('[data-test="login-button"]');
});


Then(/^add items to cart$/,(table)=>{
 
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }
    const cells = table.rows[id].cells;
    productsPage.linkFiled(cells[0].value);
  }
 
    
  

});

Then(/^click on add to cart$/,()=>{
  I.click('a[class="shopping_cart_link"]');
});
Then(/^click on checkout$/,()=>{
  I.click('[data-test="checkout"]');
});

Then(/^enter checkout information "([^"]*)" firstname and "([^"]*)" lastname and "([^"]*)" postalCode$/,(firstName,lastName,postalCode)=>{
  I.fillField('[data-test="firstName"]',firstName);
  I.fillField('[data-test="lastName"]',lastName);
  I.fillField('[data-test="postalCode"]',postalCode);
  I.click('[data-test="continue"]');
});
Then(/^finish the order$/,()=>{
  I.click('[data-test="finish"]');
});
Then(/^goto home page$/,()=>{
  I.click('[data-test="back-to-products"]');
});
Then(/^logout from application$/,()=>{
  I.click('button[id="react-burger-menu-btn"]');
  I.click('a[id="logout_sidebar_link"]');
});