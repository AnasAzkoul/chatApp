import session from 'express-session';
const MongoDBStore = require('connect-mongodb-session')(session);
import { v4 as uuidv4 } from 'uuid';

const store = new MongoDBStore({
  uri: process.env.MONGO_URL!,
  collection: 'sessions',
  databaseName: 'test',
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  },
});

store.on('error', function (error: Error) {
  console.log(error.message);
});

export function generateSession() {
  return session({
    name: 'auth session',
    secret: process.env.JWT_SECRET!,
    resave: true,
    saveUninitialized: false,
    store,
    genid: function (req) {
      return uuidv4();
    },

    cookie: {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
      sameSite: true,
      secure: 'auto',
    },
  });
}
