import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all nnyiriri
router.get('/', async (req, res) => {
  try {
    const nnyiriri = await prisma.lunyiriri.findMany();
    res.json(nnyiriri);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific lunyiriri
router.get('/:id', async (req, res) => {
  try {
    const lunyiriri = await prisma.lunyiriri.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (lunyiriri) {
      res.json(lunyiriri);
    } else {
      res.status(404).json({ message: 'Lunyiriri not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a lunyiriri (protected route)
router.put('/:id', authenticateToken, authorizeRole(['LUNYIRIRIEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedLunyiriri = await prisma.lunyiriri.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedLunyiriri);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
