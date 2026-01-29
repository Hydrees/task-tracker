# Frontend Intern Technical Assessment Task Tracker UI

This project is a simple **React Task Tracker** frontend that demonstrates basic **CRUD operations (Create, Read, Update, Delete)** .

The goal of this assessment is to show frontend fundamentals such as:

- React hooks
- Component structure
- API integration (mocked)
- Basic UX (loading, errors, disabled states)

## Features

- Fetch and display a list of tasks
- Create new tasks
- Update task status and priority (inline)
- Delete tasks with confirmation
- Loading and error states
- Configurable API base URL

## Tech Stack

- React (Vite)
- JavaScript (ES6+)
- React Hooks (`useState`, `useEffect`)
- Mock API (frontend-only)

## Project Structure

src/
├─ api/
│ └─ tasks.js # Mock API logic
├─ components/
│ ├─ TaskForm.jsx # Create task form
│ ├─ TaskList.jsx # Task list view
│ └─ TaskItem.jsx # Single task row with inline edit
├─ config/
│ └─ config.js # API base URL configuration

─ App.jsx # Main application
─ main.jsx

## Installation & Running the App

1. Clone the repository:
   git clone <YOUR_GITHUB_REPO_LINK>
   cd task-tracker
2. Install dependencies
   npm install
3. Start the development server
   npm run dev
   The app will run at: http://localhost:5173

- API Configuration
  The API base URL is stored in one place for easy switching.

- Environment Variable
  Create a .env file in the root directory: VITE_API_URL=http://localhost:5000

- Config File
  // src/config/config.js
  export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

## Mock API Mode (Current Setup)

Since a backend is not available yet, this project uses a mock API implemented in: src/api/tasks.js

- The mock API:

Stores tasks in local memory
Simulates network delay using setTimeout
Imitate the real REST endpoints:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
This allows the full UI and CRUD flow to work without a backend.

## Switching to a Real Backend

- To connect to a real API:
  Replace the mock functions in src/api/tasks.js with fetch or axios calls.
  Ensure your backend follows the expected API structure.
  Update VITE_API_URL in .env if needed.

- Task List View
  Displays all tasks
  Inline status and priority editing
  Delete action with confirmation

- Create Task Form
  Title (required)
  Description (optional)
  Status and priority dropdowns

(Screenshots included in submission)

- This project focuses on:
  Functional CRUD flow.
  Clean and readable code.
  Proper React state management.
  Basic UX handling (loading, errors, disabled buttons).
  UI styling is minimal to prioritize functionality.

Abdulsalam Idris Oladimeji
Frontend Developer
Submitted as part of the Frontend Intern Technical Assessment.
