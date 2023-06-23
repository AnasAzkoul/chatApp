import express, { NextFunction } from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotEnv from 'dotenv';
dotEnv.config();

import userRouter from './src/routes/userRoutes';
import { notFound, errorHandler } from './src/middleware/errorMiddleWare';
import connectDB from './src/config/db';


connectDB();
const port = 5003;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true, //access-control-allow-credentials:true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/api/v1/users', userRouter);

// Error handler middleware
app.use(notFound);
app.use(errorHandler);

// web socket
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    credentials: true
  },
});



io.on('connection', (socket) => {
  console.log('A user has connected');

  // runs whenever the user connects;
  socket.emit('message', 'Welcome to the ChatApp');

  // runs whenever a new user connects to the app;
  socket.broadcast.emit('message', 'A new user has joined the chat');

  // runs when a user disconnects;
  socket.on('disconnect', () => {
    io.emit('message', 'A user has disconnected');
  });
});

// start server;
httpServer.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
