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
import connectSocket from './src/utils/socketConnection';

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
    credentials: true,
  },
  cookie: {
    name: 'io',
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
  },
});

connectSocket(io);

// start server;
httpServer.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
