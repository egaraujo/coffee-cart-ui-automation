# UI Automation with Cypress

This is a test suite in Cypress, for coffee-cart app

## Run tests
1. Clone the repo
2. Install dependencies: `npm install`
3. Start local server: `npm run dev`
4. Run tests from **src** folder:  
   `npx cypress open` for test runner  
   `npx cypress run` for headless mode

## Test cases
![screenshot](https://github.com/egaraujo/coffee-cart-ui-automation/blob/master/screenshot.png)
• Should display header menu with three link items  
• Should visit each menu item link  
• Should display nine coffee coups  
• Should display display each coffee cup information correctly   
• Should display each coffee name in Chinese   
• Should summarize selected products  
• Should add fourth coffee in cart when accepted  
• Should omit fourth coffee in cart when rejected  
• Should increase cart total when a product is added  
• Should decrease cart total when a product is removed  
• Should open cart dialog and add coffe to cart  
• Should open cart dialog and keep cart empty  
• Should alert on empty name for payment data  
• Should alert on empty mail for payment data  
• Should submit payment details when personal data is completed  
• Should have an empty cart initially  
• Should reach every link on github page  

## Links
coffee-cart app: https://coffee-cart.app  
coffee-cart repository: https://github.com/jecfish/coffee-cart
