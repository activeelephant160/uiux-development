# Development

### Link to Deployed Website
If you used the stencil code, this is `https://activeelephant160.github.io/uiux-development`

### Goal and Value of the Application
I really love wearing sneakers but have always wanted to compare different types, colors and prices of shoes on one platform. I created this application to do just that. I added different filters and sort functions to self-select various combinations of sneakers in order to contrast brands. I also added a price aggregator to get an idea of how much sneakers would cost when multiple are purchased from different brands. 

### Usability Principles Considered 
Controllability: The user has complete control of the webpage and filtering functions. They can choose to use it as they please. 

Design and Layout: The website is comprehensible at first site. The checkbox and radiobutton labels are intuitive to understand and the information is presented in way that can be easily correlated. 

Visibility: The functions of the website are very clear and the user understands their possibilities. The description about how the filters work provide clear direction and are self-explanatory. 

### Organization of Components
I created a SneakerCard component that holds each Item Card's structure with all the appropriate information like Sneaker type (High Top or Low Top), brand (Adidas, Nike, Veja etc), color (white or any colors) etc. It creates the structure of the card and uses props to identify each property from the data.json file. The SneakerCard component is passed to App.js. 

### How Data is Passed Down Through Components
Information for each Item Card is stored in "data.json." Apart from information visible on the card, it also keeps track of whether the Sneaker pair has been added to the Cart and the text the Button should display accordingly. This is passed down to App.js and undergoes the filter and sorting function before it can be mapped to the SneakerCart component. 


### How the User Triggers State Changes
Architecture: 
1. Two Filtering Categories: I've included Type and Color as the Filtering categories. Each sneaker has multiple properties: Brand, Model, Type and Color. I've emphasised and sneaker Color and Type as the filtering functions and each have two options. Type is Low-Top or High-Top and Color is White or Color. Any combinations of the two filters will present and outcome however atleast one option from each filter must be selected for an output. I made it this way because I wanted to show combinations of Type and Color instead of treating the filters individually. 

2. One Sorting Function: I've added two sorting functions: Low to High and High to Low price. The default shows sneakers from Lowest to Highest price. The sorting function can be overlayed with the filtering functions and other functionalities. 

3. Aggregator Function: Since I created a Sneaker application, I added a cart as an aggregator. It allows users to add sneakers to the cart and find out the total price of all the sneakers add. Only 1 of each card can be in the car, so once the sneaker is added the Button functionality and text changes to provide an option to remove the Sneaker pair from the cart and deduct the total price accordingly. 

4. Overall: The filters work with each other. When only the Cart filter is selected (none of the Type or Color) only the Cart elements will be displayed. However, if the Cart filter is selected in addition to one of the Type and one of the Color filters, all sneakers fitting those categories will be displayed (even if they're not in the Cart).  

5. To revert back to the original page. All Type and Color filters should be selected and the price should be set to Low-To-High as that is the default. s
