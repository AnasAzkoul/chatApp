import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL!);
    console.log(`connected DB via: ${conn.connection.host}`);
  } catch (error) {
    if(error instanceof Error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }
}


export default connectDB;
