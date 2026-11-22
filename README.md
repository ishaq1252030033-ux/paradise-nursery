# Paradise Nursery — React Shopping Cart

A responsive, single-page houseplant shopping app built for the **Paradise Nursery Final Project**. Browse a curated collection of indoor plants, add them to a Redux-powered cart, adjust quantities, and review your total in real time.

## Features

- **Landing page** with Paradise Nursery branding, a hero background image and **Get Started** button
- **About Us** section describing the plant shop
- **18 unique houseplants** arranged into **three categories** (six per category)
- Product **thumbnail, name, description, price, and Add to Cart** button
- Add to Cart button becomes **disabled** after adding a plant and becomes available again when removed from cart
- Sticky navigation with **Home, Plants, Cart** and a **live item count**
- Redux Toolkit cart with **add, remove, increase quantity, decrease quantity, and update quantity** actions
- Cart shows **unit prices, quantity controls, per-item total, and overall total**
- **Continue Shopping** and demo **Checkout → Coming Soon** actions
- Responsive mobile and desktop layout with locally bundled illustrated plant images

## Tech stack

React, JSX, React Router, Redux Toolkit, React Redux, Vite and CSS.

## Run locally

Install Node.js 20 or later. From the project directory, run:

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite. For a production build, run `npm run build`.

## Project structure

| Assignment task | GitHub file |
|---|---|
| Task 1 | `README.md` |
| Task 2 | `src/AboutUs.jsx` |
| Task 3 | `src/App.css` |
| Task 4 | `src/App.jsx` |
| Task 5 | `src/CartSlice.jsx` |
| Task 6 | `src/ProductList.jsx` |
| Task 7 | `src/CartItem.jsx` |

Supporting files include `src/main.jsx`, `src/store.js`, `src/components/Navbar.jsx`, `src/data/plants.js`, `src/index.css`, and 20 bundled SVG illustrations in `public/images`.

## Author

Shaikh Ishaq — educational final project.
