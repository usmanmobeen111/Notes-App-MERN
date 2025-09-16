# 📝 Notes App - MERN Stack

A beautiful, modern, and fully responsive notes application built with the MERN stack. Create, read, update, and delete notes with smooth animations and an intuitive user interface. Notes are stored in MongoDB and accessed via REST API. Perfect for organizing your thoughts and ideas! ✨

## 🌟 Features

- **✨ Create Notes**: Add new notes with titles and content
- **📖 View Notes**: Display all your notes in a beautiful grid layout
- **✏️ Edit Notes**: Update existing notes seamlessly
- **🗑️ Delete Notes**: Remove notes you no longer need
- **💾 MongoDB Storage**: Your notes are saved in MongoDB database
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🎨 Smooth Animations**: Powered by Framer Motion for delightful interactions
- **🌈 Modern UI**: Styled with Tailwind CSS for a clean, professional look

## 🛠️ Technology Stack

### Frontend
- **⚛️ React** - A powerful JavaScript library for building user interfaces
- **⚡ Vite** - Fast build tool that provides a great development experience
- **🎨 Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **🎭 Framer Motion** - A production-ready motion library for React
- **🎯 React Icons** - Popular icons as React components
- **📡 Axios** - Promise-based HTTP client for making API requests

### Backend
- **🚀 Express.js** - Fast, unopinionated, minimalist web framework for Node.js
- **🍃 MongoDB** - A document database with the scalability and flexibility
- **🔄 Mongoose** - Elegant MongoDB object modeling for Node.js
- **🔄 CORS** - Cross-Origin Resource Sharing middleware for Express

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── api/
│   │   └── notes.js          # API calls for notes
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx        # App header component
│   │   ├── NoteCard.jsx      # Individual note display card
│   │   └── NoteForm.jsx      # Form for creating/editing notes
│   ├── pages/
│   │   └── Home.jsx          # Main page with notes management
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js

server/
├── models/
│   └── Note.js               # MongoDB Note schema
├── routes/
│   └── api/
│       └── notes.js          # API routes for notes CRUD
├── index.js                  # Express server entry point
├── package.json
└── .env                      # Environment variables (optional)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone [<repository-url>](https://github.com/usmanmobeen111/Notes-App-MERN.git)
   cd notes-app-mern
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Ensure MongoDB is running**
   Make sure MongoDB is installed and running on your system (default: localhost:27017)

5. **Start the development servers**

   **Terminal 1 - Start the backend server:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start the frontend:**
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🎯 Usage

- **Adding a Note**: Click on the form at the top, enter a title and content, then click "Add Note"
- **Editing a Note**: Click the edit icon (✏️) on any note card to modify it
- **Deleting a Note**: Click the delete icon (🗑️) on any note card to remove it
- **Responsive View**: Resize your browser or view on mobile for the responsive design

## 🎨 UI/UX Highlights

- **Smooth Animations**: Notes appear with fade-in effects and hover animations
- **Gradient Backgrounds**: Beautiful gradient backgrounds for visual appeal
- **Icon Integration**: Meaningful icons from React Icons throughout the app
- **Form Validation**: Basic validation to ensure notes have content
- **Date Tracking**: Automatic creation and update timestamps for notes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.


Made with ❤️ using React, Tailwind CSS, Framer Motion, and more!
