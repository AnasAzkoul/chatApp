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
exports.deleteRoom = exports.createRoom = exports.getOneRoom = exports.getAllRooms = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const room_1 = require("../model/room");
// @desc   GET / rooms
// route   api/v1/rooms
// access  private
exports.getAllRooms = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rooms = yield room_1.Room.find({});
    if (!rooms) {
        const error = new Error('Collection Not Found');
        res.status(404).json(error);
    }
    res.status(200).json(rooms);
}));
// @desc   GET / room
// route   api/v1/rooms/:id
// access  private
exports.getOneRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params.roomId;
    const room = yield room_1.Room.findById(roomId);
    if (!room) {
        const error = new Error('Room Not Found');
        res.status(404).json(error);
    }
    res.status(200).json(Object.assign({}, room));
}));
// @desc   POST / rooms
// route   api/v1/rooms
// access  private
exports.createRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { roomName } = req.body;
    if (!roomName || roomName.length < 3) {
        const error = new Error('bad request');
        res.status(400).json(error);
    }
    const newRoom = yield room_1.Room.create({
        name: roomName,
    });
    res
        .status(201)
        .json(Object.assign(Object.assign({}, newRoom), { message: 'Room has been successfully created' }));
}));
// @desc   Delete / rooms
// route   api/v1/rooms
// access  private
exports.deleteRoom = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roomId = req.params;
    const room = yield room_1.Room.findById(roomId);
    if (!room) {
        const error = new Error('Room Not Found');
        res.status(404).json(error);
    }
    yield room_1.Room.deleteOne({ _id: roomId });
    res.status(200).json({ message: `Room ${room === null || room === void 0 ? void 0 : room.name} with id: ${room === null || room === void 0 ? void 0 : room._id} has been deleted` });
}));
