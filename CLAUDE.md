# CLAUDE.md - Codebase Guide

## Build & Development Commands
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run all tests
- `yarn test src/App.test.js` - Run a specific test file
- `yarn deploy` - Build and deploy to GitHub Pages

## Code Style Guidelines
- **Formatting**: Uses Prettier with single quotes
- **Component Structure**: Class components with explicit React imports
- **Naming**: PascalCase for components, camelCase for variables/functions
- **CSS**: Component-specific CSS files imported directly into components
- **Routing**: Uses react-router-dom with component-based routes
- **Imports**: Group React core imports first, then external packages, then local files
- **Code Organization**: Functional components for simple views, class components for logic
- **Project Structure**: Components in dedicated folder with component-specific styles

## Pre-commit Hooks
- Uses husky and lint-staged to run Prettier on staged files before commit