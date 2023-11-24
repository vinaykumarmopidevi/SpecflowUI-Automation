const { I } = inject();
// Add in your custom step files

Given(/^launch the application$/, () => {
  I.amOnPage("/")
});

When(/^I enter the "([^"]*)" username$/, (username) => {
  I.seeElement('[data-test="login-button"]')
  I.fillField('[data-test="username"]', username);
});

Then(/^I enter the "([^"]*)" password$/, (password) => {
  I.seeElement('[data-test="login-button"]')
  I.fillField('[data-test="password"]', password);
});

Then(/^I click the login button$/, () => {
  I.seeElement('[data-test="login-button"]')
  I.click('[data-test="login-button"]');
});

Then(/^Verify the expected "([^"]*)" result$/, (result) => {
  I.seeElement('[data-test="error"]')
  I.seeTextEquals(result, '[data-test="error"]');
 
});

When(/^enter username "([^"]*)" and password "([^"]*)" and click login button$/, (username,password) => {
  I.seeElement('[data-test="login-button"]')
  I.fillField('[data-test="username"]', username);
  I.fillField('[data-test="password"]', password);
  I.click('[data-test="login-button"]');
});


Then(/^add items to cart$/,()=>{
 //add items to cart
 I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
 I.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
 I.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
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