// import { openDB } from '../../../lib/db';
// import { createRouter } from 'next-connect';

// const router = createRouter();

// router.get(async (req, res) => {
//   try {
//     const db = await openDB();
//     const experience = await db.all('SELECT * FROM experience');
//     res.json(experience);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch experience' });
//   }
// });

// export default router.handler();
