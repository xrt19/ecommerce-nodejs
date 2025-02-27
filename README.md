# Node.js Containerization Practice

This repository is a fork of another project that I am using to learn containerization with Node.js. In the branch named **irfan**, I have implemented my containerization exercises and configurations.

## Overview

- **Base Project:** Forked from an existing repository.
- **Focus:** Containerizing a Node.js application using Docker.
- **Branch:** `irfan` – Contains all my containerization practice.

## Technologies Used

- **Runtime:** Node.js
- **Containerization Tool:** Docker

## What's Inside the `irfan` Branch

- Customized Dockerfile(s) for the Node.js application.
- Configuration files for container setup.
- Scripts and documentation related to my containerization experiments.

===

# A Simple E-commerce System Built with Nodejs

## Features

- This e-commerce application is created with Nodejs, Expressjs, Mongodb, Vuejs and TailwindCSS.
- Three roles. Admin, seller and user.
- Admin can create, view, update and delete categories. Admin can view and delete users, shops, products and reviews.
- Sellers can create, view, update and delete shop (only one) and products.
- Users can apply to become sellers. Users can browse shops and products, create and update user profile, as well as create and delete reviews.

## Todos

- shopping cart
- admin panel redesign
- product review/rating system

## Screenshots

Home Page

![Home Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/home.png?raw=true)

Shop Page

![Shop Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/shop.png?raw=true)

Category Page

![Category Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/category.png?raw=true)

Product Page

![Product Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/product.png?raw=true)

Login Page

![Login Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/login.png?raw=true)

Register Page

![Register Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/register.png?raw=true)

User Profile Page

![User Profile Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/user_profile.png?raw=true)

Dashboard Page

![Dashboard Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/dashboard.png?raw=true)

### Admin Sections

Home

![Admin Home Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_home.png?raw=true)

User Management

![Admin User Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_user.png?raw=true)

Shop Management

![Admin Shop Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_shop.png?raw=true)

Product Management

![Admin Product Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_product.png?raw=true)

## Installation Instruction

Clone this project with the following command:

```bash
git clone https://github.com/ericnanhu/ecommerce-nodejs.git
```

Open the project with your code editor, and change into the **backend**:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Run docker compose to start database:

```bash
docker-compose up
```

Start backend:

```bash
npm run watch
```

Change into **frontend** and install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```