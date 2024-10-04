# StayFinder

Welcome to **StayFinder**! This innovative web application connects travelers with hosts offering unique accommodations, providing a seamless experience for booking stays around the world. Designed with both usability and aesthetics in mind, StayFinder is your go-to platform for finding the perfect place to stay, no matter your travel needs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure sign-up and login functionality for users to create personalized accounts.
- **Comprehensive Property Listings**: Browse through a diverse range of accommodations, each with detailed descriptions, amenities, pricing, and high-quality images.
- **Search and Filters**: Easily search for properties by location, price range, and other criteria to find the perfect match for your stay.
- **User Reviews and Ratings**: Read reviews from previous guests to make informed decisions and contribute your own experiences.
- **Responsive Design**: Fully responsive layout that adapts to all devices, ensuring a smooth experience on smartphones, tablets, and desktops.

## Technologies Used

StayFinder is built using a modern tech stack to ensure performance, security, and scalability:

- **Node.js** (v22.9.0): Asynchronous event-driven JavaScript runtime for building scalable applications.
- **Express.js**: Minimalist web framework for Node.js that simplifies server-side development.
- **MongoDB**: NoSQL database for storing user data, property listings, and reviews.
- **Mongoose**: ODM library for MongoDB, providing a straightforward way to model and manipulate data.
- **EJS**: Embedded JavaScript templating engine for dynamic HTML rendering.
- **Passport.js**: Authentication middleware for Node.js, providing support for various authentication strategies.
- **Cloudinary**: Image management service that enables easy upload, storage, and manipulation of images.
- **Mapbox SDK**: Integration for interactive maps and geolocation services.

### Other Dependencies

- `connect-flash`: Middleware for flash messages to enhance user experience.
- `connect-mongo`: MongoDB session store for Express sessions.
- `dotenv`: Zero-dependency module for loading environment variables from a `.env` file.
- `joi`: Powerful schema description language and data validator for JavaScript.
- `multer`: Middleware for handling multipart/form-data, especially for file uploads.
- `multer-storage-cloudinary`: Storage engine for `multer` that uploads files directly to Cloudinary.
- `method-override`: Middleware for supporting HTTP verbs such as PUT and DELETE.

## Getting Started

Follow these steps to set up and run StayFinder locally:

### Prerequisites

- **Node.js** (v22.9.0) installed on your machine. Download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Either a local instance or a cloud-based service like MongoDB Atlas.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/syedtasavour/StayFinder.git
   cd stayfinder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and include the following variables (replace with your actual values):
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_URL=your_cloudinary_url
   SESSION_SECRET=your_session_secret
   ```

4. **Run the Application**:
   ```bash
   nodemon start
   ```

5. **Access the Application**:
   Open your web browser and navigate to `http://localhost:8080` to explore StayFinder.

## Project Structure

Here’s an overview of the project directory structure:

```
stayfinder/
├── controllers/             
├── models/                  # Mongoose models
├── routes/                  # Application routes
├── views/                   # EJS templates
├── public/                  # Static files (CSS, JS, images)
├── .env                     # Environment variables
├── app.js                   # Main application file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Usage

Once you have the application running, you can:

- **Sign Up / Log In**: Create an account or log in to access all features.
- **Browse Properties**: Use the search bar and filters to find accommodations that suit your needs.
- **View Property Details**: Click on a listing to see detailed information, including photos, amenities, and user reviews.
- **Leave Reviews**: After your stay, share your experience by leaving a review on the property.

## Contributing

Contributions are highly encouraged! If you have ideas for improvements or new features, please fork the repository and submit a pull request. Ensure your code adheres to the project’s style guidelines and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
