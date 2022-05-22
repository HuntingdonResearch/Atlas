import express from 'express';

export const statusRoutes = express.Router();

statusRoutes.get('/', (req, res, next) => {
  res.json({
    name: 'Products',
    slug: 'products',
    type: 'BACKEND',
    status: 'ALIVE',
    timestamp: new Date().toISOString()
  });
});
