const { I } = inject();
const { productsPage } = inject();

Given(/^launch the application$/, () => {
  I.amOnPage("/")
});

Then(/^I enter the "([^"]*)" field name and "([^"]*)" value$/, (elementName,data) => {
  productsPage.inputFiled(elementName,data)
  
});

Then(/^I click the "([^"]*)" button$/, (buttonName) => {
  productsPage.buttonFiled(buttonName)
});

Then(/^Verify the expected "([^"]*)" result and "([^"]*)" element name$/, (result,elementName) => {
  productsPage.verifyText(result,elementName);
});

Then(/^I click add items to cart$/,(table)=>{
 
  for (const id in table.rows) {
    if (id < 1) {
      continue; // skip a header of a table
    }
    const cells = table.rows[id].cells;
    productsPage.linkFiled(cells[0].value);
  }
});

Then(/^I click on add to cart$/,()=>{
  productsPage.clickOnAddtoCart();
});

Then(/^I logout from application$/,()=>{
  productsPage.clickMenu();
  productsPage.clickLogout();
});