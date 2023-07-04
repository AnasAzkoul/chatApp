import { Room } from '../model/room';
import mongoose from 'mongoose';

const roomsData = [
  {name: 'javascript'},
  {name: 'react'},
  {name: 'nodejs'},
  {name: 'typescript'},

]

export const seedRooms = async () => {
  try {
    await Room.deleteMany({});
    const rooms = await Room.insertMany(roomsData);
    console.log('users collection seeded successfully')
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
      return error;
    }
  } finally {
    mongoose.connection.close();
  }
}
