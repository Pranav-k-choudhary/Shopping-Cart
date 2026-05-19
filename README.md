## React Shopping Cart Application

A simple and responsive Shopping Cart application built using React, React Router, Context API, and Bootstrap.

--> This project allows users to:-
  - View products
  - Add items to cart
  - Update quantity
  - Remove products
  - View total cart amount

## Features
- Product Listing
- Add to Cart
- Remove from Cart
- Update Product Quantity
- Dynamic Total Price
- React Context API for State Management
- React Router for Navigation
- Responsive UI using Bootstrap

## Technologies Used
- React.js
- React Router DOM
- Context API
- Bootstrap 
- JavaScript 

## Cart Functionality:- The cart state is managed globally using Context API.
- CartContext Handles:
   - Add product
   - Remove product
   - Update quantity
   - Calculate total amount

## Workflow
- The application starts from main.jsx and renders App.jsx.
- CartProvider wraps the entire application to provide global cart state using React Context API.
- BrowserRouter handles navigation between the Home page and Cart page.
- The Home page displays products using ProductList and ProductCard components.
- When the user clicks Add to Cart, the addToCart() function adds the product to the cart or increases its quantity if   it already exists.
- Cart data is managed globally using Context API and accessed using the custom useCart() hook.
- The Cart page displays all selected products, quantity, subtotal, and total price.
- Users can:
    -> Update product quantity using updateQty()
    -> Remove products using removeFormCart()
- The total cart amount is calculated dynamically using the reduce() method.
- Whenever cart data changes, React automatically re-renders the updated UI without refreshing the page.
