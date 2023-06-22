"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSession = void 0;
const express_session_1 = __importDefault(require("express-session"));
const MongoDBStore = require('connect-mongodb-session')(express_session_1.default);
const uuid_1 = require("uuid");
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: 'sessions',
    databaseName: 'test',
    connectionOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 10000,
    },
});
store.on('error', function (error) {
    console.log(error.message);
});
function generateSession() {
    return (0, express_session_1.default)({
        name: 'auth session',
        secret: process.env.JWT_SECRET,
        resave: true,
        saveUninitialized: false,
        store,
        genid: function (req) {
            return (0, uuid_1.v4)();
        },
        cookie: {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            sameSite: true,
            secure: 'auto',
        },
    });
}
exports.generateSession = generateSession;
