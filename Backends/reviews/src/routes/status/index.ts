import express from 'express';

export const statusRoutes = express.Router();

statusRoutes.get('/', (req, res, next) => {
  res.json({
    name: 'Reviews',
    slug: 'reviews',
    type: 'BACKEND',
    status: 'ALIVE',
    timestamp: new Date().toISOString()
  });
});
