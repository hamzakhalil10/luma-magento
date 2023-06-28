describe('In this test suite, test cases related to the Workflow 1 i.e. the Product Detail Page are automated', function () {

    /**
    * @desc Before each test case, visit the testing website
    */
    beforeEach(() => {
        cy.viewport(1920, 1080) // Set viewport to 1920px x 1080px
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.wait(1000)
    })

    /**
    * @desc in this test cases the user creates an account first
    * After creating an account, the user clicks on the Shop New Yoga Collection button displayed on the home page 
    * the user opens product detail page for the first product shown in the list
    * The user adds the product to the wishlist and verifies if the prdouct is added to the wish list
    */
    it('Verify if a logged in user can add the product to the wish list', () => {
        cy.get('.panel > .header > :nth-child(3) > a').contains('Create an Account').click()   //click on the Create an Account button
        cy.get('#firstname').type('John')      //Fill the First Name field
        cy.get('#lastname').type('Doe')        //Fill the last name field
        cy.get('#email_address').type('johndoe00@xyz.com')   //fill the email field
        cy.get('#password').type('John1@xyz.com')     //fill the password field
        cy.get('#password-confirmation').type('John1@xyz.com')   //re-enter the password in the password confirmation field
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()   //click on the Create an Account button
        cy.wait(3000)      //wait for 3 seconds
        cy.get('.message-success > div').should('be.visible')   //verify the account is created
        cy.get('.logo > img').click()     //click on the Luma magento logo to go back to the home page
        cy.wait(3000)        //wait for 3 seconds
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