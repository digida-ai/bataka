import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all mituba
router.get('/', async (req, res) => {
  try {
    const mituba = await prisma.mutuba.findMany();
    res.json(mituba);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific mutuba
router.get('/:id', async (req, res) => {
  try {
    const mutuba = await prisma.mutuba.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (mutuba) {
      res.json(mutuba);
    } else {
      res.status(404).json({ message: 'Mutuba not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a mutuba (protected route)
router.put('/:id', authenticateToken, authorizeRole(['MUTUBAEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedMutuba = await prisma.mutuba.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedMutuba);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
