const mysql = require("mysql2/promise");
// import { mysql } from "mysql2/promise";
require("dotenv").config();

class DatabaseConnection {
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    });
  }

  async connect() {
    try {
      console.log("Connected to the database");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  }

  async close() {
    try {
      await this.pool.end(); // Encerre o pool de conexões
      console.log("Connection to the database closed");
    } catch (error) {
      console.error("Error closing the database connection:", error);
    }
  }

  async query(sql, values = []) {
    try {
      const [rows, fields] = await this.pool.execute(sql, values);
      return rows;
    } catch (error) {
      console.error("Error executing database query:", error);
      throw error;
    }
  }
}

module.exports = DatabaseConnection;
