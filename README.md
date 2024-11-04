# React + Vite + JavaScript (webCV)

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🎉 Features

- **React** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 16 or above)
- npm (package manager)

## 🚀 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/DankoKr/webCV.git
   ```

2. Navigate to the project directory:

   ```bash
   cd webCV
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- npm run dev - Starts the development server.
- npm run build - Builds the production-ready code.
- npm preview - Starts the Vite development server in preview mode.
- npm run deploy - Deploy the current version on GitHub pages

## 📂 Project Structure

The project structure layout:

```python
webCV-main/
  ├── dist/              # All files to deploy (created when "npm run deploy")
  ├── node_modules/      # Project dependencies
  ├── public/            # Files shared across the application
  ├── src/               # Application source code
  │   ├── assets/        # Project assets
  │   │   └── fonts/     # Project fonts
  │   │   └── images/    # Project images
  │   │   └── videos/    # Project videos
  │   │   └── CV intern.pdf
  │   ├── components/    # React components
  │   ├── pages/         # React components that serve the role of pages
  │   ├── App.jsx        # Application entry point
  │   |── App.scss       # SCSS file for the Application entry point
  │   ├── index.css      # Main CSS for rendering file
  │   └── main.jsx       # Main rendering file
  ├── .eslintrc.cjs      # ESLint configuration
  ├── index.html         # HTML entry point
  ├── LICENSE.txt        # License for the application
  ├── package-lock.json  # Application dependancies in detail
  ├── package.json       # Application dependancies and scripts
  ├── postcss.config.js  # SCSS configuration
  ├── tailwind.config.js # Tailwind configuration
  └── vite.config.js     # Vite configuration
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
