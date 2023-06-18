"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_js_1 = require("../controllers/userControllers.js");
const router = express_1.default.Router();
router.post('/auth', userControllers_js_1.authUser);
router.post('/register', userControllers_js_1.registerUser);
router.post('/logout', userControllers_js_1.logoutUser);
router.route('/profile').get(userControllers_js_1.getUserProfile).put(userControllers_js_1.updateUserProfile);
exports.default = router;
