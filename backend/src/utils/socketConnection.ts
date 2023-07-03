import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import jsonwebtoken, { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';
import User, { type UserType } from '../model/user';
import moment from 'moment';

const botName = 'Chat Bot';

async function getUserFromSocket(
  socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  const cookie = socket.handshake.headers.cookie;
  if (cookie && cookie.startsWith('jwt=')) {
    const token = cookie.slice('jwt='.length);
    try {
      const encoded = jsonwebtoken.verify(
        token,
        process.env.JWT_SECRET!
      ) as JwtPayload;
      const user = await User.findById(encoded.userId).select('-password');
      return user;
    } catch (error) {
      if (error instanceof JsonWebTokenError || error instanceof Error) {
        return error;
      }
    }
  } else {
    return new Error('No Token');
  }
}

function transformMessage(user: UserType, message: string) {
  return {
    name: user.userName,
    date: moment().format('h:mm a'),
    message,
  };
}

export default function connectSocket(
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  io.on('connection', async (socket) => {
    console.log('A user has connected');

    const user = await getUserFromSocket(socket);

    // runs whenever the user connects; and emits a message to the user that's connecting only;
    socket.emit('message', {
      name: botName,
      date: moment().format('h:mm a'),
      message: 'Welcome to the chat',
    });

    // runs whenever a new user connects to the app; and emits an event to everyone except the user who's connecting
    socket.broadcast.emit('message', {
      name: botName,
      date: moment().format('LT'),
      message: 'Welcome to the chat',
    });

    // Listening to the chat message;
    socket.on('chatMessage', (msg: string) => {

      io.emit('message', transformMessage(user as UserType, msg));
    });

    // runs when a user disconnects; emits events to all users on this connection;
    socket.on('disconnect', () => {
      io.emit('message', {
        name: botName,
        date: moment().format('h:mm a'),
        message: 'Welcome to the chat',
      });
    });
  });
}
