# Radically Digital website

Radical Digital website project. It contains:
- [x] [Gatsby](https://www.gatsbyjs.org/) v2.19.24
- [x] [React](https://reactjs.org/) v16.13.0
- [x] Hot-reloading
- [x] [Prismic CMS](https://prismic.io/) integration
- [x] Production ready build
- [x] Sass support
- [x] ES6 linting with [Prettier](https://prettier.io/)
- [x] [CircleCI](https://circleci.com/) integration

## Prerequisites

* [Node](https://nodejs.org/) (Make sure you have the node 12+ installed)

## Getting Started

1. Clone the repository `git clone git@github.com:radically-digital/web.git`
2. If you're using NVM run `nvm use` inside project directory to use node version set in `.nvmrc` file
3. Run `npm install` or `npm i` to install all dependencies
4. To begin development task, run `npm start`
5. Open [http://localhost:8000](http://localhost:8000)

## Available commands

- `npm start` - start development server and watch for changes
- `npm run build` - create a production ready build in `public` folder
- `npm run clean` - delete the cache (`.cache`) and build folders
- `npm run eslint:check` - execute eslint check
- `npm run eslint:fix` - execute eslint check and automatically fix problems
