# machine-test
- [Web App React](https://empl-web-portal.netlify.app/) deployed to netifly
- [NodeJS API server](https://esmt-srvr.herokuapp.com/) deployed to Heroku
## Employee Web
  - App using react - 17
  - Used create-react-app to scaffold the project
  - [Chakra UI React](https://chakra-ui.com/) for all UI components
  - [React Query](https://react-query.tanstack.com/) for data synchronization from server
  - [React Hook form](https://react-hook-form.com/) for form validation and input handling
  - [Axios] for data fetching
  - [React router dom@6] used for route handling
  - [UseDebounce] used for debounce search
  ### Todo
    - [] Improve UI and responsive behaviors
    - [] Add pagination to employee list
    - [] Add local loading indicators
    - [] Adding a state management library
## Employee server
  - serving api's
  - Uses express, sequelize and sqllite as database
  - JWT based authentication
  - Joi is used for data validation
  - Clean and promise based error handling with custom status codes
  ### Todo
    - [] Improve validation rules
    - [] Improve security by helmet
    - [] Add rate limiting
    - [] Include logging middleware


