import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all mpya
router.get('/', async (req, res) => {
  try {
    const mpya = await prisma.luggya.findMany();
    res.json(mpya);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific luggya
router.get('/:id', async (req, res) => {
  try {
    const luggya = await prisma.luggya.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (luggya) {
      res.json(luggya);
    } else {
      res.status(404).json({ message: 'Luggya not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a luggya (protected route)
router.put('/:id', authenticateToken, authorizeRole(['LUGGYAEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedLuggya = await prisma.luggya.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedLuggya);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
