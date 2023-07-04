import mongoose, { InferSchemaType, Schema, model } from 'mongoose';

const messageSchema = new Schema({
  userName: {
    type: String,
    ref: 'User.userName',

  },
  message: {
    type: String,
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
  roomId: {
    type: Schema.Types.ObjectId,
    ref: 'Room',
  },
});

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  messages: [messageSchema],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});


export const Message = model('Message', messageSchema);
export type MessageType = InferSchemaType<typeof messageSchema>

export const Room = model('Room', roomSchema)
export type RoomType = InferSchemaType<typeof roomSchema>;
