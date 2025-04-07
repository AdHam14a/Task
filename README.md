Dashboard Application

Overview

This project is a simple React-based dashboard that consists of two main pages: Home and Users.

Home Page: Displays several charts using Chart.js for data visualization.

Users Page: Contains a table that lists users from a data file, with pagination, filtering, and the ability to delete users. The user count is dynamically updated both on the Users page and the Home page.

The app uses React, React Router DOM, and Redux to manage state and enable navigation between pages.

Features

Home Page
Displays dynamic charts built with Chart.js.

The number of users is shown in real-time, fetched from the Users page state.

Users Page
Displays a table of users with data imported from a file.

Features pagination and filtering of users.

Allows users to be deleted, with the state and user count updated instantly in both the Users table and Home page.

Technologies Used
React: For building the user interface.

React Router DOM: For managing page navigation between the Home and Users pages.

Redux: For managing and updating the global state, specifically the user count and user data.

Chart.js: For rendering the charts on the Home page.

Tailwind CSS: For styling the components.