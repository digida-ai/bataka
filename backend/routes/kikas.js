import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all bika
router.get('/', async (req, res) => {
  try {
    const kikas = await prisma.kika.findMany();
    res.json(kikas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific kika
router.get('/:id', async (req, res) => {
  try {
    const kika = await prisma.kika.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (kika) {
      res.json(kika);
    } else {
      res.status(404).json({ message: 'Kika not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a kika (protected route)
router.put('/:id', authenticateToken, authorizeRole(['KIKAEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedKika = await prisma.kika.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedKika);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
