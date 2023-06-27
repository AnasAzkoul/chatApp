import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAuthUser
} from '../controllers/userControllers.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/auth').post(authUser).get(protectRoute, getAuthUser);

router.post('/register', registerUser);

router.post('/logout', logoutUser);

router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

export default router;
