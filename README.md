# M-Core Waste Management

A modern, responsive portfolio website built with React and Vite, featuring sections for Home, About, Work showcase, Team members, and Contact information.

## Technologies Used

- **Frontend**:
  - React 19
  - Vite 6
  - TailwindCSS 4
  - Framer Motion (for animations)
  - React Icons

## Project Structure

- `/frontend`: Contains the React frontend application
  - `/src`: Source code
    - `/components`: React components (Navbar, Hero, About, Work, Team, Contact, Footer)
    - `/assets`: Static assets (images, icons)

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone this repository

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies

   ```bash
   cd Website/frontend
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

   The application will be available at <http://localhost:5173>

### Building for Production

```bash
cd Website/frontend
npm run build
```

The built files will be in the `frontend/dist` directory, ready to be deployed to a static hosting service.

## Features

- Responsive design that works on all device sizes
- Modern UI with smooth animations
- Team member profiles
- Contact form
