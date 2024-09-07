import pool from '../../../lib/db';  // Import the MySQL connection pool
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
  origin: '*',  // Or specify your localhost here, e.g., 'http://localhost:3000'
});

// Helper method to wait for middleware to execute before moving to the next step
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);
  try {
    // Query the database using the connection pool
    const [rows] = await pool.query('SELECT * FROM projects');
    
    // Send the result back to the frontend
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Error fetching projects' });
  }
}


