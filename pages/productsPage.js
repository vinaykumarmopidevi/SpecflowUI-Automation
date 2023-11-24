const I = actor();

module.exports={

    loginFields:{
        element:name=>`[data-test='${name}']`,
    },
    productFields:{
        product: name=>`[data-test='add-to-cart-sauce-labs-${name}']`,
        shopping_cart_link:`a[class='shopping_cart_link']`,
       
    },
    logoutFields:{
        logout_sidebar_link:`a[id='logout_sidebar_link']`,
        menuBtn:`button[id='react-burger-menu-btn']`,
    },

    inputFiled(elementName,value)
    {
        I.waitForElement(this.loginFields.element(elementName), 3);
        I.seeElement(this.loginFields.element(elementName))
        I.fillField(this.loginFields.element(elementName), value);
    },

    buttonFiled(elementName)
    {
        I.waitForElement(this.loginFields.element(elementName), 3);
        I.seeElement(this.loginFields.element(elementName))
        I.click(this.loginFields.element(elementName));
    },
    linkFiled(elementName)
    {
        I.waitForElement(this.productFields.product(elementName), 3);
        I.seeElement(this.productFields.product(elementName))
        I.click(this.productFields.product(elementName));
    },
    verifyText(expectedResult,elementName){
        I.seeTextEquals(expectedResult, this.loginFields.element(elementName));
    },
    clickOnAddtoCart(){
        I.waitForElement(this.productFields.shopping_cart_link, 3);
        I.seeElement(this.productFields.shopping_cart_link)
        I.click(this.productFields.shopping_cart_link);
    },
    clickMenu(){
        I.waitForElement(this.logoutFields.menuBtn, 3);
        I.seeElement(this.logoutFields.menuBtn)
        I.click(this.logoutFields.menuBtn);
    },
    clickLogout(){
        I.waitForElement(this.logoutFields.logout_sidebar_link, 3);
        I.seeElement(this.logoutFields.logout_sidebar_link)
        I.click(this.logoutFields.logout_sidebar_link);
    }

};