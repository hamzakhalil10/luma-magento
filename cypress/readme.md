# Automation Test Script for Gotoko CM Portal
This repository contains the test script for automating 2 workflows identified in the Luma Magento Testing website

# Requirements
- Make sure you have node installed in your machine. If you haven't installed it yet, please visit https://nodejs.org/en/download/
- Make sure you have VS Code installed

# Instructions
- Open VS Code on your machine
- Select "clone git repository" option
- Copy the repository URL and paste it in the VS Code
- Create a new folder on your machine and open the folder in VS code
- Run the following command in the terminal
```
npm install
```

- Now run the following command in the terminal
```
npx cypress open
```

- Wait for a few seconds until the Cypress test runner is opened
- Select 'e2e test' option and any browser of your choice
- Select any test case that you want to run from the Cypress Dashboard

# Workflow 1 (Product Detail Page)
The following two test cases are automated in workflow 1:
- Verify if a logged in user can add the product to the wish list
- Verify if a user can add the product to the compare list

# Workflow 2 (Order Placement)
The following two test cases are automated in workflow 2:
- Verify if the user can add an item to the cart
- Verify if the user can change the quantity of the product from the cart