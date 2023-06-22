"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const errorMiddleWare_1 = require("./src/middleware/errorMiddleWare");
const db_1 = __importDefault(require("./src/config/db"));
const sessionMiddleware_1 = require("./src/middleware/sessionMiddleware");
(0, db_1.default)();
const port = 5003;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true, //access-control-allow-credentials:true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const session = (0, sessionMiddleware_1.generateSession)();
app.use(session);
// app.use(cookieParser());
app.get('/api/v1/', (req, res) => {
    console.log(req.session);
});
// Routes
app.use('/api/v1/users', userRoutes_1.default);
// Error handler middleware
app.use(errorMiddleWare_1.notFound);
app.use(errorMiddleWare_1.errorHandler);
// web socket
const httpServer = http_1.default.createServer(app);
const io = new socket_io_1.Server(httpServer, {
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
    if (session.isAuth) {
        next();
    }
    else {
        next(new Error('Unauthorized'));
    }
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
httpServer.listen(port, () => {
    console.log(`server started on PORT: ${port}`);
});
