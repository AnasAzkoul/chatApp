import express, { NextFunction } from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import dotEnv from 'dotenv';
dotEnv.config();

import userRouter from './src/routes/userRoutes';
import { notFound, errorHandler } from './src/middleware/errorMiddleWare';
import connectDB from './src/config/db';
import { generateSession } from './src/middleware/sessionMiddleware';

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

const session = generateSession();

app.use(session);
// app.use(cookieParser());
app.get('/api/v1/', (req, res) => {
  console.log(req.session);
});

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
  },
  cookie: true,
});

io.engine.use(session);

io.use((socket, next) => {
  // @ts-ignore
  const session = socket.request.session;
  console.log(session, 'this is from socket');
  if(session.isAuth) {
    next();
  } else {
    next(new Error('Unauthorized'));
  }
})

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

httpServer.listen(port, () => {
  console.log(`server started on PORT: ${port}`);
});
