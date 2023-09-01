const mysql = require("mysql2/promise");
require("dotenv").config();
class DatabaseConnection {
  constructor() {
    this.host = process.env.DB_HOST;
    this.user = process.env.DB_USER;
    this.password = process.env.DB_PASSWORD;
    this.port = process.env.DB_PORT;
    this.database = process.env.DB_DATABASE;
    this.connection = null;
  }

  async connect() {
    if (!this.connection) {
      try {
        this.connection = await mysql.createConnection({
          host: this.host,
          user: this.user,
          password: this.password,
          port: this.port,
          database: this.database,
        });
        console.log("Connected to the database");
      } catch (error) {
        console.error("Error connecting to the database:", error.message);
      }
    }
    return this.connection;
  }

  async close() {
    if (this.connection) {
      await this.connection.end();
      console.log("Connection to the database closed");
    }
  }
}

module.exports = DatabaseConnection;
