import { io } from 'socket.io-client';

const url = 'http://localhost:5003';

export const socket = io(url, {
  query: {},
  transports: ['websocket'],
  withCredentials: true
});
