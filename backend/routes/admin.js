import { Router } from 'express';
const router = Router();
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { authenticateToken, authorizeRole } from '../utils/auth.js';

router.use(authenticateToken);

router.post('/users', authorizeRole(['ADMIN']), async (req, res) => {
  // Create new user logic
  const { username, password, role } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { username, password, role },
    });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/users/:id/role', authorizeRole(['ADMIN']), async (req, res) => {
  // Update user role logic
  const { id } = req.params;
  const { role } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { role },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
