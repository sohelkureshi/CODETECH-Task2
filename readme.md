## CODETECH-Task2

Name: SOHEL KURESHI

Company: CODTECH IT SOLUTIONS

ID: CT6WDS1639

Domain: FULL STACK

Duration: 6 WEEKS from AUGUST 10th, 2024 to SEPTEMBER 25th, 2024

Mentor:


## Recipe App (MERN Stack)

This is a Recipe App built with the MERN stack (MongoDB, Express, React, Node.js) and React Router. It includes functionalities for user authentication, recipe management, and a private component for authenticated users.

## Features

- User Authentication (Login, Signup, Forgot Password)
- Protected Routes for authenticated users
- Recipe Management (View, Add, and Like Recipes)
- Navbar for easy navigation

## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/sohelkureshi/recipe-app.git
    ```
2. Navigate to the `backend` directory:
    ```bash
    cd recipe-app/server
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the `backend` directory and add the following:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:
    ```bash
    nodemon index
    ```

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd recipe-app/client/my-app
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### Backend

- `server.js` - Entry point for the backend application.
- `routes` - Contains route definitions for authentication and recipe management.
- `controllers` - Contains controller logic for handling requests.
- `models` - Contains Mongoose models for the application.

### Frontend

- `App.js` - Main component of the application, containing the routes and navigation.
- `components` - Contains React components such as `Navbar`, `Login`, `Register`, `ForgotPassword`, `PrivateComponent`, `Recipes`, `AddRecipe`, and `LikedProducts`.
- `App.css` - Styles for the application.

## Components

### Backend Components

- **`auth` Routes**: Handles user authentication (login, signup, forgot password).
- **`recipe` Routes**: Handles CRUD operations for recipes.

### Frontend Components

- **`Navbar`**: Displays the navigation links to different routes in the application.
- **`Login`**: Handles user login functionality.
- **`Register`**: Handles user registration functionality.
- **`ForgotPassword`**: Allows users to reset their password if they forgot it.
- **`PrivateComponent`**: A wrapper component that ensures the child components are only accessible to authenticated users.
- **`Recipes`**: Displays a list of all recipes.
- **`AddRecipe`**: Allows authenticated users to add a new recipe.
- **`LikedProducts`**: Displays a list of recipes liked by the user.

## Routes

### Backend Routes

- `/api/auth/login` - Handles user login.
- `/api/auth/signup` - Handles user registration.
- `/api/auth/forgotPassword` - Handles password reset.
- `/api/recipes` - Handles CRUD operations for recipes.

### Frontend Routes

- `/login` - Renders the `Login` component.
- `/signup` - Renders the `Register` component.
- `/forgotPassword` - Renders the `ForgotPassword` component.
- `/favouriteRecipes` - Renders the `LikedProducts` component (Protected Route).
- `/recipes` - Renders the `Recipes` component (Protected Route).
- `/` - Renders the `Recipes` component (Protected Route).
- `/addRecipe` - Renders the `AddRecipe` component (Protected Route).

## Protected Routes

The routes wrapped in the `PrivateComponent` are only accessible to authenticated users. If a user is not authenticated, they will be redirected to the login page.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
## screenshots
![image alt](https://github.com/sohelkureshi/CODETECH-Task2/blob/74a7fadb2375bbd5b485be07a46073ef4d76d5eb/screenshots/1.png)
![image alt](https://github.com/sohelkureshi/CODETECH-Task2/blob/74a7fadb2375bbd5b485be07a46073ef4d76d5eb/screenshots/2.png)
![image alt](https://github.com/sohelkureshi/CODETECH-Task2/blob/74a7fadb2375bbd5b485be07a46073ef4d76d5eb/screenshots/3.png)
![image alt](https://github.com/sohelkureshi/CODETECH-Task2/blob/74a7fadb2375bbd5b485be07a46073ef4d76d5eb/screenshots/4.png)
![image alt](https://github.com/sohelkureshi/CODETECH-Task2/blob/74a7fadb2375bbd5b485be07a46073ef4d76d5eb/screenshots/5.png)






