# Triveous Assignment Backend

A comprehensive Node.js-based e-commerce platform that allows users to browse products, add items to their cart, place orders, and view their order history.

## Features

- **Category Listing**: Browse products by categories.
- **Product Listing**: View detailed product information by category.
- **Product Details**: Get in-depth product details by product ID.
- **User Authentication**: Register, log in, and manage your account.
- **Cart Management**: Add products to your cart, view the cart, update quantities, and remove items.
- **Order Placement**: Place orders, view order history, and fetch detailed order information.
- **Rate Limiting**: Implement rate limiting for enhanced security.
- **API Documentation**: Explore the comprehensive API documentation.

## Prerequisites

- Node.js v16 and above

## Getting Started

<!--
For detailed setup instructions, please refer to the [Installation Guide](#installation-guide) in the project documentation. -->

## Authors

- [Rachit Kumar](https://github.com/rachit3014)

### Installation

1. Clone this repository:

   ```shell
   git clone https://github.com/rachit3014/TriveousAssignment
   ```

2. Navigate to the project's root directory:

   ```shell
   cd ASSIGNMENT 2

   ```

3. Install dependencies :

   ```shell
   npm install
   or
   npm i
   ```

### Running the Application

1. Start the server:

   ```shell
     npm  start
   ```

# Usage

## Swagger Documentation :

### Please visit the swagger documentation link in your local machine: http://localhost:8000/api-docs/

# Users - API endpoints related to Users
![Screenshot (289)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/b1a9c359-daf0-4793-a339-1e24192b2f37)



# Products - API endpoints related to Products
![Screenshot (288)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/3ad5999b-601b-4ff8-97fe-b35d8f3e1ad5)


# Category - API endpoints related to Category
![Screenshot (288 cat)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/28da51fd-b998-4ef8-bfab-931f16dbd44b)

# Carts - API endpoints related to Carts
![Screenshot (287)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/b2790358-31fe-4034-93c1-8666eaf3c95f)



# Orders - API endpoints related to Orders


![Screenshot (288order)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/a97cc00d-f700-4877-8639-e0614222f73f)

## I had implemented swagger but it was unable to make a post request through sawagger.But it can work on properly Postman
# Usage
## Postman :
# Users - API endpoints related to Users

## User signup :http://localhost:8000/user/signup   
![Screenshot (272)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/05ffc896-cf6c-427a-a846-0a7afe5aa4e7)


## User signin :http://localhost:8000/user/signin
![Screenshot (273)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/4e7fb992-961e-40de-9df2-afafa52090b2)

# Products - API endpoints related to Products

## Add Product:http://localhost:8000/product/add
![Screenshot (274)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/6d9f11ec-058c-4be2-b9ca-1ff7ee6ba786)

## Get product by its id:http://localhost:8000/product/getproduct/{id}
![Screenshot (275)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/c4a79a5c-fcfe-4804-bed7-0c254895f96a)


## Get product by its category id:http://localhost:8000/product/category/{id}
![Screenshot (278)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/bee7cbc2-43a2-4e2d-9c18-a5d8f36b38c9)

# Category - API endpoints related to Category

## Get product by its category id:http://localhost:8000/category/getCategory
![Screenshot (276)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/51604825-eb1b-44ac-9e7c-09092c847549)


# Order - API endpoints related to order

## To make an order:http://localhost:8000/order/addorder
![Screenshot (282)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/c51cfcd6-67d0-4663-8f57-669894bdb602)


## To get order details by order id:http://localhost:8000/order/deatils/{id}
![Screenshot (284)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/2a7fcbe7-69d7-4029-9cce-366f0f113830)

## TO get order history:http://localhost:8000/order/history
![Screenshot (285)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/84269107-5b3e-4d07-9f12-2aaf25a68134)



# Cart - API endpoints related to cart

## To add a product in cart:http://localhost:8000/cart/addcart
![Screenshot (279)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/c95de4cb-0032-4147-a812-24576548e7d7)

## To get details of cart:http://localhost:8000/cart/cartitem
![Screenshot (280)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/a6689732-cfca-4c73-988d-bc24cc4645e9)

## To remove a cart item provide a product id:http://localhost:8000/cart/removeitem/{product id}
![Screenshot (281)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/b47c6c4d-da50-42f6-b094-28b568d5ee5f)

## To decrement a product from the cart:http://localhost:8000/cart/decrementproduct/{productid}
![Screenshot (286)](https://github.com/rachit3014/TriveousAssignment/assets/84663169/f83e1651-f053-46bc-b2b4-61e7cef24653)

```

```
