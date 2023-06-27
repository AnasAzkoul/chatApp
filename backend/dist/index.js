"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userRoutes_1 = __importDefault(require("./src/routes/userRoutes"));
const errorMiddleWare_1 = require("./src/middleware/errorMiddleWare");
const db_1 = __importDefault(require("./src/config/db"));
(0, db_1.default)();
const port = 5003;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true, //access-control-allow-credentials:true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
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
        credentials: true,
    },
});
io.on('connection', (socket) => {
    console.log('A user has connected');
    // runs whenever the user connects; and emits a message to the user that's connecting only;
    socket.emit('message', 'Welcome to the ChatApp');
    // runs whenever a new user connects to the app; and emits an event to everyone except the user who's connecting
    socket.broadcast.emit('message', 'A new user has joined the chat');
    // Listening to the chat message;
    socket.on('chatMessage', (msg) => {
        console.log(msg);
        io.emit('message', msg);
    });
    // runs when a user disconnects; emits events to all users on this connection;
    socket.on('disconnect', () => {
        io.emit('message', 'A user has disconnected');
    });
});
// start server;
httpServer.listen(port, () => {
    console.log(`server started on PORT: ${port}`);
});
