import { openDB } from '../../../lib/db';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
  try {
    const db = await openDB();
    const projects = await db.all('SELECT * FROM projects');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

export default router.handler();
