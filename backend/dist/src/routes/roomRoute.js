"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomControllers_1 = require("../controllers/roomControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.route('/').get(authMiddleware_1.protectRoute, roomControllers_1.getAllRooms).post(authMiddleware_1.protectRoute, roomControllers_1.createRoom);
router.get('/:roomId', authMiddleware_1.protectRoute, roomControllers_1.getOneRoom);
router.delete('/:roomId', authMiddleware_1.protectRoute, roomControllers_1.deleteRoom);
exports.default = router;
