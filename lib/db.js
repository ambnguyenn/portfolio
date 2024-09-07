// db.js

import mysql from 'mysql2/promise';

// Create the connection pool to the MySQL RDS instance
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // RDS endpoint
  user: process.env.DB_USER,      // RDS username
  password: process.env.DB_PASS,  // RDS password
  database: process.env.DB_NAME,  // Database name
  waitForConnections: true,
  connectionLimit: 10,            // Adjust as needed
  queueLimit: 0
});

// Export the connection pool
export default pool;

