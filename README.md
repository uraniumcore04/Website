# M-Core Waste Management

A modern, responsive waste management application built with React and Vite, featuring sections for Home, About, Work showcase, Team members, and Contact information.
![image](https://github.com/user-attachments/assets/b8248617-2f44-4448-beee-f558c18e9b74)


## Technologies Used

- **Frontend**:

  - React 19
  - Vite 6
  - TailwindCSS 4
  - Framer Motion (for animations)
  - React Icons
  - Firebase (Client SDK for authentication)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  - Firebase Admin SDK (for authentication verification)
  - JWT for authentication (as backup)
  - bcryptjs for password hashing

## Project Structure

- `/frontend`: Contains the React frontend application

  - `/src`: Source code
    - `/components`: React components (Navbar, Hero, About, Work, Team, Contact, Footer)
    - `/assets`: Static assets (images, icons)

- `/backend`: Contains the Express.js backend application
  - `/config`: Configuration files (DB connection, Firebase setup)
  - `/controllers`: Route controllers
  - `/middleware`: Custom middleware (auth, error handling)
  - `/models`: Database models (User, Waste)
  - `/routes`: API routes

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn
- MongoDB (local or Atlas)
- Firebase project with Authentication enabled

### Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication and add Google as a sign-in method
3. Create a web app in your Firebase project
4. Download your Firebase service account key from Project Settings > Service Accounts > Generate new private key
5. Add the Firebase configuration to your frontend and backend as described in the Installation section

### Installation

1. Clone this repository

   ```bash
   git clone <repository-url>
   ```

2. Install frontend dependencies

   ```bash
   cd Website/frontend
   npm install
   npm install firebase
   ```

3. Install backend dependencies

   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables

   - Create a `.env` file in the backend directory with the following variables:

     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret

     # Firebase Config
     FIREBASE_API_KEY=your_firebase_api_key
     FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
     FIREBASE_PROJECT_ID=your-project-id
     FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     FIREBASE_APP_ID=your_app_id
     FIREBASE_MEASUREMENT_ID=your_measurement_id

     # Firebase Admin SDK - either set this as JSON string of service account
     FIREBASE_SERVICE_ACCOUNT={"type":"service_account","project_id":"your-project-id",...}
     # Or set path to service account key file
     # GOOGLE_APPLICATION_CREDENTIALS=/path/to/serviceAccountKey.json

     CLIENT_URL=http://localhost:5173
     ```

5. Start the backend server

   ```bash
   npm run dev
   ```

6. Start the frontend development server

   ```bash
   cd ../frontend
   npm run dev
   ```

   The frontend will be available at <http://localhost:5173>
   The backend API will be available at <http://localhost:5000>

### Building for Production

```bash
# Build frontend
cd frontend
npm run build

# The built files will be in the frontend/dist directory

# For the backend
cd ../backend
npm start
```

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations
- Team member profiles
- Contact form
- User authentication with Firebase:
  - Email/Password login
  - Google sign-in
  - Phone authentication (optional)
- Protected routes for authenticated users
- Admin and user role management
- Waste management tracking and reporting
