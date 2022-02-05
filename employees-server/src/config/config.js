/* eslint-disable no-undef */
module.exports = {
  PORT: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || "employees",
    username: process.env.DB_USER_NAME || "employees",
    password: process.env.DB_PASSWORD || "employees123",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./employees.sqlite"
    }
  },
  jwt_secret: process.env.JWT_SECRET || "jwt_secret_343nfjXERERER---dooo"
};
