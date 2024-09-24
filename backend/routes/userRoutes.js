import { Router } from 'express';
const router = Router();
import { getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.get('/profile', authMiddleware, getUserProfile);
router.put('/profile', authMiddleware, updateUserProfile);

export default router;
