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
    }

};