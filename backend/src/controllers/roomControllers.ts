import asyncHandler from 'express-async-handler';
import { Room, Message, RoomType, MessageType } from '../model/room';

// @desc   GET / rooms
// route   api/v1/rooms
// access  private
export const getAllRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({});

  if (!rooms) {
    const error = new Error('Collection Not Found');
    res.status(404).json(error);
  }

  res.status(200).json(rooms);
});

// @desc   GET / room
// route   api/v1/rooms/:id
// access  private
export const getOneRoom = asyncHandler(async (req, res) => {
  const roomId = req.params.roomId;
  const room = await Room.findById(roomId);

  if (!room) {
    const error = new Error('Room Not Found');
    res.status(404).json(error);
  }

  res.status(200).json({ ...room });
});

// @desc   POST / rooms
// route   api/v1/rooms
// access  private
export const createRoom = asyncHandler(async (req, res) => {
  const { roomName } = req.body;

  if (!roomName || roomName.length < 3) {
    const error = new Error('bad request');
    res.status(400).json(error);
  }

  const newRoom = await Room.create({
    name: roomName,
  });

  res
    .status(201)
    .json({ ...newRoom, message: 'Room has been successfully created' });
});

// @desc   Delete / rooms
// route   api/v1/rooms
// access  private
export const deleteRoom = asyncHandler(async (req, res) => {
  const roomId = req.params;
  const room = await Room.findById(roomId);

  if(!room) {
    const error = new Error('Room Not Found');
    res.status(404).json(error);
  }

  await Room.deleteOne({_id: roomId});
  res.status(200).json({message: `Room ${room?.name} with id: ${room?._id} has been deleted` }); 
});
