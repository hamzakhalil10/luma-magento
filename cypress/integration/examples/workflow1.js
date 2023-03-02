describe('In this test suite, test cases related to the Workflow 1 i.e. the Product Detail Page are automated', function () {

    /**
    * @desc Before each test case, visit the testing website
    */
    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.wait(1000)
    })

    /**
    * @desc in this test cases the user logs in first
    * After loggng in, the user clicks on the Shop New Yoga Collection button displayed on the home page 
    * the user opens product detail page for the first product shown in the list
    * The user adds the product to the wishlist and verifies if the prdouct is added to the wish list
    */
    it('Verify if a logged in user can add the product to the wish list', () => {
        cy.get('.panel > .header > .authorization-link > a').contains('Sign In').click()   //click on the sign in button
        cy.get('#email').type("hamza@xyz.com")              //enter the email
        cy.get('input[type=password]').type('@Bc123456')    //enter the password
        cy.get('button[type=submit]').contains('Sign In').click()     //click on the Sign in button
        cy.wait(3000)        //wait for 3 seconds
        //cy.get(':nth-child(2) > .greet > .logged-in').should('be.visible')   //verify if the user is logged in
        cy.get('.home-main > .content > .action').contains('Shop New Yoga').click()   //click on the Shop New Yoga
        cy.wait(1000) //wait for 1 second
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()    //click on the first product
        cy.wait(2000)
        cy.get('.base').then((productName) => {    //resolve the promise to get the product name text
            cy.get('.product-addto-links > .towishlist').click()   //click on the Add to wish list button
            cy.wait(2000)
            cy.get('.message-success > div').should('be.visible')  //verify if success message is displayed
            cy.get('.product-item-info > .product-item-name > .product-item-link').then((wishListProduct) => {
                expect(wishListProduct.text()).to.contain(productName.text())   //check if the product that was added to the wish list is the same product that was added by the user
            })
        })
    })

    /**
    * @desc in this test case the user clicks on the Shop New Yoga Collection button displayed on the home page 
    * the user opens product detail page for the first product shown in the list
    * The user adds the product to the compare and verifies if the prdouct is added to the compare list
    */
    it('Verify if a user can add the product to the compare list', () => {

        cy.get('.home-main > .content > .action').contains('Shop New Yoga').click()   //click on the Shop New Yoga
        cy.wait(1000) //wait for 1 second
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()    //click on the first product
        cy.wait(2000)  //wait for 2 seconds
        cy.contains('Add to Compare').click()   //click on the Add to compare button/text
        cy.wait(2000)   //wait for 2 seconds
        cy.get('.message-success > div').should('be.visible')    //check if success message is displayed
        cy.get('.base').then((pName) => {    //resolve the promise to get the product name text
            const prdouctName = pName.text()  //store the product name shown on the product detail page in a variable
            cy.get('.message-success > div > a').click()   //go to the Comparison list
            cy.wait(2000)   //wait for 2 seconds
            cy.contains(prdouctName).should('be.visible')   //assert if the product that was added is present in the comparison list
        })
    })




})