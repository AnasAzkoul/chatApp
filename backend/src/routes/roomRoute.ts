import express from 'express';
import {
  getAllRooms,
  createRoom,
  deleteRoom,
  getOneRoom,
} from '../controllers/roomControllers';
import { protectRoute } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(protectRoute, getAllRooms).post(protectRoute, createRoom);
router.get('/:roomId', protectRoute, getOneRoom);
router.delete('/:roomId', protectRoute, deleteRoom);

export default router;
