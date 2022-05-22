import express from 'express';

export const statusRoutes = express.Router();

statusRoutes.get('/', (req, res, next) => {
  res.json({
    name: 'Users',
    slug: 'users',
    type: 'BACKEND',
    status: 'ALIVE',
    timestamp: new Date().toISOString()
  });
});
