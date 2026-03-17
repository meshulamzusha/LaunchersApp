# LaunchersApp 

A full-stack application for managing users and launchers.

## Architecture

The project is organized into two main components:

- **Client** - Frontend built with React 19, TypeScript, and Vite
- **Server** - Express.js backend API with MongoDB integration

## Tech Stack

**Frontend:**
- React
- TypeScript 
- React Router
- Zustand

**Backend:**
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Dotenv for reading .env
- Nodemon for development

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/meshulamzusha/LaunchersApp.git
   cd LaunchersApp
   ```

2. Install dependencies:
   ```bash
   # Client
   cd client && npm install
   
   # Server
   cd ../server && npm install
   ```

3. Run the development servers:
   ```bash
   # Terminal 1 - Backend
   cd server && npm run dev
   
   # Terminal 2 - Frontend
   cd client && npm run dev
   ```

## Available Scripts

**Client:**
- `npm run dev` - Start development server with Vite

**Server:**
- `npm run dev` - Start development server with Nodemon
