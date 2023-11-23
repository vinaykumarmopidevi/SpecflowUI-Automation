const { I } = inject();
// Add in your custom step files

Given('launch the application', () => {
  I.amOnPage("/")
});


Then('enter credentials', () => {
  I.seeElement('[data-test="login-button"]')
  I.fillField('[data-test="username"]', 'standard_user');
  I.fillField('[data-test="password"]', 'secret_sauce');
  I.click('[data-test="login-button"]');
});


Then('add items to cart',()=>{
 //add items to cart
 I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
 I.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
 I.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
});

Then('click on add to cart',()=>{
  I.click('a[class="shopping_cart_link"]');
});
Then('click on checkout',()=>{
  I.click('[data-test="checkout"]');
});

Then('enter checkout information',()=>{
  I.fillField('[data-test="firstName"]','vinay');
  I.fillField('[data-test="lastName"]','kumar');
  I.fillField('[data-test="postalCode"]','500049')
  I.click('[data-test="continue"]');
});
Then('finish the order',()=>{
  I.click('[data-test="finish"]');
});
Then('goto home page',()=>{
  I.click('[data-test="back-to-products"]');
});
Then('logout from application',()=>{
  I.click('button[id="react-burger-menu-btn"]');
  I.click('a[id="logout_sidebar_link"]');
});