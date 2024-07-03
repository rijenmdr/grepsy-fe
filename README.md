
# Project Title

A brief description of what this project does and who it's for

# grepsr-fe

## Overview

This project is the frontend application for Grepsr, utilizing React with TypeScript and Material-UI for building a responsive and interactive user interface.

## Installation

Ensure you have Node.js and npm installed on your machine.

1. Clone the repository:
```bash
git clone <repository-url>
cd grepsr-fe
```
2. Install dependencies:
```bash
yarn install
```
This will install all necessary dependencies listed in the package.json file.

## Environment Variables

Create a .env file in the root directory and add the following:
```bash
VITE_API_URL=https://667e9512f2cb59c38dc64197.mockapi.io/
```

## Available Scripts
In the project directory, you can run:

- Development Server:
```bash
yarn dev
```
Starts the Vite development server for running the app in development mode.

- Production Build:
```bash
yarn build
```
Builds the project for production deployment using TypeScript compilation and Vite bundling.

- Linting
```bash
yarn lint
```
Runs ESLint to analyze and report linting issues in the source code.

- Linting with Autofix
```bash
yarn lint:fix
```
Fixes ESLint issues automatically where possible.

- Run Tests
```bash
yarn test
```
Runs tests using Vitest to ensure components and functionalities work as expected.

- Preview Production Build
```bash
yarn preview
```
Serves the production build locally for preview before deployment.

- Code Formatting
```bash
yarn format
```
Formats code using Prettier for consistent code style across the project.

- Stylelint
```bash
yarn stylelint
```
Lints CSS files for style issues.

- Stylelint Autofix
```bash
yarn stylelint:fix
```
Fixes style issues in CSS files automatically.
