# GourmetGo

GourmetGo is a single-page application (SPA) that simulates a restaurant menu and ordering system. The application provides users with a seamless experience for browsing restaurant menus, adding items to their order, and processing payments—all within an interactive and responsive UI.

<p align="center">
  <img width="1000" alt="image" src="https://github.com/user-attachments/assets/6ea90afc-ee1a-4564-925a-84eb63756be3">
</p>

## Team

| Name                  | Role             | GitHub                                              | LinkedIn                                                                 |
|-----------------------|------------------|-----------------------------------------------------|--------------------------------------------------------------------------|
| **Axel Scheithauer**  | Developer        | [GitHub](https://github.com/ScaxCodes)              | [LinkedIn](https://www.linkedin.com/in/axel-scheithauer/)                |
| **Efezino Idisi**     | Developer        | [GitHub](https://github.com/efezinoidisi)           | [LinkedIn](https://linkedin.com/in/endurance-idisi)                      |
| **Huda Mabkhoot**     | Developer        | [GitHub](https://github.com/hudamabkhoot/)          | [LinkedIn](https://www.linkedin.com/in/huda-mabkhoot/)                   |
| **Mary Richelle**     | Developer        | [GitHub](https://github.com/MaryRichelle)           | [LinkedIn](https://www.linkedin.com/in/mary-richelle-mr-dev/)            |
| **Rodrigo Díaz Casco**| UI/UX Designer   | [GitHub](https://github.com/rodrigodiazcasco)       | [LinkedIn](https://www.linkedin.com/in/rodrigodiazcascoux/)              |

## Features

### Structure
- **Frontend-Only:** This is a purely frontend application, built without any backend components.
- **Tech Stack:** We used Vite, React, and Tailwind CSS.
- **Design:** The application was designed with a mobile-first approach and then adapted for desktop.

### Functionality

#### Menu Fetching and Display
- **API Integration:** Menu data is fetched from the [Free Food Menus API](https://github.com/igdev116/free-food-menus-api).
- **Menu Details:** Each menu item displays an image, food name, price, restaurant name, and country.
- **Filtering:** Users can filter menu items by category.
- **Interactive Map:** Restaurants are displayed on an interactive map using Leaflet Maps. Clicking on a restaurant dynamically fetches and displays its menu.

#### Order Management
- **Order Creation:** Users can add menu items to their order.
- **Order Summary:** A summary of the current order is displayed, including item names, prices, and the total cost.
- **Tip Calculation:** Users can add tips to their order total.
- **Order Modification:** Users can remove items from the order before finalizing it.
- **Local Storage:** Order data is stored efficiently in the browser's local storage.

#### Payment Processing
- **Credit System:** Users can add credit to their account and use it to make payments.
- **Payment Validation:** The application validates whether the user has sufficient credit before processing the payment and provides appropriate feedback.

### User Interface and Experience
- **Seamless UX:** The application provides an intuitive user experience for browsing menus, adding items to the order, and processing payments.
- **Responsive Design:** The UI is fully responsive, ensuring functionality across various devices and screen sizes.

### Extras
- **Search Functionality:** Users can search for menu items by food name and restaurant name.
- **Infinite Scrolling:** The app implements infinite scrolling for smooth browsing, using `react-infinite-scroll-component`.

## Libraries

- **M3.Materials.io:** Used for creating and managing the application logos.
- **React-Hot-Toast:** Provides notifications and feedback to users throughout the app.
- **React Components for Leaflet Maps:** Used to display restaurants on an interactive map.
- **React-Swipeable:** Used to add swipeable views for better mobile UX.
- **React-Router-Dom:** Handles routing within the single-page application.
- **React-LazyLoad:** Enhances performance by lazy-loading images as they enter the viewport.

## Deployment

The app is deployed on Netlify. You can access it [here](gourmet-go.netlify.app/).

## License

This project is licensed under the MIT License.
