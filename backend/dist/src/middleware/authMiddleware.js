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
exports.protectRoute = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
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
                error instanceof Error && res.status(401);
                throw new Error('Not Authorized, Invalid Token');
            }
        }
        else {
            res.status(401);
            throw new Error('Not Authorized, no token ');
        }
    });
}
exports.protectRoute = protectRoute;
