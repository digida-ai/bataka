import { Router } from 'express';
const router = Router();
import { getData, saveData } from '../controllers/dataController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.get('/', authMiddleware, getData);
router.post('/', authMiddleware, saveData);

export default router;
