"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserProfile = exports.getUserProfile = exports.logoutUser = exports.registerUser = exports.authUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const user_js_1 = __importDefault(require("../model/user.js"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// @desc   Auth user / set token
// route   api/v1/users/auth
// access  public
exports.authUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('Auth user');
}));
// @desc   Register a new user
// route   api/v1/users/register
// access  public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, gender, age, email, password } = req.body;
    const userExists = yield user_js_1.default.findOne({ email });
    if (userExists) {
        throw new Error('user already exists');
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const user = yield user_js_1.default.create({
        firstName,
        lastName,
        userName,
        gender,
        age,
        email,
        password: hashedPassword,
    });
    if (user) {
        res.status(201).json({
            id: user._id,
            userName: user.userName,
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
}));
// @desc   Logout a user
// route   api/v1/users/logout
// access  public
exports.logoutUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('Logout user');
}));
// @desc   get a user's profile
// route   api/v1/users/profile
// access  private
exports.getUserProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('get user profile');
}));
// @desc   PUT update a user's profile
// route   api/v1/users/profile
// access  private
exports.updateUserProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    res.status(201).json('get user profile');
}));
