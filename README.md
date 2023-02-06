# Simple chat :black_heart:

## Overview

The purpose of this project its to be a simple chat when a user can be create an account and send messages to another users

### Technologies

- [ReactJs](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Chakra UI](https://chakra-ui.com/)
- [React hook form](https://react-hook-form.com/)

## How to execute :fire:

1. Clone this repository with the command

```bash
git clone https://github.com/MatheusAntonioF/simple-chat.git
```

2. Install dependencies with npm, yarn, or pnpm (in this project I choose to use pnpm)

2.1 npm

```bash
npm install
```

2.2 yarn

```bash
yarn
```

2.3 pnpm

```bash
pnpm install
```

3. Clone API repository

I could be used some tool to mock the api, like [mirageJS](https://miragejs.com/) but because of some issues with typescript I choose to develop a api from scratch(click [here](https://github.com/MatheusAntonioF/simple-chat-api) to see the repository). You can clone the api repository:

```bash
git clone https://github.com/MatheusAntonioF/simple-chat-api.git
```

3.1 Install the dependencies (I choose to use pnpm)

3.1.1 npm

```bash
npm install
```

3.1.2 yarn

```bash
yarn
```

3.13 pnpm

```bash
pnpm install
```

3.2 Run migrations

```bash
npm run migrate
```

3.3 Run api

```bash
npm run dev
```

### Functional requirements

- [x] login page
- [x] register page
- [x] user profile page
- [x] update user profile page
- [x] realtime chat page

### Non Functional requirements

- [x] Use [react-hook-form](https://react-hook-form.com/) to handle forms
- [x] Use [chakra-ui](https://chakra-ui.com/) to application style
- [x] Create a custom hook using context api to manage user authentication data
- [ ] Use a custom prettier config to order imports

### Plus requirements

- [ ] Internationalization

### Fix me

- [ ] Remove logged user from contacts
- [x] Get last message from contact to show on contacts bar
- [ ] Create interceptor when token was expired
- [x] Add break line when message is too big
- [x] Create style from chat
  - [x] Create custom style when I sent a message
- [ ] Create triangle to show when send the message
- [ ] Remove focus style from type input
- [x] Reset type input after send a message
- [x] Scroll down when send a new message
