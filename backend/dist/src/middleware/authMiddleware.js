"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getUserFromToken = exports.checkToken = exports.protectRoute = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const user_1 = __importDefault(require("../model/user"));
function protectRoute(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let token;
        token = req.cookies.jwt;
        if (token) {
            try {
                const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                if (typeof decoded === 'object') {
                    // @ts-ignore
                    req.user = yield user_1.default.findById(decoded.userId).select('-password');
                    next();
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof jsonwebtoken_1.JsonWebTokenError) {
                    res.status(401).json({
                        errName: error.name,
                        errStack: error.stack,
                        errMsg: error.message,
                    });
                }
            }
        }
        else {
            res.status(401).json({ message: 'Not Authorized, no token' });
            // throw new Error('Not Authorized, no token ');
        }
    });
}
exports.protectRoute = protectRoute;
function checkToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.cookies.jwt;
        if (token) {
            const encoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            // @ts-ignore
            req.user = yield getUserFromToken(encoded.userId);
        }
        next();
    });
}
exports.checkToken = checkToken;
function getUserFromToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_1.default.findById(token).select('-password');
        return user;
    });
}
exports.getUserFromToken = getUserFromToken;
