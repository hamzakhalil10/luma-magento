describe('In this test suite, test cases related to the Workflow 1 i.e. the Product Detail Page are automated', function () {

    /**
    * @desc Before each test case, visit the testing website
    */
    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.wait(1000)
    })

    /**
    * @desc in this test case the user hovers over the Gear option in the nav bar
    * Select 'Bag' under the Gear sub-menu
    * Click on the first product
    * Add the product to the cart
    * Go to the cart and verify if the product is added
    */
    it('Verify if the user can add an item to the cart', () => {
        //cy.get('.home-main > .content > .action').contains('Shop New Yoga').click()   //click on the Shop New Yoga
        cy.get('#ui-id-6').trigger('mouseover')     //hover over the Gear option in the nav bar
        cy.get('#ui-id-25').click()     //click on the 'Bag' option
        cy.wait(1000) //wait for 1 second
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()    //click on the first product
        cy.wait(2000)   //wait for 2 seconds
        cy.get('#product-addtocart-button').click()   //click on the add to cart button
        cy.wait(2000)   //wait for 2 seconds
        cy.get('.message-success').should('be.visible')   //check if the success message is shown
        cy.get('.base').then((pName) => {
            const productName = pName.text()    //store he product name in a variable
            cy.get('.showcart').click()    //click on the cart icon
            cy.contains('View and Edit Cart').click()   //go to the cart page
            cy.wait(2000)   //wait for 2 seconds
            cy.contains(productName).should('be.visible')   //assert if the product name is visible on the cart page
        })
    })

    /**
    * @desc in this test case the user hovers over the Gear option in the nav bar
    * Select 'Bag' under the Gear sub-menu
    * Click on the first product
    * Add the product to the cart
    * Go to the cart
    * Clear the existing qty value
    * Type the new value of qty
    * Click on the Update Shooping Cart button
    * Assert if the qty is updated with the new value
    */
    it('Verify if the user can change the quantity of the product from the cart', () => {
        //cy.get('.home-main > .content > .action').contains('Shop New Yoga').click()   //click on the Shop New Yoga
        cy.get('#ui-id-6').trigger('mouseover')     //hover over the Gear option in the nav bar
        cy.get('#ui-id-25').click()     //click on the 'Bag' option
        cy.wait(1000) //wait for 1 second
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()    //click on the first product
        cy.wait(2000)   //wait for 2 seconds
        cy.get('#product-addtocart-button').click()   //click on the add to cart button
        cy.wait(2000)   //wait for 2 seconds
        cy.get('.message-success').should('be.visible')   //check if the success message is shown
        cy.get('.showcart').click()    //click on the cart icon
        cy.contains('View and Edit Cart').click()   //go to the cart page
        cy.wait(2000)   //wait for 2 seconds
        cy.get("[data-role='cart-item-qty']").clear().type(10)    //clear the current qty and enter 10 in the qty field
        cy.get('.update').click()   //click on the "Update Shopping Cart" button
        cy.wait(2000)
        cy.get("[data-role='cart-item-qty']").should('have.value', 10)   //assert if the qty field contains the updated value

    })
})