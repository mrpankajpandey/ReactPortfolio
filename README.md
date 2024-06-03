# mrpankajpandey Portfolio Website


Welcome to my portfolio website! This project showcases my work, skills, and projects in a modern and interactive way using React, and includes a Firebase-powered contact form.
## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contact](#contact)
## Demo

Check out the live demo of my portfolio website [here](https://mrpankajpandey.netlify.app).
## Features

- **Responsive Design**: Adapts to different screen sizes for a seamless user experience on any device.
- **Dynamic Content**: Showcases projects and skills with dynamic content rendering.
- **Contact Form**: Users can reach out to me through the Firebase-powered contact form.
- **Smooth Animations**: Subtle animations enhance the user experience.
- **SEO Friendly**: Optimized for search engines to improve visibility.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase**: Backend-as-a-Service for handling contact form submissions.
- **Netlify**: Hosting service for deploying the website.
- **React Router**: For handling navigation within the app.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/mrpankajpandey/ReactPortfolio
    cd ReactPortfolio
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Set up Firestore for storing contact form submissions.
    - Add your Firebase configuration to a `.env` file in the root of your project:
      ```env
      REACT_APP_FIREBASE_API_KEY=your_api_key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
      REACT_APP_FIREBASE_PROJECT_ID=your_project_id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      REACT_APP_FIREBASE_APP_ID=your_app_id
      ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Usage

1. **Viewing the portfolio**:
   - Navigate through the different sections to view my skills, projects, and about me information.
   - Use the contact form to send me a message.

2. **Submitting the contact form**:
   - Fill out the form with your name, email, and message.
   - On submission, the form data will be stored in Firebase Firestore.

## Contact

If you have any questions or feedback, feel free to reach out to me via the contact form on the website or directly at [mr.pankajpandey0038@gmail.com](mailto:mr.pankajpandey0038@gmail.com).
