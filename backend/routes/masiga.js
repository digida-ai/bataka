import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

// Get all masiga
router.get('/', async (req, res) => {
  try {
    const masiga = await prisma.ssiga.findMany();
    res.json(masiga);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific ssiga
router.get('/:id', async (req, res) => {
  try {
    const ssiga = await prisma.ssiga.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (ssiga) {
      res.json(ssiga);
    } else {
      res.status(404).json({ message: 'Ssiga not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a ssiga (protected route)
router.put('/:id', authenticateToken, authorizeRole(['SSIGAEDITOR', 'ADMIN']), async (req, res) => {
  try {
    const updatedSsiga = await prisma.ssiga.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: req.body.name,
        description: req.body.description,
        history: req.body.history,
        traditions: req.body.traditions,
        updatedById: req.user.id,
      },
    });
    res.json(updatedSsiga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
