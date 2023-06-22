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
const user_1 = __importDefault(require("../model/user"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const hashPassword_1 = require("../utils/hashPassword");
// @desc   Auth user / set token
// route   api/v1/users/auth
// access  public
exports.authUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const userExists = yield user_1.default.findOne({ email });
    const isPassword = yield (0, hashPassword_1.matchPassword)(password, userExists === null || userExists === void 0 ? void 0 : userExists.password);
    if (userExists && isPassword) {
        // @ts-ignore
        req.session.user = {
            id: userExists._id,
            userName: userExists.userName,
            firstName: userExists.firstName,
            lastName: userExists.lastName,
            email: userExists.email,
        };
        // @ts-ignore
        req.session.isAuth = true;
        console.log(req.session);
        res.status(201).json({
            id: userExists._id,
            userName: userExists.userName,
            email: userExists.email,
        });
    }
    else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
}));
// @desc   Register a new user
// route   api/v1/users/register
// access  public
exports.registerUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, userName, gender, age, email, password } = req.body;
    const userExists = yield user_1.default.findOne({ email });
    if (userExists) {
        throw new Error('user already exists');
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    const hashedPassword = yield bcryptjs_1.default.hash(password, salt);
    const user = yield user_1.default.create({
        firstName,
        lastName,
        userName,
        gender,
        age,
        email,
        password: hashedPassword,
    });
    if (user) {
        // @ts-ignore
        req.session.user = {
            id: user._id,
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        };
        // @ts-ignore
        req.session.isAuth = true;
        console.log(req.session);
        res.status(201).json({
            id: user._id,
            userName: user.userName,
            email: user.email,
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
    req.session.destroy((error) => {
    });
    console.log(req.session);
    res.status(200).json({ message: 'user logged out' });
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
