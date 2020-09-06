# Saikou Client

> Saikou front-end. Saikou is a social media project for anime and manga enthusiasts to share their hobby each other.

![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fsaikou.ahmadmarzuki.com)
![Netlify](https://img.shields.io/netlify/b4f1007d-767e-4500-8d6f-9cabbe93f20e?style=for-the-badge)

## Table of Contents

- Abstract
- [Repositories](#repositories)
- [Tech Stacks](#tech-stacks)
- [Application Structure](#application-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Run Development](#run-development)
  - [Lint](#lint)
  - [Test](#test)

---

## Repositories

There are 3 repos in the project: `saikou` is for documentary, `saikou-client` is the web app using React and lastly `saikou-server` is the back-end server using Express and mongoDB. You can check it at the following:

[saikou](https://github.com/amadzuki/saikou)
[saikou-client](https://github.com/amadzuki/saikou-client)
[saikou-server](https://github.com/amadzuki/saikou-server)

## Tech Stacks

- **Git** — Distributed version control system
  - **GitHub** — Provides hosting for software development and version control using Git
- **JavaScript** — The primary programming language
  - **Node.js** — JavaScript runtime environment and package manager
  - **npm, Yarn** — JavaScript runtime environment and package manager
- **REST API** — REpresentational State Transfer, architectural style for distributed hypermedia systems
- **React** — JavaScript library for building user interfaces
- **Redux** — Predictable state container for JS apps
- **React Redux** — Official React binding for Redux
- **React Router** — Declarative routing for React
- **React Hook Form** — Simple React forms binding and validation
- **Connected React Router** — Redux binding for React Router v4
- **Query String** — Parse and stringify URL query strings
- **Redux DevTools Extension** ­— Tools for debugging Redux state changes
- **Redux Logger** ­— Logger for Redux
- **Redux Thunk** — Redux middleware for asynchronous actions with Thunk
- **React Helmet** — A document head manager for React
- **CSS-in-JS** — Pattern which CSS is composed using JavaScript
  - **styled-components** — Visual primitives for the component age.
  - **xstyled** — Consistent theme based CSS.
- **Axios** — Promise based HTTP client for the browser and Node.js
- **JSON Web Token (JWT)** — Compat URL-safe means of representing claims
  - **JWT Decode** — Library that helps decoding JWT
- **dayjs** — Small immutable date time library alternative to Moment.js
- **React HTML Parser** — Convert HTML strings directly to React components
- **ESLint** — Pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript
- **Prettier** — Opinionated code formatter and extension for code editor
- **Netlify** — All-in-one platform for automating modern web projects
- **CloudFlare** — Enterprise-grade authoritative DNS service
- **Uniregistry** — Retail domain name registrar

### Future stacks

Interesting tech stacks that seems worth try

- **React Lazy Load Image Component** — React component to lazy load images and other components/elements
- **Cypress** — JavaScript end-to-end testing framework
- **Jest** — Delightful JavaScript testing framework
- **TypeScript** — Typed JavaScript at application-scale JavaScript
- **StoryBook** — An open source tool for developing UI components in isolation

## Application Structure

src/
├── App.js
├── components
│ ├── AppHelmet.js
│ ├── Avatar.js
│ ├── Button.js
│ ├── Card.js
│ ├── Cards.js
│ ├── CenterContent.js
│ ├── Footer.js
│ ├── Hero.js
│ ├── HeroWithContent.js
│ ├── index.js
│ ├── ItemDetail.js
│ ├── Layout.js
│ ├── Navigation.js
│ ├── SearchBar.js
│ ├── StylishLoader.js
│ ├── Tag.js
│ └── TitleText.js
├── config
│ └── axios.js
├── containers
│ ├── CardContainer.js
│ ├── index.js
│ ├── ItemDetailContainer.js
│ ├── ItemPicker.js
│ ├── PrivateRoute.js
│ ├── Redirector.js
│ ├── RouteAddSlug.js
│ ├── RouterContainer.js
│ ├── ScrollToTop.js
│ ├── SearchContainer.js
│ ├── ThemeContainer.js
│ └── TopItemContainer.js
├── data
│ ├── items.json
│ └── users.json
├── index.css
├── index.js
├── pages
│ ├── about.js
│ ├── anime.js
│ ├── debug.js
│ ├── home.js
│ ├── index.js
│ ├── login.js
│ ├── logout.js
│ ├── manga.js
│ ├── PageItemDetail.js
│ ├── PageSearch.js
│ ├── register.js
│ └── userProfile.js
├── redux
│ ├── actions
│ │ ├── anime.js
│ │ ├── auth.js
│ │ ├── index.js
│ │ ├── manga.js
│ │ ├── search.js
│ │ ├── types.js
│ │ └── user.js
│ ├── reducers
│ │ ├── allAnime.js
│ │ ├── allManga.js
│ │ ├── anime.js
│ │ ├── auth.js
│ │ ├── index.js
│ │ ├── manga.js
│ │ ├── search.js
│ │ └── user.js
│ └── store.js
├── serviceWorker.js
├── setupTests.js
└── utils
├── jsonwebtoken.js
├── localStorage.js
├── requests
│ ├── debugFetch.js
│ ├── getAnime.js
│ ├── getManga.js
│ ├── getToken.js
│ ├── getUserData.js
│ ├── index.js
│ ├── register.js
│ ├── searchItems.js
│ ├── updateItem.js
│ └── updateUserProfile.js
└── timer.js

## Getting Started

### Installation

Install dependencies with `yarn`:

```sh
yarn
```

Remember to set up the `saikou-server` beforehand

### Setup Environment Variables

Edit the `.env` file for development like so:

```sh
REACT_APP_API_URL=http://localhost:3000
REACT_APP_SECRET=your-secret-code
```

and for production:

```sh
REACT_APP_API_URL=https://saikou.api.ahmadmarzuki.com
REACT_APP_SECRET=your-secret-code
```

### Run Development

```sh
yarn dev
```

### Test

```sh
yarn test
```

## Authors

- [Ahmad Marzuki](https://ahmadmarzuki.com) ([@amadzuki](https://github.com/amadzuki))

## License

MIT
