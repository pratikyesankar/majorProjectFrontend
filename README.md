 # 📚 BookStore E-Commerce App

A full-stack e-commerce app for buying books, where users can browse, filter, sort, add to cart, manage wishlists, and place orders with address management.

Built with a React JS frontend using Bootstrap for styling, and a Node.js/Express backend with MongoDB for data persistence.

---

## 🔗 Demo Link

[Live Demo](#) *(https://drive.google.com/file/d/11I_-jLhbjTfc4CELpI2cgn16TdzqIMC5/view?usp=sharing)*

---

## ⚡ Quick Start

git clone (https://github.com/pratikyesankar/majorProjectFrontend)
cd bookstore-ecommerce
npm install
npm run dev   

---
## Technologies

- **React JS**
- **React Router**
- **Bootstrap**
- **Node.js**
- **Express**
- **MongoDB**

## Demo Video
[Loom Video] ()

## Features

**Home**
- Displays a list of featured book categories
- Clicking a category redirects to the product listing page with the selected category

**Product Listing**
- Lists all books with filters and sorting options
- Product cards show image, name, price, rating, "Add to Cart" button, and "Add to Wishlist" icon

**Filters**
- Category (checkbox: Fiction, Non-Fiction, Mystery, etc.)
- Ratings (slider)
- Clear filters button
- Sort by price: Low to High / High to Low

**Product Details**
- Shows detailed book info (image, title, price, rating, description)
- Buttons to add to cart and wishlist

**Wishlist**
- Shows wishlisted books
- Option to remove from wishlist or move to cart

**Cart**
- Quantity control (increase/decrease)
- Remove from cart or move to wishlist
- Price details with total
- Checkout button

**Address Management**
- Add, edit, or delete multiple addresses
- Select address during checkout

**Checkout**
- Order summary with selected address
- Order confirmation message
- Save order to backend

**User Profile**
- Static user details (name, email, phone, address)
- Add address and view order history

**Search**
- Search for books by title in the navbar

**Loading & Alerts**
- Loading spinners for data fetching
- Alerts for actions (add/remove, quantity, etc.)


## API Reference

### **GET /api/products**<br>
Get all products<br>
Sample Response:<br>
```
[{ _id, title, summary, price, image, ... }]
```


### **GET /api/products/:productId**<br> 
Get product by ID<br>
Sample Response:<br>  
```
[{ _id, title, price, rating, category, description, image }]
```

### **GET /api/categories**<br>
Get all categories  
Sample Response:  
```
[{ _id, name }]
```

### **GET /api/categories/:categoryId**<br> 
Get category by ID  
Sample Response:  
```
[{ _id, name }  ]
```


