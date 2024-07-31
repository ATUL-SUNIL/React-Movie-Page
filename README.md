# Movie App

## Overview

Movie App is a React-based application where users can view a list of movies, increase or decrease star ratings, add or remove movies from the favorites and cart, and view the cart count in the navbar.

## Features

- **View Movies**: Browse through a list of movies with their details like title, plot, price, rating, and poster.
- **Star Ratings**: Increase or decrease the star rating of each movie.
- **Favorites**: Add or remove movies from the favorites list.
- **Cart**: Add or remove movies from the cart and view the cart count in the navbar.


## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the app.

## Components

### App.js

- Manages the main state of the application, including movies and cart count.
- Handles functions for increasing and decreasing stars, toggling favorites, and adding/removing from the cart.

### MovieCard.js

- Displays individual movie details.
- Contains buttons to increase/decrease star rating, add/remove from favorites, and add/remove from the cart.

### MovieList.js

- Maps through the list of movies and renders a `MovieCard` for each movie.
- Passes necessary functions and state as props to `MovieCard`.

### Navbar.js

- Displays the navbar with the title and cart icon.
- Shows the cart count.



## Movie Data

### movieData.js

- Contains the list of movie objects with properties like `id`, `title`, `plot`, `poster`, `rating`, `price`, `star`, `fav`, and `cart`.


## Styling

### index.css

- Contains global styles for the application.

### Styles in components

- Inline styles for `Navbar`.
- CSS class-based styles in other components.


---
