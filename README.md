# To-Do  App

A responsive To-Do planning web application built with React, TypeScript, and plain CSS that allows users to add, edit, delete, and filter tasks based on their duration.

![To-Do Planning App Screenshot](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o70dka2FbqE7Q9y5wMPpnOllB4ODSP.png)

## Features

- Add tasks with different durations (Daily, Weekly, Monthly, Yearly)
- View all tasks in a clean, organized list
- Edit existing tasks
- Delete tasks
- Filter tasks based on duration
- Responsive design that works on mobile and desktop
- Local storage persistence to save tasks between sessions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/todo-planning-app.git
cd todo-planning-app
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server:

\`\`\`bash
npm start
# or
yarn start
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `src/App.tsx` - Main application component
- `src/components/TaskForm.tsx` - Form for adding and editing tasks
- `src/components/TaskList.tsx` - Component to display the list of tasks
- `src/components/FilterBar.tsx` - Filter buttons to filter tasks by duration
- `src/App.css` - Styling for the entire application

## Deployment

### Build for Production

\`\`\`bash
npm run build
# or
yarn build
\`\`\`

This will create a `build` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:

\`\`\`bash
npm install -g vercel
\`\`\`

2. Deploy:

\`\`\`bash
vercel
\`\`\`

### Deploy to Netlify

1. Create a `netlify.toml` file in the root directory:

\`\`\`toml
[build]
  command = "npm run build"
  publish = "build"
\`\`\`

2. Deploy using Netlify CLI or connect your GitHub repository to Netlify.

## License

This project is licensed under the MIT License.
