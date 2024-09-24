import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all mayumba
router.get('/', async (req, res) => {
  try {
    const mayumba = await prisma.enju.findMany();
    res.json(mayumba);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific enju
router.get('/:id', async (req, res) => {
  try {
    const enju = await prisma.enju.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (enju) {
      res.json(enju);
    } else {
      res.status(404).json({ message: 'Enju not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a enju (protected route)
router.put('/:id', authenticateToken, authorizeRole(['ENJUEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedEnju = await prisma.enju.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedEnju);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
