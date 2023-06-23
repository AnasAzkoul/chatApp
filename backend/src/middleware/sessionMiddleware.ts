import session from 'express-session';
const MongoDBStore = require('connect-mongodb-session')(session);
import { v4 as uuidv4 } from 'uuid';

const store = new MongoDBStore({
  uri: process.env.MONGO_URL!,
  collection: 'sessions',
  databaseName: 'test',
  expires: 30 * 24 * 60 * 60 * 1000,
});

store.on('error', function (error: Error) {
  console.log(error.message);
});

export function generateSession() {
  return session({
    name: 'auth session',
    secret: process.env.JWT_SECRET!,
    proxy: true,
    resave: false,
    saveUninitialized: false,
    rolling: false,
    store,
    genid: function (req) {
      return uuidv4();
    },

    cookie: {
      domain: 'http://localhost:5173',
      httpOnly: false,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: 'none',
      secure: false,
    },
  });
}
